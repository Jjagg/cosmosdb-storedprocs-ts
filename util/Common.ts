import {readDocument, createDocument, replaceDocument, query} from "./AsyncDb";

export const followerSliceCapacity: number = 2000;

/**
 * Add user to the list of people that someone follows or are followed by.
 */
export async function addUserToSequence(sequenceType: string, target: string, user: string): Promise<void> {

  let slices = await query<FollowingSlice>((r) => r
    .filter((d: FollowingSlice) => d.type === sequenceType && d.target === target)
    .sortByDescending((d: any) => d.index),
    {pageSize: 1});

  function createSlice(index: number): FollowingSlice {
    return {
      id: null,
      index: index,
      users: [user],
      type: sequenceType,
      target: target,
      partitionKey: target
    };
  }

  if (slices.length === 0) {
    const slice = createSlice(0);
    await createDocument(slice);
  } else {
    const slice = slices[0]

    if (slice.users.length >= followerSliceCapacity) {
      const newSlice = createSlice(slice.index + 1);
      await createDocument(newSlice);
    } else {
      slice.users.push(user);
      await replaceDocument(slice.id, slice);
    }
  }
};

/**
 * Delete person from list of people that follow or are followed by someone.
 */
export async function deleteUserFromSequence(sequenceType: string, target: string, user: string): Promise<boolean> {

  let slices = await query<FollowingSlice>((r) => r
    .filter((d: FollowingSlice) =>
      d.type === sequenceType &&
      d.target === target &&
      d.users.some((uid) => uid === user)));

  if (slices.length === 0) return false;
  
  const slice = slices[0];
  const userIndex = slice.users.findIndex((uid) => uid === user);
  slice.users.splice(userIndex);
  await replaceDocument(slice.id, slice);

  return true;
};

export function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}