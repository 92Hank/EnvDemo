import fs from 'fs';
import path from 'path';
import { execSync, exec } from 'child_process';


const execSyncWrapper = (command) => {
  let output = null;
  try {
    output = execSync(command).toString().trim().split(/\r?\n/);
  } catch (error) {
    console.error(error);
  }
  return output;
}

const main = () => {
  let gitTag = execSyncWrapper("git describe --tags --abbrev=0");
  // let gitTag = execSyncWrapper("git tag --sort=v:refname");
  // let gitTag = execSyncWrapper("git describe --tags --abbrev=0");

  const obj = {
    gitTag,
  };

  const filePath = path.resolve('src', 'gitTagInfo.json');
  const fileContents = JSON.stringify(obj);

  fs.writeFileSync(filePath, fileContents);
  console.log(`Wrote the following contents to ${filePath}${fileContents}`);
};

main();