const axios = require('axios');

let reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.on('line', function(line) {
  console.log(`[Node]${line}`);
  // axios.post(`localhost:8888/server_output?line=${line}`)
});