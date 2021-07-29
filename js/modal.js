const modal = document.querySelector(".modal");

const displayModal = (index) => {
  let {
    name,
    dob,
    phone,
    email,
    location: { city, street, state, postcode },
    picture,
  } = employeeArr[index];

  let fullName = `${name.first} ${name.last}`;
  let fullAddress = `${street.number} ${street.name}, ${state} ${postcode}`;
  let editDob = new Date(dob.date);
  editDob = `${editDob.getMonth()}/${editDob.getDate()}/${editDob.getYear()}`;

  dialog.innerHTML = `
	  <div class="modal-content">
		<div class="closeDiv">
		  <span class="close">&times;</span>
		</div>
		<div class="turn">
		  <span class="prev">&lt;</span>
		  <span class="next">&gt;</span>
		</div>
		<div class="modal-info">
		  <img src="${picture.large}" alt="${fullName}" />
		  <h4>${fullName}</h4>
		  <p>${email}</p>
		  <p>${city}</p>
		  <div class="line-break"></div>
		  <p>${phone}</p>
		  <p>${fullAddress}</p>
		  <p>Birthday: ${editDob}</p>
		  <p id="index">${index}</p>
		</div>
	  </div>
	`;
  modal.style.display = "block";
};

const mainEvent = (e) => {
  if (e.target !== main) {
    let card = e.target.closest(".card");
    let index = card.getAttribute("data-index");

    displayModal(index);
  }
};

main.addEventListener("click", mainEvent);

dialog.addEventListener("click", (e) => {
  if (e.target.classList.contains("close")) {
    modal.style.display = "none";
  }
});

// when click outside, modal close
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Next employee shows when click button
dialog.addEventListener("click", (e) => {
  if (e.target.classList.contains("next")) {
    let index = document.getElementById("index");
    let value = index.textContent;
    value = Number(value);
    let skip = value + 1;

    if (skip > 10) {
      modal.style.display = "none";
    }
    displayModal(skip);
  }
});

// Previous employee shows when click button
dialog.addEventListener("click", (e) => {
  if (e.target.classList.contains("prev")) {
    let index = document.getElementById("index");
    let value = index.textContent;
    value = Number(value);
    let skip = value - 1;

    if (skip < 1) {
      modal.style.display = "none";
    }
    displayModal(skip);
  }
});
