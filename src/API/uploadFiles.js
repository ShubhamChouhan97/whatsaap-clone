// uploadFiles.js

export const uploadFiles = async (images) => {
  const formData = new FormData();

  // Append all images to the FormData object
  images.forEach((image, index) => {
    formData.append(`image${index}`, image);
  });

  try {
    // Send the images to the server using a POST request
    const response = await fetch("http://localhost:3000/upload/uploadPic", {
      method: "POST",
      credentials: 'include', 
      body: formData, // FormData automatically sets the correct Content-Type
    });

    if (!response.ok) {
      throw new Error("Failed to upload images");
    }

    // Parse the JSON response to get the URLs of the uploaded images
    const data = await response.json();
    return data.imageUrls; // Assuming the server sends back an array of URLs
  } catch (error) {
    console.error("Error uploading images:", error);
    throw error; // Rethrow the error to be handled in the component
  }
};
