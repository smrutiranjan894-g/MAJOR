// Get the button and content elements
var button = document.querySelector('.collapsible');
var content = document.querySelector('.content');

// Add a click event listener to the button
button.addEventListener('click', function() {
  // Toggle the content's display property
  if (content.style.display === 'block') {
    content.style.display = 'none';
    button.innerHTML = 'Click to expand';
  } else {
    content.style.display = 'block';
    button.innerHTML = 'Click to collapse';
  }
});
