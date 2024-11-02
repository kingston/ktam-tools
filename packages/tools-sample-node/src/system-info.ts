import os from 'node:os';

interface SystemInfo {
  platform: string;
  architecture: string;
  cpuCount: number;
  totalMemory: string;
  freeMemory: string;
  uptime: string;
}

export function getSystemInfo(): SystemInfo {
  return {
    platform: os.platform(),
    architecture: os.arch(),
    cpuCount: os.cpus().length,
    totalMemory: `${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
    freeMemory: `${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
    uptime: `${(os.uptime() / 60 / 60).toFixed(2)} hours`,
  };
}
