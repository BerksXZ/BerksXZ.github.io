const btn = document.querySelector('.btn');

var l = localStorage;

btn.addEventListener('click', function(){
    const form_1 = document.querySelector('.form1');
    const form_2 = document.querySelector('.cont-section2');

    form_1.addclass('desactivado');
})

const email = document.getElementById('GET-email')
const first_name = document.getElementById('GET-name');

first_name.addEventListener("focusout", function() {
    l.setItem("fn", first_name.value);
})


email.addEventListener("focusout", function() {
    l.setItem("em", email.value);
})

