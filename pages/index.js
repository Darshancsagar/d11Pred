import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

import HomeDetail from "../components/HomePage/HomeDetail";
import { getAllMatches } from "../utils/DreamPredication";
import SEO from "../components/SEO/Seo";

export default function Home(props) {
  const { posts } = props;
  return (
    <div>
      <SEO
        title="Dream11  Prediction Website"
        description="Get the latest Dream11 predictions and analysis on our website. Best Dream11 prediction online website. "
      />
      <HomeDetail posts={posts} />
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllMatches()
    .map((post) => {
      // Convert the Date object to an ISO 8601 string
      const isoDate = post.data.date?.toISOString();

      // Return the post with the date as a string
      return {
        ...post,
        data: {
          ...post.data,
          date: isoDate,
        },
      };
    })
    .sort((a, b) => {
      // Sort in descending order based on the date
      return new Date(b.data.date) - new Date(a.data.date);
    });
  return {
    props: {
      posts: posts,
    },
  };
}
