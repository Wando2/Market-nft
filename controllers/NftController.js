const session = require('express-session')
const User = require('../models/users')
const multer = require('multer');
const path = require('path');
const Nft = require("../models/nfts")


const storage = multer.diskStorage({
  destination: 'public/images/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage
});

// configuração do multer

class NftController {
    static async nftpage(req,res) {
      const nftData = await Nft.findAll({
        include: User,
        
      })

      

      const nfts = nftData.map((result) => {
        const plainResult = result.get({ plain: true });
        const userName = plainResult.user ? plainResult.user.name : 'No associated user';
        return { ...plainResult, userName };
      });

      res.render('nftPage/home',{nfts})
    }

    static async dashboard(req,res){
        const userId = req.session.userid

        const user = await User.findOne({
          where: {
            id: userId,
        },  
        include: Nft,
        plain: true,
    })
  
 
        if (!user) {
          res.redirect('/login')
        }

        const nfts = user.Nfts.map((result) => result.dataValues)

        res.render('nftPage/dashboard',{nfts})

    }


    static createNftHome(req,res) {
        res.render('nftPage/create')
    }

    
    static async createNft(req,res){
        const nft = {
            title: req.body.title,
            price: req.body.price,
            url: "/images/" + req.file.filename,
            userId: req.session.userid 
        }

        try {
          await Nft.create(nft)
          
          req.flash('message','Anuncio criado com sucesso')

          req.session.save(() => {
            res.redirect('/dashboard')
          })   

        } catch(err) {console.log(err)}



    }
    static async updateNftPage(req,res) {
      const id = req.params.id

      const nft = await Nft.findOne({where: {id: id}, raw: true})

      res.render('nftPage/edit',{nft})
      //chamar a rota com params
    }

    static async updateNft(req,res) {
      const id = req.body.id

      const nft = {
        title: req.body.title,
        price: req.body.price,
        url: "/images/" + req.file.filename
      }

      try {
        await Nft.update(nft, { where: {id: id}})
        
        req.flash('message','NFT atualizado!')

        req.session.save(() => {
          res.redirect('/dashboard')
        })
      } catch (err) {console.log(err)}

    }

    static async deleteNft(req,res){
      const id = req.body.id
      const userId = req.session.userid

      try {
        await Nft.destroy({where: {id: id, userId: userId}})
        
        req.session.save(() => {
          res.redirect('/dashboard')
        })
      } catch (err) {console.log(err)}

    }

    static async singleNftView(req,res){
      const id = req.params.id

      const nft = await Nft.findOne({where: {id: id}, raw: true})

      res.render('nftPage/view',{nft})

  }

}


module.exports = {
    NftController,
    upload
}
