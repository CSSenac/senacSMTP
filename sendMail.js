const nodemailler = require(modeller)
require("dotenv").config();

const transporter = nodemailler.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    port: 465,
    secure:true
    auth: {
        user: process.env.USER,
        pass: process.env.APP_PASSWORD,
    },
});