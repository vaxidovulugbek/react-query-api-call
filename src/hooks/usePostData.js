import { useMutation } from "@tanstack/react-query";
import { apiHelpers } from "../services/utils/apiHelpers";
import { httpClient } from "../services/api";

// POST so'rovi yuboradigan mutatsiya funksiyasini yozing
const postFn = async (data) => {
  const { data: responseData } = await httpClient.post('/', data);
  return responseData;
};

// useMutation hookidan foydalaning
export const usePostData = (queryOptions = {}) => {
  return useMutation({
    mutationFn: postFn, // mutatsiya funksiyasi
    ...queryOptions, // qo'shimcha konfiguratsiya
  });
};
