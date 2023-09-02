import React from "react";
import styles from "./Home.module.css";
import Image from "next/image";
import MatchCards from "../MatchCards/MatchCards";
import { v4 as uuid } from "uuid";
import { getAllMatches } from "../../utils/DreamPredication";

const DUMMY_POSTS = [
  {
    id: `1`,
    title: "MY NEW",
    image: "download.jpg",
    excerpt: "WElcome to match cards",
    date: "2023- 11- 12",
  },
  {
    id: `2`,
    title: "MY NEW",
    image: "download.jpg",
    excerpt: "WElcome to match cards",
    date: "2023- 11- 12",
  },
  {
    id: `3`,
    title: "MY NEW",
    image: "download.jpg",
    excerpt: "WElcome to match cards",
    date: "2023- 11- 12",
  },
  {
    id: `4`,
    title: "MY NEW",
    image: "download.jpg",
    excerpt: "WElcome to match cards",
    date: "2023- 11- 12",
  },
  {
    id: `5`,
    title: "MY NEW",
    image: "download.jpg",
    excerpt: "WElcome to match cards",
    date: "2023- 11- 12",
  },
  {
    id: `6`,
    title: "MY NEW",
    image: "download.jpg",
    excerpt: "WElcome to match cards",
    date: "2023- 11- 12",
  },
  {
    id: `7`,
    title: "MY NEW",
    image: "download.jpg",
    excerpt: "WElcome to match cards",
    date: "2023- 11- 12",
  },
];

const HomeDetail = (props) => {
  const { posts } = props;
  console.log("pp", props.posts);
  const PostsData = posts.map((props) => {
    return props.data;
  });
  console.log("d", PostsData);
  return (
    <div className={styles.hero}>
      <h1 className={styles.head}>Your Best Dream11 Predictor</h1>
      {/* <div className={styles.image}>
        <Image
          className={styles.img}
          width={200}
          height={150}
          src="/download.jpg"
        />
      </div> */}
      <p>
        This is online dream11 predictor which gives suggesstions to dream11
        teams
      </p>
      <MatchCards posts={PostsData} />
    </div>
  );
};

export default HomeDetail;
