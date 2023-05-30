const express = require ("express");
const EmpreendedoraController = require ("../controllers/empreendedoraController");

const router = express.Router();

router
.get("/", EmpreendedoraController.getAllEmpreendedoras)
.post("/", EmpreendedoraController.createEmpreendedoras)
.put("/:id", EmpreendedoraController.updateEmpreendedoras)
.delete("/:id", EmpreendedoraController.deleteEmpreendedoras)
.get("/:id", EmpreendedoraController.getByIdEmpreendedoras)

module.exports = router;