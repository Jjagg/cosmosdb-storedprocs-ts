import {handleError} from "../../util/HandleError";
import {deleteUserFromSequence} from '../../util/Common';

/**
 * Delete person to the list of people that follow someone.
 */
const deleteFollower = async ({follower, followee}: {follower: string, followee: string}) => {

  if (!follower || !followee) throw new Error('Follower and followee parameters required.');

  const actuallyDeleted = await deleteUserFromSequence('followers', followee, follower);
  getContext().getResponse().setBody(actuallyDeleted);
};

// Boilerplate call to the function we've just defined (IIFE), required to make the build procedure function
// The build procedure wraps the IIFE in a lambda with 'args' as a parameter, thus creating a "complete" function
// @ts-ignore
deleteFollower(args).catch(handleError);
