function Init(){

    // Selectors

    var fullName = document.getElementById("fullName"),
    email = document.getElementById("email"),
    rePassword = document.getElementById("reentryPassword"),
    password = document.getElementById("password"),
    requiredBar = document.getElementById("requiredBar"),
    requiredList = document.getElementById("requiredList"),
    loginForm = document.getElementById("loginForm"),
    loginBox = document.getElementById("loginBox"),
    successBox = document.getElementById("successBox"),
    loginButton = document.getElementById("loginButton"),
    loadingButton = document.getElementById("loadingButton"),
    formEventSuccess = new Event("formEvent.success"),
    formEventError = new Event("formEvent.error"),
    filledClass = "filled",
    errorClass = "error",
    form = document.getElementById("signUpForm");

    // Functions

    function validatefullName(fullName){
        fullName.className = ""
        if(fullName.value.length > 0){
            if(!!fullName.value.trim()){
            fullName.className = filledClass;
            return true
            }else{
                fullName.className = errorClass
                return false
            }
        }else{
            fullName.className = ''
            return false
        }
    }

    function validateEmailRegex(email) {
        var mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return mail.test(String(email).toLowerCase());
    }
    
    function validateEmail(email){
        email.className = ''
        if (email.value.length > 0){ 
            if(validateEmailRegex(email.value) && !!email.value.trim()){
                email.className = filledClass;
                return true
            }else{
                email.className = errorClass;
                return false
            }
        }else{
            email.className = ''
            return false
        }
    }

    function validatePassword(password) {
        password.className = ''
        if (password.value.length > 0){ 
            
            if(!!password.value.trim()){
        
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
                var filledItens = document.querySelector('#requiredList');    
                var filledQuantity = filledItens.querySelectorAll('.filled').length;
                password.className = filledQuantity === 3 ? filledClass : errorClass;
                requiredBar.className = "filledCondition-" + filledQuantity;
                return true
            }else{
                password.className = errorClass;
                rePassword.value = '';
            }
        }else{
            requiredList.children[0].className = '';
            requiredList.children[1].className = '';
            requiredList.children[2].className = '';
            requiredBar.className = '';
            return false
        }
    }

    function confirmPassword(rePassword) {
        if(rePassword.value.length !== 0 && !!rePassword.value.trim()){
            if(rePassword.value === password.value){
                rePassword.className = filledClass;
                return true
            }else{
                rePassword.className = errorClass;
                return false
            }
        }
    }

    function validateElements() {
        if(
            validateEmail(email) &&
            validatefullName(fullName) &&
            validatePassword(password) &&
            confirmPassword(rePassword)
        ){
            document.dispatchEvent(formEventSuccess);
            return true
        }
        document.dispatchEvent(formEventError);
        return false
    }

    function sendForm(event){
        event.preventDefault();
        loginButton.style.display = "none";
        loadingButton.style.display = "block";


        var ajax = new XMLHttpRequest();
        var data = new FormData(form);
        
        ajax.open("POST", "https://python-olist-api.herokuapp.com/signup", true);
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        
        ajax.send(data);
    
        ajax.onreadystatechange = function() {
            
            if (ajax.readyState == 4 && ajax.status == 200) {
                loginForm.style.display = "none";
                successBox.style.display = "block";
                loginBox.classList.add("successBox");
            }
        }
    }

    // Events
    document.addEventListener("formEvent.success", function(){
        document.getElementById("loginButton").removeAttribute("disabled")
    }, false)
    document.addEventListener("formEvent.error", function(){
        document.getElementById("loginButton").setAttribute("disabled", true)
    }, false)

    loginForm.addEventListener("submit", function() {
        sendForm(event)
    });

    password.addEventListener('keyup', function() {
        validatePassword(this)
        confirmPassword(rePassword)
        validateElements()
    })
    rePassword.addEventListener('keyup', function(){
        confirmPassword(this)
        validateElements()
    })

    email.addEventListener('keyup', function(){
        validateEmail(this)
        validateElements()
    })

    fullName.addEventListener('keyup', function(){
        validatefullName(this)
        validateElements()
    })
    
}
Init();