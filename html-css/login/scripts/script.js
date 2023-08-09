//Direcionamento de páginas...
function ToCreateAccount(){
    window.location.href = "https://mtptrindade.github.io/Guanabas/html-css/login/src/create-account.html";
}

function ToLogin(){
    window.location.href = "https://mtptrindade.github.io/Guanabas/html-css/login/src/login.html";   
}

//Validações?
function Validacao(input){
    if (Number(input.length) == 0){
        return true
    } else {
        return false
    }
}

//Alerts por falta de código....
function CreateAccount(){

    var name = document.querySelector('input#name-id')
    name = name.value
    var nameSpan = document.querySelector('span#name-span')

    var email = document.querySelector('input#email-id')
    email = email.value
    var emailSpan = document.querySelector('span#email-span')

    var birth = document.querySelector('input#birth-id')
    birth = birth.value
    var birthSpan = document.querySelector('span#birth-span')

    var password = document.querySelector('input#password-id')
    password = password.value
    var passwordSpan = document.querySelector('span#password-span')

    if (Validacao(name) == true || Validacao(password) == true){
        
        if (Validacao(name)){ 
            nameSpan.innerHTML = `Invalid name! Please enter a valid name...`
            nameSpan.style.display = `block`
    
        } else {
            nameSpan.style.display = `none`
        }

        if (Validacao(email)){ 
            emailSpan.innerHTML = `Invalid email! Please enter a valid email...`
            emailSpan.style.display = `block`
    
        } else {
            emailSpan.style.display = `none`
        }

        if (Validacao(birth)){ 
            birthSpan.innerHTML = `Invalid date! Please enter a valid date...`
            birthSpan.style.display = `block`
    
        } else {
            birthSpan.style.display = `none`
        }
        
        if (Validacao(password)){ 
            passwordSpan.innerHTML = `Invalid password! Please enter a valid password...`
            passwordSpan.style.display = `block`
    
        } else {
            passwordSpan.style.display = `none`
        }
    
    } else {
        nameSpan.style.display = `none`
        emailSpan.style.display = `none`
        birthSpan.style.display = `none`
        passwordSpan.style.display = `none`

        setTimeout(function() {
            Alert(`Your account has been successfully created.\n
            Or would it have been, if that was a functional system... 😅`)
          }, 100)

        ResetForm(name, 'name-id')
        ResetForm(email, 'email-id')
        ResetForm(birth, 'birth-id')
        ResetForm(password, 'password-id')
        
    }

}

function Login(){
    var user = document.querySelector('input#user-id')
    user = user.value
    var password = document.querySelector('input#password-id')
    password = password.value

    var userSpan = document.querySelector('span#user-span')
    var passwordSpan = document.querySelector('span#password-span')

    if (Validacao(user) == true || Validacao(password) == true){
        
        if (Validacao(user)){ 
            userSpan.innerHTML = `Invalid user! Please check if your user is correct and try again...`
            userSpan.style.display = `block`
    
        } else {
            userSpan.style.display = `none`
        }
        
        if (Validacao(password)){ 
            passwordSpan.innerHTML = `Invalid password! Please check if your password is correct and try again...`
            passwordSpan.style.display = `block`
    
        } else {
            passwordSpan.style.display = `none`
        }
    
    } else {
        userSpan.style.display = `none`
        passwordSpan.style.display = `none`


        setTimeout(function() {
            Alert(`Okay, you're logged in!\n  
            I haven't done the rest of the code on this page yet... 😅\n 
            That's all folks!`)
          }, 100)
        

        ResetForm(user, 'user-id')
        ResetForm(password, 'password-id')
        
    }
    
}

function ForgotPassword(){
    window.alert(`Well, if you don't remember your own password, i won't remember, right... 🤷‍♂️`)
}

//Funcionalidades
function ResetForm(input, id){
    var input = document.querySelector('input#' + id)

    input.value = ''
    input.innerHTML = ''
}

function Alert(text){
    window.alert(text)
}


