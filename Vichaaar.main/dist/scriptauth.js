console.log("Script loaded!");
    
const container = document.getElementById('container');
document.getElementById('signUp').addEventListener('click', () => {
    container.classList.add("active");
});
document.getElementById('signIn').addEventListener('click', () => {
    container.classList.remove("active");
});

// Handle Sign Up
document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ name, email, password })
    });

    const data = await response.json();
    alert(data.message);
    if (response.ok) {
        container.classList.remove("active"); // redirect to sign in
    }
});

// Handle Sign In
document.getElementById('signinForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;

    const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (response.ok) {
        alert('Login Successful');
       window.location.href = "index.html";

    } else {
        alert(data.message);
    }
});
