const rapl = require('./rapl.js');

rapl.start("Main")

for (let i = 0; i < 10000; i++) {
    rapl.start("Call");
    rapl.stop("Call");
}

rapl.stop("Main")