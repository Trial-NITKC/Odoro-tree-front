import { ILeaf } from '~/interfaces'

export type LeafType = {}

export class Leaf implements ILeaf {
  private readonly leaf: LeafType

  constructor(_leaf: Leaf) {
    this.leaf = _leaf
  }
}
