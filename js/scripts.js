var number;
var selectedNumber = [];

$(document).ready(function() {
    $('#btn-draw').click(function() {
        if($('.btn-green').length < 4) {
            generateNumber();
        }
    })
    $('#btn-clear').click(function() {
        location.reload();
    })
})

function generateNumber() {
    newNumber = Math.floor(Math.random() * 5) + 1;

    if(selectedNumber.filter(i => i === newNumber).length > 0) {
        generateNumber();
    }else {
        selectedNumber.push(newNumber);
        $('#btn-' + number).removeClass('btn-blue');
        $('#btn-' + number).addClass('btn-green');
        number = newNumber;
        $('#btn-' + number).removeClass('btn-green');
        $('#btn-' + number).addClass('btn-blue');
        if($('.btn-green').length >= 4)
        $('#btn-draw').addClass('btn-disabled');
    }
}