export function toTitleCase(str) {
    let title = str;
    title = title.toLowerCase().split(' ');
    for (let i = 0; i < title.length; i++) {
        title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1);
    }
    return title.join(' ');
}

export const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
