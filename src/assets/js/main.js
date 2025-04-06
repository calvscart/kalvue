const d = document,
  $inputs = d.querySelectorAll(".input"),
  $labels = d.querySelectorAll("label");

// Function to handle the label selection when the input has a value
for (let i = 0; i < $inputs.length; i++) {
  if ($inputs[i].value) {
    $labels[i].classList.add("selected");
  }
}

// Focus function to add or remove 'selected' class to labels
const focus = (num) => {
  for (let i = 0; i < $labels.length; i++) {
    if ($labels[i].dataset.label === num) {
      $labels[i].classList.add("selected");
    } else {
      if ($inputs[i].value === "") {
        $labels[i].classList.remove("selected");
      }
    }
  }
};

// Event listeners for focus and focusout
for (let i = 0; i < $inputs.length; i++) {
  $inputs[i].addEventListener("focus", (e) => {
    let dataInput = $inputs[i].dataset.input;
    focus(dataInput);
  });
  $inputs[i].addEventListener("focusout", (e) => {
    focus(-1);
  });
}

// Form submission event handler
d.addEventListener("submit", (e) => {
  e.preventDefault();

  const $loader = d.querySelector(".loader"),
    $pop = d.querySelector(".pop"),
    $form = d.querySelector("form"),
    $response = d.querySelector(".response");

  // Show loader and pop-up
  $pop.classList.remove("none");
  $loader.classList.remove("none");

  // AJAX request to send form data
  fetch("https://formsubmit.co/ajax/alvintungga17@gmail.com", {
    method: "POST",
    body: new FormData(e.target),
  })
    .then((response) =>
      response.ok ? response.json() : Promise.reject(response)
    )
    .then((json) => {
      $loader.classList.add("none");
      $response.innerHTML = `<p>${json.message}</p>`;
      $form.reset();
      // Show message sent notification
      const messageSent = document.getElementById("message-sent");
      messageSent.classList.add("show");
      // Hide after 3 seconds
      setTimeout(() => {
        messageSent.classList.remove("show");
      }, 3000);
    })
    .catch((error) => {
      console.log(error);
      $loader.classList.add("none");
      $response.innerHTML = `<p>There was an error sending your message. Please try again later.</p>`;
    })
    .finally(() => {
      setTimeout(() => {
        $pop.classList.add("none");
        $response.innerHTML = "";
      }, 6000);
    });
});

// Optional: Reset form fields when the page loads
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact-form");
    const messageSent = document.getElementById("message-sent");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Show message sent notification
        messageSent.classList.add("show");

        // Hide after 3 seconds
        setTimeout(() => {
            messageSent.classList.remove("show");
        }, 3000);

        // Optional: Reset form fields
        form.reset();
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
      // Here you can add your form submission logic (e.g., AJAX request)

      // Show the checklist
      document.getElementById('checklist').style.display = 'block';
      // Optionally, reset the form
      this.reset();
    });