// B1: include thư viện  http
// const http = require('http');
// const express = require('express');
import express from 'express';
// import { response } from 'express';
// import { request } from 'express';
import homeRoute from "./routes/home"
import productRoute from "./routes/products"
import {checkAuth} from "./middlewares/checkAuth"
const app = express();
// const server = http.createServer(app);

// app.get('/', (request,response)=>{
//     response.send(`
//         <h1>Home Page</h1>
//         <p>content text</p>
//         <img src="https://kenh14cdn.com/thumb_w/620/2017/photo-1-1503945084922.jpg">
//     `)
// });

// const homeRoute = require('./routes/home');


app.use(express.json())
app.use(homeRoute);
app.use("/api",checkAuth,productRoute);


// app.get('/products',(request,response)=>{
//     response.send(`
//         <h1>Pro Page</h1>
//     `)
// });

// const productRoute = require('./routes/products');
// app.use(productRoute);

// app.get('/products/:productId',(request,response)=>{
//     response.send(`
//         <h1>Detail Product</h1>
//         ${request.params.productId}
//     `)
// });

// const productIdRoute = require('./routes/productID');
// app.use(productIdRoute);


// B2: khởi tạo server request,response
// const server = http.createServer((request,response)=>{
//     console.log(request.url);
//     if(request.url === '/'){
//         //console.log("Home Page");
//         response.setHeader("Content-Type","text/html");
//         response.write('<h1>Home Page</h1>');
//         response.end();
//     }
//     if(request.url === '/products'){
//       //console.log("Products");
//       response.setHeader("Content-Type","text/html");
//       response.write('<h1>Products</h1>');
//       response.end();
//   }
// });


// B3: lắng nghe cổng thực thhi 
app.listen(8000, ()=>{
    console.log("FPT POLY");
});