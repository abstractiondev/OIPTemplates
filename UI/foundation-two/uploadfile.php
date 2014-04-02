<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
//properties of the uploaded file
$name = $_FILES["myfile"]["name"];
$type = $_FILES["myfile"]["type"];
$size = $_FILES["myfile"]["size"];
$temp = $_FILES["myfile"]["tmp_name"];
$error = $_FILES["myfile"]["error"];  // 0 if everything is clear...


//check for errors
if ($error > 0)
	die ("Error uploading file! Code $error.");

	else
	{
		//conditions for the file ... e.g. if you don't want jpeg images the condition is ($type =="image/jpeg")
		$timestamp = time();
		$id="f".$timestamp;
		$uniquename = $timestamp."_".$name;
		$file_path = "uploaded/".$uniquename;
		//gets the characters after "/"
		$extension = strstr( $type, '/');
        $extension = str_replace("/", "", $extension);

		move_uploaded_file($temp, "uploaded/".$uniquename);

                $file = "json/files.json";
                $json = json_decode(file_get_contents($file), true);
                $new_item= array("id"=> $id, "name"=>$name, "upload_date"=>$timestamp, "URL"=>$file_path, "extension"=>$extension, "local_path"=>$file_path, "status"=>"draft", "size"=>$size);
                array_push($json["fileRepository"], $new_item);
                file_put_contents($file, json_encode($json));

        if (($type =="image/jpeg")||($type =="image/jpg")||($type =="image/png")||($type =="image/gif")||($type =="image/tiff"))
        echo $file_path;

        else
        echo "images/preview.png";
	}

?>