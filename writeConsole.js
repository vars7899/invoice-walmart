function write(data) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(data);
}

module.exports = { write };
