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
	<title>Mementos - Items</title>
	<meta charset="utf-8">
	<?php include_once('head.php'); ?>
</head>
<body id="items">
<?php include_once('navbar.php'); ?>
<div id="body">
<h2>Mementos from the U.S.</h2>
<p>This collection is a tangible representation of the memorable experiences I have had during my exchange semester in America. Mouseover the items to learn their story.</p>
<div id="items">
<?php 
$dir = "img/items/";
if (is_dir($dir)) {
	if ($d = opendir($dir)) {
		while (($file = readdir($d)) !== false) {
			$ext = substr($file, strpos($file, ".", 2) + 1);
			if ($ext === "jpg" || $ext === "jpeg" || $ext === "png" || $ext === "gif") {
				echo "<div class=\"item\"><div class=\"tooltip\"></div><img class=\"itemImg\" src=\"$dir" . "$file" . "\" alt=\"$file\"></div>";
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
</div>
</div>
<script type="text/javascript" src="js/items.js"></script>
</body>
</html>