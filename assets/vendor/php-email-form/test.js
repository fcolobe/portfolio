// Attendez que la page soit chargée
document.addEventListener("DOMContentLoaded", function() {

    // Récupérez le formulaire
    var monFormulaire = document.getElementById("mon-formulaire");
  
    // Initialisez la validation sur le formulaire
    var contraintes = {
      email: {
        presence: true,
        email: true
      }
    };
    validate.init(monFormulaire, contraintes, function(err, res) {
      if (res) {
        // Si le formulaire est valide, soumettez-le
        monFormulaire.submit();
      }
    });
  
  });
  