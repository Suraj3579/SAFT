const Cart = require("../models/cart");

function runUpdate(condition, updateData) {
  return new Promise((resolve, reject) => {
    //you update code here

    Cart.findOneAndUpdate(condition, updateData, { upsert: true })
      .then((result) => resolve())
      .catch((err) => reject(err));
  });
}

exports.addItemToCart = (req, res) => {
  Cart.findOne({ user: req.user._id }).exec((error, cart) => {
    if (error) return res.status(400).json({ error });
    if (cart) {
      //if cart already exists then update cart by quantity
      let promiseArray = [];
      console.log(req.body.cartItems);
      //Array.from(req.body.cartItems).forEach((cartItem) => {
        const cartItem=req.body.cartItems
        //for(const cartItem of req.body.cartItems){
        console.log(cartItem);
        const serviceitem = cartItem.serviceitem;
        const item = cart.cartItems.find((c) => c.serviceitem == serviceitem);
        console.log(item);
        let condition, update;
        if (item) {
          condition = { user: req.user._id, "cartItems.serviceitem": serviceitem };
          update = {
            $set: {
              "cartItems.$": cartItem,
            },
          };
        } else {
          condition = { user: req.user._id };
          update = {
            $push: {
              cartItems: cartItem,
            },
          };
        }
        promiseArray.push(runUpdate(condition, update));
      //}
    //});
      Promise.all(promiseArray)
        .then((response) => res.status(201).json({ response }))
        .catch((error) => res.status(400).json({ error }));
    } else {
      //if cart not exist then create a new cart
      const cart = new Cart({
        user: req.user._id,
        cartItems: req.body.cartItems,
      });
      cart.save((error, cart) => {
        if (error) return res.status(400).json({ error });
        if (cart) {
          return res.status(201).json({ cart });
        }
      });
    }
  });
};

exports.getCartItems = (req, res) => {
  //const { user } = req.body.payload;
  //if(user){
  Cart.findOne({ user: req.user._id })
    .populate("cartItems.serviceitem", "_id name price serviceItemsPictures")
    .exec((error, cart) => {
      if (error) return res.status(400).json({ error });
      console.log(cart);
      if (cart) {
        let cartItems = {};
        for(const item of cart.cartItems)
        {
          //console.log(item);
        //cart.cartItems.forEach((item, index) => {
          cartItems[item.serviceitem._id.toString()] = {
            _id: item.serviceitem._id.toString(),
            name: item.serviceitem.name,
            img: item.serviceitem.serviceItemsPictures[0].img,
            price: item.serviceitem.price,
            // qty: item.quantity,
          };
        //});
        }
        res.status(200).json({ cartItems });
      }
    });
  //}
};

// new update remove cart items
exports.removeCartItems = (req, res) => {
  const { serviceitemId } = req.body.payload;
  if (serviceitemId) {
    Cart.update(
      { user: req.user._id },
      {
        $pull: {
          cartItems: {
            serviceitem: serviceitemId,
          },
        },
      }
    ).exec((error, result) => {
      if (error) return res.status(400).json({ error });
      if (result) {
        res.status(202).json({ result });
      }
    });
  }
};