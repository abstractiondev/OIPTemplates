<?php
header('Content-Type: application/json;charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');

$id = $_POST["id"];
$title = $_POST["title"];
$excerpt =  $_POST["excerpt"];
//$image = $_POST["image"];
$content= $_POST["content"];
$categories = $_POST["categories"];
$author = $_POST["author"];

$file = "json/site_settings.json";
$data = json_decode(file_get_contents($file), true);
$found=0;
$index=0;
$index_matched=0;


foreach ($data["content"] as $value) {
     if ($value["id"]==$id){
        $found=1;
        $index_matched=$index;
        echo "Record found. ";
        echo "Index matched: ";
        echo $index_matched;
        }
     $index++;
     }

$data["content"][$index_matched]["title"]= $title;
$data["content"][$index_matched]["excerpt"]= $excerpt;
$data["content"][$index_matched]["article_text"]= stripslashes ($content);
$data["content"][$index_matched]["content_type"]= $categories;
$data["content"][$index_matched]["Author"]= $author;


$newJsonString = json_encode($data);
file_put_contents($file, $newJsonString);

echo "...The information in the variable DATA is: ";
print_r($data);

if ($found==0)
echo "...For some reason the ID was not found. ";


?>