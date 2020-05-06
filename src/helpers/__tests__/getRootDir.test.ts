import { getRootDir } from '../getRootDir';

describe('getRootDir', () => {
  it('should get the right path', () => {
    let rootDir = getRootDir(
      'myProjects',
      '/project/monorepo/myProjects/packages/something',
    );
    expect(rootDir).toBe('/project/monorepo/myProjects');
  });

  it('should get the right path when there is duplicate name', () => {
    let rootDir = getRootDir(
      'myProjects',
      '/project/monorepo/myProjects/packages/myProjects',
    );
    expect(rootDir).toBe('/project/monorepo/myProjects');
  });

  it('should throw an error when dir not found', () => {
    try {
      getRootDir(
        'somethingThatShouldNotExists',
        '/project/monorepo/myProjects/packages/something',
      );
      // To check whether the test case catches the right error
      throw new Error('Wrong error');
    } catch (e) {
      expect(e.message).toBe('Error: Directory not found');
    }
  });
});
