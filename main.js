//Cojemos todos los elementos que necesitamos del dom

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


//---------------------FUNCIONES-------------------------

//------------ Show input error message------------------------
function showError(input, message, ) {

    //seleccionamos el input
    const formControl = input.parentElement; // cogemos el elemento padre del input porque es ahí donde hay que añadir la clase
    formControl.className = "form-control error";

    //seleccionamos la etiqueta small
    const formControlSmall = formControl.querySelector("small");
    formControlSmall.innerHTML = message;

}

//------------- Hide input error message -----------------------
function showSuccess(input) {

    const formControl2 = input.parentElement;
    formControl2.className = "form-control success";

}

//------------- Check emailm is valid-----------------------

function isValidEmail(email) {

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    //si coincide la función devuelve true y sino devuelve false
}


//---------------------EVENT LISTENER-------------------------

// Cuando le damos al botón submit, que se desencadene un evento

form.addEventListener("submit", function (e) {

    e.preventDefault(); // para que no se envíe por defecto


    // validar username
    if (username.value === "") {

        showError(username, "Username is required")

    } else {

        showSuccess(username);
    }

    // validar email
    if (email.value === "") {

        showError(email, "Email is required")
    } else if (isValidEmail(email.value) == false) {
        showError(email, "Email is not valid")
    } else {

        showSuccess(email);
    }

    // validar password
    if (password.value === "") {

        showError(password, "Password is required")

    } else {

        showSuccess(password);
    }

    // validar password2
    if (password2.value === "") {

        showError(password2, "Password2 is required")

    } else {

        showSuccess(password2);
    }



})