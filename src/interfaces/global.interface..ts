interface IErrorSource {
  path: string | number;
  message: string;
}

export interface semesterData {
  data: {
    success: boolean;
    message: string;
    errorSources: IErrorSource[];
  };
  status: number;
}

export interface ISuccessResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface IResponse<T> {
  error?: semesterData;
  data?: ISuccessResponse<T>;
}

export interface IQueryParam {
  key: string;
  value: string;
}
