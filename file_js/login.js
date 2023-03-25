const tombol = document.getElementById('login')
tombol.onclick = login

function login(e){
    e.preventDefault()
    const email = document.getElementById('log_email').value;
    const password = document.getElementById('log_pass').value;

    const users = JSON.parse(localStorage.getItem('Users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      alert(`Halo ${user.name}, Anda berhasil login`);
      window.location.href = '../file_html/home.html';
    } else {
      alert('Username atau password anda salah');
      document.getElementById('form-login').reset();
    }
}