<?php

$recepient = "skorpionn440@gmail.com";
$siteName = "MARS.A";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$excursion = trim($_POST["excursion"]);


$message = "\nИмя: $name \nТелефон: $phone  \nЭкскурсия: $excursion ";

$pagetitle = "Обратный звонок - \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
