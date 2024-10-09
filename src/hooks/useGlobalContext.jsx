import { globalContext } from "../context/global-context";

export const useGlobalContext = () => {
    return useContext(globalContext);
};