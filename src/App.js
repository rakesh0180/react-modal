import "./App.css";
// import { useState, useEffect } from 'react';
import { data } from "./users";
import "./styles.css";
import { useState } from "react";
import ItemModal from "./Modal";

function App() {
  const [model, showModel] = useState(false);
  const [modelData, setModelData] = useState();

  // const handleToggle = (item) => {
  //   console.log(item);
  //   console.log(item.id);
  //   alert(`hi ${item.id}`);
  //   showModel(!model);
  // };
  return (
    <div className="container">
      <div className="row">
        {data.map((item) => (
          <div className="col-md-6" key={item.id}>
            <div className="card">
              <div className="card-body">
                <div className="images">
                  <img
                    src={item.thumbnail.large}
                    className="card-img-top"
                    alt="img"
                    width={700}
                    height={300}
                  />
                </div>
                <div className="card-dec">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">
                    {item.content}
                    <br />
                  </p>
                </div>
                <div className="author-div">
                  <span className="author">
                    {item.author.name} - {item.author.role}
                  </span>
                  <span className="date">{item.date}</span>
                </div>
                <button
                  className="button-default"
                  onClick={() => {
                    showModel(true);
                    setModelData(item);
                    // handleToggle(item);
                  }}
                >
                  Show Modal
                </button>
                {modelData && (
                  <ItemModal
                    show={model}
                    onHide={() => showModel(false)}
                    item={modelData}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
