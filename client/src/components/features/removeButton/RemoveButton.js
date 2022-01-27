import React from 'react'
import '../../styles/style.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';

export const RemoveButton = () => {
    return (
        <IconButton color="primary" aria-label="remove to shopping cart">
            <DeleteIcon />
        </IconButton>
    );
}
