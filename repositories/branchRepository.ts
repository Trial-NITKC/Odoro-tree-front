/* eslint-disable camelcase */
import { AxiosStatic } from 'axios';
import { Branch, NewBranch } from '~/domains/branch';
const baseURL = process.env.baseURL;

export class BranchRepository {
  private readonly axios: AxiosStatic;
  constructor($axios: AxiosStatic) {
    this.axios = $axios;
  }

  getBranches(parent_tree_id: string) {
    const uri = `${baseURL}/trees/${parent_tree_id}/childbranches`;
    return this.axios.get(uri);
  }

  createBranch(newBranch: NewBranch) {
    const uri = `${baseURL}/branches`;
    return this.axios.post(uri, newBranch);
  }

  editBranch(replaceBranch: Branch) {
    const uri = `${baseURL}/branches/${replaceBranch.branch_id}`;
    return this.axios.put(uri, replaceBranch);
  }
}
