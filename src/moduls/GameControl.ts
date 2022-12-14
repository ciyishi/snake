import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from './Snake'


export default class GameControl {
    food: Food;
    scorePanel: ScorePanel;
    snake: Snake;
    direction: string = '';
    isLive = true;
    constructor() {
        this.food = new Food();
        this.scorePanel = new ScorePanel()
        this.snake = new Snake();
        this.init();
    }

    init() {
        document.addEventListener("keydown", this.keydownHandler.bind(this));
        this.run();
    }

    keydownHandler(e: KeyboardEvent) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            this.direction = e.key            
        }
    }

    run() {
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                Y -= 10;
                break;
            case 'ArrowDown':
            case 'Down':
                Y += 10;
                break;
            case 'ArrowLeft':
            case 'Left':
                X -= 10;
                break;
            case 'ArrowRight':
            case 'Right':
                X += 10;
                break;
        }
        console.log(X,Y);
        
        this.checkEat(X, Y);
        
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (error: any) {
            alert(error.message);
            this.isLive = false;
        }

        this.isLive && setTimeout(() => {
            this.run();
        }, 300 - (this.scorePanel.level - 1) * 20);
    }

    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            this.food.change();
            this.snake.addBody();
            this.scorePanel.addScore();
        }
    }
}