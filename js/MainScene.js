import Player from './Player.js'

export default class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    preload() {
        console.log("preload")
        Player.preload(this);

    }

    create() {
        console.log("create")
        this.player = new Player({scene:this, x:0 , y:0, texture:'female', frame:'walk-down-2'});
        // this.add.existing(this.player);
        this.player.inputKeys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
        })

    }

    update() {
        this.player.update();
    }
}

