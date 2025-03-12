document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // restringe que el envio sea automatico

    let form = event.target; // toma el formulario
    let formData = new FormData(form); // datos del formulario

    try {
        let response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            var successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show(); // mostrar el modal de éxito
            form.reset(); // inicia nuevamente el formulario después del envío
        } else {
            alert("Error sending message. Please try again.");
        }
    } catch (error) {
        alert("Something went wrong. Please check your internet connection.");
    }
});