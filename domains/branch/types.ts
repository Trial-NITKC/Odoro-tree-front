import { IBranch } from '~/interfaces'

export type BranchType = {}

export class Branch implements IBranch {
  private readonly branch: BranchType

  constructor(_branch: Branch) {
    this.branch = _branch
  }
}
