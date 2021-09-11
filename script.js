//                  ---Important functions Used---

// Display Error Message Function
// localStorage.clear()


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
// network check
function netCheck(){
    if(window.navigator.onLine){
        setTimeout(() => {
            document.querySelector('.fix').style.display = 'none'
            document.querySelector('.AllContainer').style.display = 'block'
        }, 2000);
        document.querySelector('.backOnline').style.display = 'block'

    }else{
        document.querySelector('.fix').style.display = 'flex'
        document.querySelector('.AllContainer').style.display = 'none'
        document.querySelector('.backOnline').style.display = 'none'
    }
};
setInterval(() => {
    netCheck();
}, 3500);
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

function checkIfLogin() {
    var mainPage = document.querySelector('.mainPage');
if(localStorage.login != undefined){
    

    if(JSON.parse(localStorage.login) && localStorage.i != undefined){
        let i = JSON.parse(localStorage.i);
        let arr = JSON.parse(localStorage.arr);
        console.log('your Acoount have logged in' , arr[i].name);
        console.log(arr[i])
        mainPage.style.display = 'flex'
        currentAccountEmail = arr[i].email;
        currentAccountId= arr[i].id;

        console.log ("you've logged in " + arr[i].name + ' Email : ' + arr[i].email);
        accountInfo(arr[i].name , arr[i].email)
    }else{
        window.location.href = 'login.html'
    };

}else{
    mainPage.style.display = 'none'
    window.location.href = 'login.html'

};
};
checkIfLogin();

// Logout Function

function logout(){
    localStorage.login = false;
    localStorage.i = undefined;
    toggleAccountbox();
    setTimeout(() => {
        checkIfLogin();
    }, 500);
};

// Account Information for Box

accntBtn = document.querySelector('.acntBtn')
acntInfo = document.querySelector('.acntInfo');
acntOverlay = document.querySelector('.acntOverlay');

accntBtn.onclick = ()=> {
    toggleAccountbox();
};
acntOverlay.onclick = ()=> {
    toggleAccountbox();
};

function toggleAccountbox() {
    acntInfo.classList.toggle('displayToggle');
    acntOverlay.classList.toggle('displayToggle');
};

function accountInfo(aName , aEmail) {
    document.querySelector('.accntName').innerHTML = aName;
    document.querySelector('.accntEmail').innerHTML = aEmail;
    var firstLetter = aName.slice(0,1).toLocaleUpperCase();
    accntBtn = document.querySelector('.acntBtn').innerHTML = firstLetter ;

};

console.log(localStorage)
console.log(JSON.parse(localStorage.arr))



//                  <------ Java script for Teams ------>


function teamsHeading(hd){
    var teamHeadingTxt = document.querySelector('.teamHeadingTxt');
    teamHeadingTxt.innerHTML = hd;
}
teamsHeading('Teams');

// Show and Hide Form & get Values

// Main Elements
var teamsContainer = document.querySelector('.teams');
var addBtn = document.querySelector('.addBtn');
var newTeamBox = document.querySelector('.createNewTeamBox');
var teamBoxBg = document.querySelector('.createNewTeamBoxBack');

// Create Or Cancel Btn 
var cancelTeamBtn = document.querySelector('.cancelCreateTeam');
var createTeamBtn = document.querySelector('.createTeamBtn');

// for Form Values
var inputTeamName = document.querySelector('.teamName');
var teamCategory = document.querySelector('.teamCategory');
var members = document.querySelector('.members');

// Show box function
function showCreateTeamBox () {
    newTeamBox.style.display = 'flex';
    teamBoxBg.style.display = 'block'
    addBtn.style.display = 'none';
    teamsContainer.style.overflow = 'hidden';
    teamsContainer.style.scrollBehavior = 'unset'
    teamsContainer.scroll(0 , 0);
    teamsContainer.style.scrollBehavior = 'smooth'
};
// Hide Box function
function hideTeamBox() {
    newTeamBox.style.display = 'none';
    addBtn.style.display = 'flex';
    teamBoxBg.style.display = 'none'
    teamsContainer.style.overflow = 'auto'
    // Empty Field box
    inputTeamName.value = "";
    members.value = "";
};

