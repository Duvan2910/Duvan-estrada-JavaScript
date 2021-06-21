<button onclick="show()">click me</button>
<script>

    function show () {
        alert("Ho there")
        
    }
</script>

var x = document.getElementById("demo");
x.onclick = function() {
    document.body.innerHTML = Date();
    
}