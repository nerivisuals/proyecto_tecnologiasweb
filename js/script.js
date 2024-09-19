//CUENTA REGRESIVA

        // Fecha del próximo álbum
        const releaseDate = new Date("2024-09-25T20:00:00-06:00").getTime();

        // Actualizar el contador cada segundo
        const countdownFunction = setInterval(() => {
            const now = new Date().getTime();
            const distance = releaseDate - now;

            // Cálculos de tiempo
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Mostrar el resultado en el elemento countdown
            document.getElementById("countdown").innerHTML = 
                `${days}d ${hours}h ${minutes}m ${seconds}s`;

            // Si la cuenta regresiva ha terminado, mostrar un mensaje
            if (distance < 0) {
                clearInterval(countdownFunction);
                document.getElementById("countdown").innerHTML = "Concerts has started!";
            }
        }, 1000);


        //CONFIRMACION TICKETS

        document.getElementById('confirmPurchase').addEventListener('click', function() {
        const quantity = document.getElementById('ticketQuantity').value;
        const type = document.getElementById('ticketType').value;
        const email = document.getElementById('email').value;

    
        Swal.fire({
            title: 'Tickets Reserved',
            text: `Quantity: ${quantity}\nType: ${type}\nEmail: ${email}`,
            icon: 'success',
            confirmButtonText: 'OK',
            background: '#fff', // Color de fondo
            color: '#000', // Color del texto
            showCloseButton: true,
        });
    });