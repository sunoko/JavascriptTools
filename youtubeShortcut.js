(window.onload = function(){
    window.setTimeout("shortcutNogizaka()", 500)
})()

// base info
var baseUrl = "https://www.youtube.com/"
var today = "results?sp=EgIIAg%253D%253D&q="
var thisWeek = "results?sp=EgIIAw%253D%253D&q="
var thisMonth = "results?sp=EgIIBA%253D%253D&q="
var thisYear = "results?sp=EgIIBQ%253D%253D&q="
var href = window.location.href

// include shortcut.js
var script = document.createElement('script');
script.src = 'http://www.openjs.com/scripts/events/keyboard_shortcuts/shortcut.js';
document.body.appendChild(script);

function shortcutNogizaka(){
    var word = "おぎやはぎ"
    shortcut.add("Ctrl+Z",function() {
        window.location.href = baseUrl + thisWeek + encodeURI(word)
    })
    shortcut.add("Ctrl+X",function() {
        window.location.href = baseUrl + thisMonth + encodeURI(word)
    })
    shortcut.add("Ctrl+C",function() {
        window.location.href = baseUrl + thisYear + encodeURI(word)
    })
}