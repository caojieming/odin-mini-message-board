const { Router } = require("express");
const router = Router();
const dbController = require("../controllers/dbController");



router.get("/", dbController.openHome);

router.get("/new", dbController.openForm);
router.post("/new", dbController.submitForm);

router.get("/details/:id", dbController.openDetails);



module.exports = router;