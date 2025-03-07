import {create} from 'zustand';

interface RepositoriesStoreProps {
  repositories: any[]
  setRepositories: (e: any) => void
  userName: string
  setUserName: (e: string) => void
}

export const RepositorieStore = create<RepositoriesStoreProps>((set) => ({
  repositories: [],
  userName: '',
  setRepositories: (newLists: any) => set(() => ( {repositories: newLists} )),  
  setUserName:  (name: string) => set(() => ( {userName: name} )),  
}))