import { execSync } from 'child_process';
import yargs from 'yargs';

import { getProjectsDir, getRootDir, runTests } from './helpers';

type HandlerArgv = {
  _: Array<string>;
  exclude?: Array<string | number>;
  [x: string]: unknown;
  $0: string;
};

export function handler(argv: HandlerArgv) {
  let excludeDirs = argv.exclude;
  let dirName = argv._[0];
  let rootDir = getRootDir(dirName);

  // eslint-disable-next-line no-console
  console.log(
    // NOTE: Use chalk later
    '>> Running pre-push hook for testing related package to the commits',
  );

  let projects = getProjectsDir(rootDir).filter(
    (p) => !excludeDirs?.includes(p),
  );
  let changedDirs = execSync('git diff master..HEAD --name-only').toString();

  runTests({ rootDir, projects, changedDirs });
}

let argv = yargs.option('exclude', {
  type: 'array',
  desc: 'Exclude one or more project directory',
}).argv;

handler(argv);
