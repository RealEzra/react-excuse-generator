import { useEffect, useState } from "react";
import { Alert, Skeleton } from "@mui/material";

export default function Excuse({value}) {
    const [excuse, setExcuse] = useState("");
    useEffect(() => {
        fetch(`https://excuser-three.vercel.app/v1/excuse/${value}`)
        .then(response => response.json())
        .then(json => {
            setExcuse(json[0].excuse);
        })
    }, [value])


    while(excuse === undefined) {
        console.log(excuse)
        return(
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

        )
    }


    return (
        <Alert severity="success">Your Excuse: {excuse}</Alert>
    )


}