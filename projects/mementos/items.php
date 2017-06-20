<!DOCTYPE html>
<html>
<head>
	<title>Mementos - Items</title>
	<meta charset="utf-8">
<!-- Font -->
<link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet">

<!-- Bootstrap -->
<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<!-- Jquery -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>

<!-- Custom css -->
<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body id="items">
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Menu</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="index.html">Mementos</a>
    </div>

      <ul class="nav navbar-nav navbar-right">
      <li><a href="about.html">About</a></li>
        <li><a href="items.php">Items</a></li>
        <li><a href="scenes.html">Scenes</a></li>
        <!-- <li><a href="share.html">Share</a></li> -->
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
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