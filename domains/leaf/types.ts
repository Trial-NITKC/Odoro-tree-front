
export type Leaf = {
  leaf_id: number;
  front_content: string;
  back_content: string;
  rating: number;
  parent_branch_id: number;
};

export type NewLeaf = {
  front_content: string;
  back_content: string;
  rating: number;
  parent_branch_id: number;
};

