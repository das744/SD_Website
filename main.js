 const hamburgerMenu = document.getElementById('hamburger-menu'); 
        const menu = document.getElementById('menu'); 

        hamburgerMenu.addEventListener('click', () => {
            if (menu.classList.contains('closed')) {
                menu.classList.remove('closed'); 
                menu.classList.add('open'); 
            } else {
                menu.classList.remove('open'); 
                menu.classList.add('closed'); 
            }
        });
