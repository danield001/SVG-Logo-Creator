class shape {
    constructor(){
        this.color = "";
    }
    setColor(colorVar){
        this.color = colorVar;
    }
};

class triangle extends shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${answers.logoColor"/>`
    }
}