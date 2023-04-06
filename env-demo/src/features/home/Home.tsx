import { Container, Typography } from "@mui/material";
import GitInfo from "react-git-info/macro";
import { execSyncWrapper } from "./test";
import gitTagInfo from "../../gitTagInfo.json";

export default function Home() {
  // let gitTag = "git tag --sort=v:refname | Select-Object -Last 1";

  let gitTag2 = execSyncWrapper(
    "git tag --sort=v:refname | Select-Object -Last 1"
  );
  console.log(gitTag2);
  // const logResult = execSync(gitTag).toString();
  console.log("Git tag: " + gitTag2);
  const gitInfo = GitInfo();
  console.log("Branch: " + gitInfo.branch);
  console.log("Tag: " + gitInfo.tags);
  console.log("Commit date: " + gitInfo.commit.date);
  console.log("Hash: " + gitInfo.commit.hash);
  console.log("Commit message: " + gitInfo.commit.message);
  console.log("shortHash: " + gitInfo.commit.shortHash);

  const githubTag =
    process.env.NODE_ENV === "development"
      ? gitTagInfo.gitTag + " - " + gitTagInfo.gitTagWithDate
      : gitTagInfo.gitTag;
  const tagVersion =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_TAG_VERSION +
        " " +
        process.env.REACT_APP_TAG_VERSION_DATE
      : process.env.REACT_APP_TAG_VERSION;
  return (
    <Container sx={{ flex: 1, justifyContent: "center" }}>
      <Container
        sx={{ flexDirection: "column", justifyContent: "space-between" }}
      >
        <Typography variant="h2">Home Page</Typography>
        <Typography variant="h4">
          {githubTag ? githubTag?.slice(0, -6) : "develop"}
        </Typography>
        <Typography variant="h4">
          From .env file: {tagVersion ? tagVersion?.slice(0, -6) : "develop"}
        </Typography>
      </Container>
      <Container sx={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Typography variant="h4">{gitInfo.branch}</Typography>
        <Typography variant="h4">{gitInfo.commit.hash}</Typography>
      </Container>
    </Container>
  );
}
