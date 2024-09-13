document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
        Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: 'Veuillez cocher la case reCAPTCHA !',
            confirmButtonColor: '#3085d6',
        });
        return;
    }

    Swal.fire({
        title: 'Êtes-vous sûr ?',
        text: "Voulez-vous vraiment envoyer ce message ?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui, envoyer',
        cancelButtonText: 'Annuler'
    }).then((result) => {
        if (result.isConfirmed) {
            var templateParams = {
                from_name: document.getElementById('name').value,
                from_email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.querySelector('textarea[name="message"]').value,
                'g-recaptcha-response': recaptchaResponse
            };

            emailjs.send('service_qqupe9d', 'template_kn1zymm', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    Swal.fire({
                        icon: 'success',
                        title: 'Envoyé',
                        text: 'Votre message a bien été envoyé.',
                    });
                    document.getElementById('contactForm').reset();
                    grecaptcha.reset();
                }, function(error) {
                    console.log('FAILED...', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Erreur',
                        text: 'Une erreur est survenue lors de l\'envoi du message.',
                    });
                });
        }
    });
});
