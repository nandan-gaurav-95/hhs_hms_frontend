import React, { useEffect, useState } from "react";
import axios from "axios";
import { MDBBtn as Button } from "mdb-react-ui-kit";

const Photos = () => {
  const [responseData, setResponseData] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get(
//           `${"http://localhost:8080/api/company-photo/1"}`
//         );
//         console.log("Hiiiiii", response);
//         setResponseData(response.data);
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     }
//     fetchData();
//   }, []);


const fetchPhoto =async() =>{
  try {
    const response = await axios.get(
                  `${"http://localhost:8080/api/company-photo/1"}`
                );
                console.log("Hiiiiii", response);
                setResponseData(response.data);
    
  } catch (error) {console.error("Error:", error); }
}


  return (
    // <div className="text-center mt-4 form-group row">
    //   <img
    //     style={{
    //       marginLeft: "10px",
    //       marginTop: "0px",
    //       width: "150px",
    //       height: "100px",
    //     }}
    //     src={`data:${responseData?.data?.type};base64,${responseData?.data}`}
    //     alt="Property photo"
    //   />

    //   <Button variant="primary" type="button" square onClick={showPhotos}>
    //     Show photos
    //   </Button>
    // </div>

    <div className="text-center mt-4 form-group row">
    {responseData && responseData.map((base64String, index)  => (
      <div key={index}>
        <img
          style={{
            marginLeft: '10px',
            marginTop: '0px',
            width: '150px',
            height: '100px',
          }}
          src={`data:${responseData?.data?.type};base64,${base64String}`} // Assuming the images are JPEG format
          alt={`Property photo ${index + 1}`}
        />
      </div>
    ))}
    <Button variant="primary" type="button" square onClick={fetchPhoto}>
      Show photos
    </Button>
  </div>
  );
};

export default Photos;
