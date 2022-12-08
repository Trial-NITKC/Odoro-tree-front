import { ITree } from '~/interfaces'

export type TreeType = {}

export class Tree implements ITree {
  private readonly tree: TreeType

  constructor(_tree: Tree) {
    this.tree = _tree
  }
}
