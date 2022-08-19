document.getElementById('input-discount').addEventListener('keyup', function(event){
    if(event.target.value === "dom"){
        document.getElementById('btn-apply').removeAttribute('disabled');
    }
    else{
        document.getElementById('btn-apply').setAttribute('disabled', true);
    }
});
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;

    return parseFloat(elementValueString);
}

document.getElementById('btn-apply').addEventListener('click', function(){
    const price = getElementValueById('price');
    document.getElementById('discount-price').innerText = price - price * 0.30;
})