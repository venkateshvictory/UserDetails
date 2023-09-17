import React from "react";
import { Link, useLocation } from "react-router-dom";

const SingleComp = ({ data }) => {
  const location = useLocation();
  console.log(location.state)
  const userId = location.state;
 
  const getFilteredIds = data.filter(
    (item) => item.userId === userId || item.postId === userId
  );

  return (
    <div>
      <div className="d-flex justify-content-center mb-2 mt-2">
        <Link to="/">
          <button className="btn btn-dark">Home</button>
        </Link>
      </div>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            {getFilteredIds.some((list) => list.postId) && <th>postId</th>}
            {getFilteredIds.some((list) => list.userId) && <th>userId</th>}
            {getFilteredIds.some((list) => list.title) && <th>title</th>}
            {getFilteredIds.some((list) => list.name) && <th>name</th>}
            {getFilteredIds.some((list) => list.body) && <th>body</th>}
            {getFilteredIds.some((list) => list.email) && <th>email</th>}
            {getFilteredIds.some(
              (list) => list.completed || list.completed === false
            ) && <th>status</th>}
          </tr>
        </thead>
        <tbody className="table-body">
          {getFilteredIds.map((list, i) => (
            <tr key={i}>
              {list.postId && <td>{list.postId}</td>}
              {list.userId && <td>{list.userId}</td>}
              {list.title && <td>{list.title}</td>}
              {list.name && <td>{list.name}</td>}
              {list.body && <td>{list.body}</td>}
              {list.email && <td>{list.email}</td>}
              {list.completed && <td>{list.completed ? "Completed" : null}</td>}
              {list.completed === false && (
                <td>{list.completed === false ? "Pending" : null}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SingleComp;