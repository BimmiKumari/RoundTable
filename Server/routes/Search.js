const express = require("express")
const { getAllCourses, querySearch, SearchpPage } = require("../controllers/Search")
const router = express.Router()
router.get("/getAllCourses", getAllCourses)
router.get("/dropdown/:searchQuery", querySearch)
router.get("/:searchQuery", SearchpPage)
module.exports = router