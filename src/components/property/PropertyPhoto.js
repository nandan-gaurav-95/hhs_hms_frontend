import React, { useState, useEffect } from "react";
import {
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBInput as Input,
  MDBBtn as Button,
} from "mdb-react-ui-kit";
import { APIS } from "../constants/api";
import axios from "axios";
import "react-select-search/style.css";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Sidebar from "../admin/Sidebar";

function PropertyPhotoForm() {
  const { id } = useParams() || {};
  const navigate = useNavigate();
  const location = useLocation();
  const receivedData = location.state || {};
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null); // State to handle errors

  const handlePhotoChange = (event) => {
    const files = event.target.files;
    setSelectedPhotos([...selectedPhotos, ...files]);
  };
  useEffect(() => {
    // Create thumbnails when photos are selected or removed
    const generateThumbnails = () => {
      const newThumbnails = [];

      for (const photo of selectedPhotos) {
        const reader = new FileReader();
        reader.onload = (e) => {
          newThumbnails.push(e.target.result);
          if (newThumbnails.length === selectedPhotos.length) {
            setThumbnails(newThumbnails);
          }
        };
        reader.readAsDataURL(photo);
      }
    };

    generateThumbnails();
  }, [selectedPhotos]);

  if (!id) return;
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("ID:", id);
      const formData = new FormData();
      selectedPhotos.forEach((photo) => {
        formData.append("files", photo);
      });
      setUploading(true); // Set uploading status
      const response = await axios.post(`${APIS.COMPANYPHOTOS}/${id}`,formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.status === 200) {
        console.log("Property Photos saved successfully");
        setSelectedPhotos([]);
        setThumbnails([]); // Clear thumbnails after submission
        navigate("/register");
      } else {
        setError("Error saving property photos"); // Set error message
      }
    } catch (error) {
      console.error("Error uploading photos:", error);
      setError("Error uploading photos"); // Set error message
    } finally {
      setUploading(false); // Reset uploading status
    }
  };
  const handleDelete = (index) => {
    const updatedImages = [...selectedPhotos];
    updatedImages.splice(index, 1);
    setSelectedPhotos(updatedImages);

    const updatedThumbnails = [...thumbnails];
    updatedThumbnails.splice(index, 1);
    setThumbnails(updatedThumbnails);
  };

  return (
    <div className="">
      {/* <Sidebar> */}
      <h2 className="mb-4 text-center">Property Photos:</h2>
      {error && <div className="text-danger">{error}</div>}{" "}
      {/* Display error message if there's an error */}
      <ul className="list-group">
        <form onSubmit={handleSubmit}>
          <Row className="justify-content-center">
            <Col className="col-sm-5">
              <Input
                label="Company Name"
                type="text"
                name="companyName"
                value={receivedData.companyName}
                readOnly
                //   onChange={handleChange}
              />
            </Col>
            <Col className="col-sm-5">
              <Input
                className="list-group-item d-flex w-100 rounded-5 justify-content-between align-items-center"
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoChange}
              />
            </Col>
          </Row>
          <div className="text-center mt-4">
            <Button type="submit">Upload Photos</Button>
          </div>
        </form>
      </ul>
      <h5>Selected Photos:</h5>
      <ul className="list-unstyled">
        {selectedPhotos.map((photo, index) => (
          <li
            key={index}
            className="d-flex align-items-center justify-content-between"
          >
            <div className="d-flex align-items-center">
              <img
                src={thumbnails[index]}
                alt={`Thumbnail ${index}`}
                width="40"
                height="40"
              />
              <span className="ps-2">{photo.name}</span>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {/* <div className="text-center mt-4">
        <Button>Upload Photos</Button>
      </div> */}
      {/* </Sidebar> */}
    </div>
  );
}
export default PropertyPhotoForm;
