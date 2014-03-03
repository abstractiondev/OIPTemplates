<?php
header('Content-Type: application/json;charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');

$action = $_POST['action'];
$title = $_POST["title"];
$excerpt =  $_POST["excerpt"];
$image = $_POST["image"];
$content= $_POST["content"];
$categories = $_POST["categories"];


   switch($action) {
        case 'getMainCategories' : getMainCategories();break;
        case "apple": echo "This is the php. Apple, Hello?"; break;
        case "null": echo "Php says it was null, tssssssss sooooorry."; break;
    }

function getMainCategories()
    {
        $file = "json/site_settings.json";
        $json = json_decode(file_get_contents($file), true);

        $output="<a href='#' data-filter='*' class='current'>All</a>";

        foreach ($json["CollectionContent"] as $value) {
             $originalTitle=$value["Title"];
             $Capitalized_Title=ucwords($originalTitle);
             $output.="<a href='#' data-filter='.".$value["Title"]."'>".$Capitalized_Title."</a>";
             }
        echo $output;
    }

function addNewContent()
    {
        $file = "json/site_settings.json";
        $json = json_decode(file_get_contents($file), true);

       $id= mt_rand(100000,999999);
       $new_item= array("id"=> $id, "title"=>$title, "excerpt"=>$excerpt, "image"=>$image, "article_text"=>$content, "content_type"=>$categories);
       array_push($json["content"], $new_item);
       file_put_contents($file, json_encode($json));
    }

?>