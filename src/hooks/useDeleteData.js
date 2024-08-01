import { useMutation } from "@tanstack/react-query";
import { httpClient } from "../services/api";

// DELETE so'rovi yuboradigan mutatsiya funksiyasini yozing
const deleteFn = async (id) => {
  const { data: responseData } = await httpClient.delete(`/${id}`);
  return responseData;
};

// useMutation hookidan foydalaning
export const useDeleteData = (queryOptions = {}) => {
  return useMutation({
    mutationFn: deleteFn, // mutatsiya funksiyasi
    ...queryOptions, // qo'shimcha konfiguratsiya
  });
};
