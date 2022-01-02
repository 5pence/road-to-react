import React, { useEffect } from "react";
import "./App.css";
import List from "./components/List";


const App = () => {
  const [stories, setStories] = React.useState([]);

  const fetchStories = () => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then((response) => response.json())
      .then((storyIds) => {
        storyIds.slice(0, 100).map((id) => {
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then((response) => response.json())
            .then((data) => {
              if (data.url) {
                setStories((old) => [...old, data]);
              }
            });
        });
      });
  };

  // this useEffect is simply used to fire fetchStories when the page loads
  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <hr />
      <List list={stories} />
    </div>
  );
};

export default App;
