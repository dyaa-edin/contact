
  // Select the form using its class name
  var form = document.getElementsByClassName('space-y-8')[0];

  form.addEventListener('submit', function() {
    // Allow the form to submit normally
    setTimeout(function() {
      location.reload();
    }, 2000); // Delay the reload to allow form submission
  });