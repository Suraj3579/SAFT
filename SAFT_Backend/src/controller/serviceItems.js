const ServiceItems = require("../models/serviceItems");
const shortid = require("shortid");
const slugify = require("slugify");
const Service = require("../models/services");
const serviceItems = require("../models/serviceItems");

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

exports.getserviceItemsbyservice = (req, res) => {
  console.log("lol");
  const { slug } = req.params;
  console.log(slug);
  Service.findOne({ slug: slug })
    .select("_id")
    .exec((error, service) => {
      if (error) {
        return res.status(400).json({ error });
      }

      if (service) {
        serviceItems.find({ service: service._id }).exec((error, serviceitems) => {
          if (error) 
          {
            return res.status(400).json({ error });
          }
          if (serviceitems.length > 0) 
            {
              res.status(200).json({
                serviceitems,
          });
          } 
          else
          {
            res.status(200).json({ serviceitems });
          }
        });
      }
    });
};

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


exports.deleteserviceItemById = (req, res) => {
  const { serviceItemId } = req.body.payload;
  if (serviceItemtId) {
    ServiceItems.deleteOne({ _id: serviceItemId }).exec((error, result) => {
      if (error) return res.status(400).json({ error });
      if (result) {
        res.status(202).json({ result });
      }
    });
  } else {
    res.status(400).json({ error: "Params required" });
  }
};

exports.getserviceItems = async (req, res) => {
  const items = await ServiceItems.find({ createdBy: req.user._id })
    .select("_id name price slug serviceItemsPictures service")
    .populate({ path: "service", select: "_id name" })
    .exec();

  res.status(200).json({ items });
};