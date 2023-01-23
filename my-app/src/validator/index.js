import {
    account,
    accounts
} from '../_mock/account'

/**
 * 
 * @param {string} pseudo 
 * Vérifie que le pseudo est simple avec [a-z A-Z 0-9]
 * @returns {string} messageError
 */
export const validatePseudo = (pseudo) => {
    let message = null
    let reg = /^[a-zA-Z0-9]+$/;

    if (!reg.test(pseudo)) {
        message = 'Le pseudo doit contenir des caractères alphanumérique c\'est à dire a-z A-Z et peut également contenir des chiffres entre 0-9'
    } else if (pseudo.length < 3) {
        message = 'Le pseudo doit contenir minimum 3 caractères'
    } // else keep null if ok
    return message
}


/**
 * 
 * @param {string} email 
 * Regex source : source regex = https://emailregex.com/
 * validateur d'adresse mail via une regex trouver sur le web
 * @returns {string} messageError
 */
export const validateMail = (email) => {
    let message = null
    let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!reg.test(email)) {
        message = "N'est pas conforme au format Email"
    } // else keep null if ok

    return message
}

/**
 * Methode lié à validatePassword() permettant de checker s'il contient minuscule, majuscule et un chiffre 
 * @param {string} str 
 * @returns {boolean}
 */
function checkStringPass(str) {
    let hasLower = false;
    let hasUpper = false;
    let hasNumber = false;


    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') {
            hasLower = true;
        } else if (str[i] >= 'A' && str[i] <= 'Z') {
            hasUpper = true;
        } else if (str[i] >= '0' && str[i] <= '9') {
            hasNumber = true;
        }
    }
    return hasLower && hasUpper && hasNumber;
}

/**
 * 
 * @param {string} password 
 * validateur qui prend en paramètre un mot de passe et vérifie si les Regex et la taille sont conforme.
 * Retourne un message d'erreur ou NULL
 * @returns {string} messageError
 */
export const validatePassword = (password) => {
    let message = null
    let reg = /^[a-zA-Z0-9]+$/;

    if (password.length < 3 || password.length > 50) {
        message = 'le mot de passe doit avoir une taille minimal de 3 caractères et pas plus de 50 '
    } else if (!checkStringPass(password)) {
        message = "Le mot de passe doit contenir au minimum une majuscule, une minuscule et un chiffre"
    } else if (!reg.test(password)) {
        message = "N'est pas conforme doit contenir au minimum une majuscule, une minuscule et un chiffre"
    } // else keep null if ok

    return message
}
/**
 * @param {string} password 
 * @param {string} password2 
 * Validateur de confirmation entre deux mots de passe saisie.
 * Retourne un message d'erreur ou NULL
 * @returns {string | null} 
 */
export const validateConfirmation = (password, password2) => {
    let message = null
    if (password !== password2) {
        message = 'les mots de passe ne sont pas identique'
    } // else keep null if ok

    return message
}

export const validateForm = (errorMSG) => {
    console.log(errorMSG)
    for (const key in errorMSG) {
        console.log(`${key} : ${errorMSG[key]} `);
        if (errorMSG[key] !== null) {
            return false
        }
    }
    return true
}
//   - - - Donnée account - - - 
//   email: 'bulshitMail@daim.cum',
//   password: 'Aa11aA',

const validMail = (email) => {
    let message = null
    let mailAccount = account.email
    if (email !== mailAccount) {
        message = "Votre Adresse mail n'existe pas, veuillez créer un compte"
    }
    return message
    // Vérifier la validité du mail écrit avec le mail de -mock/account
}

const validPassword = (password) => {
    let message = null
    let passAccount = account.email
    if (password !== passAccount) {
        message = "Votre Mot de passe est éronné, veuillez le saisir à nouveau"
    }
    return message
    // Vérifier la validité du mail écrit avec le mail de -mock/account
}

// export const validAccount = (email, password) => {
//     let message = null
//     let mailAccount = account.email
//     let passAccount = account.password
//     if (password == passAccount) {

//     } else if (mailAccount == email) {

//     }
//     //  else if (mailAccount.id === passAccount.id) {

//     // }     
    
//     else {
//         message = "Votre compte n'existe pas ou votre saisie est éronnée. Rééssayez !"
//     }
//     return message
//     // Vérifier la validité du mail écrit avec le mail de -mock/account
// }

export const validAccount = (email, password) => {
    let message = null
   if (validPassword(password) === null && validMail(email) === null) {
    message = "valideAccount2"
   } 
   accounts.map((account) => account.email === email && account.password === password ? message = "OK" : "BAD" )
   
// équivalence du map avec un for    
//    for (let i = 0; i < accounts.length; i++) {
//     const account = accounts[i];
//     let isMatchingMail = false;
//     let isMatchingPass = false;
//     if (account.email === email) {
//         isMatchingMail = true
//     } else if (account.password === password) {
//         isMatchingPass = true
//     }
//     if (isMatchingMail && isMatchingPass) {
//         message = "OK"
//     }
//    }
 return message
}