<div id="demo">
   <p id="p1">this is a paragraph.</p>
   <p id="p2">this is another paragraph.</p>
</div>

<script>

    var p = document.createElement("p");
    var node = document.createTextNode("This is new");
    p.appendChild(node);

    var parent = document.getElementById("demo");
    var child = document.getElementById("p1");
    parent.replacechild(p, child);
</script>