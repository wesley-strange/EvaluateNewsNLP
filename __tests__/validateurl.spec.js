import { validateURL } from "../src/client/js/validateURL.js";

describe(validateURL, () => {
    test("it should return false if the url is invalid (missing http:// or https://)", () => {
        expect(validateURL('www.google.com')).toBe(false);
    });
    test("it should return true if the url is valid (starts with http://)", () => {
        expect(validateURL('http://www.google.com')).toBe(true);
    });
    test("it should return true if the url is valid (starts with https://)", () => {
        expect(validateURL('https://www.google.com')).toBe(true);
    });
});