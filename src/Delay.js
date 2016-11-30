function delay(inDelay, inCalc, inStr, inArry) {
    
    var promise = new Promise(function(resolve, reject) { 
        try{
            resolve(inCalc.mathIt(inStr, inArry));
        } catch(err) {
            //reject();
            promise.isRejected = isRejected = true;
        }
    });

    promise.then(DelayPromise(inDelay)).then(function(data) {  
        console.log("DelayPromise " + data);
    });  
    

    promise.catch(function(){
          console.log("CATCH1"); 
    });
    

   /* var promise = new Promise(function(resolve) {
        setTimeout(function() {
            var value = inCalc.mathIt(inStr, inArry);
            resolve(value);
        }, delay);    
    }); */
    
    return promise;
};
                              
function DelayPromise(delay) {  
  //return a function that accepts a single variable
  return function(data) {
    //this function returns a promise.
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        //a promise that is resolved after "delay" milliseconds with the data provided
        resolve(data);
        console.log("DelayPromise2 " + data);
      }, delay);    
    })
    ;
  }
}

