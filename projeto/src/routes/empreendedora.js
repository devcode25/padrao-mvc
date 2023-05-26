const express = require ("express");
const controller = require ("../controllers/empreendedoraController");

const router = express.Router();

router.get("/", controller.getAllEmpreendedoras);
router.post("/", controller.createEmpreendedoras);