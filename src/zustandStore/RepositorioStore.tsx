import {create} from 'zustand';
import { AllRepositoriesProps } from '../interfaces/interfaces';

interface RepositoriesStoreProps {
  repositories: AllRepositoriesProps[]
  setRepositories: (e: AllRepositoriesProps) => void
  userName: string
  setUserName: (e: string) => void
}

export const RepositorieStore = create<RepositoriesStoreProps>((set) => ({
  repositories: [],
  userName: '',
  setRepositories: (newLists: any) => set(() => ( {repositories: newLists} )),  
  setUserName:  (name: string) => set(() => ( {userName: name} )),  
}))