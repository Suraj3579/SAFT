const express = require("express");
const slugify = require("slugify");
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
      children: createservices(services, servi._id),
    });
  }

  return serviceList;
}

exports.createService = (req, res) => {
  const servicesObj = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };
  if (req.body.parentId) {
    servicesObj.parentId = req.body.parentId;
  }
  const serv = new Service(servicesObj);
  serv.save((error, service) => {
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
