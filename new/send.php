<?php
if((isset($_POST['name'])&&$_POST['name']!="") && (isset($_POST['tel'])&&$_POST['tel']!="") && (isset($_POST['email'])&&$_POST['email']!="") && (isset($_POST['mess'])&&$_POST['mess']!="")){
        $to = 'example@mail.ru'; // Куда будет приходить
        $subject = 'Заявка с формы';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Контактный телефон: '.$_POST['tel'].'</p>
                        <p>Почта: '.$_POST['email'].'</p>
                        <p>Сообщение: '.$_POST['mess'].'</p>
                    </body>
                </html>';
        $headers = "Content-type: text/html; charset=\"utf-8\" \r\n";
        $headers.= "From: Грузовая индустрия\r\n";
        mail($to, $subject, $message, $headers);
  }
?>