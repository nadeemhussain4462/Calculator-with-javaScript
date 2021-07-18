function getNumber(num){
    var showResult = document.getElementById('showResult');
    showResult.value += num;
}

function clearBtn(){
    var showResult = document.getElementById('showResult');
    showResult.value = " ";
}

function getResult(){
    var showResult = document.getElementById('showResult');
    showResult.value = eval(showResult.value);
}