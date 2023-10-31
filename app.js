document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.querySelector('.theme-switch input');
    const toggleIcon = document.getElementById('toggle-icon');
    const underCarouselElement = document.querySelector('.under-carousel');
    const bgGreyElements = document.querySelectorAll('.bg-grey');
    const navSwitchElement = document.getElementById('navSwitch');
    const footerElement = document.querySelector('.footer');

    function toggleTheme() {
        document.body.classList.toggle('dark-theme'); 

        if (document.body.classList.contains('dark-theme')) {
            underCarouselElement.style.backgroundColor = 'black';

            for (const bgGreyElement of bgGreyElements) {
                bgGreyElement.style.backgroundColor = 'black';
            }

            navSwitchElement.style.backgroundColor = 'white';
            navSwitchElement.style.setProperty('background-color', 'black', 'important');

            footerElement.style.backgroundColor = 'black'; // Красим футер в черный
            footerElement.style.setProperty('background-color', 'black', 'important');

            toggleIcon.innerHTML = '<i class="fa fa-moon-o"></i>';
            toggleIcon.querySelector('.toggle-text').textContent = 'Dark Mode';
        } else {
            underCarouselElement.style.backgroundColor = '';
            for (const bgGreyElement of bgGreyElements) {
                bgGreyElement.style.backgroundColor = '';
            }

            navSwitchElement.style.backgroundColor = 'black';
            navSwitchElement.style.setProperty('background-color', 'white', 'important');

            footerElement.style.backgroundColor = 'white'; // Красим футер в белый
            footerElement.style.setProperty('background-color', 'white', 'important');

            toggleIcon.innerHTML = '<i class="fa fa-sun-o"></i>';
            toggleIcon.querySelector('.toggle-text').textContent = 'Light Mode';
        }
    }

    themeSwitch.addEventListener('change', toggleTheme);

    if (localStorage.getItem('theme') === 'dark') {
        themeSwitch.checked = true;
        toggleTheme();
    }
});
