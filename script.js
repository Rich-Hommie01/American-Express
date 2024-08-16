document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".inn").forEach((box) => {
    box.addEventListener("click", () => {
      // Get the target ID from the data attribute
      const targetId = box.getAttribute("data-target");
      const targetContent = document.getElementById(targetId);

      // Check if the clicked box is already active
      const isActive = box.classList.contains("ihh");

      // Remove active class from all boxes
      document
        .querySelectorAll(".inn")
        .forEach((b) => b.classList.remove("ihh"));

      // Hide all content
      document.querySelectorAll(".hidden-container").forEach((content) => {
        content.style.display = "none";
        content.classList.remove("active");
      });

      // If the clicked box was not active, show its content
      if (!isActive) {
        box.classList.add("ihh");
        targetContent.style.display = "block";
        targetContent.classList.add("active");
      }
    });
  });

  const vgSearch = document.getElementById("vgSearch");
  const searchContainer = document.getElementById("searchContainer");

  // Attach the click event listener to the searchContainer
  vgSearch.addEventListener("click", function () {
    // Toggle the display property of the hiddenDiv
    if (
      searchContainer.style.display === "none" ||
      searchContainer.style.display === ""
    ) {
      searchContainer.style.display = "block";
    } else {
      searchContainer.style.display = "none";
    }
  });

  // Add an event listener to the input box
  document.getElementById("searchBox").addEventListener("input", function () {
    const searchIcon = document.getElementById("searchIcon");
    const cancelIcon = document.getElementById("cancelIcon");

    // If there is text in the input box, show the cancel icon and hide the search icon
    if (this.value.length > 0) {
      searchIcon.style.display = "none";
      cancelIcon.style.display = "block";
    } else {
      // If the input box is empty, show the search icon and hide the cancel icon
      searchIcon.style.display = "block";
      cancelIcon.style.display = "none";
    }
  });

  // Add an event listener to the cancel icon
  document.getElementById("cancelIcon").addEventListener("click", function () {
    const searchBox = document.getElementById("searchBox");
    const searchIcon = document.getElementById("searchIcon");
    const cancelIcon = document.getElementById("cancelIcon");

    // Clear the input box
    searchBox.value = "";
    // Show the search icon and hide the cancel icon
    searchIcon.style.display = "block";
    cancelIcon.style.display = "none";
    // Refocus the input box
    searchBox.focus();
  });

  const togglePasswordButton = document.getElementById("togglePasswordd");
  const passwordInput = document.getElementById("password");

  if (togglePasswordButton && passwordInput) {
    togglePasswordButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default button behavior

      const type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
      this.textContent = type === "password" ? "Show" : "Hide";
    });
  } else {
    console.error("Elements not found");
  }
});
