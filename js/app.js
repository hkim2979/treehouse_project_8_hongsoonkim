const SEARCH_URL = "https://randomuser.me/api/?nat=us&results=12";

const main = document.getElementById("main");
const dialog = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

let employeeArr = [];

retreiveEmployees(SEARCH_URL);

async function retreiveEmployees(url) {
  const response = await fetch(url);
  const data = await response.json();

  appendEmployees(data.results);
}

function appendEmployees(employees) {
  employeeArr = employees;

  employeeArr.forEach((employee, index) => {
    let { name, email, location, picture } = employee;
    let fullName = `${name.first} ${name.last}`;
    let employeeArticle = document.createElement("article");

    employeeArticle.classList.add("card");
    employeeArticle.setAttribute("data-index", `${index}`);

    employeeArticle.innerHTML = `
      <div class="emp-avatar">
          <img src="${picture.large}" alt="image of ${fullName}" />
      </div>
      <div class="emp-info">
        <h4 class="emp-name">${fullName}</h4>
        <p>${email}</p>
        <p class="location">${location.state}</p>
      </div>
  	`;
    main.appendChild(employeeArticle);
  });
}
