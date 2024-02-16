const risultatiString = localStorage.getItem("risposte");
//console.log(risultatiString);
const risultatiArray = risultatiString.split(","); // Supponendo che i valori siano separati da virgole
const risultati = risultatiArray.map(val => val === "true");
//console.log(risultati);


window.addEventListener('load', function() {
    history.pushState(null, document.title, location.href);
  });
  
  window.addEventListener('popstate', function(event) {
    history.pushState(null, document.title, location.href);
  });
  

let percentualeTrue;
const testoCorretto = `Congratulations!`;
const testoSbagliato = `Sorry, you didn\'t make it!`;
const data = {
    datasets: [{
        data: [],   // da svuotare
        backgroundColor: [
            "#C2128D",
            "#00FFFF"
        ],

    }]
}

function calcolaPercentuali(risultati) {
    if (Array.isArray(risultati)) {
        const conteggioTrue = risultati.filter(val => val === true).length;
        const conteggioFalse = risultati.length - conteggioTrue;
        const correctsNumber = document.getElementById('correctsNumber');
        const wrongsNumber = document.getElementById('wrongsNumber');
        const questionsNumber = document.querySelectorAll('.questionsNumber');
        correctsNumber.innerHTML = conteggioTrue;
        wrongsNumber.innerHTML = conteggioFalse;
        questionsNumber.forEach(element => {
            element.innerHTML = risultati.length;
        });
        percentualeTrue = (conteggioTrue / risultati.length) * 100;
        const percentualeFalse = (conteggioFalse / risultati.length) * 100;
        const percentualeTrueHTML = document.getElementById('correctPercentage');
        const percentualeFalseHTML = document.getElementById('wrongPercentage');
        percentualeTrueHTML.innerHTML = percentualeTrue.toFixed(1) + '%';
        percentualeFalseHTML.innerHTML = percentualeFalse.toFixed(1) + '%';

        data.datasets[0].data = [percentualeFalse, percentualeTrue];


    } else {
        console.error("Errore: i dati devono essere forniti come un array di valori booleani.");
    }
}



calcolaPercentuali(risultati);

const options = {
    cutout: 140,
}
const doughnutLabel = {
    id: 'doughnutLabel',
    beforeDatasetsDraw(chart, args, pluginOptions) {
        const { ctx, data } = chart;

        ctx.save();
        const xCoor = chart.getDatasetMeta(0).data[0].x;
        const yCoor = chart.getDatasetMeta(0).data[0].y;
        ctx.font = 'bold 15px sans-serif';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        if (percentualeTrue >= 60) {
            ctx.fillText(testoCorretto, xCoor, yCoor);
        } else {
            ctx.fillText(testoSbagliato, xCoor, yCoor);
        }

    }
}

const textChart =
    new Chart(document.getElementById('myChart'), {
        type: 'doughnut',
        data: data,
        options: options,
        plugins: [doughnutLabel]
    });

