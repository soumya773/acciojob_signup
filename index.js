const form = document.getElementById('signupForm');
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Password validation
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if(password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            // Date validation
            const dob = document.getElementById('dob').value;
            if(!/^\d{2}-\d{2}-\d{4}$/.test(dob)) {
                alert('Please enter date in dd-mm-yyyy format');
                return;
            }

            // If all validations pass
            form.reset();
            alert('Signup successful!');
        });