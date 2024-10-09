document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const loginData = {
        username: username,
        password: password
    };

    axios.post('https://inventaris-app-backend.vercel.app/api/login', loginData)
        .then(function(response) {
            if (response.data.success) {
               
                localStorage.setItem('token', response.data.token);

                // Arahkan ke halaman dashboard
                window.location.href = 'index.html';
            } else {
                // Tampilkan pesan error jika login gagal
                alert('Login gagal! Username atau password salah.');
            }
        })
        .catch(function(error) {
            console.error('Error saat login:', error);
            alert('Terjadi kesalahan saat mencoba login.');
        });
});
