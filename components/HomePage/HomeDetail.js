import React from "react";
import styles from "./Home.module.css";
import Image from "next/image";
import MatchCards from "../MatchCards/MatchCards";
import { v4 as uuid } from "uuid";
import { getAllMatches } from "../../utils/DreamPredication";

const HomeDetail = (props) => {
  const { posts } = props;

  const PostsData = posts.map((props) => {
    return props.data;
  });

  return (
    <div className={styles.hero}>
      <h1 className={styles.head}>Your Best Dream11 Predictor</h1>

      <p className={styles.about}>
        This is online dream11 predictor which gives suggesstions to dream11
        teams
      </p>
      <h1>Please select matches you want prediction and analysis</h1>
      <MatchCards posts={PostsData} />
    </div>
  );
};

export default HomeDetail;
