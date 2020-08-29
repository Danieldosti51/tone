export class StringUtils {
    static capitalise(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    static isEmpty(str) {
        return !str || !str.trim();
    }
}