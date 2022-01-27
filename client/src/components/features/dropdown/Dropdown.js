import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";


export const DropDown = ({ setType, type }) => {
    const [userChoice, setUserChoice] = useState("");
    const handleChange = (event) => {
        setType(event.target.value);

    };

    return (

        <FormControl variant="outlined" sx={{ mr: 1, width: "10%" }}>
            <InputLabel id="demo-simple-select-helper-label">
                {type || "Catgory"}
            </InputLabel>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={type}
                label="userChoice"
                onChange={(event) => handleChange(event)}
            >
                <MenuItem value={"Film"}>Film</MenuItem>
                <MenuItem value={"Sport"}>Sport</MenuItem>
                <MenuItem value={"Music"}>Music </MenuItem>
            </Select>
        </FormControl>

    );
};
