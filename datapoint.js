function initData() {
    for (let i = 0; i < datasetSize/4; i++) {
        let x = random(0,wnx/2);
        let y = random(0,wny/2);
        let t = distrib(x,y);
        dataset.push(new Data(x,y,t));
    }
    for (let i = 0; i < datasetSize/4; i++) {
        let x = random(0,wnx/2);
        let y = random((wny/2),wny);
        let t = distrib(x,y);
        dataset.push(new Data(x,y,t));
    }
    for (let i = 0; i < datasetSize/4; i++) {
        let x = random(wnx/2,wnx);
        let y = random(0,wny/2);
        let t = distrib(x,y);
        dataset.push(new Data(x,y,t));
    }
    for (let i = 0; i < datasetSize/4; i++) {
        let x = random(wnx/2,wnx);
        let y = random(wny/2,wny);
        let t = distrib(x,y);
        dataset.push(new Data(x,y,t));
    }
}
function drawSections() {
    noStroke();
    fill(255,100,0,50);
    rect(wnx/2,0,wnx/2,wny/2)
    rect(0,wny/2,wnx/2,wny/2)
    fill(0,255,100,50);
    rect(wnx/2,wny/2,wnx/2,wny/2)
    rect(0,0,wnx/2,wny/2)
}
function distrib(x,y) {
    let t = ''
    if (x > wnx/2 && y < wny/2 || x < wnx/2 && y > wny/2) {
        t = 1;
    } else {
        t = 0;
    }
    return t;
}
class Data {
    constructor(x,y,t) {
        this.pos = createVector(x,y);
        this.type = t;
    }
    render(t) {
        noStroke();
        if (t > 0.5) {
            fill(255,100,0);
        } else {
            fill(0,255,100);
        }
        ellipse(this.pos.x,this.pos.y,2,2);
    }
}
