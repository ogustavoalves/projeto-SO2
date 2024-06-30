const { Router } = require("express");
const router = Router();
const userController = require("../controllers/userController");

router.get("/user", userController.read);

router.post("/user",userController.create);



module.exports = router;