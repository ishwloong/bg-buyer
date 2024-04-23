export type BgsResponse<T> = {
  code: number;
  message: string;
  data: T;
  error?: any;
};

export type PagingResponse<T> = {
  page: number;
  page_size: number;
  total: number;
  result: T;
};
