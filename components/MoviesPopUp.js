import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function MoviesPopUp({ openMoviesPopUp, currentMovie, handleCloseMoviesPopUp }) {

    return (
        <React.Fragment>

            <Dialog
                open={openMoviesPopUp}
                onClose={handleCloseMoviesPopUp}
            >
                <DialogTitle id="alert-dialog-title">
                    {currentMovie?.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {currentMovie?.description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseMoviesPopUp}>Disagree</Button>
                    <Button onClick={handleCloseMoviesPopUp} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}