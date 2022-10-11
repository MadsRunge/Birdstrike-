
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


