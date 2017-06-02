<!--?php
  /* Created by Mr. Wergeles on November 9, 2016 */ 
  
    // HTTPS redirect
  //   if ($_SERVER['HTTPS'] !== 'on') {
  //   $redirectURL = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
  //   header("Location: $redirectURL");
  //   exit;
  // }
    
  // Every time we want to access $_SESSION, we have to call session_start()
  session_start();
   $loggedIn = empty($_SESSION['loggedin']) ? false : $_SESSION['loggedin'];
  if ($loggedIn) {
    $message = "You are already logged in! Click the button to enter.";
  }

  

?> -->
<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <title>Mementos</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
<!-- Font -->
<link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet">

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<!-- Custom css -->
<link rel="stylesheet" type="text/css" href="css/style.css">
  <style>
    /* Global Styles */


    @font-face {
      font-family: 'Label';
      src: url('fonts/ImpactLabel.ttf');
    }

    [class*="iconicfill-"]::before { font-family:"iconicfill", sans-serif; }

    html,body {
      color:#000;
      font-family:"Inconsolata", monospace;
      font-size:100%;
      height:100%;
      line-height:1.45;
      overflow-x: hidden;
      max-width: 100%;
    }


    /* Video Overlay */

    #overlay {
      height:100%;
      left:0;
      position:relative;
      top:0;
      transition:background-color 300ms ease;
      width:100%;
    }

    .fade { background-color:rgba(0,0,0,.85) !important }


    /* Full size video and fall back */

    #hero-vid {
      backface-visibility:hidden;
      background:url("img/IMG_3148_1.jpg") no-repeat scroll 0 0 #000;
      background-size:cover;
      bottom:0;
      height:auto;
      min-height:100%;
      min-width:100%;
      perspective:1000;
      position:fixed;
      right:0;
      width:auto;
      z-index:-1;
    }

    #hero-pic {
      display:block;
      height:auto;
      width:100%;
    }


    /* Content Styles */

    #title {
      backface-visibility:hidden;
      perspective:1000;
      width:100%;
      color: #000;
      position:absolute;
      margin-top:-200px;
      margin-left:-400px;
      top:50%;
      left:50%;

    }

    #title h1 {
      font-family: "Label", sans-serif;
      font-size:6em;
    }

    #buttons {
      font-family: "Label", sans-serif;
      font-size: 2.5em;
      margin-top: 1em;
    }

    #buttons a {
     color: black;
     margin-right: .5em;
   }

/*   form {
    margin-top: 25px;
   }
   #loginButton {
    background-size: 100%;
    background-color: Transparent;
    border: none;
    outline: none;
   }

   #dologin {
    background-color: black;
    color: white;
   }

  .error {
    color: red;
  }*/
  /* Media Queries */

  @media only screen and (max-width:768px) {
    #overlay { height:auto; }
  }


  /* Visibility Helpers */

  @media only screen and (min-width:769px) {
    .visible-mobile,.visible-tablet,.hidden-desktop { display:none !important; }
  }

  @media only screen and (min-width:480px) and (max-width:768px) {
    .visible-mobile,.hidden-tablet,.visible-desktop { display:none !important; }
  }

  @media only screen and (max-width:479px) {
    .hidden-mobile,.visible-tablet,.visible-desktop { display:none !important; }
  }
</style>

<script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>

</head>

<body>
  <div id="overlay">
    <div id="title"><h1>Mementos</h1><h1>from the U.S.</h1>
<!--           <form method = "post" action = "login.php">
          <input type="hidden" name="action" value="do_login">
           <input type = "text" id = "login" placeholder = "Username" name = "username" autofocus value="?php print $username; ?>">
           <input type = "password" id = "password" name = "password" placeholder = "Password">
           <input type = "submit" class="btn btn-default" id = "dologin" value = "Login">
         </form> -->
<!--          ?php
         if ($message) {
          print "<p>$message</p>";
         }
            if ($error) {
                print "<p class=\"error\">$error</p>";
            }
        ?> -->
      </div>
    </div>
    <video class="visible-desktop" id="hero-vid" poster="img/IMG_3148_1.jpg" autoplay loop muted>
      <source type="video/mp4" src="img/IMG_3148_1.mp4"></source>
    </video>
    <img id="hero-pic" class="hidden-desktop" src="img/IMG_3148_1.jpg" alt="">
  </div>
<script src="js/index.js"></script>

</body>
</html>