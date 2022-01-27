import { useState } from 'react'
import '../../styles/style.css';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import { ModalCard } from '../modalCard/ModalCard';

export const AddButton = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        height: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <IconButton onClick={handleOpen} color="primary" aria-label="add to shopping cart">
                <EditIcon />
            </IconButton>
            <ModalCard style={style} open={open} handleClose={handleClose} />
        </div>

    );
}
