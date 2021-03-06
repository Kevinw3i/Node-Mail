var express = require('express');
var router = express.Router();
// Node Mail
var nodemailer = require('nodemailer');
// myUser Info
// var MailAccount = require('../credentials');
// Use Csurf
var csurf = require('csurf')
// setup route middlewares
var csrfProtection = csurf({ cookie: true })

require('dotenv').config()

router.get('/' , csrfProtection, function(req, res) {
    res.render('contact' , { csrfToken: req.csrfToken() });
});

router.get('/review', csrfProtection, function(req, res) {
    res.render('contactReview', { csrfToken: req.csrfToken() });
});

router.post('/post',csrfProtection, function(req, res) {
    /*
    var data = req.body;
    console.log(data)       
    */
    //let myMailPass = MailAccount.myMailPass;

    console.log(process.env.gmailUser + '   ' + process.env.gmailPassword)

    let transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user : process.env.gmailUser,
            pass : process.env.gmailPassword
        }
    });
    let mailOptions = {
        from: req.body.email, // sender address
        to: 'k3vinwei@gmail.com',                // list of receivers
        subject: req.body.title, 
        text: req.body.description + '   ' + req.body.email
    };    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('ERRRRRRRoR: ' + error);
        }
       res.redirect('review');
    });
});
module.exports = router;
