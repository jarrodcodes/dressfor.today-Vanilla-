const url2 = 'http://ip-api.com/json/';
const ipFunction = fetch(url2)
.then(function (resp) {
       return resp.json()
    }
).then(function(data) {

console.log(data.city)
return data.city;
}
)

const ipFunction2 = ipFunction
.then(function(resp) {
    console.log(resp)
    return resp
 }
 
)

Promise.resolve(ipFunction2)

.then(function (answer) {
    console.log(answer)

})