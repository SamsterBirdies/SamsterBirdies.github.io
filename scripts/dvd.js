//modified from a learning resource, but its simple enough.
function startDVD(){
	let ball = {
		x: Math.floor(Math.random() * 200),
		y: Math.floor(Math.random() * 200),
		xInc: 1.5,
		yInc: 1.5,
		img: document.getElementById("dvd"),
		
		// Draw the ball
		draw: function() {            
			context.drawImage(this.img, this.x, this.y);
		},
		// Move the ball
		move: function() {
			this.x += this.xInc;
			this.y += this.yInc;
			// Bounce of the left and right canvas edges
			if (this.x < 0 || this.x + this.img.width > canvas.width) {
				this.xInc *= -1;
			}
			if (this.y < 0 || this.y + this.img.height > canvas.height) {
				this.yInc *= -1;
			}
		}
	};
	let canvas = document.getElementById("dvdCanvas");
	let context = canvas.getContext("2d");
	ball.draw();
	let animFrameId;
	function drawFrame() {   
		context.save();
		context.beginPath();
		context.clearRect(0, 0, canvas.width, canvas.height);
		ball.draw();
		ball.move();
		context.restore();
		animFrameId = window.requestAnimationFrame(drawFrame);
	}
	drawFrame();
}