import React, { useEffect, useState } from 'react';
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

import { signUp } from '../../../services/user/UserServices'
import DirectionSnackbar from 'src/components/snack';
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

	const [showPassword, setShowPassword] = useState(false);
	const [errorMSG, setErrorMSG] = useState({
		pseudoError: null,
		mailError: null,
		passwordError: null,
		confirmationError: null
	})
	const [formControl, setFormControl] = useState({
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
	const [message, setMessage] = useState('Inscription CONFORME LA PUTAIN DE TOI')

	// const [formData, setFormData] = useState({});

	const handleFocusFormClick = (event) => {
		const { name } = event.target;
		setFormTouched({
			...formTouched,
			[name]: true
		})
	}

	const handleClick = () => {

		navigate('/signin', { replace: true });

		setValidForm(validateForm(errorMSG))


	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormControl({
			...formControl,
			[name]: value,
		})
	};

	const [submit, setSubmit] = useState(false)


	const handleSubmit = (event) => {
		event.preventDefault(); // TODO enlever la possibilité de validé le formulaire avec la touche ENTRER
		// console.group('Response formCONTROLE')
		// console.log(formControl.pseudo, formControl.email, formControl.password);

		// console.groupEnd()

		if (validForm) {
			let signForm = { pseudo: formControl.pseudo, email: formControl.email, password: formControl.password }
			
			setSubmit(true)

			signUp(signForm)
				.then(response => {
					console.log(response.data.message);
					setMessage(response.data.message)
				})
				.catch(err => {
					const { response } = err;
					console.log(response.data.message);
					setMessage(response.data.message)
				})
			}
	};


	useEffect(() => {
		setErrorMSG(prevState => ({
			...prevState,
			pseudoError: validatePseudo(formControl.pseudo),
			mailError: validateMail(formControl.email),
			passwordError: validatePassword(formControl.password),
			confirmationError: validateConfirmation(formControl.password, formControl.password2),
		}))
	}, [formControl])

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
							value={formControl.pseudo}
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
							value={formControl.email}
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
							value={formControl.password}
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
							value={formControl.password2}
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

				{
					 submit && <DirectionSnackbar props={{ isOpen: validForm, setMessage:  message }} />
				}


			</Box>

		</>
	);
}