// Buttons to perform actions
addBtn.onclick = () => {
    showCreateTeamBox();
}
cancelTeamBtn.onclick = ()=> {
    hideTeamBox();
};

// Teams Data will store here
// Owner section
var teamOwnerBox = document.querySelector('.teamOwnerBox .mnTeams');

// Other section
var teamPartBox = document.querySelector('.teamPartBox .mnTeams');

// show Data inside Boxes
var div = document.createElement('div');
var h2 = document.createElement('h2');
var p = document.createElement('p');

// Teams Data
var teamsData = [
    {
        name : 'Owner',
        members : 'you , me & 2 others',
        category : 'Maintenance',
        owner : 'tahirtv.islam@gmail.com',
        id : new Date().getTime()
    },
    {
        name : 'Part',
        members : 'you , me & 2 others',
        category : 'Maintenance',
        owner : 'tahirtv.islam@gmail.com',
        id : new Date().getTime()
    }
];

// Save & Get Data into LocalStorage functions
function saveTeamData(){
    var stringifyTeamsData = JSON.stringify(teamsData);
    localStorage.setItem('teamsData' , stringifyTeamsData);
};

var ArrT = ['one' , 'two' , 'three' , 'four']

function getTeamData(){
    var parseTeamsData = JSON.parse(localStorage.getItem('teamsData'));
    return parseTeamsData
}
// if undefined then save team data
if(localStorage.teamsData == undefined){
    saveTeamData();
    teamsData = getTeamData();
}else{
    teamsData = getTeamData();
}
// New Object Constructor
function TeamObjectCreate(name , members , category , owner) {
    this.name = name;
    this.members = members;
    this.category = category;
    this.owner = owner;
    this.id = new Date().getTime();
};
// function to Contruct Team
function constructAndPush(name , members , category , owner){
    var newTeam = new TeamObjectCreate(name , members , category , owner);
    teamsData.push(newTeam);
    console.log(newTeam);
}

// Here Main function to create a team

function createNewTeam() {
    
    var errMsgT = document.querySelector('.errMsgT');
    inputTeamNameValue = inputTeamName.value;
    teamCategoryValue = teamCategory.value;
    membersValue = members.value;
    
    if(inputTeamNameValue == "" || teamCategoryValue == "Category" || membersValue == ""){
        showMsg('All fields are required' , undefined , undefined , errMsgT);
               
    }else if(membersValue.indexOf('  ') != -1){
        showMsg('Double spaces are not allowed !' , undefined , undefined , errMsgT);

    }else if(!membersOutput(membersValue)){

        showMsg('Please Use Comma for Members' , undefined , undefined , errMsgT);

    }else{
        membersValue = currentAccountEmail + ' , ' + membersValue

        constructAndPush(capital(inputTeamNameValue) , membersValue , 'category' , currentAccountEmail)
        saveTeamData();
        distributeDivs();
        scrollintoNewDiv();
        hideTeamBox();

    };

};
function scrollintoNewDiv(){
    var teamOwnerBox = document.querySelectorAll('.teamOwnerBox .mnTeams .teamBox');
    heighlightElement( (teamOwnerBox)[teamOwnerBox.length-1] );
}
createTeamBtn.onclick = ()=> {
    createNewTeam();
};

// show div Team in owner section
function createDivInOwner(teamName , members , id){

    members = membersOutput(members)
    teamBoxDiv =
    `<div id="${id}" class="teamBox" onclick="unConfirmToRealData(); checkIfOwner(this.id)">
        <h2>${teamName}</h2>
        <p> <span>Members : </span> ${returnMembersCount(members)}</p>
    </div>`

    teamOwnerBox.innerHTML += teamBoxDiv;
};

// show div Team in other section
function createDivInOther(teamName , members , id){

    members = membersOutput(members)
    teamBoxDiv =
    `<div id="${id}" class="teamBox" onclick="unConfirmToRealData(); checkIfOwner(this.id)">
        <h2>${teamName}</h2>
        <p> <span>Members : </span> ${returnMembersCount(members)} </p>
    </div>`
    
    teamPartBox.innerHTML += teamBoxDiv;
    
};

