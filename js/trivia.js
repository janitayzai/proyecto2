const boton = document.getElementById("comprobar");

boton.addEventListener("click", function() {
    let puntaje = 0;

    
    let p1 = document.getElementById("p1");
    if (document.getElementById("b").checked) {
        p1.innerHTML = "¡Correcto!";
        p1.style.color = "green";
        puntaje++;
    } else {
        p1.innerHTML = "Incorrecto. En Montecalvo Irpino, por un hermano fallecido.";
        p1.style.color = "red";
    }

    
    let p2 = document.getElementById("p2");
    if (document.getElementById("c").checked) {
        p2.innerHTML = "¡Correcto!";
        p2.style.color = "green";
        puntaje++;
    } else {
        p2.innerHTML = "Incorrecto. A los 24 años.";
        p2.style.color = "red";
    }

    
    let p3 = document.getElementById("p3");
    if (document.getElementById("b").checked) {
        p3.innerHTML = "¡Correcto!";
        p3.style.color = "green";
        puntaje++;
    } else {
        p3.innerHTML = "Incorrecto. Una forma de servir a los demás y contribuir a su formación humana y espiritual.";
        p3.style.color = "red";
    }

    
    let p4 = document.getElementById("p4");
    if (document.getElementById("c").checked) {
        p4.innerHTML = "¡Correcto!";
        p4.style.color = "green";
        puntaje++;
    } else {
        p4.innerHTML = "Incorrecto. Compartió su propia comida con quienes no tenían.";
        p4.style.color = "red";
    }

    
    let p5 = document.getElementById("p5");
    if (document.getElementById("a").checked) {
        p5.innerHTML = "¡Correcto!";
        p5.style.color = "green";
        puntaje++;
    } else {
        p5.innerHTML = "Incorrecto. Humildad y caridad.";
        p5.style.color = "red";
    }

    
    let p6 = document.getElementById("p6");
    if (document.getElementById("a").checked) {
        p6.innerHTML = "¡Correcto!";
        p6.style.color = "green";
        puntaje++;
    } else {
        p6.innerHTML = "Incorrecto. Por Jesús y la Virgen María.";
        p6.style.color = "red";
    }

    
    let p7 = document.getElementById("p7");
    if (document.getElementById("c").checked) {
        p7.innerHTML = "¡Correcto!";
        p7.style.color = "green";
        puntaje++;
    } else {
        p7.innerHTML = "Incorrecto. En la educación y formación integral de los jóvenes.";
        p7.style.color = "red";
    }

    
    let p8 = document.getElementById("p8");
    if (document.getElementById("b").checked) {
        p8.innerHTML = "¡Correcto!";
        p8.style.color = "green";
        puntaje++;
    } else {
        p8.innerHTML = "Incorrecto. Salud frágil, críticas y expulsiones por su predicación.";
        p8.style.color = "red";
    }

    
    let p9 = document.getElementById("p9");
    if (document.getElementById("c").checked) {
        p9.innerHTML = "¡Correcto!";
        p9.style.color = "green";
        puntaje++;
    } else {
        p9.innerHTML = "Incorrecto. Humildad, generosidad, solidaridad, perseverancia, y fe.";
        p9.style.color = "red";
    }

    
    let p10 = document.getElementById("p10");
    if (document.getElementById("a").checked) {
        p10.innerHTML = "¡Correcto!";
        p10.style.color = "green";
        puntaje++;
    } else {
        p10.innerHTML = "Incorrecto. El 15 de julio de 1766.";
        p10.style.color = "red";
    }

    // Resultado final
    let resultadoFinal = document.getElementById("resultado");
    resultadoFinal.innerHTML = "Obtuviste " + puntaje + " de 10 respuestas correctas.";
});
