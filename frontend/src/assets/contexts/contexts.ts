import {createContext, useContext} from "react";

export const SearchContext = createContext<string>()

export function UseSearchContext() {
    const [searchTerm, setSearchTerm] = useContext(SearchContext)
    if (searchTerm === undefined) {
        setSearchTerm("")
    }
}