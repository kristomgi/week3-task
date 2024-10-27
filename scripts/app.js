// Select movie poster
let moviePoster = document.querySelector('.movie-poster');

// Select modal window layer
let modal = document.querySelector('#myModal');

// Select close button
let closeBtn = document.querySelector('.closeBtn');

// Modal window img
let modalImage = document.querySelector('.movie-poster-model');

moviePoster.addEventListener('click', () => { 
    modal.style.display = 'block';
    modalImage.src = moviePoster.src;
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});    

window.addEventListener('click', (event) => {
    if(event.target === modal) {
        modal.style.display = 'none';
    }
});
