var express = require('express')
var router = express.Router()
var db = require('../db');
var dotEnv=require("dotenv");
dotEnv.load();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var verifyToken=require("../routes/verifyToken")
//Register User

router.route("/register")
    .post((req,res)=>{
        //encrypt password before save
        var hashedPassword=bcrypt.hashSync(req.body.password, 8);
        req.body.password=hashedPassword;
        var newUser=new db.User(req.body);        
    })

//Login User
router.route("/login")
    .post((req,res)=>{
        db.User.findOne({
            email:req.body.email
        })        
    })


    router.route("/me")
    .get(verifyToken,(req,res)=>{
        db.User.findById(req.userId,{password:0})
       .then((user)=>{
            res.status(200).send(user);
        })
        .catch((err)=>{
            res.status(500).send({
                message:"Unable to retrieve user" + JSON.stringify(err)
            });
        })
    })
    
//Logout
router.get('/logout', function(req, res) {
        res.status(200).send({ auth: false, token: null });
});

module.exports=router;