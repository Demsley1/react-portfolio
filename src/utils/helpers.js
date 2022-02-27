export function validateEmail(email){
    const re = /^([^\s\:.!@#$%^&*(?<>";,\[\]\(\)][\w+]*)@([^@\s-][a-zA-Z+]*)\.([\.-\da-z]{2,6})$/
    return re.test(String(email));
};