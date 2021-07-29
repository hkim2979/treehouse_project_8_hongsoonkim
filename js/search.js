let input = document.getElementById("search");

function searchEmployees() {
  let data, txtValue;
  let filter = input.value.toUpperCase();
  let article = main.getElementsByTagName("article");
  let name = document.querySelectorAll(".emp-name");

  for (let i = 0; i < article.length; i++) {
    data = article[i];

    if (data) {
      txtValue = name[i].textContent;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        article[i].style.display = "";
      } else {
        article[i].style.display = "none";
      }
    }
  }
}
input.addEventListener("keyup", searchEmployees);
