import { promisify } from "util";
import { documentLink } from "./DocumentLink";

// Using promisify here allows us to replace the obnoxious callback API with
// a much better async API.

// We also modify the API to take object IDs directly, rather than require the user
// to figure out the document link string.

// This can (obviously) be expanded to whichever CosmosDB StoredProc API functions you wish to wrap.

/**
 * Promisified read document function.
 */
export const readDocument: <T>(id: string) => Promise<T> = promisify<
  string,
  any
>((id, callback) => __.readDocument(documentLink(id), callback));

/**
 * Promisified create document function.
 */
export const createDocument: <T extends CosmosDocument>(
  document: T
) => Promise<{}> = promisify<{}, {}>((document, callback) =>
  __.createDocument(__.getSelfLink(), document, callback)
);

/**
 * Promisified replace document function.
 */
export const replaceDocument: <T extends CosmosDocument>(
  id: string,
  document: T
) => Promise<{}> = promisify<string, {}, {}>((id, document, callback) =>
  __.replaceDocument(documentLink(id), document, callback)
);

/**
 * Promisified delete document function.
 */
export const deleteDocument: (
  id: string
) => Promise<{}> = promisify<string, {}>((id, callback) =>
  __.deleteDocument(documentLink(id), callback)
);

export const query: <T>(
  q: (r: IQueryResponse) => IQueryResponse,
  options?: IFeedOptions
) => Promise<T[]> = promisify<(r: IQueryResponse) => IQueryResponse, IFeedOptions, {}>(
  (
    q: (r: IQueryResponse) => IQueryResponse,
    options: IFeedOptions,
    callback
  ) => q(__.chain()).value(options, callback))
