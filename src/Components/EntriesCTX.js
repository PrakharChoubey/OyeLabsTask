const { createContext, useState } = require("react");
// const { default: Entries } = require("./Entries");

export const EntriesCTX=createContext();

export const EntriesCTXP=(props)=>{

    
    const [entries,setEntries]=useState([
        {
            name:"Example1",
            cocktail:"Santrá",
            points:"19"
        },
        {
            name:"Example2",
            cocktail:"Malta",
            points:"29"
        },
        {
            name:"Example3",
            cocktail:"Sönfee",
            points:"39"
        }
    ]);
    const [cocktails, setCocktails] = useState({
        Malta: 1,
        Santrá: 1,
        Sönfee: 1
    });
    return(
        <EntriesCTX.Provider value={[entries, cocktails, setCocktails, setEntries]}>
            {props.children}
        </EntriesCTX.Provider>
    )
}