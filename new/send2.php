<?php
if((isset($_POST['name'])&&$_POST['name']!="") && (isset($_POST['tel'])&&$_POST['tel']!="")){
        $to = 'example@mail.ru'; // Куда будет приходить
        $subject = 'Заявка с формы';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['tel'].'</p>
                    </body>
                </html>';
        $headers = "Content-type: text/html; charset=\"utf-8\" \r\n";
        $headers.= "From: Gruzovaya\r\n";
        mail($to, $subject, $message, $headers);
}