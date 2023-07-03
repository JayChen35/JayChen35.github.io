window.onload = function() {
    // Set the target date and time for the countdown
    var targetDate = new Date("2023-07-13T00:00:00");
    
    // Update the countdown every second
    setInterval(function() {
      // Get the current date and time
      var currentDate = new Date().getTime();
      
      // Calculate the remaining time in milliseconds
      var remainingTime = targetDate - currentDate;
      
      // Calculate the days, hours, minutes, and seconds
      var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
      
      // Display the countdown in the HTML element
      document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    }, 1000);
};
  