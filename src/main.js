import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const markup = images
  .map(
    image => `
      <li class="gallery-item">
        <a class="gallery-link" href="${image.original}">
          <img
            class="gallery-image"
            src="${image.preview}"
            alt="${image.description}"
          />
        </a>
      </li>
    `
  )
  .join('');

gallery.innerHTML = markup;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});