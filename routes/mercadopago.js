const mercadopago = require("mercadopago");

const express = require("express");
const router = express.Router();

const FMFProductionParameters = {
  public_key: "APP_USR-ca4c383e-bd3c-467d-895d-977d36302955",
  access_token:
    "APP_USR-5137562355773089-031019-388095f52c4e850a4b07398734122beb-73128946",
  client_id: "5137562355773089",
  client_secret: "SQb12Vx9ScGH274jYQybPGwcnTWpEUtM",
};

const FMFTestParameters = {
  public_key: "TEST-5a7f35fd-b49e-4922-8c0b-cb60735d1a73",
  access_token:
    "TEST-5137562355773089-031019-1f910e4dbb40046e09c03bd2b60c8389-73128946 ",
};

/* Production */
mercadopago.configure({
  access_token: FMFProductionParameters.access_token,
});

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

const NotificationUrl = (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req);
  } catch (error) {
    console.log(error);
  }
};

router.post("/createpreference", CreatePreference);
router.post("/notificationurl/id:", NotificationUrl);

module.exports = router;
