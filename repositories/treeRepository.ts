import { AxiosStatic } from 'axios'

const baseURL = process.env.baseUrl

export class TreeRepository {
  private readonly axios: AxiosStatic
  constructor($axios: AxiosStatic) {
    this.axios = $axios
  }

  getTrees() {
    const uri = '';
    return this.axios.get(uri);
  }
}
