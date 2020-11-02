import {handleError} from "../../util/HandleError";
import {addUserToSequence} from '../../util/Common';

const followerSliceCapacity: Number = 1000;

/**
 * Add person to the list of people that someone follows.
 */
const addFollowee = async ({target, user}: {target: string, user: string}) => {

  if (!target || !user) throw new Error('Follower and followee parameters required.');
  await addUserToSequence('followings', target, user);
};

// Boilerplate call to the function we've just defined (IIFE), required to make the build procedure function
// The build procedure wraps the IIFE in a lambda with 'args' as a parameter, thus creating a "complete" function
// @ts-ignore
addFollowee(args).catch(handleError);
