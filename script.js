function convert()
 {
  let c = document.getElementById("celsius").value;
  let f = (9/5 * c) + 32;
  document.getElementById("result").innerHTML = "Fahrenheit: " + f;
}