export type BgsResponse<T> = {
  code: number;
  message: string;
  data: T;
  error?: any;
};