// Check Length & Owner then render into page,
function distributeDivs(){
    
    var ownerTeamsCount = 0;
    var otherTeamsCount = 0;

    teamOwnerBox.innerHTML = '';
    teamPartBox.innerHTML = '';

for(var i=0; i<teamsData.length; i++){

    if(teamsData[i].owner == currentAccountEmail){

        createDivInOwner(teamsData[i].name , teamsData[i].members , teamsData[i].id);
        ownerTeamsCount++;
        
    }else{
        var teamsMembers = teamsData[i].members;
        teamsMembers = teamsMembers.split(',');

        for(k=0; k<teamsMembers.length; k++){

            teamsMembers[k] = teamsMembers[k].replace(' ' , '')
            teamsMembers[k] = teamsMembers[k].replace(' ' , '')

            if(teamsMembers[k] == currentAccountEmail){
                createDivInOther(teamsData[i].name , teamsData[i].members , teamsData[i].id);
                otherTeamsCount++;
            }
        }

    };
    document.querySelector('.ownerCount').innerHTML = ' (' + ownerTeamsCount + ')'
    document.querySelector('.partCount').innerHTML = ' (' + otherTeamsCount + ')'

};
};

if(localStorage.login != undefined){
    if(JSON.parse(localStorage.login)){
        distributeDivs();
    };
}
function getFirstName(val){
    // val = val.name;
    console.log(val)
    val = firstName(val);
    return val;
};

// For Members

function membersOutput(membersArr) {

    arr = JSON.parse(localStorage.arr)
    membersInArray = membersArr;
    membersArr = commaToArr(membersArr)
    // To remove spaces & show name instead of email
    for(i=0; i<membersInArray.length; i++){
        for(j=0; j<arr.length; j++) {
            if(membersArr[i] == currentAccountEmail){
                membersArr[i] = 'you';
                var copied;
                copied = membersArr[0];
                membersArr[0] = 'you'
                membersArr[i] = copied
                
            }
            if(membersArr[i] == arr[j].email){
                membersArr[i] = firstName(arr[j].name)
            }
        }
    }   
    return membersArr   
};

function commaToArr(membersArr){
    arr = JSON.parse(localStorage.arr)
    // For more than one member
    if(membersArr.indexOf(' ') != -1){
        if(membersArr.indexOf(',') != -1){
            membersArr = membersArr.split(',')
            membersInArray = membersArr;
        }else{
            return false
        };
    // For single Member
    }else if(membersArr.indexOf(' ') == -1){

        membersArray = [];
        membersArray.push(membersArr)
        membersArr = membersArray;
        membersArr = membersArr;
    };
    for(i=0; i<membersArr.length; i++){
        membersArr[i] =  membersArr[i].replace(' ' , '')
        membersArr[i] =  membersArr[i].replace(' ' , '')
    }
    return membersInArray
}

function returnMembersCount(membersArr) {
    
    // According to conditions , write English !
    
        if(membersArr.length<2){
            membersVal = membersArr[0]
        }
        else if(membersArr.length<3){
            membersVal = membersArr[0] + ' & ' + membersArr[1]
        }
        else if(membersArr.length<4){
            membersVal = membersArr[0] + ' , ' + membersArr[1] + ' & ' + membersArr[2]
        }
        else if(membersArr.length<=4){
            membersVal = membersArr[0] + ' , ' + membersArr[1] + ' , ' + membersArr[2] + ' & '+ (membersArr.length-3)+ ' other'
        }else if(membersArr.length == undefined){
            membersVal = 'This team has no members'
        }
        else{
            membersVal = membersArr[0] + ' , ' + membersArr[1] + ' , ' + membersArr[2] + ' & '+ (membersArr.length-3)+ ' others'
        };
        return membersVal
};
// Page Change

var mnTeamsPage = document.querySelector('.AllteamsContainer');
var ownerView = document.querySelector('.ownerView');
var memberView = document.querySelector('.memberView');
var reportsHeading = document.querySelector('.heading1');
var settingsHeading = document.querySelector('.heading2');
var reportsPage = document.querySelector('.reportsPage');
var settingsPage = document.querySelector('.settingsPage');
var membersForm = document.querySelector('.membersForm');
var membersDate = document.querySelector('.membersDate');


