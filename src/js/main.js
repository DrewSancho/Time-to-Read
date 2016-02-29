(function () {
    var time = document.getElementsByClassName('time-to-read');
    var x = document.querySelector('p');
    function timeToRead (x) {
        var minutes = Math.floor(x.textContent.split(' ').length / 230);
        if (minutes === 0) {
            minutes = 1;
        }
        return minutes;
    };
    var minutes = timeToRead(x);
    time[0].innerHTML = 'This article will take ' + minutes + ' minutes to read.';
})();