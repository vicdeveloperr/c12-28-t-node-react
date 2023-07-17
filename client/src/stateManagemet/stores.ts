import { create } from "zustand"

type elementsInTopBarElement = "sideBarNavToglerElement" | "logoElement" | "searchBarElement" | "searchBarToglerElement";
type topBarStore = {
    sideBarNavToglerElement: boolean,
    logoElement: boolean,
    searchBarToglerElement: boolean,
    searchBarElement: boolean,
    hiddenElements: (elements: Array<elementsInTopBarElement>) => void,
    showElements: (elements: Array<elementsInTopBarElement>) => void
}

export const useTopBarStore = create<topBarStore>()((set) => ({
    sideBarNavToglerElement: true,
    searchBarToglerElement: true,
    logoElement: true,
    searchBarElement: true,
    hiddenElements: (elements) => set(() => {
        let elementsVisible = {
            sideBarNavToglerElement: true,
            logoElement: true,
            searchBarElement: true,
            searchBarToglerElement: true
        }

        elements.map((element) => {
            if(element in elementsVisible){
                elementsVisible[element] = false;
            }
        })

        return elementsVisible
    }),
    showElements: (elementsToHide) => set(() => {
            let elements = {
                sideBarNavToglerElement: true,
                logoElement: true,
                searchBarElement: true,
                searchBarToglerElement: true
            }
    
            elementsToHide.map((element) => {
                if(element in elements){
                    elements[element] = false;
                }
            })
    
            return elements
    })
}));