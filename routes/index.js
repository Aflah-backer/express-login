var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


const Name = 'Aflah'
const Email = 'aflahbacker2000@gamil.com'
const password  = '12345'

router.post('/submit',function(req,res){
  console.log(req.body);
// const{user_name,pw}= req.body

if(req.body.username === Name && req.body.password === password){
  
   res.render("home")

}else{
  res.send("error")
}




  
  
})


module.exports = router;
