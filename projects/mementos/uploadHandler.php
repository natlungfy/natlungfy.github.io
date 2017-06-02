    <?php
    	require_once "Upload.php";
    	$target_dir = "img/uploads/";

    	try {
    		//instantiate a new Upload object
    		$upload = new Upload('file1');

    		//get upload file's information
    		$origFileName = $upload->getOrigFileName();
    		$fileExt = $upload->getfileExt();
    		$fileSize = $upload->getfileSize();
    		$mimeType = $upload->getMimeType();

            if(!is_dir($target_dir) && !mkdir($target_dir)){
                die("error creating folder $target_dir");
            }

            $newfilename = round(microtime(true));

            $destFilePath = $target_dir . $newfilename . "." . $fileExt;
            $upload -> moveFile($destFilePath);

            if($fileExt == 'jpg' || $fileExt == 'gif' || $fileExt == 'png') {
          $success = 'Memento uploaded!';
          require "share.php";
          exit;
            } else {
              $m = 'File type not supported. Please upload, jpg, gif, or png files only.';
              require "share.php";
              exit;
            }

    	} catch (UploadExceptionNoFile $e) {
          $m = 'No file was uploaded.';
          require "share.php";
          exit;
        } catch(UploadException $e) {
            $code = $e->getCode();
            $message = $e->getMessage();
$m = "Error: $message (code = $code) <br> \n";
          require "share.php";
          exit;

        }
    ?>