document.addEventListener('DOMContentLoaded', function() {

    const allButtons = document.querySelectorAll('.searchBtn');
    const searchBar = document.querySelector('.searchBar');
    const searchInput = document.getElementById('searchInput');
    const searchClose = document.querySelector('searchClose');

    for (var i = 0; 1 < allButtons.length; i++) {
        allButtons[i].addEventListener('click', function() {
            searchBar.style.visibility = 'visible';
            searchBar.classList.add('open');
            this.setAttribute('area-expanded', 'true');
            searchInput.focus();
        });
    }

}) ;

