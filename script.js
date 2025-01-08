function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Copy to clipboard function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard: ' + text);
    });
}

// Toggle visibility of sections
function toggleSection(id) {
    const section = document.getElementById(id);
    if (section.style.display === 'none') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}