const limitFunctionCallCount=require('../limitFunctionCallCount');

n=2;
function cb(){
    console.log("check")
}

let final=limitFunctionCallCount(cb,n);
final()
final()
final()
final()