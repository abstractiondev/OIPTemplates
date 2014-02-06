<?php
header('Content-Type: application/json;charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');

$id = $_POST["id"];
$title = $_POST["title"];
$excerpt =  $_POST["excerpt"];
$image = $_POST["image"];
$content= $_POST["content"];
$categories = $_POST["categories"];

$file = "json/site_settings.json";
$data = json_decode(file_get_contents($file), true);

foreach ($data as $key => $entry) {
    if ($entry["content"]["id"] == $id) {
        $data["content"][$key]["title"] => $title;
        $data["content"][$key]["excerpt"] => $excerpt;
        $data["content"][$key]["image"] => $image;
        $data["content"][$key]["article_text"] => $content;
        $data["content"][$key]["content_type"] => $categories;
        //echo "Record found and updated.";
    }
}
$newJsonString = json_encode($data);
file_put_contents($file, $newJsonString);

/*First, you need to decode it :

$jsonString = file_get_contents('jsonFile.json');
$data = json_decode($jsonString);

Then change the data :

if you want to change all entries with activity_code "1"
foreach ($data as $key => $entry) {
    if ($entry['activity_code'] == '1') {
        $data[$key]['activity_name'] = "TENNIS";
    }
}

Then reencode it and save it back in the file:

$newJsonString = json_encode($data);
file_put_contents('jsonFile.json', $newJsonString);*/

?>