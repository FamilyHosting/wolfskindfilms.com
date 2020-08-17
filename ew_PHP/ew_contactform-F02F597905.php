<?php

function splitDataForm($encodedData) {
	$datas = explode('||', $encodedData);
	return $datas;
}
$emailContent;
$emailSubject = $_POST['emailSubject'];
$emailSender = $_POST['emailSender'];


if ($emailSubject=="" OR $emailSender=="") {
	exit;
}

if (!filter_var($emailSender, FILTER_VALIDATE_EMAIL)) {
    echo "Not a valid email address.";
    exit;
}

$emailContent = "<html><body>";
foreach ($_POST as $key => $data) {
	$datas = splitDataForm($data);
	$label = $datas[0];
	$value = $datas[1];
	
	
	
	if (count($value) > 0) {
		$value = 
		$emailContent .= '<p><strong>' . $label . '</strong> ' . stripslashes(nl2br($value)) . '</p>';
	}


}
$emailContent .= "</body></html>";

include('ew_mailer.php');

$server  = "smtp.gmail.com";
$port  = "465";
$username  = "wolfskindfilms@gmail.com";
$password  = "kate-rivilis!";
$protocol = "ssl";
$emailRecipient = "wolfskindfilms@gmail.com";

if (!filter_var($emailRecipient, FILTER_VALIDATE_EMAIL)) {
    echo "Not a valid email address.";
    exit;
}

$mail = new EverWeb_Mail($server, $port, $username, $password, $protocol);

//port 587 for tls, port 465 with ssl and port 25 or 26 for regular

  $mail->contentType = "text/html";

  if(!$mail->sendMail($emailSender, $emailRecipient, $emailSubject, $emailContent)) {
    echo "Could not send email";
  } else {
    echo "Email sent successfully";
  }

  
if ($mail->hasError) {
	$mail->printDebugLog();
}


?>