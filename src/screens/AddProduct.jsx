import axios from "axios";
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [contact, setContact] = useState();
  const [sellerId, setSellerId] = useState();

  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  // const [published, setPublished] = useState(true);
  const [image, setImage] = useState("");

  const addProductHandler = async (e) => {
    e.preventDefault();

    // const data = {
    //     title: title,
    //     price: price,
    //     description: description,
    //     published: published
    // }

    const formData = new FormData();

    formData.append("image", image);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("contactNumber", contact);
    formData.append("sellerId", sellerId);

    // formData.append("published", published);

    console.log("image data => ", image);

    await axios.post("http://localhost:8080/api/addProduct", formData);
    navigate("/products");

    // history.push("/products");
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />

      <Container className="mt-5 p-2">
        <h1 style={{ fontSize: "30px", fontWeight: "600" }}>Add Product</h1>
        <hr />

        <Form
          onSubmit={addProductHandler}
          method="POST"
          encType="multipart/form-data"
        >
          <Form.Group controlId="fileName" className="mb-3">
            <Form.Label style={{ marginRight: "30px" }}>
              Upload Image
            </Form.Label>
            <Form.Control
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
              size="lg"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="title">
            <Form.Label style={{ fontSize: "20px", marginRight: "90px" }}>
              Title
            </Form.Label>
            <Form.Control
              style={{ border: "2px solid black", borderRadius: "10px" }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="price">
            <Form.Label style={{ fontSize: "20px", marginRight: "45px" }}>
              Price (Rs)
            </Form.Label>
            <Form.Control
              style={{ border: "2px solid black", borderRadius: "10px" }}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label style={{ fontSize: "20px", marginRight: "25px" }}>
              Description
            </Form.Label>
            <Form.Control
              style={{ border: "2px solid black", borderRadius: "10px" }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              as="textarea"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="title">
            <Form.Label style={{ fontSize: "20px", marginRight: "90px" }}>
              Category
            </Form.Label>
            <Form.Control
              style={{ border: "2px solid black", borderRadius: "10px" }}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="title">
            <Form.Label style={{ fontSize: "20px", marginRight: "90px" }}>
              Contact Number
            </Form.Label>
            <Form.Control
              style={{ border: "2px solid black", borderRadius: "10px" }}
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="title">
            <Form.Label style={{ fontSize: "20px", marginRight: "90px" }}>
              Seller Id
            </Form.Label>
            <Form.Control
              style={{ border: "2px solid black", borderRadius: "10px" }}
              value={sellerId}
              onChange={(e) => setSellerId(e.target.value)}
              type="text"
            />
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="publishedCheckedid">
            <Form.Check
              type="checkbox"
              onChange={(e) => setPublished(e.target.checked)}
              label="publish"
            />
          </Form.Group> */}

          <Button
            variant="contained"
            type="submit"
            style={{ marginTop: "20px", marginLeft: "20px" }}
          >
            Add Product
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default AddProduct;
