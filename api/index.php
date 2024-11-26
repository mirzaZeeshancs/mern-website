<?php
  header('Access-Control-Allow-Origin: http://localhost:8080');
  require 'vendor/autoload.php';
  $sendgrid = new \SendGrid("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");
  $email    = new \SendGrid\Mail\Mail();
  $data = file_get_contents('php://input');
  $data = (array)json_decode($data);
  $email->addTo("mhassanzahid02@gmail.com");
  $email->setFrom("mhassanzahid02+from@gmail.com");
  $email->setSubject("TechClan Contact us");
  $cName = "Name: ".$data['name'];
  $cEmail = "Email: ".$data['email'];
  $cBody = "Detail: ".$data['detail'];
  $emailBody = "<p>".$cName."</br>".$cEmail."</br>".$cBody."</p>";
  $email->addContent(
    "text/html", $emailBody
  );
  $response = $sendgrid->send($email);
  echo json_encode(array('status' => $response->statusCode(), 'detail' => $response->body()));
?>
