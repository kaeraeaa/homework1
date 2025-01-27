import { galleryItems } from './app.js';

const galleryContainer = document.querySelector('.js-gallery');
const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `
  )
  .join('');

galleryContainer.innerHTML = galleryMarkup;


const lightbox = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const closeButton = document.querySelector('[data-action="close-lightbox"]');
const overlay = document.querySelector('.lightbox__overlay');

galleryContainer.addEventListener('click', onGalleryClick);
closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
window.addEventListener('keydown', onKeyDown);

function onGalleryClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const imageSource = event.target.dataset.source;
  const imageAlt = event.target.alt;
  openModal(imageSource, imageAlt);
}

function openModal(src, alt) {
  lightbox.classList.add('is-open');
  lightboxImage.src = src;
  lightboxImage.alt = alt;
}

function closeModal() {
  lightbox.classList.remove('is-open');
  lightboxImage.src = '';
  lightboxImage.alt = '';
}

function onKeyDown(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}


let currentIndex = 0;

function onGalleryClick1(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  currentIndex = galleryItems.findIndex(
    item => item.original === event.target.dataset.source
  );
  const imageSource = event.target.dataset.source;
  const imageAlt = event.target.alt;
  openModal(imageSource, imageAlt);
}

function onKeyDown1(event) {
  if (event.code === 'Escape') {
    closeModal();
  } else if (event.code === 'ArrowRight') {
    navigateGallery(1);
  } else if (event.code === 'ArrowLeft') {
    navigateGallery(-1);
  }
}

function navigateGallery(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = galleryItems.length - 1;
  } else if (currentIndex >= galleryItems.length) {
    currentIndex = 0;
  }

  const { original, description } = galleryItems[currentIndex];
  lightboxImage.src = original;
  lightboxImage.alt = description;
}

function openModall(src, alt) {
    lightbox.classList.add('is-open');
    lightboxImage.src = src;
    lightboxImage.alt = alt;
    document.body.style.overflow = 'hidden';
  }
  
  function closeModall() {
    lightbox.classList.remove('is-open');
    lightboxImage.src = '';
    lightboxImage.alt = '';
    document.body.style.overflow = '';
  }
  