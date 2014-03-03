<?php
//properties of the uploaded file
$name = $_FILES["myfile"]["name"];
$type = $_FILES["myfile"]["type"];
$size = $_FILES["myfile"]["size"];
$temp = $_FILES["myfile"]["tmp_name"];
$error = $_FILES["myfile"]["error"];  // 0 if everything is clear...

//echo $temp;

//check for errors
if ($error > 0)
	die ("Error uploading file! Code $error.");

	else
	{
		//conditions for the file ... e.g. if you don't want jpeg images the condition is ($type =="image/jpeg")
		if ( ($type !="image/jpeg")&&($type !="image/png") )
			die ("$type File type not supported");
		else{
		//---learning tip:   move_uploaded_file(filename, destination)
		$timestamp = time();
		$uniquename = $timestamp."_".$name;

		$id = 	$_POST['id'];
		$title = 		$_POST['title'];
		$excerpt = 	$_POST['excerpt'];
		$file_path = "images/".$uniquename;
		$imagetag ="<img src='".$file_path."' style='height: 100%; width: auto;'>";

					move_uploaded_file($temp, "images/".$uniquename);
        echo $file_path;
		}
	}

?>