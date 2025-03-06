import useSWR from "swr";
import fetcher, { getUser, getAllRepositories, getUserStarred,  getFilterRepositories, getCommits } from "../service/actions.ts";

export const useUser = (userName: string) => useSWR(userName ? getUser(userName) : null, fetcher);
export const useAllRepositories = (userName: string) => useSWR(userName ? getAllRepositories(userName) : null, fetcher);
export const useUserStarred = (userName: string) => useSWR(userName ? getUserStarred(userName) : null, fetcher);
export const useFilterRepositories = (searchRepo: string, userName: string) => useSWR(searchRepo && userName ? getFilterRepositories(searchRepo, userName) : null, fetcher);
export const useCommits = ( userName: string, repoName: string) => useSWR(repoName && userName ? getCommits(userName, repoName) : null, fetcher);
