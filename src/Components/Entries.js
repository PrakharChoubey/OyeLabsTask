import React, { useContext, useState } from 'react';
import { EntriesCTX } from './EntriesCTX';
import { AddEntry } from './AddEntry';

const Entries = (props) => {
    const [flag, setFlag] = useState(null);
    const [entries, cocktails, setCocktails, setEntries] = useContext(EntriesCTX);

    const [dataToEdit, setDataToEdit] = useState({
        name: "",
        cocktail: "Malta",
        points: ""
    });

    // Took help rom Developer.mozilla.org
    const onDelete = (e) => {
        e.preventDefault();
        const delIndex = e.currentTarget.parentNode.parentNode.getAttribute("id");
        let cocktailName=entries[delIndex].cocktail;
        let tempEntries = [...entries];
        tempEntries.splice(delIndex, 1);
        setEntries(tempEntries);
        if (cocktailName === "Malta")
            setCocktails({ Malta: cocktails.Malta + -1, Santrá: cocktails.Santrá, Sönfee: cocktails.Sönfee });
        else if (cocktailName === "Santrá")
            setCocktails({ Malta: cocktails.Malta, Santrá: cocktails.Santrá - 1, Sönfee: cocktails.Sönfee });
        else if (cocktailName === "Sönfee")
            setCocktails({ Malta: cocktails.Malta, Santrá: cocktails.Santrá, Sönfee: cocktails.Sönfee - 1 });
    }
    const onEdit = (e) => {
        e.preventDefault();
        const editingIndex = e.currentTarget.parentNode.parentNode.getAttribute("id");
        setFlag({ flag: editingIndex });
        setDataToEdit({
            name: entries[editingIndex].name,
            cocktail: entries[editingIndex].cocktail,
            points: entries[editingIndex].points
        });
    }
    return (
        <>
            <AddEntry editInd={flag == null ? null : flag.flag} setFlag={setFlag} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}  />
            <div className="xcontainer">
                <h1>Entries</h1>
                <div className="cocktails">
                    <span>#1 Malta({cocktails.Malta})</span>
                    <span>#2 Santrá({cocktails.Santrá})</span>
                    <span>#3 Sönfee({cocktails.Sönfee})</span>
                </div>
                <div className="scroll">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>CockTail</th>
                                <th>Points Given</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {entries.map((entry, ind) => {
                                return (
                                    <tr key={ind} id={ind}>
                                        <td>{entry.name}</td>
                                        <td>{entry.cocktail}</td>
                                        <td>{entry.points}</td>
                                        {(flag == null ? false : flag.flag == ind) ? <td><span>Editing...</span></td> :
                                            <td>
                                                <button onClick={onEdit}>Edit</button>
                                                <button onClick={onDelete}>Delete</button>
                                            </td>}

                                    </tr>
                                )
                            })}
                        </tbody>

                    </table>
                </div>
            </div></>
    )
}
export default Entries;