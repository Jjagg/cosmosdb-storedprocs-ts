declare interface CosmosDocument {
  /** The id of the item. User settable property. Uniquely identifies the item along with the partition key */
  id?: string;
  /** The type of the item. Not required  */
  type?: string;
  /** Time to live in seconds for collections with TTL enabled */
  ttl?: number;
  /** Key that identifies the logical partition the document lives in. */
  partitionKey: string;
}

declare interface Slice extends CosmosDocument {
  index: number;
}

declare interface FollowingSlice extends Slice {
  target: string;
  users: string[];
}
