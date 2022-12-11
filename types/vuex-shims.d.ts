import { Repositories } from '~/plugins/apiFactory'
import { accessorType } from '~/store'

declare module 'vuex/types/index' {
  interface Store<S> {
    readonly $repositories: Repositories
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessorType
    readonly $repositories: Repositories
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType
  }

  interface Context {
    $accessor: typeof accessorType
  }
}
