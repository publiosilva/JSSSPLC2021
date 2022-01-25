const samples = require('./samples.json');
const { evaluateMaintainability } = require('./evaluate-maintainability');

function test100() {
    const sample = samples[0];

    console.time('Test100');
    evaluateMaintainability(sample);
    console.timeEnd('Test100');
}

test100();
