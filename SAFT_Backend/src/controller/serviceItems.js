const ServiceItems = require("../models/serviceItems");
const shortid = require("shortid");
const slugify = require("slugify");
const Service = require("../models/services");

exports.createserviceItems = (req, res) => {
  //res.status(200).json( { file: req.files, body: req.body } );

  const { name, price, service, createdBy } = req.body;
  let serviceItemsPictures = [];

  if (req.files.length > 0) {
    serviceItemsPictures = req.files.map((file) => {
      return { img: file.location };
    });
  }

  const serviceItems = new ServiceItems({
    name: name,
    slug: slugify(name),
    price,
    serviceItemsPictures,
    service,
    createdBy: req.user._id,
  });

  serviceItems.save((error, item) => {
    if (error) return res.status(400).json({ error });
    if (item) {
      res.status(201).json({ item, files: req.files });
    }
  });
};

// exports.getProductsBySlug = (req, res) => {
//   const { slug } = req.params;
//   Category.findOne({ slug: slug })
//     .select("_id type")
//     .exec((error, category) => {
//       if (error) {
//         return res.status(400).json({ error });
//       }

//       if (category) {
//         Product.find({ category: category._id }).exec((error, products) => {
//           if (error) {
//             return res.status(400).json({ error });
//           }

//           if (category.type) {
//             if (products.length > 0) {
//               res.status(200).json({
//                 products,
//                 priceRange: {
//                   under5k: 5000,
//                   under10k: 10000,
//                   under15k: 15000,
//                   under20k: 20000,
//                   under30k: 30000,
//                 },
//                 productsByPrice: {
//                   under5k: products.filter((product) => product.price <= 5000),
//                   under10k: products.filter(
//                     (product) => product.price > 5000 && product.price <= 10000
//                   ),
//                   under15k: products.filter(
//                     (product) => product.price > 10000 && product.price <= 15000
//                   ),
//                   under20k: products.filter(
//                     (product) => product.price > 15000 && product.price <= 20000
//                   ),
//                   under30k: products.filter(
//                     (product) => product.price > 20000 && product.price <= 30000
//                   ),
//                 },
//               });
//             }
//           } else {
//             res.status(200).json({ products });
//           }
//         });
//       }
//     });
// };

// exports.getProductDetailsById = (req, res) => {
//   const { productId } = req.params;
//   if (productId) {
//     Product.findOne({ _id: productId }).exec((error, product) => {
//       if (error) return res.status(400).json({ error });
//       if (product) {
//         res.status(200).json({ product });
//       }
//     });
//   } else {
//     return res.status(400).json({ error: "Params required" });
//   }
// };

// // new update
// exports.deleteProductById = (req, res) => {
//   const { productId } = req.body.payload;
//   if (productId) {
//     Product.deleteOne({ _id: productId }).exec((error, result) => {
//       if (error) return res.status(400).json({ error });
//       if (result) {
//         res.status(202).json({ result });
//       }
//     });
//   } else {
//     res.status(400).json({ error: "Params required" });
//   }
// };

exports.getserviceItems = async (req, res) => {
  const items = await ServiceItems.find({ createdBy: req.user._id })
    .select("_id name price slug serviceItemsPictures service")
    .populate({ path: "service", select: "_id name" })
    .exec();

  res.status(200).json({ items });
};