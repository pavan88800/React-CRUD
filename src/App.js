import "./styles.css";
import { useState, useRef } from "react";
export default function App() {
  const [edit, setEdit] = useState("");
  const input = useRef(null);
  const [data, setData] = useState([
    {
      id: "1",
      username: "pavan"
    },
    {
      id: "2",
      username: "User name"
    },
    {
      id: "3",
      username: "Killer"
    },
    {
      id: "4",
      username: "Miller"
    },
    {
      id: "5",
      username: "Qwerty"
    }
  ]);

  const deleteUserName = (id) => {
    window.confirm("are you sure");
    let modifyedData = data.filter((item) => item.id !== id);
    setData(modifyedData);
  };

  function updatedDataList(e) {
    let updatedList = data.map((item) => {
      if (item.id === edit.id) {
        return { ...item, username: e.target.value };
      }
      return item;
    });
    setData(updatedList);
  }

  const onsubmit = (e) => {
    input.current.style.display = "none";
    setEdit("");
    alert("updated successFully");
  };
  return (
    <div className="App">
      {data.map((item) => (
        <div key={item.id}>
          {item.id === edit.id ? (
            <input
              ref={input}
              key={item.id}
              value={item.username}
              onChange={(e) => updatedDataList(e)}
            />
          ) : (
            <p>{item.username}</p>
          )}

          <button onClick={() => deleteUserName(item.id)}>Delete</button>
          {item.id === edit.id ? (
            <button onClick={(e) => onsubmit(e)}>Update</button>
          ) : (
            <button onClick={() => setEdit(item)}>Edit</button>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
}
