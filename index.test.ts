import * as prettier from 'prettier';
import { expect, test, describe } from 'bun:test';

describe(`prettier Configuration`, () => {
  test(`config should be resolvable`, async () => {
    const configFilePath = await prettier.resolveConfigFile(`./.prettierrc`);

    if (!configFilePath) {
      throw new Error(`Config file not found`);
    }

    const parseConfig = async () => prettier.resolveConfigFile(configFilePath);

    expect(parseConfig).not.toThrow();
    expect(await parseConfig()).not.toBeNull();
  });
});
