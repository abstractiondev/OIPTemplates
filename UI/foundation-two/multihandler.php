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
        case 'updateUploadedFileData' : updateUploadedFileData();break;
        case "apple": echo "This is the php. Apple, Hello?"; break;
        case "null": echo "Php says it was null, tssssssss sooooorry."; break;
    }

function getMainCategories()
    {
        $file = "json/site_settings.json";
        $json = json_decode(file_get_contents($file), true);

                $output="";
                foreach ($json["CollectionContent"] as $value) {
                     $originalTitle=$value["Title"];
                     //$Capitalized_Title=ucwords($originalTitle);
                     $output.="<option value='".$originalTitle."'>".$originalTitle."</option>";
                     }
                echo $output;

        //This one gets the Isotope filters

        /*$output="<a href='#' data-filter='*' class='current'>All</a>";
        foreach ($json["CollectionContent"] as $value) {
             $originalTitle=$value["Title"];
             $Capitalized_Title=ucwords($originalTitle);
             $output.="<a href='#' data-filter='.".$value["Title"]."'>".$Capitalized_Title."</a>";
             }
        echo $output;*/
        //This one gets the Isotope filters

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

function updateUploadedFileData()
    {
        $filedescription=$_POST["filedescription"];
        $status=$_POST["status"];
        $urltosearch=$_POST["urltosearch"];

        $file = "json/files.json";
        $data = json_decode(file_get_contents($file), true);
        $found=0;
        $index=0;
        $index_matched=0;

        foreach ($data["fileRepository"] as $value) {
                $currentid=$value["id"];
                $calculateddate=strstr($urltosearch, '_',TRUE);
                $calculateddate=str_replace("uploaded/","",$calculateddate);
                $calculatedid="f".$calculateddate;
             if ($currentid==$calculatedid){
                $found=1;
                $index_matched=$index;
                }
             $index++;
             }


                if ($found==1)
                {
                $data["fileRepository"][$index_matched]["description"]= $filedescription;
                                $data["fileRepository"][$index_matched]["status"]= $status;
                                $newJsonString = json_encode($data);
                                file_put_contents($file, $newJsonString);
                echo "Success.";
                }
                if ($found==0)
                echo "Couldn't match the URL.Variable calculatedid : ".$calculatedid." Variable urltosearch : ".$urltosearch;
    }
?>