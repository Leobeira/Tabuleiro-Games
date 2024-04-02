function showImage(src) {
    var img = document.getElementById(src.split('/')[2].split('.')[0]);
    img.src = src;
    img.style.display = 'block';
}