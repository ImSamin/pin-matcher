document.querySelector('.notify-section').style.display = 'none';


//Generate Pin
document.querySelector('.generate-btn').addEventListener('click' , function() {
    var pinn = Math.floor(Math.random() * 9999) ;
    document.querySelector('.generatedValue').value = pinn;
    document.querySelector('.generatedValue').style.textAlign = 'center';
});

//Show Input

function inputNumber(num){
        var inputShower = document.querySelector('.inputValueShower');
        inputShower.value = inputShower.value + num;
        inputShower.style.textAlign ="center";
    }

//Pin Matching

function submitBtn() {
    var assignPin = document.querySelector('.generatedValue').value;
    var assignNum = document.querySelector('.inputValueShower').value;

    if(assignPin == assignNum){
        document.querySelector('.notify-section').style.display = 'block';
        document.querySelector('.wrong').style.display = 'none';
        document.querySelector('.right').style.display ='block';
        document.querySelector('.notify-section').style.display = 'block';
        document.querySelector('.action-left').style.display = 'none' ;
    } else{
        document.querySelector('.notify-section').style.display = 'block';
        document.querySelector('.wrong').style.display = 'block';
        document.querySelector('.right').style.display ='none';
        document.querySelector('.inputValueShower').value = ' ';
        document.querySelector('.action-left').innerText = '2 try left' ;
    }
}

// Bonus section



