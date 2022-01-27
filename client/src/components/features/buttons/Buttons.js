import React, { useState, } from 'react';
import { Stack } from '@mui/material';
import { AddButton } from '../addButton/AddButton';
import { RemoveButton } from '../removeButton/RemoveButton';
export const Buttons = ({ key }) => {
    return (
        <div className="button-container">
            <Stack direction="row" spacing={1}>
                <AddButton />
                <RemoveButton />
            </Stack>
        </div>
    )
}
