const { spawn } = require('child_process');

console.log('Starting Next.js dev server...');

const nextProcess = spawn('npx', ['next', 'dev'], {
  stdio: 'inherit',
  env: { ...process.env, NODE_ENV: 'development' }
});

nextProcess.on('error', (error) => {
  console.error('Failed to start Next.js:', error);
});

nextProcess.on('exit', (code, signal) => {
  console.log(`Next.js process exited with code ${code} and signal ${signal}`);
  if (signal) {
    console.log(`Process was killed by signal: ${signal}`);
  }
});

process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully...');
  nextProcess.kill('SIGTERM');
  process.exit(0);
});

// Keep the process alive
setInterval(() => {
  console.log(`Next.js is ${nextProcess.killed ? 'NOT' : 'still'} running at ${new Date().toISOString()}`);
}, 10000);