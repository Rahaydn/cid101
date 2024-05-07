//導覽列按鈕
        document.getElementById('btnHam').addEventListener('click', function () {
        var menu = document.getElementById('menu');
        menu.classList.toggle('show');
        });
        
//絲帶控制
    const ribbon = document.querySelector('.ribbon');
    const ribbons = document.querySelector('.ribbons');

    function handleResize() {
        if (window.innerWidth >= 768) {
            ribbon.style.right = '0px';
            ribbons.style.right = '0px';
            ribbon.removeEventListener('mouseout', handleMouseOut);
            ribbons.removeEventListener('mouseout', handleMouseOut);
        } else {
            ribbon.style.right = '-100px';
            ribbons.style.right = '-100px';
            ribbon.addEventListener('mouseout', handleMouseOut);
            ribbons.addEventListener('mouseout', handleMouseOut);
        }
    }
    function handleMouseOut() {
        ribbon.style.right = '-100px';
        ribbons.style.right = '-100px';
    }
    handleResize();

    window.addEventListener('resize', () => {
        handleResize();
    });

    ribbon.addEventListener('mouseover', () => {
        ribbon.style.right = '0px';
    });

    ribbon.addEventListener('mouseout', handleMouseOut);

    ribbons.addEventListener('mouseover', () => {
        ribbons.style.right = '0px';
    });

    ribbons.addEventListener('mouseout', handleMouseOut);