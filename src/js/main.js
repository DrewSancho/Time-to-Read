// (function () {
//     var time = document.getElementsByClassName('time-to-read');
//     var x = document.querySelector('p');
//     function timeToRead (x) {
//         var minutes = Math.ceil(x.textContent.split(' ').length / 230);
//         if (minutes === 0) {
//             minutes = 1;
//         }
//         return minutes;
//     };
//     var minutes = timeToRead(x);
//     time[0].innerHTML = 'This article will take ' + minutes + ' minutes to read.';
// })();

(function () {
    var time = document.getElementsByClassName('time-to-read');
    var x = document.querySelectorAll('p');
    var y = Array.prototype.slice.call(x);
    // var minutes = wordcount() / 230;
    var wordCount = y.reduce(function (a, b) {
        return a + b.textContent.split(' ').length;
    }, 0);
    var minutes = Math.ceil(wordCount / 230);
    time[0].innerHTML = 'This article will take ' + minutes + ' minutes to read.';
})();