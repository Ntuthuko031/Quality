import React, { useState } from 'react';

const ImageUpload = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedImage) {
      alert("Please select an image to upload");
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('UserId', props.UserId);

    try {
      const response = await fetch('https://qualitydrive.org/api/image/upload-image', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log("Upload successful:", result);
      props.updateVisibility();
      props.uploadDone();
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="font-bold" style={{ width: "30%", background: "rgba(255, 72, 0, 0.804)", padding: "20px", position: "absolute", right: "40%", top: "30%", color: "#fff"}}>
      <h2>Upload an Image</h2>
      <br/>
      <form onSubmit={(e) => handleSubmit(e)} >
        <input 
          type="file" 
          accept="image/*" 
          onChange={(e) => handleImageChange(e)} 
          style={{ float: "left", width: "30%"}}
        />
        <button type="submit" className='text-white px-4 py-2 rounded-md' style={{ float: "right", width: "30%"}}>Upload</button>
      </form>

      {imagePreview && (
        <div style={{ float: "left"}}>
          <h3>Image Preview:</h3>
          <img src={imagePreview} alt="Preview" style={{ width: '300px' }} />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
