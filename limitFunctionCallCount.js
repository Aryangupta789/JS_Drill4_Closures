    // Should return a function that invokes `cb`.
    // The returned function should only allow `cb` to be invoked `n` times.
    // Returning null is acceptable if cb can't be returned

function limitFunctionCallCount(cb, n) {
    let limit=0;
    function checklimit(){
        if (limit<n){
            limit+=1;
            cb();
        }else{
            return null
        }
    }
    return checklimit; 

}
module.exports=limitFunctionCallCount