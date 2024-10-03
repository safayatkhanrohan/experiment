const toggler = document.getElementById("nav-toggler");
const sidebar = document.querySelector(".sidebar");
const innerToggler = document.querySelectorAll(".inner-toggle");

const inputFileds = document.querySelectorAll("input");

// initialize datepicker
$(".datepicker").datepicker({
  format: "mm/dd/yyyy",
  autoclose: true,
});

inputFileds.forEach((input) => {
  const label = input.nextElementSibling;

  input.addEventListener("input", function () {
    if (input.value.trim() !== "") {
      label.classList.add("typed");
    } else {
      label.classList.remove("typed");
    }
  });
});

toggler.onclick = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth > 768) {
    sidebar.classList.toggle("collapsed");
  } else {
    sidebar.classList.toggle("active");

    sidebar.classList.remove("collapsed"); // for mobile view
  }
};

// for innerdropdown
innerToggler.forEach((item) => {
  item.onclick = (e) => {
    e.preventDefault();

    const target = item.nextElementSibling;

    // Close all other open dropdowns, but not the currently clicked one
    document.querySelectorAll(".inner-drop").forEach((dropdown) => {
      if (dropdown !== target && dropdown.classList.contains("open")) {
        dropdown.classList.remove("open");
      }
    });

    // remove all rotated icons
    document.querySelectorAll(".toggle-icon").forEach((icon) => {
      if (icon !== item.querySelector(".toggle-icon")) {
        icon.classList.remove("rotate");
      }
    });

    // Toggle the clicked item's dropdown
    target.classList.toggle("open");
    item.querySelector(".toggle-icon").classList.toggle("rotate");
  };
});


// to make sure that input is focused when clicking on the input-group-text
$(".input-group-text").click((e) => {
  e.currentTarget.parentElement.querySelector("input").focus();
});
