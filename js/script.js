$(document).ready(function() {
    const formulario = $("form");
    const inputs = $("#formulario input,textarea");

    const expresiones = {
        name: /^[a-zA-ZÁ-ÿ\s]{1,40}$/, // letras y espacios, pueden llevar acentos 
        gmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+$/,
        subject: /^[a-zA-ZÁ-ÿ\s]{1,40}$/, // letras y espacios, pueden llevar acentos 
        message: /^[a-zA-ZÁ-ÿ\s]{1,40}$/ // letras y espacios, pueden llevar acentos 
    };
    const campos = {
        name: false,
        gmail: false,
        subject: false,
        message: false
    }

    function validarCampo(buscador, identificado) {
        switch (identificado) {
            case "name":
                if (expresiones.name.test(buscador)) {
                    $("form #container-input input").removeClass('warning-form');
                    campos[identificado] = true;
                } else {
                    $("form #container-input input").addClass('warning-form');
                    campos[identificado] = false;
                }
                break;
            case "gmail":
                if (expresiones.gmail.test(buscador)) {
                    $("form #container-input input").removeClass('warning-form');
                    campos[identificado] = true;

                } else {
                    $("form #container-input input").addClass('warning-form');
                    campos[identificado] = false;
                }
                break;
            case "subject":
                if (expresiones.subject.test(buscador)) {
                    $("form #container-input input").removeClass('warning-form');
                    campos[identificado] = true;
                } else {
                    $("form #container-input input").addClass('warning-form');
                    campos[identificado] = false;
                }
                break;
            case "message":
                if (expresiones.message.test(buscador)) {
                    $("form #container-input textarea").removeClass('warning-form');
                    campos[identificado] = true;
                } else {
                    $("form #container-input textarea").addClass('warning-form');
                    campos[identificado] = false;
                }
                break;
        }
    }
    $(inputs).keyup(function(e) {
        const buscar = $(this).val();
        const identificador = $(this).attr('name');
        validarCampo(buscar, identificador)
        $("form").removeClass('active-validatsion');

    });
    $(inputs).blur(function(e) {
        const buscar = $(this).val();
        const identificador = $(this).attr('name');
        validarCampo(buscar, identificador)
    });

    $("form").submit(function(e) {
        if (campos.name == true && campos.gmail == true && campos.subject == true && campos.message == true) {
            console.log("siga", campos)

        } else if (campos.name == false && campos.gmail == false && campos.subject == false & campos.message == false) {
            $("form").addClass('active-validation');
            console.log(campos)
            e.preventDefault();

        } else if (campos.name == false || campos.gmail == false || campos.subject == false || campos.message == false) {
            e.preventDefault()
            const identificador = $(this).attr('id');
            console.log(identificador)

        }
    });
});