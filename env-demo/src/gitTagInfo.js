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

export default async function printGitTag({ github, context, core }) {
    // let gitTag = execSyncWrapper("git describe --tags --abbrev=0");
    // var gitTagWithDate = execSyncWrapper(`git log -1 --format=%ai --date=short ${gitTag}`);
    // let gitTag = execSyncWrapper("git tag --sort=v:refname");
    // let gitTag = execSyncWrapper("git describe --tags --abbrev=0");
    let gitTag = null;
    let gitTagWithDate = null;
    if (github.event.ref_type === "tag") {
        gitTag = github.event.ref
        gitTagWithDate = github.event.repository.updated_at
    }

    const obj = {
        gitTag,
        gitTagWithDate
    };

    const filePath = path.resolve('env-demo/src', 'gitTagVersion.json');
    const fileContents = JSON.stringify(obj);

    fs.writeFileSync(filePath, fileContents);
    console.log(`Wrote the following contents to ${filePath}${fileContents}`);
};

// module.exports = () => {
//     let gitTag = execSyncWrapper("git describe --tags --abbrev=0");
//     var gitTagWithDate = execSyncWrapper(`git log -1 --format=%ai --date=short ${gitTag}`);
//     // let gitTag = execSyncWrapper("git tag --sort=v:refname");
//     // let gitTag = execSyncWrapper("git describe --tags --abbrev=0");

//     const obj = {
//         gitTag,
//         gitTagWithDate
//     };

//     const filePath = path.resolve('src', 'gitTagVersion.json');
//     const fileContents = JSON.stringify(obj);

//     fs.writeFileSync(filePath, fileContents);
//     console.log(`Wrote the following contents to ${filePath}${fileContents}`);
// }

// const main = () => {
//     let gitTag = execSyncWrapper("git describe --tags --abbrev=0");
//     let gitTagWithDate = execSyncWrapper(`git log -1 --format=%ai --date=short ${gitTag}`);
//     // let gitTag = execSyncWrapper("git tag --sort=v:refname");
//     // let gitTag = execSyncWrapper("git describe --tags --abbrev=0");

//     const obj = {
//         gitTag,
//         gitTagWithDate
//     };

//     const filePath = path.resolve('src', 'gitTagVersion.json');
//     const fileContents = JSON.stringify(obj);

//     fs.writeFileSync(filePath, fileContents);
//     console.log(`Wrote the following contents to ${filePath}${fileContents}`);
// }

// main();
