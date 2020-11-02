import {readDocument, query} from "../../util/AsyncDb";
import {handleError} from "../../util/HandleError";
import {followerSliceCapacity} from "../../util/Common";

/**
 * Get followers of a person with pagination support.
 */
const getFollowings = async ({target, offset, count}: {target: string, offset?: number, count: number}) => {
  if (!target) throw new Error('Follower and followee parameters required.');

  console.log(`target: ${target}; offset: ${offset}; count: ${count}\n`);

  if (!offset) {
    console.log(`Running query w/o offset.\n`);

    const docs = await query<string>((r) => r
      .filter((d: FollowingSlice) => d.type === 'followings' && d.target === target)
      .sortByDescending((d: any) => d.index)
      .pluck<string[]>('users')
      //.map((d: FollowingSlice) => d.users)
      .flatten<string>(true)
      , {pageSize: count});

    console.log(`Setting response!\n`);
    console.log(`docs[0]: ${docs[0]}`);
    console.log(`docs[1]: ${docs[1]}`);
    console.log(`docs: ${JSON.stringify(docs)}`);

    getContext().getResponse().setBody(docs);
  } else {
    throw new Error('offset not yet implemented');

  //var minIndex = Math.floor(offset / followerSliceCapacity);

  //let slices = await query<FollowingSlice>((r) => r
  //  .filter((d: FollowingSlice) => d.type === 'followers' && d.target === target && d.index >= minIndex)
  //  .sortByDescending((d: any) => d.index)
  //  .pluck<string[]>('users')
  //  .flatten<string>(true)
  //  {pageSize: 1});
  }
}

// Boilerplate call to the function we've just defined (IIFE), required to make the build procedure function
// The build procedure wraps the IIFE in a lambda with 'args' as a parameter, thus creating a "complete" function
// @ts-ignore
getFollowings(args).catch(handleError);

