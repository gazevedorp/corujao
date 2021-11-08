import create from 'zustand'
//import { persist } from "zustand/middleware";
//import AsyncStorage from '@react-native-community/async-storage';

export const useMainContext = create(
    //persist(
        set => ({
            search: "",
            type: "",
            
            setSearch: (newSearch, newType) => set({
                search: newSearch,
                type: newType
            }),
        }),
        //{
        //    name: 'boapraca@addressList',
        //    getStorage: () => AsyncStorage,
        //}
    )//);