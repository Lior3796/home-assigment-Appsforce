import { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import { useUserListContext } from '../../../context/context';
import { FILTER_EDIT_USERS } from '../../../redux/actions/types';
import { useUserContext } from '../../../context/context';

export const ModalCard = ({ open, handleClose, style }) => {
    const nameRef = useRef("");
    const emailRef = useRef("");
    const locationRef = useRef("");
    const [editedUser, setEditedUser] = useState({});

    const dispatch = useDispatch();
    const { users, setFlag } = useUserListContext();
    const { item } = useUserContext();


    const validateForm = (e) => {
        e.preventDefault();
        const nameValue = nameRef.current.children[1].children[0].value;
        const emailValue = emailRef.current.children[1].children[0].value;
        const locationValue = locationRef.current.children[1].children[0].value;

        if (nameValue.length < 3) return;
        if (!emailValue.includes("@")) return;
        if (locationValue.length === "") return;
        const newUser = {
            name: nameValue,
            email: emailValue,
            location: locationValue,
            key: item.id,
            picture: item.picture,
            id: item.id
        }
        dispatch({ type: FILTER_EDIT_USERS, payload: { editedUser, newUser, contextUsers: users } });

    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box component="form" onSubmit={(e) => validateForm(e)} sx={style}
                    noValidate
                    autoComplete="off">
                    <TextField
                        ref={nameRef}
                        id="outlined"
                        label="Name"
                        placeholder="Hello World"
                        sx={{ m: 2 }}
                    />
                    <TextField
                        ref={emailRef}
                        id="outlined"
                        label="Email"
                        placeholder="Hello World"
                        sx={{ m: 2 }}
                    />
                    <TextField
                        ref={locationRef}
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
            </Modal>
        </div>
    );
}
