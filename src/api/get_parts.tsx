import axios from 'axios';
import { PartsDataset, APIResponse } from './interfaces/interfaces';

export function GetPartsAPI () : Promise<APIResponse> {
    return axios.get('http://localhost:8000/parts/')
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(`Request failed with status code ${response.status}`);
      }

      const output = response.data as PartsDataset;
      return { 
        'key': 'parts', 
        'output': output
      };
    })
    .catch((err) => {
      throw err;
    });
}