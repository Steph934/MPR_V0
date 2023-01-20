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
        message = 'Regex Pseudo Error'
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
        message = 'Regex Mail Error'
    } // else keep null if ok

    return message
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

    if (!(password.length >= 3 && password.length < 15)) {
        message = 'Length error'
    } else if (!reg.test(password)) {
        message = 'Regex Error'
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
        message = 'match error'
    } // else keep null if ok

    return message
}