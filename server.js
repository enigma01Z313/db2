"use strict";
const http = require("http");
const mysql = require("mysql2");
const app = require("./app/app");
const server = http.createServer(app);
const port = 30040;

const mysqldb = mysql.createConnection({
  host: "localhost",
  user: "farzin",
  password: "5%lL9!$wAVdnYv$65Kf9",
});

mysqldb.connect((err) => {
  if (err) throw err;
  console.log("mysql connected");
});

server.listen(port, () => {
  console.log(`server is running on http://67.43.234.92:${port}`);
});

// const calculatePerformance = (cb) => {
//   let totalTime = 0;
//   for (let i = 0; i < 100000; i++) {
//     const startTime = performance.now();
//     const endTime = performance.now();
//     const diff = endTime - startTime;
//     totalTime += diff;
//   }
//   return totalTime / 100000;
// };

// const sToN1 = () => {
//   const a = 12;
//   return +a;
// };

// console.log("sToN1:", calculatePerformance(sToN1));

// const sToN2 = () => {
//   const b = 12;
//   return parseInt(b);
// };

// console.log("sToN2:", calculatePerformance(sToN2));