reportsHeading.addEventListener('click' , ()=>{
    showReportsPage();
})
settingsHeading.addEventListener('click' , ()=>{
    showSettingsPage();
})
function showTeamsPage(){
    mnTeamsPage.classList.remove('hdn');

    ownerView.classList.add('hdn');
    memberView.classList.add('hdn')
    teamsHeading('Teams')
};
function showOwnersPage(){
    ownerView.classList.remove('hdn');
    
    mnTeamsPage.classList.add('hdn');
    memberView.classList.add('hdn')
}
function showMembersPage(){
    memberView.classList.remove('hdn')
    
    ownerView.classList.add('hdn');
    mnTeamsPage.classList.add('hdn');
};


function showReportsPage(){
    reportsPage.classList.remove('hdn');
    settingsPage.classList.add('hdn');

    reportsHeading.classList.add('active');
    settingsHeading.classList.remove('active');
};
function showSettingsPage(){
    reportsPage.classList.add('hdn');
    settingsPage.classList.remove('hdn');

    reportsHeading.classList.remove('active');
    settingsHeading.classList.add('active');
};




//                                 OWNER SETTINGS

function unConfirmToRealData(){
    unconfirmTeamsData = JSON.stringify(teamsData);
    unconfirmTeamsData = JSON.parse(unconfirmTeamsData);
}
unConfirmToRealData();

function currentTeamMembers(index){

    console.log(index)

    var currentTeam =  unconfirmTeamsData[index];
    // var currentTeam =  teamsData[index];
    ind = index;
    var currentTeamMember = currentTeam.members.split(',');
    // To remove Spaces
    for(var i=0; i<currentTeamMember.length; i++){
        currentTeamMember[i] = currentTeamMember[i].replace(' ' ,'')
        currentTeamMember[i] = currentTeamMember[i].replace(' ' ,'')
    }
    // to hide currentOwner
    currentTeamMember.splice(currentTeamMember.indexOf(currentAccountEmail) , 1)

    console.log(currentTeamMember);
    document.querySelector('.viewMembers').innerHTML = '';
    for(i=0; i<currentTeamMember.length; i++){
        appendMember(currentTeamMember[i] , i)
    }
    teamsHeading(teamsData[index].name + ' - (your Team)');
}
currentTeamMembers(0);

// Add members
addMmbr = document.querySelector('.addMmbr');
addMmbrBtn = document.querySelector('.addMmbrBtn');
addMmbrBtn.addEventListener('click' , ()=>{
    var errMsg3 = document.querySelector('.errMsg3');
    if(addMmbr.value == ""){
        showMsg('Please Type an Email !' , undefined , undefined , errMsg3)
    }else if(validateEmail(addMmbr.value)){
        currentTeamMember = unconfirmTeamsData[ind].members.split(',');
        currentTeamMember.push(addMmbr.value);
        updatedMembers = currentTeamMember.toString()
        unconfirmTeamsData[ind].members = updatedMembers
        currentTeamMembers(ind);
        addMmbr.value = ''

    }else{
        showMsg('Invalid Email address !' , undefined , undefined , errMsg3)
    }
});

// Delete members
currentTeamMember = unconfirmTeamsData[ind].members.split(',');
function deleteTeamMember(index){
currentTeamMember = unconfirmTeamsData[ind].members.split(',');

    // var errMsg3 = document.querySelector('.errMsg3');

    
    index = +index;
    console.log('delete index' , index)

    //  +1 is writting because owner is already member 
    currentTeamMember.splice((index+1) , 1)
    
    console.log('current team length' , currentTeamMember.length)
        updatedMembers = currentTeamMember.toString()
        unconfirmTeamsData[ind].members = updatedMembers
        currentTeamMembers(ind)

};
// deleteTeamMember(0);

function appendMember(m , id){
    var viewMembers = document.querySelector('.viewMembers');
    var div = document.createElement('div');
    var span = `<span class="x" id="${id}" onclick="deleteTeamMember(this.id)">x<span> `
    div.classList.add('vm');
    div.innerHTML = m + span
    // div.appendChild(span);
    if(m != ""){
        viewMembers.appendChild(div);
    }
}



