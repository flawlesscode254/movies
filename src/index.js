import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  displayMovies();
});

const getData = () => {
  fetch("https://api.tvmaze.com/search/shows?q=girls")
    .then((res) => res.json())
    .then((final) => {
      console.log(final);
      final.forEach((item) => {
        displayMovies(item.show.name, item.show.type);
      });
    });
};

getData();

const displayMovies = (title, type) => {
  if (title && type) {
    let mainContainer = document.getElementById("main");
    let div = document.createElement("div");
    div.className = "li";
    div.innerHTML = `
              <div class="card" style="width: 18rem; margin-top: 20px;">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">
                ${type}
              </p>
              <div style="display: flex; justify-content: space-between; flex-direction: row; align-items: center;">
                <i class="bi bi-suit-heart" style="cursor: pointer"></i>
                <a href="#" class="btn btn-primary">Comments</a>
              </div>    
            </div>
          </div>
    `;
    mainContainer.appendChild(div);
  }
};
