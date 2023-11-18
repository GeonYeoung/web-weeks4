var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('index',{title:"계시판", pagename:"posts/list.ejs"})
});

router.get('/insert', function(req, res){
    res.render('index',{title:"글쓰기", pagename:"posts/insert.ejs"})
});


module.exports = router;