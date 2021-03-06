function Deco(game) {
  this.game = game;
  this.height = 40;
  this.minWidth = this.game.canvas.width * 0.1;
  this.maxWidth = this.game.canvas.width * 0.2;
  this.width =
    this.minWidth + Math.floor(Math.random() * (this.maxWidth - this.minWidth));
  this.x =
    40 + Math.floor(Math.random() * (this.game.canvas.width - 80 - this.width));
  this.y = this.game.canvas.height;

  this.img = new Image();
  this.img.src = "img/energybar.png";
}

Deco.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};

Deco.prototype.move = function() {
  this.y -= 3;
};
