import { execSync } from 'child_process';

type RunTestsParams = {
  rootDir: string;
  projects: Array<string>;
  changedDirs: string;
};

export function runTests(params: RunTestsParams) {
  let { rootDir, projects, changedDirs } = params;
  for (let project of projects) {
    if (!changedDirs.includes(project)) {
      // eslint-disable-next-line no-console
      console.log(`>> No changes in ${project}. Skipping.`);
      continue;
    }

    // eslint-disable-next-line no-console
    console.log(
      // NOTE: Use chalk later
      `>> Will start testing ${project}`,
    );

    try {
      execSync(`cd ${rootDir}/${project} && yarn test`, {
        stdio: 'inherit',
      });
    } catch {
      break;
    }
  }
}
