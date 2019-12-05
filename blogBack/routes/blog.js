var express = require('express');
var router = express.Router();
var blogController = require('../controllers/blogControllers');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/showBlog', function(req, res, next) {
  blogController.showBlog(req,res);
});
router.post('/addBlog', function(req, res, next) {
  blogController.addBlog(req,res);
});
router.post('/deleteBlog', function(req, res, next) {
  blogController.deleteBlog(req,res);
});
router.post('/updateBlog', function(req, res, next) {
  blogController.updateBlog(req,res);
});

module.exports = router;
