import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

function TransitionDown(props) {
    return <Slide {...props} direction="left" />;
}

export default function DirectionSnackbar({ props }) {
    const { isOpen, setMessage } = props

    const [state, setState] = React.useState({
        open: isOpen,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal } = state;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setState({ ...state, open: false });
    }

    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    )

    return (
        <Snackbar
            open={state.open}
            autoHideDuration={3000}
            onClose={handleClose}
            action={action}
            anchorOrigin={{ vertical, horizontal }}
            TransitionComponent={TransitionDown}
            message={setMessage}
            key={'SnakeAlert'}
        />
    );
}
