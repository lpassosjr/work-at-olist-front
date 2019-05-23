// validation Name

document.getElementById("fullName").onchange = function() { 
    this.className = ""
	if(this.value.length > 0){
        this.className = "filled-field";
	}else{
        this.className = "error-field"
	}
}

// validation Email

function validateEmail(email) {
    var mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return mail.test(String(email).toLowerCase());
}

document.getElementById("email").onchange = function() {
    this.className = ""
    if (this.value.length > 0 && validateEmail(this.value)){
        this.className = "filled-field";
    }else{
		this.className = "error-field"
	}
}

// Validate Password 

function validatePassword(password) {
    var validateMinChar = /\w{6,6}/,
        validateNumber = /\d/,
        validateUpper = /[A-Z]/;

    if (password.value.length > 0){
        if(validateMinChar.test(String(password.value))){
            document.getElementById("characters").className = "filled-list"
        }else{
            document.getElementById("characters").className = "error-list"
        }
        if(validateNumber.test(String(password.value))){
            document.getElementById("number").className = "filled-list"
        }else{
            document.getElementById("number").className = "error-list"
        }
        if(validateUpper.test(String(password.value))){
            document.getElementById("uppercase").className = "filled-list"
        }else{
            document.getElementById("uppercase").className = "error-list"
        }
        var bar = document.getElementsByClassName("filled-list").length;
        if(bar === 1){
            var bar = "one-condition"
            password.className = "error-field"
        }else if(bar === 2){
            var bar = "two-condition"
            password.className = "error-field"
        }else if(bar === 3){
            var bar = "three-condition"
            password.className = "filled-field"
        }
        document.getElementById("required-bar").className = bar;
    }else{
        password.className = "error-field";
        document.getElementById("characters").className = "error-list";
        document.getElementById("number").className = "error-list";
        document.getElementById("uppercase").className = "error-list";
        document.getElementById("required-bar").className = "";

    }
}
function confirmPassword(rePassword) {
    var passValue = document.getElementById("password").value;
    if(rePassword.value.length !== 0){
        if(rePassword.value === passValue){
            rePassword.className = "filled-field";
        }else{
            rePassword.className = "error-field";
        }
    }
}

document.getElementById("password").onchange = function() {
    var rePassword = document.getElementById("reentryPassword");
    validatePassword(this)
    confirmPassword(rePassword)
}

// Confirm Password

document.getElementById("reentryPassword").onchange = function() {
    confirmPassword(this)
}