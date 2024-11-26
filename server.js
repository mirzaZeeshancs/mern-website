var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
const bodyParser = require('body-parser');
const express = require('express')
var cors = require('cors')
const app = express()
const nodeMailer = require('nodemailer');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('dotenv').config();

app.post('/send_email', function (req, res) {
    const { name, email, detail } = req.body;
    let transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USERNAME,
            pass: process.env.GMAIL_PASSWORD,
        }
    });
    const mailOptions = {
        from: 'mhassanzahid02+from@gmail.com', // sender address
        to: 'mhassanzahid02@gmail.com"', // list of receivers
        subject: 'TechClan Contact us', // Subject line // plain text body
        html: `<p>Name: ${name}<br>Email: ${email}<br>Detail: ${detail}</p>` // html body
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(400).send({success: false})
        } else {
            res.status(200).send({success: true});
        }
    });
})

app.listen(3000, (err, res) =>{
    if (err){
        return console.log('backend error', err)
    }
    console.log('backend litsening http://localhost:3000/')
})
 
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(1812, function(err, result) {
  if (err) {
    return console.log("Error has occured ...", err);
  }
  console.log("Listening at http://localhost:1812/");
});
