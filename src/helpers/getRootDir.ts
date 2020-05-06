export function getRootDir(dirName: string, mockCWD?: string) {
  try {
    let cwd = process.cwd();
    if (process.env.NODE_ENV === 'test') {
      cwd = mockCWD ?? '';
    }

    if (!cwd.includes(dirName)) {
      throw Error('Directory not found');
    }

    return `${cwd.split(dirName)[0]}${dirName}`;
  } catch (e) {
    throw Error(e);
  }
}
