menuIcon = document.querySelector('#menu-icon');
navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classlist.toggle('bx-x');
    navbar.classList.toggle('active');
}


section = document.querySelectorAll('section');
navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
           top = window.scrolly;
           offset = sec.offsetTop - 100;
           height = sec.offsetHeight;
           id = sec.getAttribute('id');

           if(top >= offset && top < offset + height) {

            navLinks.forEach (links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
           }
    })
    header = document.querySelector('header');

    header.classlist.toggle('sticky',window.scrolly > 100);
}
