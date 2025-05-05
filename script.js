// Button Click Event
document.getElementById('myButton').addEventListener('click', function() {
    this.innerText = 'You clicked me!';
    this.style.backgroundColor = 'blue';
  });
  
  // Hover Effect
  document.getElementById('hoverButton').addEventListener('mouseover', function() {
    this.style.color = 'green';
  });
  document.getElementById('hoverButton').addEventListener('mouseout', function() {
    this.style.color = 'black';
  });
  
  // Keypress Detection
  document.addEventListener('keydown', function(event) {
    alert('You pressed a key: ' + event.key);
  });
  
  // Secret Action (Double-click)
  document.getElementById('secretButton').addEventListener('dblclick', function() {
    alert('Double-clicked! Secret action triggered!');
  });
  
  // Image Gallery
  let currentImage = 0;
  const images = [
    'https://via.placeholder.com/300/ff0000',
    'https://via.placeholder.com/300/00ff00',
    'https://via.placeholder.com/300/0000ff'
  ];
  document.getElementById('nextBtn').addEventListener('click', function() {
    currentImage = (currentImage + 1) % images.length;
    document.getElementById('galleryImage').src = images[currentImage];
  });
  document.getElementById('prevBtn').addEventListener('click', function() {
    currentImage = (currentImage - 1 + images.length) % images.length;
    document.getElementById('galleryImage').src = images[currentImage];
  });
  
  // Tabs
  document.getElementById('tab1').addEventListener('click', function() {
    document.getElementById('content1').style.display = 'block';
    document.getElementById('content2').style.display = 'none';
  });
  document.getElementById('tab2').addEventListener('click', function() {
    document.getElementById('content1').style.display = 'none';
    document.getElementById('content2').style.display = 'block';
  });
  
  // Form Validation
  document.getElementById('submitButton').addEventListener('click', function() {
    const email = document.getElementById('emailField').value;
    const password = document.getElementById('passwordField').value;
    
    // Email format validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
      alert('Please enter a valid email address');
      return;
    }
  
    // Password length validation
    if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }
  
    alert('Form submitted successfully!');
  });
  
  // Real-time feedback for password
  document.getElementById('passwordField').addEventListener('input', function() {
    const password = this.value;
    const feedback = document.getElementById('passwordFeedback');
    if (password.length < 8) {
      feedback.innerText = 'Password must be at least 8 characters';
      feedback.style.color = 'red';
    } else {
      feedback.innerText = 'Password is strong';
      feedback.style.color = 'green';
    }
  });
  