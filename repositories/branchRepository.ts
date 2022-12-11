import { AxiosStatic } from 'axios'

export class BranchRepository {
  private readonly axios: AxiosStatic;
  constructor($axios: AxiosStatic) {
    this.axios = $axios;
  }
}