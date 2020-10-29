declare interface CosmosDocument {
  /** The id of the item. User settable property. Uniquely identifies the item along with the partition key */
  id?: string;
  /** The type of the item. Not required  */
  type?: string;
  /** Time to live in seconds for collections with TTL enabled */
  ttl?: number;
}

declare interface Slice extends CosmosDocument {
  index: Number;
}

declare interface FollowingSlice extends Slice {
  user: string;
  items: FollowInfo[];
}

declare interface FollowInfo {
  target: string;
  since: string;
}