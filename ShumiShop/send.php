<?php
if((isset($_POST['name'])&&$_POST['name']!="") && (isset($_POST['phone'])&&$_POST['phone']!="")){
        $to = 'example@mail.ru'; // Куда будет приходить
        $subject = 'Заявка с формы';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                    </body>
                </html>';
        $headers = "Content-type: text/html; charset=\"utf-8\" \r\n";
        $headers.= "From: ShumiShop\r\n";
        mail($to, $subject, $message, $headers);
}
?>