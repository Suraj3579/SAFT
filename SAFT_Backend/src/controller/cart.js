const Cart =require('../models/cart')

exports.addItemToCart = (req,res) => {
    cart.findOne({user: req.user_id})
    .exec((error,cart) => {
        if(error) return res.status(400).json({error});
        if(cart){
        cart.cartItems.find(c => c.serviceItems == req.bodu.cartItems.serviceItems)

            cart.findOneAndUpdate({user: req.user._id},{
                "$push": {  
                    "cartItems":req.body.cartItems
                }
            })
            .exec((error,_cart) => {
                if(error) return res.status(400).json({error});
                if(cart){
                    return res.status(200).json({
                        cart: _cart
                    });
                }
            });
            //res.status(200).json({mesage:cart});
        }
        else{
            const cart = new Cart({
                user: req.user._id,
                cartItems: req.body.cartItems
            });
            cart.save((error,cart)=>{
                if(error) return res.status(400).json({error});
                if(cart){
                    return res.status(200).json({
                        cart
                    });
                }
            });
        }
    });
}
