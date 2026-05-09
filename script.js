//your JS code here. If required.
   const openBtn = document.getElementById("openModal");
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close-modal");

    // Open Modal
    openBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });

    // Close Modal with button
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Close Modal when clicking outside
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });