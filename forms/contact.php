<?php
require_once(__DIR__.'/assets/vendor/autoload.php');
use \Mailjet\Client;
use \Mailjet\Resources;

$mj = new Client('MJ_APIKEY_PUBLIC', 'MJ_APIKEY_PRIVATE',true,['version' => 'v3.1']);

if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['subject']) && !empty($_POST['message'])) {
    // récupérer les valeurs des champs du formulaire
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    if(filter_var($email, FILTER_VALIDATE_EMAIL)){

      $body = [
        'Messages' => [
            [
                'From' => [
                    'Email' => "$email",
                    'Name' => "$name"
                ],
                'To' => [
                    [
                        'Email' => "fontycolobe@icloud.com",
                        'Name' => "passenger 1"
                    ]
                ],
                'Subject' => $subject,
                'TextPart' => "$name <$email> a envoyé un message : $message",
            ]
        ]
      ];
      
      $response = $mj->post(Resources::$Email, ['body' => $body]);
      if ($response->success()) {
        echo "Email envoyé avec succès";
      } else {
        echo "Erreur lors de l'envoi de l'email : ".$response->getReasonPhrase();
      }

    } else {
      echo "Email non valide";
    }

  } else {
    header('Location:index.html');
    die();
  }
?>
