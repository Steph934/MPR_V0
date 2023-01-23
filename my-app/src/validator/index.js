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
    }// else keep null if ok
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
        message = "N'est pas conforme"
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

    if (password.length < 3) {
        message = 'le mot de passe doit avoir une taille minimal de 3 caractère '
    } else if (!reg.test(password)) {
        message = "N'est pas conforme"
    } else if (!checkStringPass(password)) {
        message = "Le mot de passe doit contenir au minimum une majuscule, une minuscule et un chiffre"
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