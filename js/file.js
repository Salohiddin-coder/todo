// var checkBox = document.getElementById('cb');

// var theme = window.localStorage.getItem('data-theme');
// if(theme) document.documentElement.setAttribute('data-theme', theme);
// checkBox.checked = theme == 'dark' ? true : false;

// checkBox.addEventListener('change', function () {
//   if(this.checked){
//     document.documentElement.setAttribute('data-theme', 'dark');
//     window.localStorage.setItem('data-theme', 'dark');
//   } else {
//     document.documentElement.setAttribute('data-theme', 'light');
//     window.localStorage.setItem('data-theme', 'light');
//   }
// });

const themeToggle = document.querySelector("#theme-toggle");

const currentTheme = localStorage.getItem("theme");
var pageTheme = document.body;

let isDark = true

if (currentTheme == "dark") {
  pageTheme.classList.add("dark-theme");
  themeToggle.innerText="🌞";
} else {
    themeToggle.innerText = "🌚"
}

function themeMode() {
    isDark = !isDark;
    isDark ? themeToggle.innerText = "🌚" : themeToggle.innerText = "🌞";
    pageTheme.classList.toggle("dark-theme");

    let theme = "light";
    if (pageTheme.classList.contains("dark-theme")) {
      theme = "dark";
    }
    localStorage.setItem("theme", theme);
}

themeToggle.addEventListener("click", themeMode)
