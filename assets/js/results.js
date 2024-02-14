//let ctx = document.getElementById("myChart").getContext('2d');
//const myChart = new Chart(ctx, {
//  type: 'doughnut',
// options: {
//    cutout: 140,
//    plugins: {
//      legend: true,
//      textInside: {
//        text: 'congratulazioni',
//        color: 'white',
//        fontSize: 3
//      } 
//    }
//  },
//  data: {
//    
//    datasets: [{
//      backgroundColor: [
//        "#C2128D",
//        "#00FFFF"
//      ],
//    borderRadius: ["50%"],
//      data: [60, 40]
//    }]
//  }
//}
//);

const data = {
    datasets: [{
        data: [60, 40],   // da svuotare
        backgroundColor: [
            "#C2128D",
            "#00FFFF"
        ],

    }]
}

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
        ctx.fillStyle ='white';
        ctx.textAlign = 'center';
        ctx.fillText('Congratulations!', xCoor, yCoor);
    }
}

const textChart = 
        new Chart(document.getElementById('myChart'), {
            type: 'doughnut',
            data: data,
            options: options,
            plugins: [doughnutLabel]
        });
