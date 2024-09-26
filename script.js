const toggler = document.getElementById("nav-toggler")
const sidebar = document.querySelector(".sidebar");

toggler.onclick  = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 768) {
      sidebar.classList.toggle("collapsed");
    } else {
      sidebar.classList.toggle("active");

      // remove collapsed class from sidebar
      sidebar.classList.remove("collapsed");
    }
}

// for innerdropdown

const innerToggler = document.querySelectorAll(".inner-toggle");


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

    // Toggle the clicked item's dropdown
    target.classList.toggle("open");
  };
});
