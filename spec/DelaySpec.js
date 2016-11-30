
describe( "delay", function(){
     var calculator = new Calculator();
     var willAdd = wrapPromise(delay( 1000, calculator, 'add', [ 10, 5 ] ));
     var willSub = wrapPromise(delay( 500, calculator, 'subtract', [ 9, 5 ] ));
     var willSqr = wrapPromise(delay( 1000, calculator, 'sqrt', [ 2, 2 ] ) );

     it( "returns a promise", function(){
        var willAdd = delay( 100, calculator, 'add', [ 1, 1 ] );
        expect( willAdd ).toEqual( Promise.prototype );
        expect( willAdd ).toBefulfilled;
     } );
     
     it( "delays execution", function(){
        expect( willAdd.value() ).someDayMaybe( 15 );
        expect( willSub.value() ).someDayMaybe( 4 );
         
         
         
     } );
    

     it( "cannot execute functions that do not exist", function(){
         expect ( willSqr.isRejected() ).toBeTruthy;
         //expect( delay( 1000, calculator, 'sqrt', [ 2, 2 ] ) ).to.be.rejected;
     } );
     
    
} );


function wrapPromise(promise) {
  var value, error,
      settled = false,
      resolved = false,
      rejected = false,
      p = promise.then(function(v) {
        value = v;
        settled = true;
        resolved = true;
        return v;
      }, function(err) {
        error = err;
        settled = true;
        rejected = true;
        throw err;
      });
      p.isSettled = function() {
        return settled;
      };
      p.isResolved = function() {
        return resolved;
      };
      p.isRejected = function() {
        return rejected;
      };
      p.value = function() {
        return value;
      };
      p.error = function() {
        return error;
      };
      var pThen = p.then, pCatch = p.catch;
      p.then = function(res, rej) {
        return wrapPromise(pThen(res, rej));
      };
      p.catch = function(rej) {
        return "Error";
        //return wrapPromise(pCatch(rej));
      };
      return p;
}
