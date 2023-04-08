<?php
require_once(__DIR__.'vendor/autoload.php');
 
use Symfony\Component\Mailer\Transport;
use Symfony\Component\Mailer\Mailer;
use Symfony\Component\Mime\Email;
 
try {
    $transport = Transport::fromDsn('mailjet+smtp://'.urlencode('c8425f309f97151e6c330d169d14c594').':'.urlencode('6bd0b6489d9e1a49dfc576e3b5d5f449').'@default');
    $mailer = new Mailer($transport);
 
    $email = (new Email())
        ->from('SENDER_NAME <fontycolobe@icloud.com>')
        ->to('fontycolobe@icloud.com')
        ->subject('Email Subject')
        ->html('<b>Email Body</b>');
 
    $mailer->send($email);
 
    echo "Email sent successfully.";
} catch(Exception $e) {
    echo $e->getMessage();
  }
?>