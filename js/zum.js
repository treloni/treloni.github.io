const imageBlock = document.querySelector('.product__image-icon');

imageBlock.addEventListener('mousemove', (e) => zumPhoto(e));

function zumPhoto(event) {
    if (event.target.getAttribute('data-photo') === '') {
        const previewImage = document.querySelector('.product__image-main')
        const image = previewImage.querySelector('img')
        image.src = event.target.getAttribute('src')
    }
}