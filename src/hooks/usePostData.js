import { useMutation } from "@tanstack/react-query";
import { httpClient } from "../services/api";

// POST so'rovi yuboradigan mutatsiya funksiyasini yozing
const postFn = async (data) => {
  const { data: responseData } = await httpClient.post('posts/', data);
  return responseData;
};

// useMutation hookidan foydalaning
export const usePostData = (queryOptions = {}) => {
  return useMutation({
    mutationFn: postFn, // mutatsiya funksiyasi
    ...queryOptions, // qo'shimcha konfiguratsiya
  });
};
