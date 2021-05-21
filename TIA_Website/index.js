function registerFormCheckInputFilled() {
    if ((document.getElementById('E-address').value.length > 0) && (document.getElementById('Fname').value.length > 0)
        && (document.getElementById('Lname').value.length > 0) && (document.getElementById('pass').value.length > 0)) {
        return true;
    }
}

function addNewUser() {
    if (registerFormCheckInputFilled()) {
        const newUser = {
            firstname: document.getElementById('Fname').value,
            lastname: document.getElementById('Lname').value,
            username: document.getElementById('E-address').value,
            password: document.getElementById('pass').value
        };

        let url = 'http://localhost:4000/users/register';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(newUser)
        })
            .then((response) => {
                if (response.status == 200) {
                    alert("ok");
                    return response.json();
                } else {
                    throw `error with status ${response.status}`;
                }
            })
            .catch((error) => {
                alert(error);
            });
    }
}





