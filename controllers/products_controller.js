const productsController = {
   
    carrito: (req, res) =>{
        res.render('productCart.ejs')
    },
    detalles: (req, res) =>{
        res.render('productDetail.ejs')
    }
}

module.exports = productsController;