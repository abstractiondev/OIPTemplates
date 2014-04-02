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

$file = "json/site_settings.json";
$json = json_decode(file_get_contents($file), true);
/**** Look for the value of the CalculatedHeight already updated on the JSON file****/
$found=0;
$index=0;
$index_matched=0;
foreach ($json["UploadedPhotos"] as $value) {
     if ($value["path"]==$image_path){
        $found=1;
        $calculatedPhotoHeight=$value["calculatedPhotoHeight"];
        }
     $index++;
     }
/**** Ends: Look for the value of the CalculatedHeight already updated on the JSON file****/
if ($found==0)
$calculatedPhotoHeight=210;

$calculatedCardHeight=$calculatedPhotoHeight+94;

$new_item= array("id"=> $id, "title"=>$title, "excerpt"=>$excerpt, "image"=>$image_path,"calculatedPhotoHeight"=>$calculatedPhotoHeight,"calculatedCardHeight"=>$calculatedCardHeight,"article_text"=>stripslashes($article_text),"content_type"=>$categories);

array_push($json["content"], $new_item);
file_put_contents($file, json_encode($json));
echo $new_item;

?>
