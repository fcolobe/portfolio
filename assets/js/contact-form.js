document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.querySelector('textarea[name="message"]').value,
    };

    emailjs.send('service_qqupe9d', 'template_kn1zymm', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.querySelector('.sent-message').style.display = 'block';
        }, function(error) {
            console.log('FAILED...', error);
            document.querySelector('.error-message').style.display = 'block';
        });
});
