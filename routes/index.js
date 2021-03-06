var express = require('express');
var router = express.Router();

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', upload.single('file'), function(req, res, next) {
	res.send(req.file);
});

module.exports = router;
