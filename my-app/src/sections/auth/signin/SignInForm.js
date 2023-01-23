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
	validateConfirmation,
	validateForm
} from '../../../validator'
import BasicModal from 'src/components/modal';


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
		pseudoError: null,
		mailError: null,
		passwordError: null,
		confirmationError: null
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

	const [validForm, setValidForm] = useState(false)

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
		
		// TODO - handleClick
		setValidForm(validateForm(errorMSG))
		// Faire valider le formulaire & controler
		// Afficher le ou les messages d'erreur ou de succes à l'inscription
		// Après lecture du modal puis fermeture redirection /login
		// Ou après un certain temps (timer) redirection /login
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
		setErrorMSG(prevState => ({
			...prevState,
			pseudoError: validatePseudo(formData.pseudo),
			mailError: validateMail(formData.email),
			passwordError: validatePassword(formData.password),
			confirmationError: validateConfirmation(formData.password, formData.password2),
		}))
	}, [formData])


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
							error={formTouched.pseudo && errorMSG.pseudoError != null}
							helperText={formTouched.pseudo && errorMSG.pseudoError != null ? errorMSG.pseudoError : undefined}
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
							error={formTouched.email && errorMSG.mailError != null}
							helperText={formTouched.email && errorMSG.mailError != null ? errorMSG.mailError : undefined}
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
							error={formTouched.password && errorMSG.passwordError != null}
							helperText={formTouched.password && errorMSG.passwordError != null ? errorMSG.passwordError : undefined}
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
							error={formTouched.password2 && errorMSG.confirmationError != null}
							helperText={formTouched.password2 && errorMSG.confirmationError != null ? errorMSG.confirmationError : undefined}
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

			
				{validForm && <p>Inscription CONFORME LA PUTAIN DE TOI</p> }
			

			</Box>

		</>
	);
}
