document.addEventListener('DOMContentLoaded', function() {
    let c = ['white', 'black']; 

    let i = 0;

    function changeColor() {
        document.body.style.backgroundColor = c[i];
        document.getElementById('r').style.color = c[(i + 1) % c.length];
        i = (i + 1) % c.length;
        setTimeout(changeColor, 400);
    }

    function changeLetter() {
        let r = Math.floor(Math.random() * 26) + 65;
        let l = String.fromCharCode(r);
        document.getElementById('r').innerText = l;

        if (l === 'V') {
            window.location.href = 'https://xyl.lol/valentine';
        }

        setTimeout(changeLetter, 400);
    }

    changeColor();
    changeLetter();
});
