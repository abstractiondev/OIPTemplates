<?php
header('Content-Type: application/json;charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');  

$user = "bross";
$first = "Bob";
$last = "Ross";

$file = "json/names.json";

$json = json_decode(file_get_contents($file), true);

$json[$user] = array("first" => $first, "last" => $last);

file_put_contents($file, json_encode($json));

?>