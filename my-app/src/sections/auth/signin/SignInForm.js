import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Stack, IconButton, InputAdornment, TextField, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';
import { makeStyles } from '@material-ui/core';


// ----------------------------------------------------------------------

export default function SignInForm() {
  const navigate = useNavigate();

  //! State 
  const [showPassword, setShowPassword] = useState(false);

  const [passwordValidation, setPasswordValidation] = useState(false);

  const [errorMSG, setErrorMSG] = useState('')

  const [formData, setFormData] = useState({
    pseudo: '',
    email: '',
    password: '',
  });




  const handleClick = () => {
    navigate('/signin', { replace: true });

    // TODO - plus tard - en cas de validation du serveur allez sur son dashboard

    // établir une vérification des données rentré et si valide envoyé une request POST au formulaire d'incription afin de crée un utilisateur 
  };

  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(2),
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const comparePassword = (e) => {
    const { name, value } = e.target;

    if (name === 'password'){
      let reg = /^[a-zA-Z0-9]+$/;
      if (!reg.test(value)){
        setErrorMSG("le pseudo ne doit contenir que des caractères alphanumériques")
        return setPasswordValidation(true)
      }
      if(value.length < 3 || value.length > 15){
        setErrorMSG("le pseudo doit avoir entre 3 et 15 caractères")
        return setPasswordValidation(true)
     }
      return setPasswordValidation(false)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.group('Response form Sign')
    console.log(formData);
    console.groupEnd()
    // ici on peut ajouter l'envoie des données avec une requête HTTP
  };

  return (
    <>
      <Box>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Stack
            spacing={2}
          >
            <TextField
              id='pseudo'
              name="pseudo"
              label="Pseudo"
              type={'test'}
              fullWidth
              value={formData.pseudo}
              onChange={handleChange}
              required
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adresse email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={formData.password}
              onChange={handleChange}
              onFocus={comparePassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              name="password"
              label="Répéter votre mot de passe"
              onChange={comparePassword}
              onFocus={comparePassword}
              error={passwordValidation}
              helperText={passwordValidation && errorMSG }
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <LoadingButton
              type="submit"
              fullWidth
              color="primary"
              size="large"
              variant="contained"
              onClick={handleClick}
            >
              Inscription
            </LoadingButton>

          </Stack>
        </form>
      </Box>

    </>
  );
}
