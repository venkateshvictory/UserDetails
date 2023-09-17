import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from './components/Users'
import SingleComp from "./components/SingleComp";

function App() {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [albums, setAlbums] = useState([]);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  // assign a data into users variable :using useState array
  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchData(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data);
    };
    getUsers();
    const getPosts = async () => {
      const data = await fetchData(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(data);
    };
    getPosts();
    const getTodos = async () => {
      const data = await fetchData(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTodos(data);
    };
    getTodos();
    const getComments = async () => {
      const data = await fetchData(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setComments(data);
    };
    getComments();
    const getAlbums = async () => {
      const data = await fetchData(
        "https://jsonplaceholder.typicode.com/albums"
      );
      setAlbums(data);
    };
    getAlbums();
  }, []);

  const pendingTodos = todos.filter((data) => !data.completed);
  const completedTodos = todos.filter((data) => data.completed);

  return (
    <Router>
    <Routes>
      <Route
        path="/"
        element={
          <Users
            data={users}
            postsData={posts}
            toDoData={todos}
            commentsData={comments}
            albumsData={albums}
            pendingTodosData={pendingTodos}
            completedTodosData={completedTodos}
          />
        }
      />
      <Route path="/posts" element={<SingleComp data={posts} />} />
      <Route path="/todos" element={<SingleComp data={todos} />} />
      <Route path="/comments" element={<SingleComp data={comments} />} />
      <Route path="/albums" element={<SingleComp data={albums} />} />
      <Route
        path="/pending-todos"
        element={<SingleComp data={pendingTodos} />}
      />
      <Route
        path="/completed-todos"
        element={<SingleComp data={completedTodos} />}
      />
    </Routes>
  </Router>
);
}

export default App