import { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import '../styles/style.css';


export const NewUser = () => {
    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flexDirection: "column",


    }
    return (
        <form className="form-container">
            <Box component="form"
                sx={style}
                noValidate
                autoComplete="off">
                <TextField
                    // ref={nameRef}
                    id="outlined"
                    label="Name"
                    placeholder="Hello World"
                    sx={{ m: 2 }}
                />
                <TextField
                    // ref={emailRef}
                    id="outlined"
                    label="Email"
                    placeholder="Hello World"
                    sx={{ m: 2 }}
                />
                <TextField
                    // ref={locationRef}
                    id="outlined"
                    label="Location"
                    placeholder="Hello World"
                    sx={{ m: 2 }}
                />
                <Stack spacing={2}>
                    <Button type="submit">Save</Button>
                    <Button>Cancel</Button>
                </Stack>
            </Box>

        </form>);
};
