export const valid = (setErrors, formData) => {
    const newErrors = {};
    if (
        !formData.product) {
        newErrors.product = "Please enter a product";
    }
    if (!formData.category) {
        newErrors.category = "Please select a category";
    }

    if (!formData.price || !formData.price === Number) {
        newErrors.price = "Please enter a price or enter number";
    }
    if (!formData.stock || !formData.price === Number) {
        newErrors.stock = "Please enter a stock or enter number";
    }

    if (!newErrors.description) {
        newErrors.description = "Please enter a description"
    }
    if (!newErrors.images) {
        newErrors.images = "Please select a image"
    }

    setErrors(newErrors);
    return newErrors;
};

