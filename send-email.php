<?php
// if($_POST){
//     $name = $_POST['name-input'];
//     $email = $_POST['email-input'];
//     $message = $_POST["Ciacho!"];

//     mail("email@gmail.com", "This is an email from:" .$email, $message);
// }

if(count($_POST) > 0) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $email = $_POST['accept'];
    $message = 'Witaj '.$name.', oto Twoje ciasteczko!';

    if(mail("ak.er@wp.pl", "Dostałeś wiadomość!", $message)) {
        die("true");
    } else {
        die("Nie udało się wysłać wiadomości.")
    }
}

?>