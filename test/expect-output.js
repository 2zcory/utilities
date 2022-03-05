export class testExpectOuput {
  constructor(cb) {
    this.testSamples = [];
    this.cb = cb;
  }
  addSample(sample) {
    if (!sample.input || !sample.expect) return;
    this.testSamples.push(sample);
  }
  run() {
    this.testSamples.forEach(s => {
      console.log(`\x1b[1m🍓 ${this.cb.name}: \x1b[0m`);
      console.log(
        `\x1b[7m\x1b[47m\x1b[30m input: ${s.input},`,
        `output: ${this.cb(s.input)},`,
        `expect: ${s.expect} \x1b[0m`,
        this.cb(s.input) === s.expect ? '\x1b[32m✔️passed \x1b[0m' : '\x1b[31m❌failed\x1b[0m'
      );
      console.log('');
    })
  }
}

export default testExpectOuput;