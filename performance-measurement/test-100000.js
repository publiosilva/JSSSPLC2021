const samples = require('./samples.json');
const { evaluateMaintainability } = require('./evaluate-maintainability');

function test100000() {
    const sample = samples[0];

    console.time('Test100000');
    evaluateMaintainability(sample);
    console.timeEnd('Test100000');
}

test100000();
