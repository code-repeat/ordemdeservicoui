// CPF Mask
$(document).ready(function() {
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#phone').mask('(00) 00000-0000');
});

// Get Dynamic Year
date = new Date();
year = date.getFullYear()
document.querySelector('#year').innerHTML = year;