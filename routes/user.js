var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

let{getHomePage, getSignupPage, getLoginpPage}=require("../controllers/usercontroller")


router.get("/", getHomePage);
router.get("/signup",getSignupPage)
router.get("/login",getLoginpPage)


module.exports = router;
