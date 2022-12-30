import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery")
gallery.classList.add("gallery")

function onClouse(event) {
console.log(event)
}

gallery.addEventListener("click", onClikcImg)


function makeItemsMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt=""title="${description}" />
        </a>
  `;
    })
        .join(``);
}

const makeItems = makeItemsMarkup(galleryItems)

gallery.innerHTML = makeItems

const gallery1 = new SimpleLightbox('.gallery a', {captionDelay: 250});

function onClikcImg(event) {
        event.preventDefault()
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }
}