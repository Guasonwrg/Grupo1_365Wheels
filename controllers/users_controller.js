const userController = {
    registrar: (req, res) =>{
        res.render('register.ejs');
    },
    ingresar: (req, res) =>{
        res.render('login.ejs')
    }
}

module.exports = userController;