import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getMatchById = (id) => {
  const filePath = path.join(process.cwd(), "dreamPredictions", `${id}.md`);
  const matchContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(matchContent);

  return { content, data };
};

export const getAllMatches = () => {
    console.log("HI")
  const matchDirectory = path.join(process.cwd(), "dreamPredictions");
  const matchFiles = fs.readdirSync(matchDirectory);

  const allMatches = matchFiles.map((filename) => {
    const filePath = path.join(matchDirectory, filename);
    const matchContent = fs.readFileSync(filePath, "utf8");
    const { content, data } = matter(matchContent);

    console.log("File:", filename);
    console.log("Content:", content);
    console.log("Data:", data);
    return { content, data };
  });

  return allMatches;
};
