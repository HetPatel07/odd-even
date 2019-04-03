var p = document.getElementById('p');
console.log(p);
var count = 0;
var count1 = 0;

function submit() {

    var h1 = document.getElementsByTagName('h1')[0].innerHTML;

    var h1 = parseInt(h1);
    console.log(typeof h1);

    for (i = 1; i <= h1; i++) {
        if (i % 2 == 0) {
            count++;
        } else {
            count1++;
        }
    }
    p.innerHTML = 'EVEN :' + count + '<br>ODD :' + count1;

    count = 0;
    count1 = 0;
}
