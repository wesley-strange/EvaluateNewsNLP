import { handleSubmit } from "../src/client/js/formHandler.js";
import "@babel/polyfill";

describe(handleSubmit, () => {
    test("it is defined", () => {
        expect(handleSubmit).toBeDefined
    });
});