var express = require('express');
var router = express.Router();
// Node Mail
var nodemailer = require('nodemailer');
// myUser Info
var MailAccount = require('../credentials');

router.get('/', function(req, res) {
    res.render('contact');
});

router.get('/review', function(req, res) {
    res.render('contactReview');
});

router.post('/post', function(req, res) {
    /*
    var data = req.body;
    console.log(data)       
    */
    let myMailPass = MailAccount.myMailPass;

    let transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'k3vinwei@gmail.com', 
            pass: myMailPass 
        }
    });
    let mailOptions = {
        from: '"Kevin 👻"<tkevin0414@gmail.com>', // sender address
        to: 'k3vinwei@gmail.com',                // list of receivers
        subject: 'Hello ✔', 
        text: 'text'
    };    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('ERRRRRRRoR: ' + error);
        }
       res.redirect('review');
    });
});
module.exports = router;
