let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

const container = document.querySelector(".banner-container");

const dots = document.querySelectorAll(".dot");

function showSlide() {
  container.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Update dot

  dots.forEach(function (dot) {
    dot.classList.remove("active");
  });

  dots[currentSlide].classList.add("active");
}

/* NEXT */

function nextSlide() {
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide();
}

/* PREVIOUS */

function prevSlide() {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  showSlide();
}

/* CLICK DOT */

function goToSlide(index) {
  currentSlide = index;

  showSlide();
}

function openBuyForm(movie, price) {
  document.getElementById("movieName").value = movie;
  document.getElementById("moviePrice").value = "$" + Number(price).toFixed(2);

  document.getElementById("orderMessage").textContent = "";
  document.getElementById("buyFormModal").classList.add("show");
}

function closeBuyForm() {
  document.getElementById("buyFormModal").classList.remove("show");
}

document.getElementById("buyForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("customerName").value;
  const movie = document.getElementById("movieName").value;
  const price = document.getElementById("moviePrice").value;
  const payment = document.getElementById("paymentMethod").value;

  const message = document.getElementById("orderMessage");

  message.textContent = `Thank you, ${name}! Your order for ${movie} (${price}) has been recorded. Payment: ${payment}.`;

  message.style.display = "block";
  message.style.color = "green";
  message.style.fontSize = "16px";
  message.style.marginTop = "15px";
});
