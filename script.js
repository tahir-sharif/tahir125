//                  Page Information

// Getting Form Values

// Login info
var email = document.querySelector('.email');
var password = document.querySelector('.password');

// signUp info
var uName = document.querySelector('.name');
var regEmail = document.querySelector('.regEmail');
var regPass = document.querySelector('.regPass');

//        FireBase

const firebaseConfig = {
  apiKey: "AIzaSyAFEIMiMQcE8cB_Ms7dJYA2F4U2Mw4ddGQ",
  authDomain: "tahir-ff29f.firebaseapp.com",
  databaseURL: "https://tahir-ff29f-default-rtdb.firebaseio.com",
  projectId: "tahir-ff29f",
  storageBucket: "tahir-ff29f.appspot.com",
  messagingSenderId: "660400590737",
  appId: "1:660400590737:web:c32bef823b2541a39a5430",
  measurementId: "G-8KFK8LSCV0"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

// AUTHENTICATION

function login(){
    var loginEmail = email.value;
    var loginPassword = password.value;

if(loginEmail != '' && loginPassword != ''){
    
    auth.signInWithEmailAndPassword(loginEmail , loginPassword)
    .catch((err)=>{
        showErrMsg(err.message)
    })

}else{
    showErrMsg('All Fields are Required !')
}
};

function signup(){
    var userName = capitalFirstLetter(uName.value);
    var signUpEmail = regEmail.value;
    var signUpPass = regPass.value;

if(userName.value!='' && signUpEmail.value!='' && signUpPass.value!=''){

    auth.createUserWithEmailAndPassword(signUpEmail , signUpPass)
    .then(()=>{
        firestore.collection('usersData').doc(auth.currentUser.uid).set({
            name : userName,
        })
    })
    .catch((err)=>{
        showErrMsg(err.message)
    })

}else{
    showErrMsg('All Fields are Required !')
}
}

auth.onAuthStateChanged((user)=>{
    // document.querySelector('.loader').style.display = 'none'
    if(user){
        var userId = auth.currentUser.uid;

        firestore.collection('usersData').doc(userId).get().then((querySnapshot)=>{
            var userData = querySnapshot.data();
            document.querySelector('.wlcome').innerHTML += ' ' + userData.name;
            console.log(userData)
        })
        showMainPage();
    }else{
        showAuthPage();
    }
})


//       HELPERS FUNCTIONS

// Capital First Letter
function capitalFirstLetter(value){
    if(value != undefined){
        var firstChar = value.slice(0,1);
        var otherChars = value.slice(1)

        firstChar = firstChar.toUpperCase();
        fullName = firstChar + otherChars;
        return fullName;
    }
}

// Show & hide error message on form
function showErrMsg(msg){
    var errMsg = document.querySelector('.errMsg');
    errMsg.innerHTML = msg;
    setTimeout(()=>{
        errMsg.innerHTML = '&nbsp;'
    },2500)
};

// Toggle between SignUp & Login Forms
var formHeding = document.querySelector('.formHeding');
var loginForm = document.querySelector('.loginForm');
var regForm = document.querySelector('.regForm');
function showRegForm(){
    loginForm.style.display = 'none'
    regForm.style.display = 'flex'
    formHeding.innerText = 'Resgistor'
}
function showLoginForm(){
    regForm.style.display = 'none'
    loginForm.style.display = 'flex'
    formHeding.innerText = 'Login'
}

// Toggle between auth & main page
var inputForm = document.querySelector('.inputForm')
var mnPage = document.querySelector('.mnPage')
function showAuthPage() {
    inputForm.style.display = 'block'
    mnPage.style.display = 'none'
}
function showMainPage() {
    inputForm.style.display = 'none'
    mnPage.style.display = 'block'
}


//        POP BALLOONS JAVASCRIPT

colors = ['yellow' , 'black' , 'red' , 'blue' , 'green']
var gamePopUp = document.querySelector('.gamePopUp');
var popTxt = document.querySelector('.popTxt');
var lives = 3;
var a;
var color = 'yellow';
var currentColor = 0;

// here Main game functions
//   pop ballon & decrease lives if wrong
function popblln(id , event) {
    
    var ballon = event.target
    var blnChild = ballon.childNodes[0];
    if(id != 'popped'){

            ballon.classList.add('poppedBalloon')
            blnChild.style.color = id;
            blnChild.innerText = 'POP !'
            a = event.target;
            event.target.id = 'popped'
        if(id == color){
            currentColor = currentColor - 1;
            if(currentColor == 0){
                document.querySelector('.gameOver').style.display = 'none'
                document.querySelector('.gameWin').style.display = 'block'
                gamePopUp.style.display = 'flex'
            }
        }else{
            console.log('not a correct colour' , id)
            decLives();
        }
        if(currentLevel > 3){
            setTimeout(()=>{
                var blColor = generateColor();
                ballon.classList.remove('poppedBalloon');
                ballon.classList.remove('black');
                ballon.classList.remove('blue');
                ballon.classList.remove('red');
                ballon.classList.remove('yellow');
                ballon.classList.remove('green');
                ballon.id = blColor;
                ballon.classList.add(blColor)
                blnChild.innerText =''
                if(blColor == color){
                    currentColor = currentColor + 1;
                }
            } , 1200)
        }
    }
}
function decLives() {
    if(lives > 1){
    lives = lives-1
    document.querySelector('.lives').innerHTML = 'Lives : ' + lives;
    }else{
        lives = lives-1
        document.querySelector('.lives').innerHTML = 'Lives : ' + lives;  

        document.querySelector('.gameOver').style.display = 'block'
        document.querySelector('.gameWin').style.display = 'none'

        gamePopUp.style.display = 'flex'
    }
};

var lvlTxt = document.querySelector('.lvl');
var currentLevel = 1;
// Levels Of the Game
function level1() {
    currentLevel = 1
    lvlTxt.innerHTML = 'Level 1'
    mnBalloons(15 , 20);
}
level1()
function level2() {
    currentLevel = 2
    lvlTxt.innerHTML = 'Level 2'
    mnBalloons(20 , 11);
}
// level2()

function level3() {
    currentLevel = 3
    lvlTxt.innerHTML = 'Level 3'
    mnBalloons(23 , 8);
}
// level3()

function level4() {
    currentLevel = 4
    lvlTxt.innerHTML = 'Level 4'
    mnBalloons(25 , 8);
}
// level4();
function level5() {
    currentLevel = 5
    lvlTxt.innerHTML = 'Level 5'
    mnBalloons(29 , 6);
}
// level5()
function level6() {
    currentLevel = 6
    lvlTxt.innerHTML = 'Level 6'
    mnBalloons(30 , 7);
    var c = document.querySelectorAll('.balloon')
    setInterval(()=>{

        var rndmNm = Math.ceil(Math.random() * c.length)
        var b = c[rndmNm]

        var blColor = generateColor();
        b.classList.remove('poppedBalloon');
        b.classList.remove('black');
        b.classList.remove('blue');
        b.classList.remove('red');
        b.classList.remove('yellow');
        b.classList.remove('green');
        b.id = blColor;
        b.classList.add(blColor)
    } , 2500)
}
// level6();
function level7() {
    currentLevel = 7
    lvlTxt.innerHTML = 'Level 7'
    mnBalloons(31 , 7);
}
// level7();
function level7() {
    currentLevel = 7
    lvlTxt.innerHTML = 'Level 7'
    mnBalloons(32 , 5);
}
level7()
function level8() {
    currentLevel = 7
    lvlTxt.innerHTML = 'Level 7'
    mnBalloons(32 , 5);
}
level8()
// show color on page and run generate ballon funcion
function mnBalloons(bllnsQnty , margin) {
    currentColor = 0
    color = generateColor();
    popClrBln = document.querySelector('.popClrBln');
    popClrBln.innerHTML = `Pop ${color} Balloons`;
    generateBalloons(bllnsQnty , margin);
};

function generateColor(){
    var randomColor =  colors[Math.floor(Math.random() * 5 )];
    return randomColor;
};
function generateBalloons(bllnsQnty , margin) {

    document.querySelector('.mnBalloons').innerHTML = '';
    
        for(var i = 0; i< bllnsQnty; i++){
            appendBalloon(margin);
        };


};

function appendBalloon(margin){

    var rndmClr = generateColor();
    if(rndmClr == color){
        currentColor = currentColor + 1
    }
    var id = rndmClr;
    var blnParent = document.querySelector('.mnBalloons');
    var blnDiv = `<div class="balloon ${rndmClr}" style="margin:${margin}px" id="${id}" onmouseover="popblln(this.id , event)"><span></span></div>`

    blnParent.innerHTML += blnDiv;
}


//      Retry
function playAgain(){
    ntHover = document.querySelector('.ntHover');
    ntHover.style.display = 'flex'
    currentColor = 0;
    lives = 3
    document.querySelector('.lives').innerHTML = 'Lives : ' + lives;
    level1();
    gamePopUp.style.display = 'none';

    setTimeout(() => {
        ntHover.style.display = 'none'
    }, 1000);
}

function changeLevel() {
    ntHover = document.querySelector('.ntHover');
    gamePopUp.style.display = 'none'
    ntHover.style.display = 'flex'
    lives = 3;
    document.querySelector('.lives').innerText = lives;

    setTimeout(() => {
        ntHover.style.display = 'none'
    }, 1000);

    if(currentLevel == 10){
        level1()
    }
    else if(currentLevel == 9){
        level10()
    }else if(currentLevel == 8){
        level9()
    }else if(currentLevel == 7){
        level8()
    }else if(currentLevel == 6){
        level7()
    }else if(currentLevel == 5){
        level6()
    }else if(currentLevel == 4){
        level5()
    }else if(currentLevel == 3){
        level4()
    }else if(currentLevel == 2){
        level3()
    }else if(currentLevel == 1){
        level2()
    }
}