import { api } from "../axios/axios";

export const addProduct = async (formData) => {
    try {
        console.log('----------1-------');
        const { data, status } = await api.post("product/addProduct", { formData });
        data.status = status
        return data;
    } catch (error) {
        return error.response.data;
    }
};

export const getAllProductsApi = async () => {
    try {
        const { data, status } = await api.get("product/getAllProducts");
        data.status = status
        console.log(data);
        return data;
    } catch (error) {
        return error.response.data;
    }
};

export const removeProductApi = async (id) => {
    console.log(id);
    try {
        const { data, status } = await api.delete(`product/removeProduct/${id}`);
        data.status = status
        console.log(data);
        return data;
    } catch (error) {
        return error.response.data;
    }
};

export const getProductDataApi = async (id) => {
    console.log(id);
    try {
        const { data, status } = await api.get(`product/getProductData/${id}`);
        data.status = status
        return data;
    } catch (error) {
        return error.response.data;
    }
};

export const editProductApi = async (formData,id) => {
    console.log(id);
    try {
        console.log(formData);
        const { data, status } = await api.post(`product/editProduct/${id}`, formData);
        data.status = status
        return data;
    } catch (error) {
        return error.response.data;
    }
};