dltTeam = document.querySelector('.dltTeam')
dltTeam.addEventListener('click' , ()=> {
    deleteTeam(ind)
})
// Team Delete
function deleteTeam(ind) {
    console.log(ind)
        if(teamsData[ind].owner == currentAccountEmail){
            console.log('SuccessFully Deleted (' + teamsData[ind].name +')')
            teamsData.splice(ind , 1);
        }else{
            alert("you can't Delete this team");
        }
    distributeDivs();
    showTeamsPage();
    saveTeamData();
};
// Save All Changes
var saveChanges = document.querySelector('.saveChanges');
var cancelChanges = document.querySelector('.cancelChanges');
saveChanges.onclick = ()=>{
    teamsData = unconfirmTeamsData;
    teamQuestions(t);
    showTeamsPage();
    distributeDivs();
    saveTeamData();
}
// Cancel Changes
cancelChanges.onclick = ()=>{
    unConfirmToRealData();
    currentTeamMembers(ind);
    showTeamsPage();
}
var teamId;
// Check If id of owner is real !
var t;
function checkIfOwner(id){
for(i=0; i<teamsData.length; i++){
    if(teamsData[i].id == id && teamsData[i].owner == currentAccountEmail){
        currentTeamMembers(i)
        t=i;
        teamQuestions(t);
        teamAnswer(t)
        showOwnersPage();
        break
    }else if(teamsData[i].id == id){
        showMembersPage();
        membersData(teamsData[i]);
        teamId = teamsData[i].id;
        break
    }
}
}
checkIfOwner('1631211174269');

// Owner Questions
var questions = [];
function teamQuestions(teamIndex){
    var currentTeam = unconfirmTeamsData[teamIndex];

    questionAll = document.querySelectorAll('.questions .question');
    question1 = document.querySelectorAll('.questions .question')[0];
    question2 = document.querySelectorAll('.questions .question')[1];
    question3 = document.querySelectorAll('.questions .question')[2];

    reportQuestionAll = document.querySelectorAll('.reportQuestion');

    questions = [];

    questions.push(question1.value);
    questions.push(question2.value);  
    questions.push(question3.value);
    questions.push(new Date().toDateString());

    
    
    if(currentTeam.question != undefined){
        for(var i=0; i<(currentTeam.question.length - 1); i++){
            questionAll[i].value = currentTeam.question[i];
            reportQuestionAll[i].innerHTML = currentTeam.question[i];
        }
    }else{
        for(var i=0; i<3; i++){
            questionAll[i].value = '';
            reportQuestionAll[i].innerHTML = 'Not yet';
        }
    }
    
    currentTeam.question = questions;
};



//  For Members page (Get All Question to members page)
var questionTeam;
function membersData(teamData){

    console.log(teamData);
    teamsHeading(teamData.name + ' - Team');
    questionTeam = teamData;
    

    if(teamData.question != undefined){
        console.log(teamData.question)
        membersForm.innerHTML = '';
        for(var i=0; i<(teamData.question.length-1); i++){
            appendQuestion(teamData.question[i]);
        }
        var questionDate =  teamData.question[teamData.question.length-1]; //Date
        membersDate.innerHTML = questionDate;

    }else{
        membersForm.innerHTML = '<div class="noQuestions">No quetions Yet </div>';
        membersDate.innerHTML = 'Nothing'
        console.log('No question yet');
    }
    if(teamData.answers != undefined){

        for(var i=0; i<questionTeam['answers'].length; i++){
            if(questionTeam['answers'][i].accountId == currentAccountId){

            document.querySelectorAll('.ans')[0].value = teamData.answers[i].ans1;
            document.querySelectorAll('.ans')[1].value = teamData.answers[i].ans2;
            document.querySelectorAll('.ans')[2].value = teamData.answers[i].ans3;

            };
        }
    }

};
// showMembersPage();
showTeamsPage();

//          just show only question on DOM
function appendQuestion(question){

    console.log('appended question' , question);
    question = correctionOfQuestions(question);


    // Final innerHTML
    membersForm.innerHTML +=
    `<div class="answerField">
    <p>Q. <span class="mnQuestion">${(question)}</span> </p>
    <input type="text" class="ans" placeholder="Answer">
    </div>`
}
membersForm.innerHTML = '';
function correctionOfQuestions(question){
        // Add question mark
        if(question.slice(-1) != '?'|| question.value.slice(-2) != '?'){
            question = question + ' ?'
        }
        // Capital first letter
        question = question.slice(0,1).toLocaleUpperCase() + question.slice(1);

    return question
}

