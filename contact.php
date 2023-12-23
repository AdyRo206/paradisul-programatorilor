<?php $fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['mail'];
$prob = $_POST['prob'];
$subject = $_POST['subject'];
$formcontent="From: $fname  $lname \n Motivul: $prob \n Message: $message";
$recipient = "adriangabrielv2007@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>