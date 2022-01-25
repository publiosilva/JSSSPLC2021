const samples = require('./samples.json');
const { evaluateMaintainability } = require('./evaluate-maintainability');

function test10() {
    const sample = samples[0];

    console.time('Test10');
    evaluateMaintainability(sample);
    console.timeEnd('Test10');
}

test10();
