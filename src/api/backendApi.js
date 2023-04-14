import axiosClient from "./axios";

export const urlEndpoint = "/api/v1";

export const getData = async (endpoint, config) => {
  const response = await axiosClient.get(`${urlEndpoint}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...config,
  });
  return response.data;
};

export const storeData = async (endpoint, data, config) => {
  const response = await axiosClient.post(`${urlEndpoint}${endpoint}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
    ...config,
  });
  return response.data;
};

export const deleteData = async (endpoint, config) => {
  const response = await axiosClient.delete(`${urlEndpoint}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...config,
  });
  return response.data;
};
