<?php
header('Content-Type: application/json;charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');

$id = $_POST["id"];
$title = $_POST["title"];
$excerpt =  $_POST["excerpt"];
$image_path = $_POST["image_path"];
$article_text= $_POST["article_text"];
$categories = $_POST["categories"];


$file = "json/site_settings copy.json";

$json = json_decode(file_get_contents($file), true);
$new_item= array("id"=> $id, "title"=>$title, "excerpt"=>$excerpt, "image"=>$image_path,"article_text"=>stripslashes($article_text),"content_type"=>$categories);

//array_push($json["content"], $new_item);
//file_put_contents($file, json_encode($json));
echo "Php executed.";
echo $new_item;

?>
