export interface IErrorSource {
  path: string | number;
  message: string;
}

export interface IErrorResponse {
  error: {
    data: {
      success: boolean;
      message: string;
      errorSources: IErrorSource[];
    };
    status: number;
  };
}

export interface IMetaData {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

export interface ISuccessResponse<T> {
  success: boolean;
  message: string;
  data: T;
  meta?: IMetaData;
}

export interface IResponse<T> {
  error?: IErrorResponse;
  data?: ISuccessResponse<T>;
}

export interface IQueryParam {
  key: string;
  value: string | number;
}
