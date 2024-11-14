const form = document.querySelector("form");
const saveBtn = document.querySelector(".button");
const wrapper = document.querySelector(".job-wrapper");
// inputs
const urlInput = document.getElementById("input-url-image");
const nameInput = document.getElementById("input-company-name");
const jobInput = document.getElementById("input-job");
// checkbox
const checkboxNew = document.getElementById("new");
const checkboxFeatured = document.getElementById("featured");
const checkboxFullstack = document.getElementById("fullstack");
const checkboxMidweight = document.getElementById("midweight");
const checkboxPyton = document.getElementById("pyton");
const checkboxReact = document.getElementById("react");
// select
const day = document.getElementById("day");
const time = document.getElementById("time");
const country = document.getElementById("country");
// VALIDATE

function validate(urlInput, nameInput, jobInput) {
  if (urlInput.value.trim() === "") {
    alert("Iltimos, Logotip URL manzilini kiriting.");
    urlInput.focus();
    urlInput.style.outline = "1px solid red";
    return false;
  } else if (!/^https?:\/\//i.test(urlInput.value)) {
    alert(
      "Iltimos, haqiqiy URL manzilini (masalan, http:// yoki https://) kiriting."
    );
    urlInput.focus();
    urlInput.style.outline = "1px solid red";
    urlInput.value = "";
    return false;
  } else {
    urlInput.style.outline = "";
  }

  if (nameInput.value.trim() === "") {
    alert("Iltimos, Kompaniya nomini kiriting.");
    nameInput.focus();
    nameInput.style.outline = "1px solid red";
    return false;
  } else if (nameInput.value.trim().length <= 4) {
    alert("Kompaniya nomi kamida 5 belgidan iborat bo'lishi kerak.");
    nameInput.focus();
    nameInput.style.outline = "1px solid red";
    nameInput.value = "";
    return false;
  } else {
    nameInput.style.outline = "";
  }

  if (jobInput.value.trim() === "") {
    alert("Iltimos, Lavozimni kiriting.");
    jobInput.focus();
    jobInput.style.outline = "1px solid red";
    return false;
  } else if (jobInput.value.trim().length <= 3) {
    alert("Lavozim kamida 4 belgidan iborat bo'lishi kerak.");
    jobInput.focus();
    jobInput.style.outline = "1px solid red";
    jobInput.value = "";
    return false;
  } else {
    jobInput.style.outline = "";
  }
  const selectElements = document.querySelectorAll("form select");
  for (const select of selectElements) {
    if (select.value === "") {
      alert("Iltimos, barcha majburiy tanlovlarni bajaring.");
      select.focus();
      select.style.outline = "1px solid red";
      return false;
    } else {
      select.style.outline = "";
    }
  }
  return true;
}

function createCard(value) {
  return ` <div class="job-card">
            <div class="job-image">
              <img class="job-pic" src="${
                value.urlImage
              }" alt="image" width="88" height="88">
            </div>
            <div class="job-info">
              <h3 class="job-heading">${value.nameCompany} ${
    value.new ? '<span class="new">NEW</span>' : ""
  }${value.featured ? '<span class="featured">FEATURED</span>' : ""}
              </h3>
              <h3 class="job-title">${value.job}</h3>
              <div class="job-data">
                <h4 class="job-day">${value.day}</h4>
                <span class="dot"></span>
                <h4 class="job-time">${value.time}</h4>
                <span class="dot"></span>
                <h4 class="job-country">${value.country}</h4>
              </div>
            </div>
            <div class="job-items">
            ${
              value.fullstack ? `<h4 class="job-item-title">Fullstack</h4>` : ""
            }
            ${
              value.midweight ? `<h4 class="job-item-title">Midweight</h4>` : ""
            }
            ${value.pyton ? `<h4 class="job-item-title">Python</h4>` : ""}
            ${value.react ? `<h4 class="job-item-title">React</h4>` : ""}
            </div>
            <button data-id="${
              value.id
            }" class="remove" type="submit"><i class="fa-solid fa-trash"></i></button>
          </div>`;
}

function getDataLocalstorage() {
  return JSON.parse(localStorage.getItem("datas")) || [];
}

function removeItem() {
  let removeVakans = document.querySelectorAll(".remove");
  removeVakans.forEach((value) => {
    value.addEventListener("click", function () {
      let isDelete = confirm(
        "Rostdan ham vakansiyani o'chirishni xohlaysizmi?"
      );
      if (isDelete) {
        this.parentNode.remove();
        let id = this.getAttribute("data-id");
        if (id) {
          let datas = getDataLocalstorage();
          datas = datas.filter((value) => value.id != id);
          localStorage.setItem("datas", JSON.stringify(datas));
        }
      }
    });
  });
}

saveBtn &&
  saveBtn.addEventListener("click", function (e) {
    e.preventDefault();

    let isExist = validate(urlInput, nameInput, jobInput, day, time, country);
    if (!isExist) {
      return false;
    }

    let data = {
      urlImage: urlInput.value.trim(),
      nameCompany: nameInput.value.trim(),
      job: jobInput.value.trim(),
      new: checkboxNew.checked,
      featured: checkboxFeatured.checked,
      day: day.value,
      time: time.value,
      country: country.value,
      fullstack: checkboxFullstack.checked,
      midweight: checkboxMidweight.checked,
      pyton: checkboxPyton.checked,
      react: checkboxReact.checked,
      id: Date.now(),
    };

    let card = createCard(data);
    wrapper.innerHTML += card;
    form.reset();

    let datas = getDataLocalstorage();
    datas.push(data);
    localStorage.setItem("datas", JSON.stringify(datas));
    removeItem();
  });

document.addEventListener("DOMContentLoaded", () => {
  let datas = getDataLocalstorage();

  datas.forEach((item) => {
    let card = createCard(item);
    wrapper.innerHTML += card;
    removeItem();
  });
});
