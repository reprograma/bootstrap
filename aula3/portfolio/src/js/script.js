$(document).ready(function(){
    'use strict';

    // $('.f-phone').mask('(00) 000 000 000');

    $('.form-contact').validate({
        ignore: '.ignore',
        errorElement: 'span',
        rules: {
            text: {
                required: true
            },
            phone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            name: {
                required: true
            },
        },
        messages: {
            text: {
                required: "Por favor digite sua mensagem.",
            },
            phone: {
                required: "Por favor digite seu telefone.",
            },
            email: {
                required: "Por favor digite um email válido.",
                email: "Por favor digite um email válido."
            },
            name: {
                required: "Por favor digite seu nome.",
            },
        },
    });
});