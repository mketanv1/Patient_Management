export function toTitleCase(str) {
    let title = str;
    title = title.toLowerCase().split(' ');
    for (let i = 0; i < title.length; i++) {
        title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1);
    }
    return title.join(' ');
}