//          Member(give answer)
var answerArray = [];
function submitAnswer(){

    if(questionTeam.answers == undefined){
        questionTeam.answers = [];
    }else{
        answerArray = questionTeam.answers;
    }

    var ansAll = document.querySelectorAll('.ans');
    var ans1 = document.querySelectorAll('.ans')[0];
    var ans2 = document.querySelectorAll('.ans')[1];
    var ans3 = document.querySelectorAll('.ans')[2];

    var answerObj = {};
    answerObj.ans1 = ans1.value;
    answerObj.ans2 = ans2.value;
    answerObj.ans3 = ans3.value;
    answerObj.date = new Date().toDateString();
    answerObj.accountId = currentAccountId;

    answerArray.push(answerObj);
    questionTeam.answers = answerArray;
    console.log(answerArray);
    console.log(questionTeam);

    alert('your Answers has been submitted !')
}

//  Submit Answers

ansSubmit = document.querySelector('.ansSubmit');
ansSubmit.onclick = () => {
    if(questionTeam["answers"] != undefined){

        if((questionTeam["answers"][0]["ans1"] == document.querySelectorAll('.ans')[0].value && questionTeam["answers"][0]["ans2"] == document.querySelectorAll('.ans')[1].value && questionTeam["answers"][0]["ans3"] == document.querySelectorAll('.ans')[2].value)){
            alert('your Answer have already been Submitted');
            showTeamsPage();
        }else{
            submitAnswer();
            saveTeamData();
            showTeamsPage();
        }

    }else{

        submitAnswer();
        saveTeamData();
        showTeamsPage();

    }
};
// ans1 , ans2 , ans3
function appendAnswer(ans1 , ans2 , ans3 , name){
    
    var questions = teamsData[t].question;

    reportsPage.innerHTML += 
    `<div class="reportsAns">
    <h3 class="reportName">${name}</h3>

    <p>Q. <span class="reportQuestion">${correctionOfQuestions(questions[0])}</span></p>
    <p class="AR" >A. <span class="ans1">${ans1}</span></p>

    <p>Q. <span class="reportQuestion">${correctionOfQuestions(questions[1])}</span></p>
    <p class="AR" >A. <span class="ans2">${ans2}</span></p>

    <p>Q. <span class="reportQuestion">${correctionOfQuestions(questions[2])}</span></p>
    <p class="AR" >A. <span class="ans3">${ans3}</span></p>
</div> </br>`
};

function teamAnswer(t){

    ans1 = document.querySelector('.ans1');
    ans2 = document.querySelector('.ans2');
    ans3 = document.querySelector('.ans3');
    reportName = document.querySelector('.reportName');


    if(teamsData[t].answers != undefined){

        thisTeam = teamsData[t]

        reportsPage.innerHTML = ''
        for(var i=0; i<thisTeam.answers.length; i++){
            console.log(thisTeam.answers[i])
            memberIdOfAns = thisTeam.answers[i].accountId;
            memberAnsDate = thisTeam.answers[i].date;
            console.log(memberIdOfAns)
            name = firstName(getName()) + ' : ' + memberAnsDate;

            appendAnswer(thisTeam.answers[i].ans1 , thisTeam.answers[i].ans2 , thisTeam.answers[i].ans3 , name)

        }
        function getName(){
        for(var i=0; i<arr.length; i++){
            if(memberIdOfAns == arr[i].id){
                console.log(arr[i].name , arr[i].email);
                return arr[i].name;
            }
        }
    };
    }else{
        reportsPage.innerHTML = ''
        reportsPage.innerHTML =
    '<div class="reportsAns"><h3 class="reportName">No user have Answered !</h3><p><span class="reportQuestion"></span></p><p><span class="ans1"></span></p><p><span class="reportQuestion"></span></p><p><span class="ans2"></span></p><p><span class="reportQuestion"></span></p><p><span class="ans3"></span></p></div>'
}
}
// teamAnswer();



//                            member's answer show to owner