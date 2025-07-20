document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("readMoreModal");
  const closeBtn = document.querySelector(".close-btn");
  const modalTitle = document.getElementById("modal-title");
  const modalText = document.getElementById("modal-text");

  document.querySelectorAll(".read-more-btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      modalTitle.textContent = this.dataset.title;
      modalText.textContent = this.dataset.text;
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });

  const form = document.getElementById("contact-form");
  const statusDiv = document.getElementById("form-status");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        statusDiv.textContent = "✅ Thank you! Your message has been sent.";
        statusDiv.style.color = "#14b8a6";
        form.reset();
      } else {
        statusDiv.textContent = "❌ Oops! There was a problem. Please try again.";
        statusDiv.style.color = "red";
      }
    } catch (error) {
      statusDiv.textContent = "❌ Error sending message. Please try later.";
      statusDiv.style.color = "red";
    }
  });
});

function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}
