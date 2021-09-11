showMsg = (value , element , color ,errMsg)=> {
    if(errMsg == undefined){
    var errMsg = document.querySelector('.errMsg');
    }
        errMsg.innerHTML = value;
    setTimeout(() => {
        errMsg.innerHTML = "&nbsp;";
        errMsg.style.color = "";
    }, 2500);

    if(element != undefined){
        element.style.borderColor = 'red';
        element.focus();
        element.onkeyup = ()=> {element.style.borderColor = ''};
    }
    if(color != undefined){
        color = '#0070c7'
        errMsg.style.color = color;
    }
};
// Capital First word Function
function capital(val){
    firstChar = val.charAt(0).toLocaleUpperCase()
    otherChars = val.slice(1);
    var capitalizedName = firstChar + otherChars
    return capitalizedName
};
// Splits first name & capitalized
function  firstName(fullName) {
    if(fullName.indexOf(" ") != -1){
        exactName = fullName.slice(0 , fullName.indexOf(" "))
        exactName = capital(exactName);
    }else{
        exactName = fullName.value;
    }
    return exactName
}
// Email Validation 
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
// highlights Element & scrollIntoView
function  heighlightElement(element) {
    setTimeout(() => {
        element.classList.toggle('teamBoxHighlight')
    }, 300);
    setTimeout(() => {
        element.classList.toggle('teamBoxHighlight')
    }, 1000);
    element.scrollIntoView({
        block : 'center'
    });
}


//                  ---Important functions Used---



// Getting input values;

    // Form
var inputForm = document.querySelector('.inputForm');

    // Heading
var heading = document.querySelector('.inputHeading');

    // Registor form
var registorForm = document.querySelector('.registorForm');
var fullName = document.querySelector('.userName');
var regEmail = document.querySelector('.regEmail');
var regPass = document.querySelector('.regPass');
var signupBtn = document.querySelector('.signupBtn');

    // Login form
var loginForm = document.querySelector('.loginForm');
var email = document.querySelector('.email');
var password = document.querySelector('.password');
var loginBtn = document.querySelector('.loginBtn');

    // onclick Links to show form
document.querySelectorAll('.link')[0].onclick = ()=>{showLoginForm()};
document.querySelectorAll('.link')[1].onclick = ()=>{showRegForm()};

function showLoginForm(){
    heading.innerHTML = "Login";
    registorForm.style.display = "none";
    loginForm.style.display = "flex";
    email.focus();
};
function showRegForm(){
    heading.innerHTML = "Registor your account";
    loginForm.style.display = "none";
    registorForm.style.display = "flex";
    fullName.focus();
};

function clearInputValues() {
    registorForm.value = "";
    fullName.value = "";
    regEmail.value = "";
    regPass.value = "";
    signupBtn.value = "";
    loginForm.value = "";
    email.value = "";
    password.value = "";
    loginBtn.value = "";
};

signupBtn.onclick = ()=>{signUp()}
var arr = [
    {
        name :'Tahir shareef' ,
        email : 'tahirtv.islam@gmail.com' ,
        password : '1234',
        id : 1631346705559
    },
];

// stringify and set into local storage
var stringArr = JSON.stringify(arr);
if(localStorage.arr == undefined){
    localStorage.setItem('arr' , stringArr);
};

function pushIntoArr(value) {

    getArr = JSON.parse(localStorage.arr);
    getArr.push(value);
    getArr = JSON.stringify(getArr);
    localStorage.setItem('arr' , getArr);

};
// If account is not register , show registor Page
// 2 is putting bcz i have 1 account above so < will be 1
if(JSON.parse(localStorage.arr).length < 2){
    showRegForm();
}else{
    showLoginForm();
};

function signUp(){

    // fullName = fullName.value;
    // regEmail = regEmail.value;
    // regPass = regPass.value;
    var arr = JSON.parse(localStorage.arr);
    var emailMatched = false;
    for(i=0; i<arr.length; i++){
        if((arr[i].email == regEmail.value)){
            emailMatched = true;
            break 
        }
        
    }

    if(fullName.value.indexOf(" ") == -1 || fullName.value.slice(fullName.value.indexOf(" ")+1) == ""){
        showMsg('Full name is required' , fullName)
    }else if(regEmail.value == ""){
        showMsg('Email is required' , regEmail)
    }else if(regPass.value == ""){
        showMsg('Password is required' , regPass)
    }else if(!validateEmail(regEmail.value)){
        showMsg('Please enter a valid Email' , regEmail)
    }else if(emailMatched){
        showMsg('Email already exists' , regEmail);
    }

    // If values passed from all Validations then !
    else{
        createNewAccount();
    };

    // If all values are empty
    if(fullName.value == "" && regPass.value == "" && regEmail.value == ""){
        showMsg('All fields are required*')
    };

    function createNewAccount() {

        validName = capital(fullName.value);
        validEmail = regEmail.value;
        validPass = regPass.value;

        pushIntoArr({
            name : validName , 
            email : validEmail ,
            password : validPass,
            id : new Date().getTime()
        })
        console.log(arr)
        showMsg('Account Created Successfully' , null , "green")
        setTimeout(()=>{
            showLoginForm();
            showMsg('Login to your Account' , null , "green")
        },1000);
    }
};
function logIn(){
    var arr = JSON.parse(localStorage.arr);

    for(var i=0; i<arr.length; i++){
        
        let arr = JSON.parse(localStorage.arr);

        var savedName =  arr[i].name;
        var savedEmail =  arr[i].email;
        var savedPass =  arr[i].password;

        // Validations
        if(email.value == ""){
            showMsg('Email is required' , email)
        }else if(password.value == ""){
            showMsg('Password is required' , password)
        }
        if(email.value == "" && password.value == ""){
            showMsg('All fields are required*')
        }
        // After passing all Validations
        

        if(savedEmail == email.value && savedPass == password.value){
            showMsg(`Your account has been logged in` , null , 'green')
            localStorage.setItem('i' , i);
            localStorage.setItem('login' , true)
            setTimeout(() => {
                checkIfLogin();
                distributeDivs();
            }, 1500);
            break;
        }else if(email.value != "" && password.value != ""){
            showMsg('Check your User name or password');
        };

    };
};
// Check if Login then go to page
function checkIfLogin() {
    // var mainPage = document.querySelector('.mainPage');
if(localStorage.login != undefined){
    

    if(JSON.parse(localStorage.login) && localStorage.i != undefined){
        let i = JSON.parse(localStorage.i);
        let arr = JSON.parse(localStorage.arr);
        console.log('your Acoount have logged in' , arr[i].name);
        console.log(arr[i])
        inputForm.style.display = 'none'
        currentAccountEmail = arr[i].email 
        
        console.log ("you've logged in " + arr[i].name + ' Email : ' + arr[i].email);
        window.location.href = 'index.html'
    }else{
        inputForm.style.display = 'flex';
    };

}else{
    inputForm.style.display = 'flex';
};
};
checkIfLogin();