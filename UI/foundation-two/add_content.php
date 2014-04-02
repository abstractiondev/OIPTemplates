<?php
header('Content-Type: application/json;charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');  

$title = $_POST["title"];
$excerpt =  $_POST["excerpt"];
$image = $_POST["image"];
$content= $_POST["content"];
$categories = $_POST["categories"];

$file = "json/site_settings.json";
$json = json_decode(file_get_contents($file), true);

$id= mt_rand(100000,999999);

$new_item= array("id"=> $id, "title"=>$title, "excerpt"=>$excerpt, "image"=>$image, "article_text"=>$content, "content_type"=>$categories);

array_push($json["content"], $new_item);

file_put_contents($file, json_encode($json));

?>