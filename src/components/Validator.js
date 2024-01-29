export const validateUsername = (username) => {
    if (username.length >= 2 && /[a-zA-Z]/.test(username)) {
        return '';
    }
    return 'Nazwa użytkownika musi posiadać minimum 2 znaki, w tym jedną literę';
};

export const validateName = (name) => {
    if (name.length >= 3 && /^[A-Z][a-zA-Z]+$/.test(name)) {
        return '';
    }
    return 'Imię musi posiadać przynajmniej trzy znaki, zaczynać się z wielkiej litery oraz zawierać tylko litery';
};

export const validatePassword = (password) => {
    if (/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/.test(password)) {
        return '';
    }
    return "Haslo musi skladać sie przynajmniej z 8 znaków i zawierać przynajmniej jedną wielką literę, jedną cyfrę i jeden znak specjalny.";
};

export const validateWeight = (weight) => {
    if (weight >= 30 && weight <= 120) {
        return '';
    }

    return 'Podaj wagę w zakresie 30-120kg';
};

export const validateHeight = (height) => {
    if (height >= 130 && height <= 250) {
        return '';
    }

    return 'Podaj wzrost w zakresie 130-250cm';
}

export const validateAge = (age) => {
    if (age >= 12 && age <= 80) {
        return '';
    }
    
    return 'Podaj wiek w zakresie 12-80 lat';
}

export const validateGoal = (goal) => {
    if (goal) {
        return '';
    }
    return 'Musisz wybrać cel';
}

export const validateGender = (gender) => {
    if (gender) {
        return '';
    }
    return 'Musisz wybrać płeć';
}

export const validateActivityLevel = (activity_level) => {
    if (activity_level) {
        return '';
    }
    return 'Musisz wybrać poziom aktywności fizycznej';
}