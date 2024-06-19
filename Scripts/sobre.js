document.addEventListener("DOMContentLoaded", function() {
    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(container => {
        container.addEventListener('click', () => {
            const nameElement = container.querySelector('p');
            const iconsElement = container.querySelector('.icons');
            const imageElement = container.querySelector('img');
            const nameVisible = !nameElement.classList.contains('hidden');
            nameElement.classList.toggle('hidden');
            imageElement.classList.toggle('rotate');
            const iconsVisible = !iconsElement.classList.contains('hidden');
            iconsElement.classList.toggle('hidden');
        });
    });
});