import {handleError} from "../../util/HandleError";
import {addUserToSequence} from '../../util/Common';

/**
 * Add person to the list of people that follow someone.
 */
const addFollower = async ({target, user}: {target: string, user: string}) => {

  if (!target || !user) throw new Error('Follower and followee parameters required.');
  await addUserToSequence('followers', target, user);
};

// Boilerplate call to the function we've just defined (IIFE), required to make the build procedure function
// The build procedure wraps the IIFE in a lambda with 'args' as a parameter, thus creating a "complete" function
// @ts-ignore
addFollower(args).catch(handleError);
