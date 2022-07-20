import { Box, Grid, Paper, TextField, Typography, Button } from '@mui/material';
import React from 'react';
import axios from "axios";

const baseURL = "https://w87lymghre.execute-api.ap-south-1.amazonaws.com/prod/"

export function FormComponent(props){

    const [comedian, setComedian] = React.useState(null);
    const [name, setName] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [email, setEmail] = React.useState(null);

    function formSubmit() {
        axios.post(baseURL + "post?name=" + name + "&password=" + password + "&email=" + email + "&comedian=" + comedian).then(res =>{
                axios.get(baseURL + "get").then(result => {
                    console.log(result)
                    let jsonData = result.data
                    props.setName(jsonData.name)
                    props.setPassword(jsonData.password)
                    props.setEmail(jsonData.email)
                    props.setComedian(jsonData.comedian)
                    props.onSubmit(true)
                })
        })
    }

    return (
        <Box sx={{
            width: 1,
            height: 1
        }}>
            <Paper sx={{width: 1, height: 1}}>
                <Grid container xs={12} padding={5} sx={{margin:0}}>
                    <Grid item xs={12} paddingBottom={5}>
                        <Typography variant="h3" fontWeight={500} sx={{color: "#526c82"}}>
                            Register Here
                        </Typography>
                    </Grid>
                    <Grid item container xs={12} columnSpacing={2} paddingBottom={2}>
                        <Grid item xs={6}>
                            <TextField id="name" label="Name" variant="standard" sx={{width: "80%"}} onChange={(newValue) => {setName(newValue.target.value)}}/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="password" label="Password" variant="standard" sx={{width: "80%"}} type="password" onChange={(newValue) => {setPassword(newValue.target.value)}}/>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} columnSpacing={2} paddingBottom={2}>
                        <Grid item xs={6}>
                            <TextField id="email" label="Email" variant="standard" type="email" sx={{width: "80%"}} onChange={(newValue) => {setEmail(newValue.target.value)}}/>
                        </Grid>
                        <Grid item xs={6}>
                        <TextField id="comedian" label="Fav Comedian" variant="standard" sx={{width: "80%"}} onChange={(newValue) => {setComedian(newValue.target.value)}}/>                             
                        </Grid>
                    </Grid>
                    <Grid item xs={12} paddingTop={5}>
                        <Button onClick={formSubmit} variant="contained" sx={{bgcolor: "#b1c755"}}>Submit</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

