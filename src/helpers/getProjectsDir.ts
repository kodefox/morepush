import fs from 'fs';

export function getProjectsDir(path: string) {
  let contents = fs.readdirSync(path);
  return contents.filter((content) =>
    fs.statSync(`${path}/${content}`).isDirectory(),
  );
}
