const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};

// Modal close function
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};

document.addEventListener("DOMContentLoaded", function () {
  const convertBtn = document.getElementById("convertBtn");
  const celsiusInput = document.getElementById("celsius");
  const resultOutput = document.getElementById("result");

  convertBtn.addEventListener("click", function () {
    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
      const fahrenheit = (celsius * 9/5) + 32;
      resultOutput.textContent = `${celsius.toFixed(2)}°C is ${fahrenheit.toFixed(2)}°F`;
    } else {
      resultOutput.textContent = "Please enter a valid temperature in Celsius.";
    }
  });
});