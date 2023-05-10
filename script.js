function countdown() {
    var count = 10;
  
    function timer() {
      if (count > 0) {
        console.log(count);
        count--;
        setTimeout(timer, 1000); // Wait for 1 second
      } else {
        console.log("Happy Independence Day!");
      }
    }
  
    timer();
  }
  
  countdown();
  