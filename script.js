let stars = document.getElementsByClassName("star");
let output = document.getElementById("output");

function setRate(n) {
  remove();
  for (let i = 0; i < n; i++) {
    switch (n) {
      case 1:
        cls = "one";
        break;
      case 2:
        cls = "two";
        break;
      case 3:
        cls = "three";
        break;
      case 4:
        cls = "four";
        break;
      case 5:
        cls = "five";
        break;
    }
    stars[i].className = "star " + cls;
  }
  output.innerText = "Rating is: " + n + "/5";
}

function remove() {
  let i = 0;
  while (i < 5) {
    stars[i].className = "star";
    i++;
  }
}
