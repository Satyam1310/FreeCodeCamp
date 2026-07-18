const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textInput.addEventListener("input", function () {
  // Trim the text if it exceeds 50 characters
  if (textInput.value.length > 50) {
    textInput.value = textInput.value.slice(0, 50);
  }

  // Get the current character count
  const currentCount = textInput.value.length;

  // Update the counter
  charCount.textContent = `Character Count: ${currentCount}/50`;

  // Change text color to red when count reaches 50
  if (currentCount >= 50) {
    charCount.style.color = "red";
  } else {
    charCount.style.color = "black";
  }
});