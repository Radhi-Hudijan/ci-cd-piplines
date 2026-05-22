const fs = require('fs');

try {
  const name = process.env.INPUT_NAME || 'test-custom-action';
  console.log(`Hello, ${name}. We appreciate your business!`);

  const timestamp = new Date().toISOString();
  console.log(`Greeting issued at: ${timestamp}`);

  const outputPath = process.env.GITHUB_OUTPUT;
  if (outputPath) {
    fs.appendFileSync(outputPath, `timestamp=${timestamp}${require('os').EOL}`);
  }
} catch (error) {
  console.error(error.message);
  process.exit(1);
}