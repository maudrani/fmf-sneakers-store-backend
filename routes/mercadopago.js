const mercadopago = require("mercadopago");

const express = require("express");
const router = express.Router();

/* TEST */
mercadopago.configure({
  access_token:
    "TEST-1825194644671291-020305-941745df511e0bbbef675d8dc97bf9d3-181749895",
});

/* mercadopago.configure({
  access_token:
    "APP_USR-1825194644671291-020305-cb803dbe7220c03579bf51cd15e00004-181749895",
}); */

const CreatePreference = (req, res) => {
  mercadopago.preferences
    .create(req.body)
    .then(function (response) {
      /* console.log(response); */
      return res.json({ ...response.body });
    })
    .catch(function (error) {
      /* console.log(error); */
      return res.json({ ...error });
    });
};

const NotificationUrl = (req,res) => {
  try {
    console.log(req.params.id);
    console.log(req);
  } catch (error) {
    console.log(error);
  }
}

router.post("/createpreference", CreatePreference);
router.post("/notificationurl/id:", NotificationUrl);

module.exports = router;
