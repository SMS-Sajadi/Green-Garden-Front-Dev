// Switcher
function toggleSwitcher() {
    var i = document.getElementById('style-switcher');
    if (i.style.left === "-189px") {
        i.style.left = "0px";
    } else {
        i.style.left = "-189px";
	}
};

function setColor(theme) {
    document.getElementById('color-opt').href = '../assets/styles/colors/' + theme + '.css';
    toggleSwitcher(false);
};

function setTheme(theme) {
    document.getElementById('theme-opt').href = '../assets/styles/' + theme + '.min.css';
    toggleSwitcher(false);
};