<script>
  document.addEventListener('DOMContentLoaded', ()) = {}
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link = ){
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.textContent.toLowerCase();

        switch(page) {
          case 'home':
            alert('ไปที่หน้า Home');
            break;
          case 'tournament':
            alert('ไปที่หน้า Tournament');
            break;
          case 'pages':
            alert('ไปที่หน้า Pages');
            break;
          case 'news':
            alert('ไปที่หน้า News');
            break;
          case 'contact':
            alert('ไปที่หน้า Contact');
            break;
          default:
            console.log('Page not found');
        }
      })
    }
  
</script>
