const express = require('express')
const {engine} = require('express-handlebars')
const app = express() // engine
app.engine('handlebars', engine()) // engine
app.set('view engine', 'handlebars') // engine
app.use(express.static('public')) // paginas estáticas
app.use(express.urlencoded({extended: true}))
// configurações basica da engine e express

const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')
// sessão

const conn = require('./db/conn') // conexao db

const User = require('./models/users')
const Nft = require('./models/nfts')

const authRouter = require('./routes/authR')
const NftRouter = require('./routes/nftR')

const NftController = require('./controllers/NftController').NftController


// conf sessão - inicio
app.use(
   session({
       name: "session",
       secret: "mySecret8160",
       resave: false,
       saveUninitialized: false,
       store: new FileStore({
           logFn: function () { },
           path: require('path').join(require('os').tmpdir(), 'sessions'),
       }),
       cookie: {
           secure: false,
           maxAge: 3600000,
           expires: new Date(Date.now() + 3600000),
           httpOnly: true
       }
   }),
)




app.use(flash())

app.use((req, res, next) => {
   if (req.session.userid) {
       res.locals.session = req.session
   }
   next()
})

// conf sessão - fim





app.use("/",NftRouter)

app.use("/",authRouter)


app.get("/", NftController.nftpage)


conn
   .sync()
    
    .then(() => {
        app.listen(3000)
    })
    .catch((err) => console.log(err))