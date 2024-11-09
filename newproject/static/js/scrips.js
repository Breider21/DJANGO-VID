document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    fetch('/api/users/create/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, age: age }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.id) {
            alert('Usuario registrado exitosamente!');
        } else if (data.error) {
            alert('Error: ' + data.error);
        } else {
            alert('Error al registrar usuario: ' + JSON.stringify(data));
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});