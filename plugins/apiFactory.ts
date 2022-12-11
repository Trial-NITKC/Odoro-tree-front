import { Context } from '@nuxt/types'
import { Inject } from '@nuxt/types/app'
import { TreeRepository } from '~/repositories/treeRepository'

export interface Repositories {
  tree: TreeRepository;
}

export default function ({ $axios }: Context, inject: Inject) {
  $axios.onError((axiosError) => {
    alert(axiosError)
  })

  const tree = new TreeRepository($axios);
  
  const repositories: Repositories = {
    tree
  };

  inject('repositories', repositories)
}
