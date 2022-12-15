import { Context } from '@nuxt/types';
import { Inject } from '@nuxt/types/app';
import { BranchRepository } from '~/repositories/branchRepository';
import { LeafRepository } from '~/repositories/leafRepository';
import { TreeRepository } from '~/repositories/treeRepository';

export interface Repositories {
  tree: TreeRepository;
  leaf: LeafRepository;
  branch: BranchRepository;
}

export default function ({ $axios }: Context, inject: Inject) {
  $axios.onError((axiosError) => {
    alert(axiosError);
  });

  const tree = new TreeRepository($axios);
  const leaf = new LeafRepository($axios);
  const branch = new BranchRepository($axios);

  const repositories: Repositories = {
    tree,
    leaf,
    branch,
  };

  inject('repositories', repositories);
}
