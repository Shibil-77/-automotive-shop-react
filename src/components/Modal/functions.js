import axios from "axios";

export const valid = (setErrors, formData) => {
    const newErrors = {};
    if (
        !formData.product) {
        newErrors.product = "Please enter a product";
    }
    if (!formData.category) {
        newErrors.category = "Please select a category";
    }

    if (!formData.price) {
        newErrors.price = "Please enter a price";
    }
    if (!formData.stock) {
        newErrors.stock = "Please enter a stock";
    }

    if (newErrors.description) {
        newErrors.description = "Please enter a description"
    }

    setErrors(newErrors);
    return newErrors;
};



export const imageUpload = async (file) => {
    console.log("hellow worls");
    try {
        console.log(file, 'file')
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'thumbnails');
        console.log(process.env.REACT_APP_CLOUD_NAME)

        const { data } = await axios.post(
            'https://api.cloudinary.com/v1_1/dpnxz1vxy/image/upload',
            formData,
        )
        console.log('Image uploaded successfully:', data);
        const fileInfo = {
            image_url: data?.secure_url,
            public_id: data?.public_id
        };
        return fileInfo;

    } catch (error) {
        console.error('Error uploading image:', error);
    }
}