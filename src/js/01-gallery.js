import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

function createGalleryItemMarkup({ preview, original, description }) {
  return `
  <li class="gallery__item">
  <a class="gallery__link" href='${original}'>
    <img
      class="gallery__image"
      src='${preview}'
      data-source='${original}'
      alt='${description}'
    />
  </a>
</li>`;
}

function renderGallery() {
  const galleryMarkup = galleryItems
    .map(item => createGalleryItemMarkup(item))
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
}

renderGallery();

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});


