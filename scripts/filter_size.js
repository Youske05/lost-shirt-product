(function () {

    const controlls = document.querySelectorAll('.filter__link');
    const activeClass ='filter__size_active';

    controlls.forEach(function (control) {

        control.addEventListener('click',function (e) {
            e.preventDefault();

            controlls.forEach(function (link) {
                link.closest('.filter__size').classList.remove(activeClass);
            });
            control.closest('.filter__size').classList.add(activeClass);

        });

    });

    const controlss = document.querySelectorAll('.link__circle');
    const activeClas = 'filter__circle_active';

    controlss.forEach(function (controlll) {
       controlll.addEventListener('click', function (i) {
           i.preventDefault();

           controlss.forEach(function (clink) {
              clink.closest('.filter__circle').classList.remove(activeClas);

           });
          controlll.closest('.filter__circle').classList.add(activeClas);
       });
    });

    var arr = ['tshirt_07.png','tshirt_08.png','tshirt_09.png','tshirt_10.png','tshirt_11.png'],
    black = document.querySelector('.t-shirts');
    black_circle = document.querySelector('.link__circle__black');
    black_circle.onclick = boom;
    function boom() {
        black.style.backgroundImage = 'url(./img/tshirts/' + arr[0] + ')';
    }
    white = document.querySelector('.t-shirts');
    white_circle = document.querySelector('.link__circle__white');
    white_circle.onclick = boom1;
    function boom1() {
        white.style.backgroundImage = 'url(./img/tshirts/' + arr[1] + ')';
    }
    green = document.querySelector('.t-shirts');
    green_circle = document.querySelector('.link__circle__green');
    green_circle.onclick = boom2;
    function boom2() {
        white.style.backgroundImage = 'url(./img/tshirts/' + arr[2] + ')';
    }
    blue = document.querySelector('.t-shirts');
    blue_circle = document.querySelector('.link__circle__blue');
    blue_circle.onclick = boom3;
    function boom3() {
        white.style.backgroundImage = 'url(./img/tshirts/' + arr[3] + ')';
    }
    red = document.querySelector('.t-shirts');
    red_circle = document.querySelector('.link__circle__red');
    red_circle.onclick = boom4;
    function boom4() {
        white.style.backgroundImage = 'url(./img/tshirts/' + arr[4] + ')';
    }



})();