import { getSystemInfo } from '@src/system-info.js';

function displaySystemInfo(): void {
  const info = getSystemInfo();
  console.info('Current System Information:');
  console.info(`Operating System: ${info.platform}`);
  console.info(`Architecture: ${info.architecture}`);
  console.info(`Number of CPUs: ${info.cpuCount.toString()}`);
  console.info(`Total Memory: ${info.totalMemory}`);
  console.info(`Free Memory: ${info.freeMemory}`);
  console.info(`System Uptime: ${info.uptime}`);
}

displaySystemInfo();
