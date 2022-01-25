const samples = require('./samples.json');
const { evaluateMaintainability } = require('./evaluate-maintainability');

function test10000() {
    const sample = samples[0];

    console.time('Test10000');
    evaluateMaintainability(sample);
    console.timeEnd('Test10000');
}

test10000();
