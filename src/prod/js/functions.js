var fullName = document.getElementById("fullName"),
email = document.getElementById("email"),
rePassword = document.getElementById("reentryPassword"),
password = document.getElementById("password"),
requiredBar = document.getElementById("requiredBar"),
requiredList = document.getElementById("requiredList"),
filledClass = "filled",
errorClass = "error"

// validation Name

fullName.onchange = function() { 
    this.className = ""
	if(this.value.length > 0){
        this.className = filledClass;
	}else{
        this.className = errorClass
	}
}

// validation Email

function validateEmail(email) {
    var mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return mail.test(String(email).toLowerCase());
}

email.onchange = function() {
    this.className = ""
    if (this.value.length > 0 && validateEmail(this.value)){
        this.className = filledClass;
    }else{
		this.className = errorClass
	}
}

// Validate Password 

function validatePassword(password) {

    if (password.value.length > 0){
 
        var rules = {
            number: /\d/,
            characters: /\w{6,6}/,
            uppercase: /[A-Z]/,
        };
        for (var rule in rules) {
            var regex = rules[rule]
              document.getElementById(rule).className = (regex.test(password.value)
            ? filledClass
            : errorClass
        )}

        var bar = document.getElementsByClassName(filledClass).length;
        if(bar === 1){
            var bar = "oneCondition"
            password.className = errorClass
        }else if(bar === 2){
            var bar = "twoCondition"
            password.className = errorClass
        }else if(bar === 3){
            var bar = "threeCondition"
            password.className = filledClass
        }
        requiredBar.className = bar;
    }else{
        requiredList.children[0].className = errorClass;
        requiredList.children[1].className = errorClass;
        requiredList.children[2].className = errorClass;
        requiredBar.className = "";
        password.className = errorClass;
        rePassword.value = "";
        rePassword.className = errorClass;

    }
}

function confirmPassword(rePassword) {
    if(rePassword.value.length !== 0){
        if(rePassword.value === password.value){
            rePassword.className = filledClass;
        }else{
            rePassword.className = errorClass;
        }
    }
}

password.onchange = function() {
    validatePassword(this)
    confirmPassword(rePassword)
}

rePassword.onchange = function() {
    confirmPassword(this)
}