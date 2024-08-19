import { IErrorSource } from '../interfaces';

const flattenErrorMessages = (errorSources: IErrorSource[]) => {
  return errorSources
    .map(({ path, message }) => `${path}${path && ': '}${message}`)
    .join(' | ');
};

export default flattenErrorMessages;
