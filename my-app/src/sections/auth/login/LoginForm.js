import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';
import {
  validateMail,
 	validAccount,
  // Comparaison avec les id et mdp ./account.js
} from '../../../validator'

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [unvalidMSG, setUnvalidMSG,] = useState({
    mailError: null, 
    unvalidAccount: null,
  })
  const [formData, setFormData] = useState({
    email: '',
		password: '',
  })
  const [isValidAccount, setValidForm] = useState (false)

  const handleClick = () => {
    navigate('/dashboard', { replace: true });
    setValidForm(isValidAccount)
  };
  const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		})
	};

  useEffect(() => {
    setUnvalidMSG(prevState => ({
      ...prevState,      
      mailError: validateMail (formData.email),
      unvalidAccount: validAccount (formData.email, formData.password),
      
    }))
  }, [formData])

  return (
    <>
      <Stack spacing={3}>
        <TextField 
        name="email" 
        label="Email"
        variant='outlined'
        margin='normal'
        fullWidth
        id="email"
        value={formData.email}
        onChange={handleChange}
        error={formData.email && unvalidMSG.mailError != null}
        helperText={formData.email && unvalidMSG.mailError != null ? unvalidMSG.mailError : undefined}
        required
        />

        <TextField
          name="password"
          label="Mot de passe"
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
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" value="ce souvenir de moi"/>
        <Link variant="subtitle2" underline="hover">
          Mot de passe oublié ?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Connection
      </LoadingButton>
    </>
  );
}
