var counter = document.getElementById('count-el');
var incrementBtn = document.getElementById('increment-btn');
var saveBtn = document.getElementById('save-btn');
var saveEl = document.getElementById('save-el');

incrementBtn.addEventListener('click', function(event) {
    counter.textContent++;

}, false)

saveBtn.addEventListener('click', function() {
    console.log(counter.innerText)

    function save() {
        var currentCount = counter.innerText + " - ";
        saveEl.textContent += currentCount;
        counter.textContent = 0;
    }
    save()
})