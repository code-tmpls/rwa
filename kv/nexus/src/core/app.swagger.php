<?php
require("../vendor/autoload.php");
$swagger = Swagger\scan('../controllers');
header('Content-Type: application/json');
echo $swagger;