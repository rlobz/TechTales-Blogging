const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (!username || !password) {
      alert("Please enter both username and password.");
      return;
  }

  try {
      const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
          document.location.replace('/dashboard');
      } else {
          const data = await response.json();
          alert(data.message || "Failed to log in.");
      }
  } catch (error) {
      alert("There was a problem connecting to the server. Please try again later.");
  }
};

document
.querySelector('.login-form')
.addEventListener('submit', loginFormHandler);
