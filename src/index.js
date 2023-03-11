const randomHexa = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};
window.randomizeColorCodes = () => {
  const colorPickers = document.querySelectorAll(".color-picker");
  const colorBackground = document.querySelectorAll(".color");

  colorPickers.forEach((colorPicker, index) => {
    const colorCode = colorPicker.querySelector(".color_code");
    const newHexa = randomHexa();
    colorCode.textContent = newHexa;
    colorBackground[index].style.backgroundColor = newHexa;

    // Add click event listener to each color picker element
    colorPicker.addEventListener("click", () => {
      const range = document.createRange();
      range.selectNodeContents(colorCode);

      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);

      document.execCommand("copy");

      selection.removeAllRanges();

      colorCode.textContent = "COPIÉ !";

      setTimeout(() => {
        colorCode.textContent = newHexa;
      }, 500);
    });
  });
};

let isLoaded = false;
const randomizeColorCodesOnce = () => {
  if (!isLoaded) {
    randomizeColorCodes();
    isLoaded = true;
  }
};

window.addEventListener("load", randomizeColorCodesOnce);
