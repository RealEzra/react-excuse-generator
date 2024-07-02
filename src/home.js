import {  Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import Excuse from "./excuser";


export default function Home() {
    const [excuseValue, setExcuseValue] = useState("");
    const [view, setView] = useState("home");

    const handleChange = (event) => {
        setExcuseValue(event.target.value)
        setView("excuse")
    }

    if(view !== "home") {
        return(
            <>
            <Excuse value={excuseValue}/>
            <Home/>
            </>
        )
    }



    return(
        <>
        <div className="heading">
            <h1>Excuser</h1>
            <p>Create excuses on the fly!</p>
        </div>

        <div>
            <Box sx={{maxWidth: 250}}>
            <FormControl fullWidth>
            <InputLabel id="excuse">Excuse</InputLabel>
            <Select
                labelId="excuse"
                id="excuse-select"
                value={excuseValue}
                label="excuse"
                onChange={handleChange}
            >
            <MenuItem value="family">Family</MenuItem>
            <MenuItem value="office">Office</MenuItem>
            <MenuItem value="children">Children</MenuItem>
            <MenuItem value="college">College</MenuItem>
            <MenuItem value="party">Party</MenuItem>
            <MenuItem value="funny">Funny</MenuItem>
            <MenuItem value="unbelievable">Unbelievable</MenuItem>
            <MenuItem value="developers">Developers</MenuItem>
            <MenuItem value="gaming">Gaming</MenuItem>
        </Select>
        </FormControl>
        </Box>
        </div>
        </>
    )
}