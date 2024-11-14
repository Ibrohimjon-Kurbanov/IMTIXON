import { validate } from "./validate.js";
import { createCard } from "./createcard.js";
//form
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

    let isExist = validate(urlInput, nameInput, jobInput);
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
