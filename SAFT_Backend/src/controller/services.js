const express=require("express");       
const slugify=require("slugify");
const Service = require("../models/services");

exports.createService = (req,res) =>{
    const servicesObj ={
        name:req.body.name,
        slug:slugify(req.body.name)
    }
    if(req.body.parentId){
        servicesObj.parentId=req.body.parentId;
    }
    const serv = new Service(servicesObj);
    serv.save((error,service)=>{
        if(error){
            return res.status(400).json({
                error
            });
        }
        if(service){
            return res.status(200).json({
                service
            });
        }
    });
};

exports.getServices = (req,res,next) => {
    Service.find({})
.exec((error,services) => {
    if(error){
        return res.status(400).json({
            error
        });
    }
    if(services){
        res.status(200).json({
            services
        });
    }
 });
};