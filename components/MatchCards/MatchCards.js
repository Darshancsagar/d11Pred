import React from "react";
import classes from "./MatchCards.module.css";
import MatchCardItem from "./MatchCardItem";

const MatchCards = (props) => {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <MatchCardItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default MatchCards;
