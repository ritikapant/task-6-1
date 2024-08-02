//sending Mail with nodejs

const nodemailer = require("nodemailer");

async function sendMail(){
        //create an email transporter.
     const transporter=   nodemailer.createTransport({
          service: 'gmail',
        auth:{
          user:"ritikapant341@gmail.com",
          pass:'bhguyfsgopzfrbck'

        }
      })
  
    const mailOptions  = {
    from:"ritikapant341@gmail.com",
    to:"ritikapant834@gmail.com",
    subject:"Welcome to nodejs app ",
    text:"This is a testing email",

  }
  try{
    const result=await transporter.sendMail(mailOptions);
    console.log('Email send successfully')
  }catch(error){
    console.log('Email send failed with error:',error)
  }
}
sendMail()