// Implementing the receivesAFunction function
function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  
  // Implementing the returnsANamedFunction function
  function returnsANamedFunction() {
    // Returning a named function
    return function namedFunction() {
      console.log("This is a named function!");
    };
  }
  
  // Implementing the returnsAnAnonymousFunction function
  function returnsAnAnonymousFunction() {
    // Returning an anonymous function
    return () => {
      console.log("This is an anonymous function!");
    };
  }
  
  // Example usage
  const callbackFunction = () => console.log("Callback function called!");
  
  // Testing receivesAFunction
  receivesAFunction(callbackFunction);
  
  // Testing returnsANamedFunction
  const namedFunction = returnsANamedFunction();
  namedFunction(); // Should log: "This is a named function!"
  
  // Testing returnsAnAnonymousFunction
  const anonymousFunction = returnsAnAnonymousFunction();
  anonymousFunction(); // Should log: "This is an anonymous function!"
  