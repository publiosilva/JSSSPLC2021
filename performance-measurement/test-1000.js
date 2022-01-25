const samples = require('./samples.json');
const { evaluateMaintainability } = require('./evaluate-maintainability');

function test1000() {
    const sample = samples[0];

    console.time('Test1000');
    evaluateMaintainability(sample);
    console.timeEnd('Test1000');
}

test1000();
