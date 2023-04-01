import React from "react";
import { useNavigate } from "react-router-dom";

const Users = ({
  data,
  postsData,
  commentsData,
  toDoData,
  pendingTodosData,
  completedTodosData,
  albumsData,
}) => {
  const navigate = useNavigate();
  const handleClick = (id, type) => {
    switch (type) {
      case "/posts":
        navigate("/posts", { state: id });
        break;
      case "/comments":
        navigate("/comments", { state: id });
        break;
      case "/todos":
        navigate("/todos", { state: id });
        break;
      case "/pending-todos":
        navigate("/pending-todos", { state: id });
        break;
      case "/completed-todos":
        navigate("/completed-todos", { state: id });
        break;
      case "/albums":
        navigate("/albums", { state: id });
        break;
      default:
        break;
    }
  };

  const getFilterDataLength = (id, data) => {
    const getFilteredIds = data.filter(
      (item) => item.userId === id || item.postId === id
    ).length;
    return getFilteredIds;
  };

  return (
    <div>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>User ID</th>
            <th>Company Name</th>
            <th>Person Name</th>
            <th>Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {data.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.company.name}</td>
              <td>{user.name}</td>
              <td>
                <h6>name: {user.name},</h6>
                <h6>username: {user.username},</h6>
                <h6>
                  email:{" "}
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${user.email}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {user.email}
                  </a>
                  ,
                </h6>
                <h6>street: {user.address.street},</h6>
                <h6>suite: {user.address.suite},</h6>
                <h6>city: {user.address.city},</h6>
                <h6>zip code: {user.address.zipcode},</h6>
                <h6>latitude: {user.address.geo.lat},</h6>
                <h6>longitude: {user.address.geo.lng},</h6>
                <h6>phone: {user.phone},</h6>
                <h6>
                  website:{" "}
                  <a
                    href={`http://${user.website}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {user.website}
                  </a>
                  ,
                </h6>
                <h6>catchPhrase: {user.company.catchPhrase},</h6>
                <h6>bs: {user.company.bs}</h6>
              </td>
              <td>
                <button
                  onClick={() => handleClick(user.id, "/posts")}
                  className="btn btn-info d-block mb-2"
                >
                  Posts({getFilterDataLength(user.id, postsData)})
                </button>
                <button
                  onClick={() => handleClick(user.id, "/comments")}
                  className="btn btn-info d-block mb-2"
                >
                  Comments({getFilterDataLength(user.id, commentsData)})
                </button>
                <button
                  onClick={() => handleClick(user.id, "/todos")}
                  className="btn btn-primary d-block mb-2"
                >
                  Todos({getFilterDataLength(user.id, toDoData)})
                </button>
                <button
                  onClick={() => handleClick(user.id, "/pending-todos")}
                  className="btn btn-danger d-block mb-2"
                >
                  Pending Todos(
                  {getFilterDataLength(user.id, pendingTodosData)})
                </button>
                <button
                  onClick={() => handleClick(user.id, "/completed-todos")}
                  className="btn btn-success d-block mb-2"
                >
                  Completed Todos(
                  {getFilterDataLength(user.id, completedTodosData)})
                </button>
                <button
                  onClick={() => handleClick(user.id, "/albums")}
                  className="btn btn-info d-block mb-2"
                >
                  Albums({getFilterDataLength(user.id, albumsData)})
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;