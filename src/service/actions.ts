// src/api/actions.ts
import axios from "axios";

const API_URL = "https://api.github.com";
const token = import.meta.env.VITE_API_KEY;

const fetcher = (url: string) =>
  axios.get(`${API_URL}${url}`, { headers: { Authorization: `token ${token}` } }).then((res) => res.data);

export const getUser = (userName: string) => `/users/${userName}`;
export const getUserStarred = (userName: string) => `/search/repositories?q=user:${userName}+stars:>0&sort=stars&order=desc`;
export const getAllRepositories = (userName: string) => `/users/${userName}/repos?per_page=500`;
export const getFilterRepositories = (searchRepo: string, userName: string) => `/search/repositories?q=${searchRepo}+user:${userName}`;
export const getFilterLanguage = (language: string, userName: string) => `/search/repositories?q=language:${language}+user:${userName}`;
export const getFilterType = (type: string, userName: string) => `/search/repositories?q=visibility:${type}+user:${userName}`;
export const getCommits = (userName: string, repo: string, ) => `/repos/${userName}/${repo?.replace(`${userName}/`, '')}/commits`;

export default fetcher;