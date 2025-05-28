const dotenv = require('dotenv')
dotenv.config()

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    secure:false,
    auth:{
        user : process.env.EMAIL,
        pass : process.env.EMAIL_APP_PSWD
    }
})

