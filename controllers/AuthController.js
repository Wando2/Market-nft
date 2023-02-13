const User = require('../models/users')

const bcrypt = require('bcrypt')

class AuthController { 
    static loginPage(req,res) {
        res.render('auth/login')
    }

    static async loginPost(req,res) {
        const {email, password} = req.body

        //encontrar usuario
        const user = await User.findOne({where: {email: email}})

        if (!user) {
            req.flash('message', 'O usuário não foi encontrado. Verifique')
            res.render('auth/login')
            return
        }

        // verificar se as senhas estão iguais

        const passwordMatch = bcrypt.compareSync(password,user.password)

        if(!passwordMatch) {
            req.flash('message', 'Senha incorreta, verifique os campos')
            res.render('auth/login')

            return


          
        }

        req.session.userid = user.id
        req.flash('message', "Autenticado!")
        req.session.save(() => {
            res.redirect('/')
        })

        
    }

    static registerPage(req,res) {
        res.render('auth/register')
    }

    static async registerPost(req,res){
        const {name, email, password, confirmpassword} = req.body
         //validadao de senha
        if(password != confirmpassword){
            req.flash('message ','As senhas não conferem')
            res.render('auth/register')

            return
        }

        //verificar se o usuario ja existe
        const checkIfUserExists = await User.findOne({where:{email: email}})

        if (checkIfUserExists) {
            req.flash('message','Este usuário já foi cadastrado')
            res.render('auth/register')
            return
        }

        // criptografia
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)

        const user = {
            name,
            email,
            password: hashedPassword
        }

        try { 
            const createdUser = await User.create(user)

            req.session.userid = createdUser.id
            req.flash('message', 'Cadastro Realizado com sucesso!')

            req.session.save(() =>{
                res.redirect('/')
            })

        } catch(err) {console.log(err)}

       
       
    }

    

    static logout(req, res) {
        req.session.destroy()
        res.redirect('/login')
    }
}

module.exports = AuthController