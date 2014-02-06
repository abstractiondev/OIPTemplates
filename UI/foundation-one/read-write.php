<?php
header('Content-Type: application/json;charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');  

//$name = "bross";
//$url = "http://www.example.com";
$name = $_POST["name"];
$url =  $_POST["site"];

$file = "json/site_settings.json";

$json = json_decode(file_get_contents($file), true);
$new_item= array("name"=> $name, "url"=>$url);

array_push($json["sites"], $new_item);

file_put_contents($file, json_encode($json));



?>