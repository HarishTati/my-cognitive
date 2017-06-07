var express=require('express');
var app=express();
var bodyparser=require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/user');
var obj = require('./models/schema.js');


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));


app.get('/',function(req,res){
res.sendFile(__dirname + '/public/intro.html');
});
/*
app.get('/login',function(req,res){
	res.sendFile(__dirname+'/public/'+'login.html');
})

app.get('/ver',function(req,res){
	res.sendFile(__dirname+'/public/'+'main.html');
})*/
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/register', function (req, res) {
   //console.log('a');
   
       var data = {
		   
        firstname :req.body.firstname,
        email : req.body.email,
        password : req.body.password,
        number: req.body.number
		}
console.log(data);
//res.send(data);
obj.adduser(data, function(err, data) {
	console.log(data);
        if (err) {
			res.json("something went wrong");
			res.json("something went wrong");
			console.log("something went wrong");
           //response ="login succesfully"

            //console.log('success response',JSON.stringify(response));
        } else {
           if(data.length!=0){
			   var json = {
				   "result":"success"
			   }
			  // data[0].password==req.body.password;
			  // res.redirect('/login');
			   res.json(json);
			    }
				else{
					console.log("email/password not valid");
					res.json("email/password not valid");
				}
        }
    }); 
});


app.post('/login', function (req, res) {
  

    var data = {
        
        email : req.body.email,
        password : req.body.password,
}
console.log(data);
obj.validate(data, function(err, data) {
        if (err) {
			res.json("something went wrong");
			console.log("something went wrong");
           
        } else {
           if(data.length!=0){
			   data[0].password==req.body.password;
			    var json = {
				   "result":"success"
			   }
			   res.json(json);
			    }
				else{
					console.log("email/password not valid");
					res.json("email/password not valid");
				}
        }
    });
});

var watson = require('watson-developer-cloud');
var tone_analyzer = watson.tone_analyzer({
  username: 'b0852875-d9c6-49f9-9465-d86598c20480',
  password: 'y0XnX4Vy5evL',
  version: 'v3',
  version_date: '2016-05-19',
 //tones:'language',
});

var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': '7a2e3c12-b1c8-404e-943f-d082929fe334',
  'password': 'fCs8imXJ67zP',
  'version_date': '2017-02-27'
});

app.post('/sample1',function(req,res){
  response=req.body.name;
console.log(response);
//res.send(response);
var parameter1 = {
  'text': response,
  'features': {
    'categories': {

    }
  }
}
natural_language_understanding.analyze(parameter1, function(err, response) {
  if (err)
    console.log('error:', err);
  else
      console.log(JSON.stringify(response, null, 2));
     res.send(JSON.stringify(response, null, 2));
        //  res.send(JSON.stringify(response2, null, 2));
});
});
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.post('/sample2',function(req,res){
  response=req.body.name;
console.log(response);
var parameter2 = {
  'text': response,
  'features': {
    'concepts':{
      'limit':2,
    }
  }
}
natural_language_understanding.analyze(parameter2, function(err, response) {
  if (err)
    console.log('error:', err);
  else
  //res.writeHead(200,{"Content-Type": "text/plain"});
    //response1=response.emotion.document.emotion;
  //  response=response.sentiment.document.label;

    console.log(JSON.stringify(response, null, 2));
     res.send(JSON.stringify(response, null, 2));
        //  res.send(JSON.stringify(response2, null, 2));
});
});

app.post('/sample3',function(req,res){
  response=req.body.name;
console.log(response);
var parameter2 = {
  'text': response,
  'features': {
    'sentiment':{
      'document':response,
    }
  }
}
natural_language_understanding.analyze(parameter2, function(err, response) {
  if (err)
    console.log('error:', err);
  else
  //res.writeHead(200,{"Content-Type": "text/plain"});
    //response1=response.emotion.document.emotion;
    response=response.sentiment.document;

    console.log(JSON.stringify(response, null, 2));
     res.send(JSON.stringify(response, null, 2));
        //  res.send(JSON.stringify(response2, null, 2));
});
});

app.post('/sample4',function(req,res){
  response=req.body.name;
console.log(response);
var parameter2 = {
  'text': response,
  'features': {
    'emotion':{
      'document':response,
    }
  }
}
natural_language_understanding.analyze(parameter2, function(err, response) {
  if (err)
    console.log('error:', err);
  else
  //res.writeHead(200,{"Content-Type": "text/plain"});
    response=response.emotion.document.emotion;
    //response=response.sentiment.document.label;

    console.log(JSON.stringify(response, null, 2));
     res.send(JSON.stringify(response, null, 2));
        //  res.send(JSON.stringify(response2, null, 2));
});
});

app.post('/sample5',function (req, res) {
  response = req.body.name;
  console.log(response);
    tone_analyzer.tone(
    {text:response,tones:'language','sentences':false},
    //{tones:language},
    function(err,tone) {
      if (err)
        console.log(err);
      else
      tone=tone.document_tone.tone_categories;

        console.log(JSON.stringify(tone, null, 2));
        res.send(JSON.stringify(tone, null, 2));
  });
});



app.listen(8081);