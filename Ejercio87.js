<body onload="doSomething()"></body>

window.onload ​= function() {

    ​//some code
  
}

<input type="text" id="name" onchange="change()">
<script>

    function change() {
    var x = document.getElementById("name");
    x.value= x.value.toUppercase();
        
    }
</script>
  