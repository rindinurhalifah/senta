// sentabung.js

// Function to navigate to a page on box click
document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', function() {
    window.location.href = this.getAttribute('onclick').replace('window.location.href=', '').slice(1, -1);
  });
});
