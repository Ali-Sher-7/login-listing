import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Listing = () => {
  const [data, setData] = useState([
    { id: 1, name: "item1", discription: "abc" },
    { id: 2, name: "item2", discription: "def" },
    { id: 3, name: "item3", discription: "ghi" },
    { id: 4, name: "item4", discription: "jkl" },
    { id: 5, name: "item5", discription: "mno" },
  ]);

  const [newItem, setNewItem] = useState({ id: "", name: "", discription: "" });
  const [deleteId, setDeleteId] = useState("");

  const addItem = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };
  const deleteItem = (e) => {
    setDeleteId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prevData) => [
      ...prevData,
      { ...newItem, id: prevData.length + 1 },
    ]);
    setNewItem({ id: "", name: "", discription: "" });
  };

  const handleDelte = (e) => {
    e.preventDefault();
    setData((prev) =>
      prev.filter(
        (item) => item.id !== parseInt(deleteId) && item.name !== deleteId
      )
    );
    setDeleteId("");
  };
  const searchChange = (e) => {
    setData(
      data.filter(
        (item) =>
          item.name.toLowerCase().includes(e.target.value) ||
          item.discription.toLowerCase().includes(e.target.value) ||
          item.id.toString().includes(e.target.value)
      )
    );
  };

  let navigate = useNavigate();
  const changeRoute = () => {
    let path = "/Form";
    navigate(path);
  };
  return (
    <>
      <Header />
      <section className="listing">
        <div className="container">
          <div>
            <form
              className="form-row justify-content-center align-items-end mt-5"
              onSubmit={handleSubmit}
            >
              <div className="form-group col-md-5">
                <label htmlFor="newItem" className="fs-5 fw-bold">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={newItem.name}
                  placeholder="New Item......"
                  onChange={addItem}
                  required
                />
              </div>
              <div className="form-group col-md-5">
                <label htmlFor="newDiscription" className="fs-5 fw-bold">
                  Discription:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="discription"
                  value={newItem.discription}
                  placeholder="New Discription....."
                  onChange={addItem}
                  required
                />
              </div>
              <div className="form-group col-md-2">
                <button type="submit" className="btn btn-primary ml-4">
                  ADD
                </button>
              </div>
            </form>
          </div>

          <section className="tableAndSearch">
            <div>
              <div className="d-flex align-items-end w-100 justify-content-between">
                <div className="form-group">
                  <label htmlFor="id" className="fs-5 fw-bold">
                    Search Item By Name Or ID:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="id"
                    placeholder="Search Item....."
                    onChange={searchChange}
                  ></input>
                </div>
                <form
                  className="form-row align-items-end mt-5"
                  onSubmit={handleDelte}
                >
                  <div className="d-flex align-items-end">
                    <div className="form-group">
                      <label htmlFor="id" className="fs-5 fw-bold">
                        Delete Item By Name Or ID:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="id"
                        value={deleteId}
                        placeholder="Delete ID...."
                        onChange={deleteItem}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <button type="submit" className="btn btn-primary ml-4">
                        Delete Item
                      </button>
                    </div>
                  </div>
                </form>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={changeRoute}
                  >
                    NEW FORM
                  </button>
                </div>
              </div>
              <table className="table border">
                <thead>
                  <tr>
                    <th scope="col">Sr.No</th>
                    <th scope="col">ID</th>
                    <th scope="col">ItemName</th>
                    <th scope="col">Discription</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.discription}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Listing;
