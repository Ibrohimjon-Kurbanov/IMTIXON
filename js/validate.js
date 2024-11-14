export function validate(urlInput, nameInput, jobInput) {
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
  const selects = document.querySelectorAll("select");
  for (const select of selects) {
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


