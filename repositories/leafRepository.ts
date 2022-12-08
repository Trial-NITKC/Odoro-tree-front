/* eslint-disable camelcase */
import { AxiosStatic } from 'axios';
import { Leaf, NewLeaf } from '~/domains/leaf';

const baseURL = process.env.baseURL;

export class LeafRepository {
  private readonly axios: AxiosStatic;
  constructor($axios: AxiosStatic) {
    this.axios = $axios;
  }

  getLeaves(parent_branch_id: string) {
    const uri = `${baseURL}/branches/${parent_branch_id}/childleaves`;
    return this.axios.get(uri);
  }

  createLeaf(newLeaf: NewLeaf) {
    const uri = `${baseURL}/leaves`;
    return this.axios.post(uri, newLeaf);
  }

  getLeaf(leaf_id: string) {
    const uri = `${baseURL}/leaves/${leaf_id}`;
    return this.axios.get(uri);
  }

  editLeaf(data: Leaf) {
    const uri = `${baseURL}/leaves/${data.leaf_id}`;
    return this.axios.put(uri, data);
  }
}
