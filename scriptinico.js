function toggleMenu() {
    const navbar = document.getElementById('navbarMenu');
    const currentWidth = navbar.style.width;

    if (currentWidth === '0px' || currentWidth === '') {
        navbar.style.width = '250px';
    } else {
        navbar.style.width = '0';
    }
}


document.addEventListener('DOMContentLoaded', (event) => {
    const ctx = document.getElementById('myChart').getContext('2d');

    const data = {
        labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        datasets: [{
            label: 'Atendimentos',
            data: [0, 0, 0, 0, 0, 0, 0],
            backgroundColor: 'rgba(0, 99, 132, 0.6)',
            borderColor: 'rgba(0, 99, 132, 1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0, 99, 132, 0.8)',
            hoverBorderColor: 'rgba(0, 99, 132, 1)'
        }]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                max: 15,
                ticks: {
                    stepSize: 1
                }
            }
        },
        onClick: (event, elements) => {
            if (elements.length > 0) {
                const index = elements[0].index;
                const day = data.labels[index];
                const count = data.datasets[0].data[index];
                
                // Obter a data atual
                const currentDate = new Date();
                // Obter o dia atual
                const currentDay = currentDate.getDate();
                // Obter o mês atual (adicionando 1 porque os meses em JavaScript são baseados em zero)
                const currentMonth = currentDate.getMonth() + 1;
                
                // Formatar a data atual
                const formattedDay = currentDay < 10 ? `0${currentDay}` : currentDay;
                const formattedMonth = currentMonth < 10 ? `0${currentMonth}` : currentMonth;
                
                const formattedDate = `${formattedDay}/${formattedMonth}`;
                
                document.getElementById('selectedDay').textContent = `${day} - ${formattedDate}`;
                document.getElementById('attendanceCount').textContent = `Atendimentos: ${count}`;
            }
        }        
        
    };

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });

    document.getElementById('addButton').addEventListener('click', () => {
        const dayIndex = document.getElementById('daySelect').value;
        const attendanceCount = document.getElementById('attendanceInput').value;

        console.log(`Adicionando ${attendanceCount} atendimentos ao dia índice ${dayIndex}`);
        
        data.datasets[0].data[dayIndex] = Number(attendanceCount);
        myChart.update();
    });

    // Simulação de integração futura com uma agenda
    function fetchAgendaData() {
        // Simulação de dados de uma agenda
        const agendaData = {
            'Dom': 1,
            'Seg': 2,
            'Ter': 3,
            'Qua': 1,
            'Qui': 2,
            'Sex': 3,
            'Sáb': 2
        };

        data.labels.forEach((day, index) => {
            data.datasets[0].data[index] = agendaData[day];
        });

        myChart.update();
    }

    // Função para ser chamada quando a integração estiver pronta
    function updateFromAgenda() {
        fetchAgendaData();
    }

    // Chamada inicial de atualização para simular a agenda
    updateFromAgenda();

    // Função para atualizar a data e hora atual
    function updateDateTime() {
        const now = new Date();
        const dateTimeString = now.toLocaleDateString('pt-BR', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        }) + ' ' + now.toLocaleTimeString('pt-BR');
        document.getElementById('currentDateTime').textContent = dateTimeString;
    }

    // Atualizar a data e hora atual a cada segundo
    setInterval(updateDateTime, 1000);
    updateDateTime();
});

