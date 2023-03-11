const randomHexa = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  console.log("#" + n.slice(0, 6));
  return "#" + n.slice(0, 6);
};
window.randomizeColorCodes = () => {
  const colorCodes = document.querySelectorAll(".color_code");
  colorCodes.forEach((code) => {
    code.textContent = randomHexa();
  });
};

window.addEventListener("load", updateColorCodes);
