export function createCard(value) {
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
                value.fullstack
                  ? `<h4 class="job-item-title">Fullstack</h4>`
                  : ""
              }
              ${
                value.midweight
                  ? `<h4 class="job-item-title">Midweight</h4>`
                  : ""
              }
              ${value.pyton ? `<h4 class="job-item-title">Python</h4>` : ""}
              ${value.react ? `<h4 class="job-item-title">React</h4>` : ""}
              </div>
              <button data-id="${
                value.id
              }" class="remove" type="submit"><i class="fa-solid fa-trash"></i></button>
            </div>`;
}
