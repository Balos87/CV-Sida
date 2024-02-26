document.addEventListener('DOMContentLoaded', function() 
{

    // Responsive 'hamburger' menu
    document.querySelector('.hamburger').addEventListener('click', function() 
    {
        const navbar = document.getElementById('navbar');
        if (navbar.style.display === 'block') 
        {
            navbar.style.display = 'none';
        }
        else 
        {
            navbar.style.display = 'block';
        }
    });

    // active nav highlighter
    const links = document.querySelectorAll('#navbar a');
    const currentUrl = window.location.pathname.split('/').pop();

    links.forEach(link => 
    {
        if (link.getAttribute('href') === currentUrl) 
        {
            link.classList.add('active');
        }
    });

    // Rotating image animation
    const image = document.getElementById('spinnableImage');

    image.addEventListener('click', function() 
    {
        this.classList.toggle('rotate');
    });

    // Easter-egg event for changing background
    let h2 = document.getElementById('easter-egg1')

    h2.addEventListener('click', function()
    {
        document.body.style.backgroundImage = "url('pictures/easteregg1.jpg')";
        document.body.style.backgroundSize = 'cover'
        document.body.style.backgroundPosition = 'center'
    });

    // Easter-egg event for 1337 secret keyboard combo
    let keyboardType = '';
    const easterEggCode = '1337';

    document.addEventListener('keyup', (keyboardEvent) => 
    {
        keyboardType += keyboardEvent.key;
        if (keyboardType.includes(easterEggCode)) 
        {
            easterEggModalPopUp();
        }
    });

    function easterEggModalPopUp() 
    {
        const easterEggModal = document.getElementById('modalWindowEasterEgg');
        const closeButton = document.getElementsByClassName('close')[0];

        easterEggModal.style.display = 'block';

        closeButton.onclick = function()
        {
            easterEggModal.style.display = 'none';
        }
    }

});
