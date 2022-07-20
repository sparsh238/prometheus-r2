import { Box, Grid, Paper, Typography} from '@mui/material';
import ThankYou from '../../assets/thanks.webp'
import React from 'react';

export function ProfileComponent(props){
    return(
        <Box sx={{width: 1, height: 1}}>
            <Paper sx={{width: 1, height: 1}}>
                <Grid container xs={12} padding={4} sx={{margin:0}}>
                    <Grid item xs={6}>
                        <img src={ThankYou} width="500px" />
                    </Grid>
                    <Grid item xs={6} paddingTop="50px">
                        <Grid item xs={12} paddingBottom={3}>
                            <Typography variant='h3' fontWeight={500} sx={{color: "#526c82"}}>Thanks For Registering!</Typography>
                        </Grid>
                        <Grid item xs={12} paddingBottom={3}>
                            <Typography variant='h5' sx={{color: "#526c82"}}>Confirm Your Details</Typography>
                        </Grid>
                        <Grid item xs={12} paddingBottom={3}>
                            <div style={{paddingBottom: "15px"}}><span style={{fontSize: "20px", color: "#526c82"}}>I'm</span> <Typography variant="h4" fontWeight={500} sx={{color: "#b1c755"}}>{props.name}</Typography></div>
                            <div style={{paddingBottom: "15px"}}><span style={{fontSize: "20px", color: "#526c82"}}>You can reach me at</span> <Typography variant="h4" fontWeight={500} sx={{color: "#b1c755"}}>{props.email}</Typography></div>
                            <div style={{paddingBottom: "15px"}}><span style={{fontSize: "20px", color: "#526c82"}}>and I love</span><Typography variant="h4" fontWeight={500} sx={{color: "#b1c755"}}>{props.comedian}</Typography></div>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Paper>
        </Box>
    );
}