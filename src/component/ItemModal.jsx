import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

// const ItemModal = (props) => (
//   return { }
// );}

const ItemModal = ({ item, show, onHide }) => {
  console.log("props");
  // console.log("props", item);
  return (
    <>
      <Modal className="item" isOpen={show}>
        <ModalHeader>
          <div className="close" title="Close" onClick={onHide}>
            X
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="col-md-12" key={item.id}>
            <div className="card">
              <div className="card-body">
                <div className="images">
                  <img
                    src={item.thumbnail.large}
                    className="card-img-top "
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
                  <span>
                    <img
                      src={item?.author?.avatar}
                      className="card-img-top profile"
                      alt={item.title}
                      width={40}
                      height={40}
                    />
                  </span>
                  <span className="author">
                    {item?.author?.name} - {item?.author?.role}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        {/* <ModalFooter>
          <div className="images">
            <img
              src={item?.author?.avatar}
              className="card-img-top"
              alt="img"
              width={100}
              height={100}
            />
          </div>
        </ModalFooter> */}
      </Modal>
    </>
  );
};

export default ItemModal;
