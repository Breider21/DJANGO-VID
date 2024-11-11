document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const termsAccepted = document.getElementById('termsCheckbox').checked;
    
    // Basic validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    if (!termsAccepted) {
        alert('Please accept the Terms of Use & Privacy Policy');
        return;
    }
    
    // If validation passes, you can handle the form submission here
    console.log('Form submitted successfully');
    console.log({
        firstName,
        lastName,
        email,
        password,
        termsAccepted
    });
    
    // Optional: Reset form after successful submission
    this.reset();
});