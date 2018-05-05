const express = require('express');
const eStatic = require('express-static');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

var server = express();

server.use(bodyParser.json({}));
// server.use('/',function(req,res,next){
//     var str = '';
//     req.on('data',function(data){
//         str += data;
//     })
//     req.on('end',function(){
//         req.body = querystring.parse(str);
//         next();
//     })
// })
server.use(cookieParser('poiu'));
server.use('/api/getGoodsIn',function(req,res){
    res.secret = 'poiu';
    res.cookie('user',req.body['user'],{signed:true})
    console.log(req.signedCookies);
    console.log(req.cookies);
    res.send([{
        ProductName:"方管",
        ModelName:"40*40",
        Thickness:"2.0",
        Weight:"15",
        Length:"6",
        TPrice:"4310",
        UpdateDate:"2018-4-10",
        Number:"100",
        UnitPrice:"30",
        Remarks:"a"
      },{
        ProductName:"方管222",
        ModelName:"40*40",
        Thickness:"2.0",
        Weight:"15",
        Length:"6",
        TPrice:"4310",
        UpdateDate:"2018-4-10",
        Number:"100",
        UnitPrice:"30",
        Remarks:"a"
      }]);
    res.end();
})

// server.use('/',function(req,res,next){
//     console.log(req.url)
//     if(req.url !== '/index.html'){
//         res.location('/index.html');
//         res.statusCode = 301;
//         next();
//     }
//     next();
// });
server.use(eStatic('./dist'));


server.listen('8080');