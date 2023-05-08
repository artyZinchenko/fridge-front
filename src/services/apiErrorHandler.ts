import { AxiosResponse } from 'axios';

export default function errorHandler(response: AxiosResponse) {
  if (response instanceof Error) {
    throw new Error(`Something went wrong ${response.message});
    }`);
  }
}
