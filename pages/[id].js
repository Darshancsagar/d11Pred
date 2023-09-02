import React from "react";
import MatchDetail from "../components/MatchCards/MatchDetail/MatchDetail";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import grayMatter from "gray-matter";
import SEO from "../components/SEO/Seo";

const MatchId = (props) => {
  return (
    <>
      <SEO
        title={`dream11 Prediction of-${props.data.title}`}
        description={`dream11 Prediction of-${props.data}`}
      />
      <MatchDetail matchContent={props.matchContent} />
    </>
  );
};

export async function getStaticPaths() {
  const matchFiles = fs.readdirSync(
    path.join(process.cwd(), "dreamPredictions")
  );

  const paths = matchFiles.map((filename) => ({
    params: { id: path.parse(filename).name },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const filePath = path.join(process.cwd(), "dreamPredictions", `${id}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  // Parse frontmatter and content using gray-matter
  const parsedContent = grayMatter(fileContents);
  const matchContent = parsedContent.content;
  const data = parsedContent.data;
  const isoDate = data.date?.toISOString();
  const newData = { ...data, date: isoDate };

  return {
    props: {
      matchContent: matchContent,
      data: newData,
    },
  };
}
export default MatchId;
