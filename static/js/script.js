document.querySelectorAll('.vietti-header').forEach(header => {
    const content = header.nextElementSibling;
    header.addEventListener('click', () => {
        const isOpen = content.style.display === 'block';
        content.style.display = isOpen ? 'none' : 'block';
    });
});

const canvas = document.getElementById('noise');
const ctx = canvas.getContext('2d');

let noiseOpacity = 100;

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawNoise();
}

function drawNoise() {
    const imgData = ctx.createImageData(canvas.width, canvas.height);
    const pixels = imgData.data;
    for (let i = 0; i < pixels.length; i += 4) {
        pixels[i] = Math.random() * 255;
        pixels[i + 1] = Math.random() * 255;
        pixels[i + 2] = Math.random() * 255;
        pixels[i + 3] = Math.random() * noiseOpacity;
    }
    ctx.putImageData(imgData, 0, 0);
}

canvas.style.position = 'fixed';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.pointerEvents = 'none';
canvas.style.zIndex = '9999';

window.addEventListener('resize', resize);
resize();
