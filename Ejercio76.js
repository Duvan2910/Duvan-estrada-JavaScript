var arr =  document.getElementsByClassName("demo");
//accessing the second element
arr[1].innerHTML = "Hi";

<p>hi</p>
<p>hello</p>
<p>hi</p>
<script>
var arr = document.getElementsByTagName("p");
for (var x = 0; x < arr.length; x++) {
  arr[x].innerHTML = "Hi there";
}
</script>

<p>Hi there</p>
<p>Hi there</p>
<p>Hi there</p>