import sublinks from "./data.js";

const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebarWrapper = document.querySelector(".header__sidebar-wrapper");
const sidebar = document.querySelector(
  ".header__sidebar-wrapper--sidebar__links"
);

// const sidebarEl = document.getElementsByTagName("a::after");
const sidebarHeader = document.getElementsByClassName("sidebar-header");
const links = Array.from(
  document.querySelectorAll(".header__nav--links__item")
);
const sidebarSublinks = document.getElementsByClassName("sidebar-sublinks");
const submenu = document.querySelector(".header__submenu");
const showcase = document.querySelector(".showcase");
const nav = document.querySelector(".header__nav");
// Updating copyright year
const copyrightYear = document.querySelector(".copyright");
copyrightYear.innerHTML = `&copy; copyright All rights reserved ${new Date().getFullYear()}`;

// hide/show sidebar
toggleBtn.addEventListener("click", () => {
  sidebarWrapper.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  sidebarWrapper.classList.remove("show");
});

// set sidebar
sidebar.innerHTML = sublinks
  .map((item) => {
    const { links, page } = item;
    if (links.length === 0) {
      return `<a  href="${page === "home" ? "/" : "#" + page}">
      ${page}</a>`;
    }

    // trying something new
    return `<details>
      <summary class="sidebar-header">${page}</summary>
      <div class="sidebar-sublinks">
  ${links
    .map((link) => {
      return `<a href="${link.url}">
      ${link.label}</a>`;
    })
    .join("")}

  </div>
    </details>`;
  })
  .join("");

[...sidebarHeader].forEach((sublink, i) => {
  sublink.addEventListener("click", function () {
    sidebarSublinks[i].classList.toggle("showsublinks");
  });
});

showcase.addEventListener("mouseover", function (e) {
  submenu.classList.remove("show");
});
nav.addEventListener("mouseover", function (e) {
  if (!e.target.classList.contains("header__nav--links__item")) {
    submenu.classList.remove("show");
  }
});

sidebarWrapper.addEventListener("click", () =>
  sidebarWrapper.classList.remove("show")
);
