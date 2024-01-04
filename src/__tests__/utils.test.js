// Your tests here
import { isPallindrome } from "../utils"; 

describe("isPallindrome", () => {
    it("handles uppercase and lowercase input", () => {
        const word = "rAcEcAr";

        const result = isPallindrome(word);

        expect(result).toBe(true);
    });
    it("returns false for an empty string", () => {
        const emptyString = "";

        const result = isPallindrome(emptyString);

        expect(result).toBe(false);
    });
    it("returns true if word is a pallindrome", () => {
        const word = "car";

        const result = isPallindrome(word);

        expect(result).toBe(false);
    });
});