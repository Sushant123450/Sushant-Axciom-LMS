const express = require("express");
const router = express.Router();
const {
	issueItem,
	getActiveIssues,
	getRequestIssue,
	returnItem,
	getOverdueIssue,
	payFine
} = require("../controllers/issue_controller");
const { tokenCheck } = require("../middlewares/auth");

router.post("/issueItem", tokenCheck, issueItem);
router.get("/activeIssue", getActiveIssues);
router.get("/requestIssue", getRequestIssue);
router.get("/overdueIssue", getOverdueIssue);
router.post("/returnItem", tokenCheck, returnItem);
router.patch("/payfine/", tokenCheck, payFine);

module.exports = router;
