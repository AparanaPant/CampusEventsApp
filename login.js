document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'student' && password === '1234') {
    window.location.href = 'home.html';
  } else {
    alert('Invalid credentials! Please try again.');
  }
});
