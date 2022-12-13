import { AxiosStatic } from 'axios';
import { NewTree, Tree } from '~/domains/tree';

const baseURL = process.env.baseURL;

export class TreeRepository {
  private readonly axios: AxiosStatic;
  constructor($axios: AxiosStatic) {
    this.axios = $axios;
  }

  getTrees() {
    const uri = `${baseURL}/trees`;
    return this.axios.get(uri);
  }

  editTree(replaceTree: Tree) {
    const uri = `${baseURL}/trees/${replaceTree.tree_id}`;
    return this.axios.put(uri, replaceTree);
  }

  createTree(newTree: NewTree) {
    const uri = `${baseURL}/trees`;
    return this.axios.post(uri, newTree);
  }
}
