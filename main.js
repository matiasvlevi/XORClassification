let dataset = [];
let datasetSize = 500;
const wnx = 150;
const wny = 150;
const buffer = 0;

const nn = new Dann(2,1);
nn.addHiddenLayer(12,'tanH');
nn.makeWeights();
nn.lr = 0.01;

function setup() {
    createCanvas(wnx,wny+buffer);
    initData();
}
function draw() {
    background(51);
    drawSections();
    for (data of dataset) {
        let input = [
            map(data.pos.x,0,wnx,0,1),
            map(data.pos.y,0,wny,0,1)
        ];
        let output = [
            data.type
        ];
        nn.backpropagate(input,output);
        data.render(nn.outs[0]);
    }
}
