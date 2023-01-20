import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Stack, IconButton, InputAdornment, TextField, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';
import { makeStyles } from '@material-ui/core';


// ----------------------------------------------------------------------


const validatePassword = (password) => {
  let message = null
  let reg = /^[a-zA-Z0-9]+$/;

  if (!(password.length >= 3 && password.length < 15)) {
    message = 'Length error'
  } else if (!reg.test(password)) {
    message = 'Regex Error'
  }

  return message
}

const validateConfirmation = (password, password2) => {
  let message = null
  // setPasswordValidation(true)

  if (password !== password2) {
    message = 'match error'
  } // else keep null if ok

  return message
}






export default function SignInForm() {
  const navigate = useNavigate();

  //! State 
  const [showPassword, setShowPassword] = useState(false);


  const [errorMSG, setErrorMSG] = useState({
    pseudoError: '',
    mailError: '',
    passwordError: '',
    confirmationError: ''
  })

  const [formData, setFormData] = useState({
    pseudo: '',
    email: '',
    password: '',
    password2: '',
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
    })
  };



  useEffect(() => {
    const passErrMsg = validatePassword(formData.password);
    const confErrMsg = validateConfirmation(formData.password, formData.password2);

    setErrorMSG(prevState => ({
      ...prevState,
      passwordError: passErrMsg,
      confirmationError: confErrMsg
    }))
  }, [formData])

  

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
              type={'text'}
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
              error={errorMSG.passwordError != null}
              helperText={errorMSG != null ? errorMSG.passwordError : undefined}
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={formData.password}
              onChange={handleChange}
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
              id="password2"
              name="password2"
              label="Répéter votre mot de passe"
              value={formData.password2}
              onChange={handleChange}
              error={errorMSG.confirmationError != null}
              helperText={errorMSG != null ? errorMSG.confirmationError : undefined}
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
