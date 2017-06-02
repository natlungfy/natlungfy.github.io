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
  <h2>About</h2>
  <p>This website is dedicated to my exchange semester in the United States. During my study abroad at the University of Missouri in Columbia, I travelled to a few other cities for conferences, hackathons, and for fun: St Louis, Kansas City, Jacksonville Florida, New York City, Charlotte, North Carolina, and Ann Arbor, Michigan. This collection of postcards, tickets, and photos is a tangible representation of the memorable experiences I have had here.</p>
</div>

</body>
</html>