import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as a}from"./assets/vendor-CgTBfC_f.js";const e=document.querySelector(".gallery"),i=images.map(l=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${l.original}">
          <img
            class="gallery-image"
            src="${l.preview}"
            alt="${l.description}"
          />
        </a>
      </li>
    `).join("");e.innerHTML=i;new a(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map
