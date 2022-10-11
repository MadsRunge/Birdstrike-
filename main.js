
const ctx = document.querySelector('#chart').getContext('2d');

const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Mourning dove', 'killdeer', 'Barn swallow', 'American kestrel', 'Gulls', 'Horned lark', 'European starling','Sparrows', 'Rock pigeon','Easten meadowlark'],
        datasets: [{
            label: "Mourning dove",
            data: [13396, 8830, 8707, 8104, 7290, 7204, 5809, 4026, 3990, 3826],
            backgroundColor:["red","green","green","green","green","green","green","green","green","green"]
        }]
    },
    options: {
        plugins: {

            title: {
                display: true,
                text: "Most killed bird species by airplanes"
            }
        }
    }
}

);


const ctx2 = document.querySelector('#chart2').getContext('2d');
const chart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['1990', '1995', '2000', '2005', '2010', '2015', '2020', '2021', '2022'],
        datasets: [{
            label: 'Birdstrikes yearly',
            data: [2105, 2821, 6002, 7235, 9899, 10109, 11622, 15593, 8362],
            borderColor: ['red'],
        },
            {
                label: 'Pilots warned',
                data: [373, 506, 711, 994, 2421, 2398, 1529, 2428, 1420],
                borderColor: ["lightblue"],
            }]

    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Year 1990-2022'
                },
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                position: "bottom"
            },
            title: {
                display: true,
                text: 'Birdstrikes Yearly & Pilots warned'
            }
        }
    },
})



