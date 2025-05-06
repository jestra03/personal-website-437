import { toHtmlElement } from "./toHtmlElement.mjs";

function prependNavBar() {
    const header = document.querySelector("header");
    const basePath = "/personal-website-437/public/";

    const element = toHtmlElement(`
    <h1><a href="..." class="link-text">Joshua Estrada</a></h1>
    <div id="right-controls">
      <label id="dark-mode-toggle">
        <input type="checkbox" id="mode-checkbox" autocomplete="off" />
        Dark mode
      </label>
      <button id="menu-button" aria-label="Toggle menu">☰</button>
    </div>
    <nav id="nav-links">
        <a class="link-text" href="${basePath}pages/about.html">About</a>
        <a class="link-text" href="${basePath}pages/hobbies.html">Hobbies</a>
        <a class="link-text" href="${basePath}pages/projects.html">Projects</a>
    </nav>
    `);

    header.prepend(element);

    const button = document.getElementById("menu-button");
    const navLinks = document.getElementById("nav-links");
    const headerEl = document.querySelector("header");

    button.addEventListener("click", () => {
        navLinks.classList.toggle("nav-visible");
    });

    document.body.addEventListener("click", (e) => {
        if (!headerEl.contains(e.target)) {
            navLinks.classList.remove("nav-visible");
        }
    });

    // dark mode toggle
    const checkbox = document.getElementById("mode-checkbox");

    // on toggle
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("dark-mode", "true");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("dark-mode", "false");
        }
    });

    // on load – restore mode
    const savedMode = localStorage.getItem("dark-mode");
    if (savedMode === "true") {
        checkbox.checked = true;
        document.body.classList.add("dark-mode");
    }
}
prependNavBar();
