// Objects Assigment
// Number 01:

var itemsArray = [
    {
        name:'Juice',
        price:'50',
        quantity:'3'
    },
    {
        name:'Cookie',
        price:'30',
        quantity:'9'
    },
    {
        name:'Shirt',
        price:'880',
        quantity:'1'
    },
    {
        name:'Pen',
        price:'100',
        quantity:'2'
    }
];

var outName = document.querySelector('.nm');
var outPrice = document.querySelector('.pr');
var outQuantity = document.querySelector('.qnt');
var outTotal = document.querySelector('.tot');

function calculatePrice(value){
    outName.innerHTML = itemsArray[value].name;
    outPrice.innerHTML = itemsArray[value].price;
    outQuantity.innerHTML = itemsArray[value].quantity;
    outTotal.innerHTML = itemsArray[value].price * itemsArray[value].quantity;
}
calculatePrice(0);

// Number 02:

var obj = {
    name : '',
    email : '',
    password : '',
    age : '',
    gender : '',
    city : '',
    country : ''
}

document.querySelector('.srchBtn').addEventListener('click' , function(){

var searchWord = document.querySelector('.search').value.toLocaleLowerCase();
var outputTxt = document.querySelector('.outputTxt');

if(searchWord != ""){
       
    if(obj[searchWord] != undefined){
        outputTxt.innerHTML = searchWord + ' is Available'
    }else{
        outputTxt.innerHTML = searchWord + ' is Not Available'
    }

}else{
    alert('Enter a Word !')
}
})

// Number 03:

function Record(name , email , age , city){
    this.name = name;
    this.email = email;
    this.age = age;
    this.city = city;
}
var record1 = new Record('Tahir' , 'hjdbh@gmail.com' , '17' , 'Karachi');
var record2 = new Record('Usama' , 'usjns@gmail.com' , '23' , 'Islamabad');
var record3 = new Record('Faisal' , 'faskls@gmail.com' , '19' , 'Lahore');

var output1 = "";
for (var property in record1) {
  output1 += property + ': ' + record1[property]+'; ';
}
var output2 = "";
for (var property in record2) {
    output2 += property + ': ' + record2[property]+'; ';
}
var output3 = "";
for (var property in record3) {
    output3 += property + ': ' + record3[property]+'; ';
}

obj1.innerHTML = output1;
obj2.innerHTML = output2;
obj3.innerHTML = output3;

// Number 04:

function info(name , gender , address , education , profession){
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

var population = [];
function save(){

var name = document.querySelector('.name').value;
var address = document.querySelector('.address').value;
var gender = document.querySelectorAll('.gender');
var education = document.querySelector('.education').value;
var profession = document.querySelector('.profession').value;


if(gender[0].checked){
    gender = 'male'
}else if(gender[1].checked){
    gender = 'female'
}

    record = new info(name , gender , address ,  education , profession)
    population.push(record);
    console.log(population);

}
document.querySelector('.save').addEventListener('click' , function(){
    save();
    document.getElementById('msg').innerHTML = 'Saved ! Check it in Console.'
})