$('.btn').click(function (){
    setValue($(this).text());
})

$('.symbol').click(function (){
    console.log($(this).text())
    setSymbol($(this).text())
})

function setSymbol(symbol) {
    $('#display').text($('#display').text()+symbol)
}
function setValue(value){
    $('#display').text($('#display').text()+value)
}