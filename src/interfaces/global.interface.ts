import { arrayOfOneToFiftyEight } from '../constants';

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

export type IHourStep =
  | 1
  | 2
  | 4
  | 3
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22;

export type IMinuteStep = (typeof arrayOfOneToFiftyEight)[number];
export type ISecondStep = (typeof arrayOfOneToFiftyEight)[number];
