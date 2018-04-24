# Use Nodemailer Send Email

[Nodemailer](https://nodemailer.com/about/)

###  Install
`npm install nodemailer --save`

###  Load Module
```javascript
var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port: 465,
        secure: true, 
        auth: {
            user: 'k3vinwei@gmail.com',
            pass: 'your password'
        }
    });
    
    let mailOptions = {
        from: '"Kevin 👻"<k3vinwei@gmail.com>', 
        to: 'k3vinwei@gmail.com',
        // Title
        subject: '',
        // Content
        text:''  
    };    
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
            res.redirect('err');
        }        
       res.redirect('review');
    });
```

#### Reference 

[How email works](https://ccm.net/contents/116-how-email-works-mta-mda-mua)

### Note
![](https://github.com/Kevinw3i/Node-Mail/blob/master/Git_mail.png)

1. Q: "Error: connect ECONNREFUSED 127.0.0.1:XXX"<br/> 
   A:  Check createTransport function "HOST" is correct
2. Q: "Error: Invalid login: 535-5.7.8 Username and Password not accepted"<br/> 
   A:  你的帳號或密碼錯誤，或是密碼應該是要用"應用程式密碼"
