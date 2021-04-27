const express = require("express");
const slugify = require("slugify");
const shortid = require("shortid");
const Service = require("../models/services");

function createservices(services, parentId = null) {
  const serviceList = [];
  let service;
  if (parentId == null) {
    service = services.filter((serv) => serv.parentId == undefined);
  } else {
    service = services.filter((serv) => serv.parentId == parentId);
  }

  for (let servi of service) {
    serviceList.push({
      _id: servi._id,
      name: servi.name,
      slug: servi.slug,
      parentId: servi.parentId,
      type: servi.type,
      servicePictures: servi.servicePictures,
      children: createservices(services, servi._id),
    });
  }

  return serviceList;
}

exports.createService = (req, res) => {
  let servicePictures = [];
  if (req.files.length > 0) {
    console.log('req.files.length :>> ', req.files);
    servicePictures = req.files.map((file) => {
      console.log(file.filename);
      return { img: file.filename };
    });
  }
  const servicesObj = new Service({
    name: req.body.name,
    slug: `${slugify(req.body.name)}-${shortid.generate()}`,
    servicePictures,
  });
  if (req.body.parentId) {
    servicesObj.parentId = req.body.parentId;
  }
  //const serv = new Service(servicesObj);
  servicesObj.save((error, service) => {
    if (error) {
      return res.status(400).json({
        error,
      });
    }
    if (service) {
      return res.status(200).json({
        service,
      });
    }
  });
};

exports.getServices = (req, res, next) => {
  console.log("getServices");
  Service.find({}).exec((error, services) => {
    if (error) {
      return res.status(400).json({
        error,
      });
    }
    if (services) {
      const servicesList = createservices(services);
      res.status(200).json({
        servicesList,
      });
    }
  });
};


exports.deleteServices = async (req, res) => {
  const { ids } = req.body.payload;
  console.log('ids :>> ', ids);
  const deletedServices = [];
  for (let i = 0; i < ids.length; i++) {
    const deleteService = await Service.findOneAndDelete({
      _id: ids[i]._id,
      // createdBy: req.user._id,
    });
    deletedServices.push(deleteService);
  }

  if (deletedServices.length == ids.length) {
    res.status(201).json({ message: "Services removed" });
  } else {
    res.status(400).json({ message: "Something went wrong" });
  }
};


exports.getservicesbyserviceId = (req, res) => {
  console.log("getservicesbyserviceId");
  const { parentId } = req.params;
  console.log(parentId);
  Service.find({ parentId: parentId })
    // .select("")
    .exec((error, service) => {
      if (error) {
        return res.status(400).json({ error });
      }

      if (service) {
        console.log("service: ",service);
        return res.status(200).json({service});
        // Service.find({ service: service._id }).exec((error, serviceChildren) => {
        //   if (error) 
        //   {
        //     return res.status(400).json({ error });
        //   }
        //   if (serviceChildren.length > 0) 
        //     {
        //       res.status(200).json({
        //         serviceChildren,
        //   });
        //   } 
        //   else
        //   {
        //     res.status(200).json({ serviceChildren });
        //   }
        // });
      }
    });
};