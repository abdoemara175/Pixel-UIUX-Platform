// Auth Management for Pixel Platform

const auth = {
    // Check if user is logged in
    isLoggedIn: function() {
        return localStorage.getItem('pixel_user_logged_in') === 'true';
    },

    // Login user
    login: function(email, password) {
        // Simple mock login
        if (email && password) {
            localStorage.setItem('pixel_user_logged_in', 'true');
            localStorage.setItem('pixel_user_email', email);
            return true;
        }
        return false;
    },

    // Signup user
    signup: function(name, email, password) {
        // Simple mock signup
        if (name && email && password) {
            localStorage.setItem('pixel_user_logged_in', 'true');
            localStorage.setItem('pixel_user_name', name);
            localStorage.setItem('pixel_user_email', email);
            return true;
        }
        return false;
    },

    // Logout user
    logout: function() {
        localStorage.removeItem('pixel_user_logged_in');
        localStorage.removeItem('pixel_user_email');
        localStorage.removeItem('pixel_user_name');
        window.location.href = window.location.origin + '/index.html';
    },

    // Protect private pages
    protectPage: function() {
        if (!this.isLoggedIn()) {
            const currentPath = window.location.pathname;
            // Store the attempted URL to redirect back after login
            localStorage.setItem('pixel_redirect_url', window.location.href);
            
            // Redirect to login page
            const prefix = currentPath.includes('/pages/') ? '' : 'pages/';
            window.location.href = prefix + 'login.html';
        }
    },

    // Update Navbar based on auth state
    updateNavbar: function() {
        const navLinks = document.querySelector('.nav-links');
        if (!navLinks) return;

        // Remove existing auth buttons if any
        const existingAuth = navLinks.querySelectorAll('.auth-btn-item');
        existingAuth.forEach(el => el.remove());

        if (this.isLoggedIn()) {
            // Show Logout
            const logoutItem = document.createElement('li');
            logoutItem.className = 'auth-btn-item';
            logoutItem.innerHTML = `<a href="#" onclick="auth.logout()" style="color: var(--secondary); font-weight: 700; text-decoration: none; cursor: pointer;">تسجيل الخروج</a>`;
            navLinks.appendChild(logoutItem);
        } else {
            // Show Login & Signup
            const loginItem = document.createElement('li');
            loginItem.className = 'auth-btn-item';
            const prefix = window.location.pathname.includes('/pages/') ? '' : 'pages/';
            loginItem.innerHTML = `<a href="${prefix}login.html" style="color: var(--secondary); font-weight: 700; text-decoration: none;">تسجيل الدخول</a>`;
            navLinks.appendChild(loginItem);

            const signupItem = document.createElement('li');
            signupItem.className = 'auth-btn-item';
            signupItem.innerHTML = `<a href="${prefix}signup.html" style="background: linear-gradient(135deg, var(--secondary), #6d28d9); color: white !important; padding: 0.6rem 1.5rem; border-radius: 12px; text-decoration: none !important; font-weight: 700; font-size: 0.9rem; display: inline-block; box-shadow: 0 10px 25px rgba(124, 58, 237, 0.1); transition: all 0.3s; cursor: pointer;">إنشاء حساب</a>`;
            navLinks.appendChild(signupItem);
        }
    }
};

// Auto-update navbar on load
document.addEventListener('DOMContentLoaded', () => {
    auth.updateNavbar();
});
