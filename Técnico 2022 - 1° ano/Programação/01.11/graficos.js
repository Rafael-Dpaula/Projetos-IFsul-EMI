function geraGrafico(){
    var arrayX = [-1,0,1,2,3,4,5,6,7,8,9,10];
    var arrayY = [];

    //preenche Y em função de f(x) = 2x + 1
    for(i in arrayX){
        arrayY.push(2*arrayX[i] + 1)
    }
    new Chart("meuGrafico", {
        type: "line",
        data: {
          labels: arrayX,
          datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: arrayY
          }]
        },
        options: {
          legend: {display: false},
          scales: {
            yAxes: [{ticks: {min: 6, max:16}}],
          }
        }
      });
}