import { basicLog } from '../index';

test('basicLog', () => {
  expect(basicLog('Hello world', 'myFile.ts', 23)).toBe(`📜 myFile.ts at line 23 - Hello world`);
})