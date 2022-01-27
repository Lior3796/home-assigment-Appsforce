import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Buttons } from '../buttons/Buttons';
import { useUserContext } from '../../../context/context';

export const UserList = () => {
    const { item } = useUserContext();
    return (

        <>
            <ListItem >
                <ListItemText

                    primary="User"
                    secondary={
                        <>
                            <Typography
                                sx={{ display: 'inline', fontSize: "1.3rem" }}
                                component="h3"
                                variant="div"

                            >
                                {item.name}

                            </Typography>
                            <Typography
                                sx={{ fontSize: "1.2rem" }}
                                component="h6"
                                variant="p"
                                color="white"
                            >
                                {item?.location}
                            </Typography>
                            <Typography
                                sx={{ fontSize: "1rem" }}
                                component="h6"
                                variant="p"
                                color="white"
                            >
                                {item?.email}

                            </Typography>
                            <Typography
                                sx={{ fontSize: "1rem" }}
                                component="h6"
                                variant="p"
                                color="white"
                            >
                                {item?.id}

                            </Typography>

                        </>
                    }
                />
                <ListItemAvatar >
                    <Avatar sx={{ width: "70px", height: "70px" }} src={item?.picture} />

                </ListItemAvatar>
                <Buttons />

            </ListItem>

            <Divider />
        </>
    );
}
