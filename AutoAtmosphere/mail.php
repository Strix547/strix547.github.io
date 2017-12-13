<?php

$project_name = trim($_POST["project_name"]);
$admin_email  = trim($_POST["admin_email"]);
$form_subject = trim($_POST["form_subject"]);

foreach ( $_POST as $key => $value ) {
	if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
		$message .= "$key: $value\n";
	}
}

mail($admin_email, $form_subject, $message);