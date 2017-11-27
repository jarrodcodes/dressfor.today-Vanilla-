let url2 = 'http://www.ip-api.com/json/';

let ipFunction = fetch(url2)
.then(function (resp) {
return resp.json()
}
).then(function(data) {
console.log(data.city)
return data.city;
})

Promise.resolve(ipFunction)
.then(function (answer) {
console.log(answer)
})

fetch('http://www.ip-api.com/json/').then(function (result) {
return result.json()
})
.then(function(result) {
console.log(result.city)
let city = result.city
})

let data = [];

fetch('http://www.ip-api.com/json/')
  .then(function (result) {
    return result.json()
  })
  .then(function(result) {
    console.log(result.city)
    data.push(result.city)
  });

console.log(data);