const form = document.querySelector('form');
const billElem = document.getElementById('price');
const selectReview = document.getElementById('select') ;
const totalPerson = document.getElementById('person');


form.addEventListener('submit' , e => {
    
    e.preventDefault();
    const billAmount = billElem.value ;
    const review = selectReview.value ;
    const numPerson = totalPerson.value ;

    if( !billAmount.length || !review.length || !numPerson.length ){
        setErrorMsg();
    }
    tipCalculate(billAmount , review, numPerson);

})
function setErrorMsg(){
    alert('Fill all the value!!');
}

function tipCalculate(a,b,c){
    let tip = (((a*b)/100) / c )*10 ;
    if( tip > 0){
        const para = document.createElement('h4');
        para.innerHTML = 'Your tip amount' + ' ' +'$'+tip ;
       form.append(para);

    }
}








