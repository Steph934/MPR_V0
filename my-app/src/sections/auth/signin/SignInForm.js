import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Stack, IconButton, InputAdornment, TextField, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';
import { makeStyles } from '@material-ui/core';
import {
  validatePseudo,
  validateMail,
  validatePassword,
  validateConfirmation
} from '../../../validator'


// ----------------------------------------------------------------------


export default function SignInForm() {
  const navigate = useNavigate();
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
  const [formTouched, setFormTouched] = useState({
    pseudo: false,
    email: false,
    password: false,
    password2: false,
  });

  // onFocus => au click sur le champs input => changé états de formTouched[name] = true
  const handleFocusFormClick = (event) => {
    const { name } = event.target;
    setFormTouched({
      ...formTouched,
      [name]: true
    })
  }

  const handleClick = () => {
    navigate('/signin', { replace: true });

    // TODO - plus tard - en cas de validation du serveur allez sur son dashboard

    // établir une vérification des données rentré et si valide envoyé une request POST au formulaire d'incription afin de crée un utilisateur 
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.group('Response form Sign')
    console.log(formData);
    console.groupEnd()
    // ici on peut ajouter l'envoie des données avec une requête HTTP
  };


  useEffect(() => {
    const pseudoErrMsg = validatePseudo(formData.pseudo);
    const mailErrMsg = validateMail(formData.email);
    const passErrMsg = validatePassword(formData.password);
    const confErrMsg = validateConfirmation(formData.password, formData.password2);
    setErrorMSG(prevState => ({
      ...prevState,
      // NOTE Ici j'ai un doute concernant le formTouched bon après ça fonctionne.
      pseudoError: formTouched.pseudo ? pseudoErrMsg : null,
      mailError: formTouched.email ? mailErrMsg : null,
      passwordError: formTouched.password ? passErrMsg : null,
      confirmationError: formTouched.password2 ? confErrMsg : null,
    }))
  }, [formData, formTouched])




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
              error={errorMSG.pseudoError != null}
              helperText={errorMSG != null ? errorMSG.pseudoError : undefined}
              onFocus={handleFocusFormClick}
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
              error={errorMSG.mailError != null}
              helperText={errorMSG != null ? errorMSG.mailError : undefined}
              onFocus={handleFocusFormClick}
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
              onFocus={handleFocusFormClick}
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
              onFocus={handleFocusFormClick}
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
