import { createContext,useContext,useState } from "react";


const Connnt=createContext();
function useValue(){
    const value=useContext(Connnt);
    return value;
}
function ContextApi({children}){
    const [page,setPage]=useState(1);
return(
    <Connnt.Provider value={{page,setPage}}>
            {children}
    </Connnt.Provider>
)
}
export {useValue};
export default ContextApi;