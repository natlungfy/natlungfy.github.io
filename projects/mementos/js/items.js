    function json() {
      var output = "";
      $.get("http://ec2-54-208-197-167.compute-1.amazonaws.com/PublicChallenges/Challenge9/webService.php?content=data&format=json", function(data) {
        for(var i=0; i < data.length;i++) {
          output += "<li>"+data[i].name + " was a " + data[i].diet + "</li>";
        }

        $("#content").html(output);
          });
          $("#content").html("Loading...");
        
    }


 var tooltip = document.querySelector('.tooltip');

 [].forEach.call(document.querySelectorAll('img'),function(item) {
 	  // attach mouseenter event
  item.addEventListener('mouseenter', function() {
    var temp, output = "";
    
          $.get("data.json", function(data) {
        for(var i=0; i < data.length;i++) {
          temp = "img/items/" + data[i].filename;
          if (temp == item.getAttribute('src')) {
            output += "<h3>" + data[i].name + "</h3><p class=\"loc\">" + data[i].location + "</p><p>" + data[i].desc + "</p>";
          }
        }

        tooltip.innerHTML = output;
          });
          tooltip.innerHTML = "Loading...";
    tooltip.style.display = 'block';
  });
  
  item.addEventListener('mousemove', function(e) {
    tooltip.style.top = e.clientY + 'px';
    tooltip.style.left = e.clientX + 'px';
  });
  
  // when mouse leave hide the tooltip
  item.addEventListener('mouseleave', function(){
    tooltip.style.display = 'none';
  });
 });