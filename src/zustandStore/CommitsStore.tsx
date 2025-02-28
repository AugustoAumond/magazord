import {create} from 'zustand';

export const commitsStore = create<any>((set) => ({
  name: [],
  setName: (name: any) => set({ name: name }),  
}))