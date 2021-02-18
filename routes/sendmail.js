const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com.ar",
    post: 587,
    secure: false,
    auth: {
      user: "contacto@fmfsneakers.com",
      pass: "!FmfSneakers2021",
    },
  });

  const mailOptions = {
    from: "contacto@fmfsneakers.com",
    to: req.body.to,
    subject: req.body.subject,
    html: req.body.html,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.status(500).send(err.message);
      console.log(err.message);
    } else {
      console.log("Email Enviado");
      res.status(200).json(req.body);
    }
  });
});

module.exports = router;
