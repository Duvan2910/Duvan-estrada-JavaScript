<html>
    <body>
        <div id ="demo">

    <p>some text</p>
    <p>some other text</p>
        </div>

<script>
    var a = document.getElementById("demo");
    var arr = a.childnodes;
    for(var x=0;x<arr.length;x++) {
        arr[x].innerHTML = "new text";
    }

</script>
</body>
</html>