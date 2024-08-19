import { ReactNode } from 'react';

export interface IPath {
  name?: string;
  path?: string;
  icon?: ReactNode;
  element?: ReactNode;
  children?: IPath[];
}

export interface IRoute {
  index?: boolean;
  path: string;
  element: ReactNode;
}
