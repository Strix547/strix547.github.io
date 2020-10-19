<?php
  use PHPMailer\PHPMailer\PHPMailer;
  if (
    isset($_POST['name']) &&
    isset($_POST['email']) &&
    isset($_POST['tel']) &&
    isset($_POST['subject'])
  ) {
    $name = $_POST['name'];
    $email $_POST['email'];
    $tel $_POST['tel'];
    $subject = $_POST['subject'];

    require_once "PHPMailer/PHPMailer.php";
    require_once "PHPMailer/SMTP.php";
    require_once "PHPMailer/Exception.php";

    $mail = new PHPMailer()

    //smtp settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = "alexxx547@gmail.com";
    $mail->Password = '06081974';
    $mail->Port = 465;
    $Mail->SMTPSecure = 'ssl';

    //email settings
    $mail->isHTML(true);
    $mail->setFrom($email, $name);
    $mail->addAddress('alexxx547@gmail.com');
    $mail->Subject = ('$email ($subject)');
    $mail->Body = ('test')

    if (!$mail->send()) {
      echo('Error')
      // $status = 'success';
      // $response = 'Email is sent';
    } else {
      header('location: thank-you.html')
      // $status = 'failed';
      // $response = 'Something is wrong: <br>' . $mail->ErrorInfo;
    }

    // exit(json_encode(array('status' => $status, 'response' => $ErrorInfo)));
  }
?>