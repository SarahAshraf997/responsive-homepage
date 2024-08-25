document.addEventListener("DOMContentLoaded", function () {
  // Get the dropdown toggle and content elements
  var dropdownToggle = document.getElementById("dropdownToggle");
  var dropdownContent = document.getElementById("dropdownContent");

  // Toggle the dropdown content
  dropdownToggle.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents event bubbling
    var isExpanded = this.getAttribute("aria-expanded") === "true";

    if (isExpanded) {
      dropdownContent.classList.remove("show");
      this.setAttribute("aria-expanded", "false");
    } else {
      dropdownContent.classList.add("show");
      this.setAttribute("aria-expanded", "true");
    }
  });

  // Close dropdown if clicking outside
  document.addEventListener("click", function (event) {
    if (
      !dropdownToggle.contains(event.target) &&
      !dropdownContent.contains(event.target)
    ) {
      dropdownContent.classList.remove("show");
      dropdownToggle.setAttribute("aria-expanded", "false");
    }
  });
});
