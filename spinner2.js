const animate = '|/-\|/-\|'
let delay = 100;

for (const char of animate) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);

  delay += 200;
};