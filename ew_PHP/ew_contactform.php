<?php
/* Copyright 2017-2024 RAGE Software Inc. All Rights Reserved */
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

foreach ($_POST as $key => $data) {
	$datas = splitDataForm($data);
	$label = $datas[0];
	$value = $datas[1];	
	if ($label == "*er:") {
		$emailRecipient = $value;		
	} else {
		if (isset($value)) {
			$emailContent .=  $label . ' ' . stripslashes($value) ."\n\n";
			}		
	}
}

if (!filter_var($emailRecipient, FILTER_VALIDATE_EMAIL)) {
    echo "Not a valid email address.";
    exit;
}

$sFromEmail = $emailSender;
$sfreeEmails = array("@aol.", "@yahoo.", "@hotmail.", "@gmail.");

foreach($sfreeEmails as $freeEmail) {
	if (strpos($emailSender,$freeEmail)!==false) {
		$sFromEmail = $emailRecipient;
		break;
	}
}

$emailHeader = "Return-Path: " . $emailSender . "\n";
$emailHeader .= "From:" . $sFromEmail . "\n";
$emailHeader .= "X-Mailer: EverWeb with PHP " . phpversion() . "\n";
$emailHeader .= "Reply-To: " . $emailSender . "\n";
$emailHeader .= "X-Priority: 3 (Normal)\n";
$emailHeader .= "Mime-Version: 1.0\n";
$emailHeader .= "Content-type: text/plain; charset=utf-8\n";

mail($emailRecipient, $emailSubject, $emailContent, $emailHeader) or die('error');
?>