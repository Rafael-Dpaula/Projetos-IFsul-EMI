let resposta = document.querySelectorAll("input[type='radio']");
let respost;
for (let i = 0; i < resposta.length; i++) {
    if (resposta[i].checked) {
        respost = resposta[i].value;
    }
}

let opcoes = document.getElementsByName("opcoes");
let selecionado = false;
for (let i = 0; i < opcoes.length; i++) {
    if (opcoes[i].checked) {
        selecionado = true;
        break;
    }
}

function resolver() {
    let q1 = document.getElementsByName('q1');
    let q2 = document.getElementsByName('q2');
    let q3 = document.getElementsByName('q3');
    let q4 = document.getElementsByName('q4');
    let q5 = document.getElementsByName('q5');
    let q6 = document.getElementsByName('q6');
    let q7 = document.getElementsByName('q7');
    let q8 = document.getElementsByName('q8');
    let q9 = document.getElementsByName('q9');
    let q10 = document.getElementsByName('q10');

    for (let i = 0; i < q1.length; i++) {
        if (q1.checked && q1.value == 100) {
            document.getElementById('qu1').style.color = 'green';
        } else {
            document.getElementById('qu1').style.color = 'red';
        }
    }

    for (let i = 0; i < q2.length; i++) {
        if (q2.checked && q2.value == 168) {
            document.getElementById('qu2').style.color = 'green';
        } else {
            document.getElementById('qu2').style.color = 'red';
        }
    }

    for (let i = 0; i < q3.length; i++) {
        if (q3.checked && q3.value == 120) {
            document.getElementById('qu3').style.color = 'green';
        } else {
            document.getElementById('qu3').style.color = 'red';
        }
    }

    for (let i = 0; i < q4.length; i++) {
        if (q4.checked && q4.value == 7.85) {
            document.getElementById('qu4').style.color = 'green';
        } else {
            document.getElementById('qu4').style.color = 'red';
        }
    }

    for (let i = 0; i < q5.length; i++) {
        if (q5.checked && q5.value == 3) {
            document.getElementById('qu5').style.color = 'green';
        } else {
            document.getElementById('qu5').style.color = 'red';
        }
    }

    for (let i = 0; i < q6.length; i++) {
        if (q6.checked && q6.value == 100) {
            document.getElementById('qu6').style.color = 'green';
        } else {
            document.getElementById('qu6').style.color = 'red';
        }
    }

    for (let i = 0; i < q7.length; i++) {
        if (q7.checked && q7.value == 15) {
            document.getElementById('qu7').style.color = 'green';
        } else {
            document.getElementById('qu7').style.color = 'red';
        }
    }

    for (let i = 0; i < q8.length; i++) {
        if (q8.checked && q8.value == 3) {
            document.getElementById('qu8').style.color = 'green';
        } else {
            document.getElementById('qu8').style.color = 'red';
        }
    }

    for (let i = 0; i < q9.length; i++) {
        if (q9.checked && q9.value == 5) {
            document.getElementById('qu9').style.color = 'green';
        } else {
            document.getElementById('qu9').style.color = 'red';
        }
    }

    for (let i = 0; i < q10.length; i++) {
        if (q10.checked && q10.value == 5) {
            document.getElementById('qu10').style.color = 'green';
        } else {
            document.getElementById('qu10').style.color = 'red';
        }
    }
}
