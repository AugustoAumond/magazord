import {create} from 'zustand';

interface RepositoriesStoreProps {
  repositories: any[]
  setRepositories: (e: any) => void
}

export const RepositorieStore = create<RepositoriesStoreProps>((set) => ({
  repositories: [],
  setRepositories: (newLists: any) => set(() => ( {repositories: newLists} )),  
}))