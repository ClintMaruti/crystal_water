const express = require("express");
const router = express.Router();
const clientController = require("../controllers/client");

/* GET users listing. */
router.get("/api/v1/users", clientController.fetchAllClients);
router.post("/api/v1/users", clientController.createClient);
router.get("/api/v1/users/:id", clientController.fetchOneClient);
router.delete("/api/v1/users/:id", clientController.deletOneClient);
router.put("/api/v1/users/:id", clientController.updateOneClient);

module.exports = router;
