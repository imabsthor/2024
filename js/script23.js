window.onload = function() {
    // Canvas 1: Scaling Shapes
    let canvas1 = document.getElementById('canvas1');
    let ctx1 = canvas1.getContext('2d');

    // Draw a scaled rectangle
    ctx1.save();
    ctx1.scale(1.5, 1.5);
    ctx1.fillStyle = 'blue';
    ctx1.fillRect(10, 10, 50, 50);
    ctx1.restore();

    // Draw a scaled triangle
    ctx1.save();
    ctx1.scale(0.5, 0.5);
    ctx1.fillStyle = 'green';
    ctx1.beginPath();
    ctx1.moveTo(200, 50);
    ctx1.lineTo(250, 150);
    ctx1.lineTo(150, 150);
    ctx1.closePath();
    ctx1.fill();
    ctx1.restore();

    // Canvas 2: Rotating Shapes
    let canvas2 = document.getElementById('canvas2');
    let ctx2 = canvas2.getContext('2d');

    // Draw a rotated rectangle
    ctx2.save();
    ctx2.translate(100, 100); // Move the origin to the center of the canvas
    ctx2.rotate(Math.PI / 4); // Rotate 45 degrees
    ctx2.fillStyle = 'red';
    ctx2.fillRect(-25, -25, 50, 50); // Draw rectangle centered at the new origin
    ctx2.restore();

    // Draw a rotated triangle
    ctx2.save();
    ctx2.translate(200, 200); // Move the origin to the center of the canvas
    ctx2.rotate(Math.PI / 6); // Rotate 30 degrees
    ctx2.fillStyle = 'orange';
    ctx2.beginPath();
    ctx2.moveTo(0, -50);
    ctx2.lineTo(43, 25);
    ctx2.lineTo(-43, 25);
    ctx2.closePath();
    ctx2.fill();
    ctx2.restore();
}
