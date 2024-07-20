// import { useQuery } from "@tanstack/react-query";

// import { apiHelpers } from "../services/utils/apiHelpers";

// export const useFetchOne = ({
// 	url,
// 	dataKey = "data",
// 	customQueryFn,
// 	queryOptions = {},
// 	urlSearchParams,
// }) => {
// 	return useQuery(
// 		apiHelpers.getQueryKey("GET", url, urlSearchParams),

// 		apiHelpers.ultimateQueryFn(customQueryFn, urlSearchParams),

// 		{
// 			retry: false,
// 			select: (data) => apiHelpers.dataSelect(data, dataKey),

// 			...queryOptions,
// 		}
// 	);
// };

// import { useQuery } from "@tanstack/react-query";
// import { apiHelpers } from "../services/utils/apiHelpers";

// export const useFetchOne = ({
//   url,
//   dataKey = "data",
//   customQueryFn,
//   queryOptions = {},
//   urlSearchParams,
// }) => {
//   return useQuery({
//     queryKey: apiHelpers.getQueryKey("GET", url, urlSearchParams),
//     queryFn: apiHelpers.ultimateQueryFn(customQueryFn, urlSearchParams),
//     retry: false,
//     select: (data) => apiHelpers.dataSelect(data, dataKey),
//     ...queryOptions,
//   });
// };


import { useQuery } from "@tanstack/react-query";
import { apiHelpers } from "../services/utils/apiHelpers";

export const useFetchOne = ({
  url,
  dataKey = "data",
  customQueryFn,
  queryOptions = {},
  urlSearchParams,
}) => {
  return useQuery({
    queryKey: apiHelpers.getQueryKey("GET", url, urlSearchParams),
    queryFn: apiHelpers.ultimateQueryFn(customQueryFn, urlSearchParams),
    // select: (data) => apiHelpers.dataSelect(data, dataKey),
    // ...queryOptions,
  });
};
