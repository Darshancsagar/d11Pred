import React from "react";
import MatchDetail from "../components/MatchCards/MatchDetail/MatchDetail";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import grayMatter from "gray-matter";

const MatchId = (props) => {
  console.log(props);
  return <MatchDetail matchContent={props.matchContent} />;
};

export async function getStaticPaths() {
  const matchFiles = fs.readdirSync(
    path.join(process.cwd(), "dreamPredictions")
  );
  console.log("mf", matchFiles);
  const paths = matchFiles.map((filename) => ({
    params: { id: path.parse(filename).name },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  console.log("id", params);
  const filePath = path.join(process.cwd(), "dreamPredictions", `${id}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  // Parse frontmatter and content using gray-matter
  const parsedContent = grayMatter(fileContents);
  const matchContent = parsedContent.content;

  return {
    props: {
      matchContent,
    },
  };
}
export default MatchId;
