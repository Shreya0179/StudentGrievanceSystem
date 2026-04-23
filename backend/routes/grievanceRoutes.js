const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createGrievance,
  getAllGrievances,
  getGrievanceById,
  updateGrievance,
  deleteGrievance,
  searchGrievances
} = require("../controllers/grievanceController");

router.get("/grievances/search", protect, searchGrievances);

// Protected routes
router.post("/grievances", protect, createGrievance);
router.get("/grievances", protect, getAllGrievances);
router.get("/grievances/:id", protect, getGrievanceById);
router.put("/grievances/:id", protect, updateGrievance);
router.delete("/grievances/:id", protect, deleteGrievance);
// router.get("/grievances/search", protect, searchGrievances);

module.exports = router;