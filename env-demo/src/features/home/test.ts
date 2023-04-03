import { execSync } from "child_process";


export const execSyncWrapper = (command: any) => {
    let output = null;
    try {
        output = execSync(command).toString();
    } catch (error: any) {
        console.error(error);
    }
    return output;
}