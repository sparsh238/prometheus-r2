import './App.css';
import {Grid, Box, AppBar, Toolbar, Typography} from '@mui/material';
import {FormComponent} from './components/FormComponent/FormComponent'
import React from 'react';
import ComedyNight from './assets/ComedyNight.jpg'
import XLRILogo from './assets/xlri2.png'
import Nishant from './assets/nish.jpg'
import Bassi from './assets/bas.jpg'
import Aakash from './assets/aak.jpg'
import Prashasti from './assets/prash.jpg'
import { ListComponent } from './components/LIstComponent/ListComponent';
import { ProfileComponent } from './components/ProfileComponent/ProfileComponent';

function App() {
  const [name, setName] = React.useState(null);
  const [password, setPassword] = React.useState(null)
  const [email, setEmail] = React.useState(null)
  const [comedian, setComedian] = React.useState(null)
  const [submit, onSubmit] = React.useState(false)

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar sx={{bgcolor: "#0e5396"}}>
          <img src={XLRILogo} width="130px" />
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, px: 20 , py: 5, bgcolor: '#f4f4f4'}}>
        {submit === true ? <ProfileComponent name={name} email={email} comedian={comedian}/> : (
            <Grid container spacing={5}>
                <Grid item xs={6}>
                  <img src={ComedyNight} width="100%"/>
                </Grid>
                <Grid item xs={6}>
                  <FormComponent setName={setName.bind(this)} setPassword={setPassword.bind(this)} setEmail={setEmail.bind(this)} setComedian={setComedian.bind(this)} onSubmit={onSubmit.bind(this)}/>
                </Grid>
                <Grid item container xs={12}>
                  <Grid item xs={12} paddingBottom={3}>
                    <Typography variant='h3' fontWeight={500} sx={{color: "#526c82"}}>Other Guests!</Typography>
                  </Grid>
                  <Grid item container xs={12} spacing={3}>
                    <Grid item xs={3}>
                      <ListComponent image={Nishant} name={"Nishant Suri"}/>
                    </Grid>
                    <Grid item xs={3}>
                      <ListComponent image={Prashasti} name={"Prashasti Singh"}/>
                    </Grid>
                    <Grid item xs={3}>
                      <ListComponent image={Bassi} name={"Anubhav Bassi"}/>
                    </Grid>
                    <Grid item xs={3}>
                      <ListComponent image={Aakash} name={"Aakash Gupta"}/>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

            )
          }
    </Box>

    </div>
  );
}

export default App;
