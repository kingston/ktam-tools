import { describe, expect, it } from 'vitest';

import { getSystemInfo } from '@src/system-info.js';

describe('getSystemInfo', () => {
  it('should return a platform', () => {
    const systemInfo = getSystemInfo();
    expect(systemInfo.platform).toBeTruthy();
  });
});
