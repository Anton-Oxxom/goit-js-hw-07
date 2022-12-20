import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector(".gallery");

const galleryImg = galleryItems.map((element) => 
  
`<div class="gallery__item">
<a class="gallery__link" href="${element.original}">
<img
    class="gallery__image"
    src="${element.preview}"
    data-source= "${element.original}"
    alt="${element.description}"
/>
</a>
</div>`).join("");

galleryEl.innerHTML = galleryImg;

galleryEl.addEventListener("click", (event) => {
    event.preventDefault();

    const imgAttribute = event.target.getAttribute("data-source");

   const showImg = basicLightbox.create(`
    <img src="${imgAttribute}" />
`, {
});
    
showImg.show();
});

