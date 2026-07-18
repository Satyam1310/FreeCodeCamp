const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn");

// Add click event to every gallery image
galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Get the thumbnail image URL
    const thumbnailSrc = item.src;

    // Remove "-thumbnail" to get the full-size image
    const fullSizeSrc = thumbnailSrc.replace("-thumbnail", "");

    // Set the full-size image
    lightboxImage.src = fullSizeSrc;

    // Show the lightbox
    lightbox.style.display = "flex";
  });
});

// Close when the close button is clicked
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close when the lightbox background is clicked
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});