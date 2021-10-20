import React, { useContext, useState, useEffect } from 'react';
import { EntriesCTX } from './EntriesCTX';

export const AddEntry = (props) => {
    const [entries, cocktails, setCocktails, setEntries] = useContext(EntriesCTX);
    const [AddTemp, setAddTemp] = useState({
        name: "",
        cocktail: "Malta",
        points: ""
    });

    console.log(props.editInd);
    console.log("dataaaa", props.dataToEdit);
    const handleSubmit = (e) => {
        e.preventDefault();
        setEntries((prev) => {
            return [...prev, { ...AddTemp }]
        });
        let cocktailName = AddTemp.cocktail;
        if (cocktailName === "Malta")
            setCocktails({ Malta: cocktails.Malta + 1, Santrá: cocktails.Santrá, Sönfee: cocktails.Sönfee });
        else if (cocktailName === "Santrá")
            setCocktails({ Malta: cocktails.Malta, Santrá: cocktails.Santrá + 1, Sönfee: cocktails.Sönfee });
        else if (cocktailName === "Sönfee")
            setCocktails({ Malta: cocktails.Malta, Santrá: cocktails.Santrá, Sönfee: cocktails.Sönfee + 1 });
        
    }
    
    const EditFormHandler = (e) => {
        e.preventDefault();
        let editedEntries = [...entries];
        editedEntries[props.editInd] = props.dataToEdit;
        console.log("goin", editedEntries[props.editInd]);
        setEntries(editedEntries);
        
        props.setFlag({ flag: null });

    }
    const handleOnChange = (e) => {
        e.preventDefault();
        console.log("sssss", AddTemp);
        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;
        const newAddTemp = { ...AddTemp }
        newAddTemp[fieldName] = fieldValue;
        setAddTemp(newAddTemp);
    }
    const handleEditOnChange = (e) => {
        e.preventDefault();
        console.log("eeeeee", props.dataToEdit);
        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;
        const newEditTemp = { ...props.dataToEdit };
        newEditTemp[fieldName] = fieldValue;
        props.setDataToEdit(newEditTemp);

    }
    return (
        <div className="xcontainer">
            <h1>Add Entry</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input name="name" id="name" onChange={(props.editInd != null) ? handleEditOnChange : handleOnChange} type="text" required="required" placeholder="Enter Your Name" value={(props.editInd != null) ? props.dataToEdit.name : AddTemp.name} />
                <label htmlFor="cocktail">Select cocktail</label>
                <select name="cocktail" id="cocktail" required="required" onChange={(props.editInd != null) ? handleEditOnChange : handleOnChange} value={(props.editInd != null) ? props.dataToEdit.cocktail : ""}>
                    <option value="Malta">Malta</option>
                    <option value="Santrá">Santrá</option>
                    <option value="Sönfee">Sönfee</option>
                </select>
                <label htmlFor="points">Points (0 to 10)</label>
                <input type="number" id="points" onChange={(props.editInd != null) ? handleEditOnChange : handleOnChange} name="points" required="required" placeholder="Give points" min="0" max="10" value={(props.editInd != null) ? props.dataToEdit.points : AddTemp.points}></input>
                <div id="form-buttons" >
                    {(props.editInd != null) ? <></> : <button type="reset">Reset</button>}

                    {(props.editInd != null) ?
                        <button id="add-btn" onClick={EditFormHandler}>Save</button>
                        :
                        <button id="add-btn" type="submit">Add</button>
                    }
                </div>
            </form>
        </div >
    )
}

