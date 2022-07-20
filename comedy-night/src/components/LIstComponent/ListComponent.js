import { Box, Grid, Paper, Typography} from '@mui/material';
import React from 'react';

export function ListComponent(props){
    return(
        <Box sx={{width: 1, height: 1}}>
            <Paper sx={{width: 1, height: 1}}>
                <Grid container xs={12} padding={4} sx={{margin:0}}>
                    <Grid item xs={12}>
                        <img src={props.image} width="100%" />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6' sx={{color: "#526c82"}}>{props.name}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}