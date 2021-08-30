const cacheFunction=require('../cacheFunction');

function cb(num){
    return num*10
}

const result=cacheFunction(cb);
console.log(result(1))
console.log(result(2))
console.log(result(2))
console.log(result(1))