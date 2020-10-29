import {createDocument, query, readDocument, replaceDocument} from "../../util/AsyncDb";
import {handleError} from "../../util/HandleError";
import { uuidv4 as uuid } from '../../util/Common';

/**
 * Example document patch stored procedure using Object.assign to merge a partial-object patch.
 * Note that our function arguments *must* be wrapped in an object, since they are passed as "args"
 * later on.
 *
 * @param id
 * @param patch
 */
const follow = async ({follower, followee}: {follower: string, followee: string}) => {
  
  let followingSlices = await query<FollowingSlice>((r) => r
    .filter((d: FollowingSlice) => d.type === 'followings' && d.user == follower)
    .sortByDescending((d: any) => d.index), {pageSize: 1});

  const d = new Date().toISOString();
  const followInfo: FollowInfo = {
    since: d,
    target: follower
  };
 
  if (followingSlices.length === 0) {
    const id = uuid(); 

    const slice: FollowingSlice = {
      id: id,
      index: 0,
      items: [followInfo],
      type: 'following',
      user: followee
    };

    await createDocument(slice);
  } else {
    const slice = followingSlices[0]

    if (slice.items.length >= 1000) {
      throw new Error('New slice not yet implemented.');
    } else {
      slice.items.push(followInfo);
    }
  }

  console.log('Following slice ID: ' + followingSlices[0]?.id + '; length: ' + followingSlices.length);
  
  let followerSlices = await query<FollowingSlice>((r) => r
    .filter((d: FollowingSlice) => d.type === 'followers' && d.user == followee)
    .sortByDescending((d: any) => d.index), {pageSize: 1});

  console.log('Follower slice ID: ' + followerSlices[0]?.id);

  //getContext()
  //  .getResponse()
  //  .setBody(updated);
};

// Boilerplate call to the function we've just defined (IIFE), required to make the build procedure function
// The build procedure wraps the IIFE in a lambda with 'args' as a parameter, thus creating a "complete" function
// @ts-ignore
follow(args).catch(handleError);
