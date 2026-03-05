process.stdout.write("\x1b[?1000h\x1b[?1006h\n");
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', (key: string) => {
  if (key === '\u0003') {
    process.stdout.write("\x1b[?1000l\x1b[?1006l");
    process.exit(0);
  }
  console.log(JSON.stringify(key));
});
setTimeout(() => process.exit(0), 1000);
