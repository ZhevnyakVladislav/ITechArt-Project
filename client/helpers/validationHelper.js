import validType from '../constants/validation/validation';

export function validateOnExistence(string) {
    if (!string) {
        return validType.error;
    } else {
        return validType.success;
    }
}

export function validateEmail(string) {
    if (!string) {
        return validType.error;
    } else {
        let email = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if (email.test(string)) {
            return validType.success;
        } else {
            return validType.warning;
        }
    }
}

export function validatePassword(string) {
    if (!string) {
        return validType.error;
    } else if (string.length < 6) {
        return validType.warning;
    } else {
        return validType.success;
    }
}

export function validateConfirmPassword(password, confirmPassword) {
    if (!confirmPassword) {
        return validType.error;
    } else if (confirmPassword !== password) {
        return validType.warning;
    } else {
        return validType.success;
    }
}
