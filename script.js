var likeContainer = document.querySelector('.likeCont');
var like = document.querySelector('.like');
var dislike = document.querySelector('.dislike');
var width = document.querySelector('.width');
width.classList.add('NotColoredWidth');
// width.style.backgroundColor = 'grey';

var likeCount = document.querySelector('.likeCount');
var dislikeCount = document.querySelector('.dislikeCount');
var abbr = document.querySelector('.abbrr');

likes = 0;
dislikes = 0;
abbr.innerHTML = likes + ' / ' + dislikes;

likeCount.innerHTML =valueConvertor(likes);
dislikeCount.innerHTML =valueConvertor(dislikes);
widthChanger()


document.querySelectorAll('.abbr')[0].title = 'I like this'
document.querySelectorAll('.abbr')[1].title = 'I Dislike this'

function doLike(){

    like.classList.add('colored');
    dislike.classList.remove('colored');
    document.querySelector('.likeCont').classList.add('border');
       
    likes = likes + 1;
    likeCount.innerHTML =valueConvertor(likes);
    abbr.innerHTML = likes + ' / ' + dislikes;


    width.classList.replace('NotColoredWidth' , 'coloredWidth');
    widthChanger()

}

function doDislike(){
    
    dislike.classList.add('colored');
    like.classList.remove('colored');
    document.querySelector('.likeCont').classList.add('border');

    
    
    dislikes = dislikes + 1;
    dislikeCount.innerHTML =valueConvertor(dislikes);
    abbr.innerHTML = likes + ' / ' + dislikes;
    
    width.classList.replace('NotColoredWidth' , 'coloredWidth');
    widthChanger()
}

function widthChanger(){
    calculateWidth = likes + dislikes;
    calculateWidth = likes / calculateWidth;
    calculateWidth *= 100;
    width.style.width = calculateWidth + '%'
}
// For Abbrevation of views
var useLess = document.querySelector('.useLess');
useLess.addEventListener('mouseover' , function() {
    setTimeout(() => {
        abbr.style.opacity = '1'  
    }, 500);
})
useLess.addEventListener('mouseleave' , function() {
    setTimeout(() => {
        abbr.style.opacity = '0'   
    }, 500);
})
// Value Convertor
function valueConvertor(value){
    converted = value.toString();

    if(value >= 1000000000000){
        converted = converted.slice(0,1) + 'T'
        alert('Maximum Limit have reached')
        return converted;
    }
    // for B with more values
    if(value >= 100000000000){
        converted = converted.slice(0,3) + 'B'
        return converted;
    }
    else if(value >= 10000000000){
        if(converted.slice(2 , 3) == '0'){
        converted = converted.slice(0 , 2) + 'B'
        return converted;
        }
        converted = converted.slice(0 , 2) + '.' + converted.slice(2 , 3) + 'B'
        return converted;
    }
    // for B with more values
    if(value >= 1100000000){
        if(converted.slice(1,2) == '0'){
        converted = converted.slice(0,1) + 'B'
        return converted;
        }
        converted = converted.slice(0,1) + '.' + converted.slice(1,2) + 'B'
        return converted;
    }
    // for B
    else if(value >= 1000000000){
        converted = converted.slice(0,1) + 'B'
        return converted
    }

    // for M with more values
    else if(value >= 100000000){
        converted = converted.slice(0 , 3) + 'M'
        return converted;
    }

    // for M with more values
    else if(value >= 10000000){
        if(converted.slice(2 , 3) == '0'){
        converted = converted.slice(0 , 2) + 'M'
        return converted;
        }
        converted = converted.slice(0 , 2) + '.' + converted.slice(2 , 3) + 'M'
        return converted;
    }
    
    // for M
    else if(value >= 1100000){
        if(converted.slice(1,2) == '0'){
        converted = converted.slice(0 , 1) + 'M'
        return converted;
        }
        converted = converted.slice(0 , 1) + '.' + converted.slice(1,2) + 'M'
        return converted;

    }
    else if(value >= 1000000){
        converted = converted.slice(0 , 1) + 'M'
        return converted;

    }
    // for k with more values
    else if(value >= 100000){
            converted = converted.slice(0 , 3) + 'k'
            return converted;

    }
    // for k with more values
    else if(value >= 10000){
        if(converted.slice(2 , 3) == '0'){
            converted = converted.slice(0 , 2) + 'k'
            return converted;
        }
        converted = converted.slice(0 , 2) + '.' + converted.slice(2 , 3) + 'k'
        return converted;

    }
    // for k with point
    else if(value >= 1100){
        if(converted.slice(1 , 2) == '0'){
            converted = converted.slice(0 , 1) + 'k'
            return converted;
        }
        converted = converted.slice(0 , 1) + '.' + converted.slice(1 , 2) + 'k'
        return converted;

    }
    // for K
    else if(value >= 1000){
        converted = converted.slice(0 , 1) + 'k'
        return converted;

    }
    else{
        return value;
    }
}

// User Form
var form = document.querySelector('.form');
var msg = document.querySelector('.msg');
var cancel = document.getElementById('close')
var userLike = document.getElementById('userLike');
var userdislike = document.getElementById('userdislike');

msg.addEventListener('click' , function(){
    msg.classList.toggle('hide');
    form.classList.toggle('hide');
})
cancel.addEventListener('click' , function(){
    msg.classList.toggle('hide');
    form.classList.toggle('hide');
})

document.getElementById('done').addEventListener('click' , function(){User()})
function User(){
    var userLike = +(document.getElementById('userLike').value);
    var userdislike = +(document.getElementById('userdislike').value);

    userLike = Math.floor(userLike);
    userdislike = Math.floor(userdislike);

    if(userdislike == '0'&& userdislike > -1){
        dislikes =  - 1;
        doDislike()
    }
    else if(userdislike != '' && userdislike != NaN && userdislike > 0){
        dislikes = userdislike - 1;
        doDislike()
    }
    if(userLike == '0'&& userLike > -1){
        likes =  - 1;
        doLike()
    }
    else if(userLike != '' && userdislike != NaN  && userLike > 0){
         likes = userLike - 1;
         doLike()
    }
    widthChanger();


}