import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

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
    let gitTag = "Test";
    let gitTagWithDate = execSyncWrapper(`git log -1 --format=%ai --date=short ${gitTag}`);

    const obj = {
        gitTag,
        gitTagWithDate
    };

    const filePath = path.resolve('src', 'gitTagVersion.json');
    const fileContents = JSON.stringify(obj);

    fs.writeFileSync(filePath, fileContents);
    console.log(`Wrote the following contents to ${filePath}${fileContents}`);
}

main();