<!-- ?php
  /* Created by Mr. Wergeles on November 9, 2016 */ 
  
    // HTTPS redirect
    if ($_SERVER['HTTPS'] !== 'on') {
    $redirectURL = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    header("Location: $redirectURL");
    exit;
  }
    
  // Every time we want to access $_SESSION, we have to call session_start()
  if(!session_start()) {
    header("Location: error.php");
    exit;
  }
  
  $loggedIn = empty($_SESSION['loggedin']) ? false : $_SESSION['loggedin'];
  if (!$loggedIn) {
    header("Location: index.php");
    exit;
  }
?> -->

<!DOCTYPE html>
<html>
<head>
  <title>Mementos - Scenes</title>
  <meta charset="utf-8">
  <?php include_once('head.php'); ?>
</head>
<body>

  <?php include_once('navbar.php'); ?>

<div id="body">
    <h2>Share your mementos</h2>
    <p>What was your study-abroad experience like? Upload your own and discover mementos shared by users around the world.</p>
    <form action="uploadHandler.php" method="POST" enctype="multipart/form-data">
<!--     <label for="itemName"><input class="form-control" type="text" id="itemName" name="itemName">Item Name</label>
    <label for="itemLoc"><input class="form-control" type="text" id="itemLoc" name="itemLoc">Location</label>
    <label for="itemDesc"><input class="form-control" type="text" id="itemDesc" name="itemDesc">Item Description</label><br> -->
    <label id="browseButton" class="btn btn-default"><input class="file" type="file" name="file1" style="display: none;">Browse&hellip;</label>
    <label id="uploadButton" class="btn btn-primary"><input type="submit" value="Upload" style="display: none;">Upload</label>

    </form>

            <?php
            if ($success) {
                print "<p class=\"success\">$success</p>";
            } else if ($m) {
              print "<p class=\"error\">$m</p>";
            }
            ?>
            <?php

            $dir = "img/uploads/";
if (is_dir($dir)) {
  if ($d = opendir($dir)) {
    while (($file = readdir($d)) !== false) {
      $ext = substr($file, strpos($file, ".", 2) + 1);
      if ($ext === "jpg" || $ext === "jpeg" || $ext === "png" || $ext === "gif") {
        echo "<div class=\"item\"><img class=\"itemImg\" src=\"$dir" . "$file" . "\" alt=\"$file\"></div>";
      }
    }
    closedir($d);
  } else {
    echo "Not able to open $dir";
  }
} else {
  echo "$dir is not a directory";
}
        ?>


<script type="text/javascript" src="js/items.js"></script>
        

    </div>


</body>
</html>