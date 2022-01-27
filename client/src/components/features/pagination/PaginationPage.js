import React from 'react';
import Pagination from '@mui/material/Pagination';
import { PaginationItem } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import '../../styles/style.css';

export const PaginationPage = ({ setPage }) => {
    const changePage = (item) => {
        setPage(item.page);
        return < PaginationItem {...item} />
    }
    return (
        <div className="pagination-container">
            <Stack spacing={2}>
                <Pagination renderItem={(item) => changePage(item)} count={5} variant="outlined">
                </Pagination>
            </Stack>
        </div>
    );
}
