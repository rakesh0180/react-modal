import "./App.css";
import { data } from "./users";
import "./styles.css";
import { useState } from "react";
import ItemModal from "./ItemModal";

function App() {
  const [showModel, setShowModel] = useState(false);
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
                    setShowModel(true);
                    setModelData(item);
                  }}
                >
                  Show Modal
                </button>
              </div>
            </div>
          </div>
        ))}
        {showModel && (
          <ItemModal
            show={showModel}
            onHide={() => setShowModel(false)}
            item={modelData}
          />
        )}
      </div>
    </div>
  );
}

export default App;
