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





//------------- Convert all inputs to Camelcase -----------------------

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.substr(1,input.length);
    
    

}



//------------- NOS MOVEMOS POR TODOS LOS ELEMENTOS DEL ARRAY DE LOS INPUTS----------------------

// Check inputs are not empty

function checkRequired(inputArr) {

    inputArr.forEach(function (input) {

        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);
        }
        
         else {
            showSuccess(input);
        } 
        
       
    });
}



// Check  length

function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} `)
    }else{

    }
}


// Check email

function checkEmail(input) {

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input, `Email is not valid`)
    }
    //si coincide la función devuelve true y sino devuelve false
}


// Check passwords match

function checkPasswordMatch(input1,input2){

    if(input1.value !== input2.value){
        showError(input2, `Passwords do not match`)
    } else{
        showSuccess(input)
    }
}







//---------------------EVENT LISTENER-------------------------

// Cuando le damos al botón submit, que se desencadene un evento

form.addEventListener("submit", function (e) {

    e.preventDefault(); // para que no se envíe por defecto

    checkRequired([username, email, password, password2]);

    checkLength(username,3,15);

    checkLength(password,6,25);

    checkEmail(email)

    checkPasswordMatch(password,password2);



})











