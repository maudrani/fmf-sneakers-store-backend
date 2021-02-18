const mercadopago = require("mercadopago");

const express = require("express");
const router = express.Router();

mercadopago.configure({
  access_token:
    "TEST-1825194644671291-020305-941745df511e0bbbef675d8dc97bf9d3-181749895",
});

const CreatePreference = (req, res) => {
  mercadopago.preferences
    .create(req.body)
    .then(function (response) {
      return res.json({ ...response.body });
    })
    .catch(function (error) {
      console.log(error);
      return res.json({ ...error });
    });
};

router.post("/", CreatePreference);

module.exports = router;
