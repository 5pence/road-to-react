import React from 'react';
import './App.css';
import List from './components/List';
import Search from './components/Search';

const App = () => {
  const stories = [
    {
      title: "React",
      url : "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url : "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    }
  ];

  // useState is a react hook 
  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || 'React'
  );

  // to trigger the side-effect each time the searchTerm changes using React useEffect hook instead of managing the side-effect in the (event) handler makes the app more robust as whereever and whenever the searchTerm state is updated via setSearchTerm, the browser's local storage will always be in sync with it. 
  React.useEffect(() => {
    localStorage.getItem('search', searchTerm);
  }, [searchTerm]);
  
console.log([searchTerm])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const searchedStories = stories.filter(story => story.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
    </div>
  )
}

export default App;
