document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Username dan password statis untuk simulasi
    const correctUsername = 'admin';
    const correctPassword = 'admin123';

    if (username === correctUsername && password === correctPassword) {
        // Login berhasil, arahkan ke dashboard
        window.location.href = 'index.html';
    } else {
        // Tampilkan pesan error jika login gagal
        alert('Login gagal! Username atau password salah.');
    }
});
