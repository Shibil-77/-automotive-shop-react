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