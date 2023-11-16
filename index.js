var password = "290402";

function passcheck(){
    var input = document.getElementById('passform').value;

    while (input !== password) {
        alert('Wrong Password');
        input = prompt('Enter the password again:');
    }
    alert('Correct!');
    window.location.href = 'Halaman2.html';
    return true;
}