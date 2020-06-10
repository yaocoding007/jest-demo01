import { sum } from "../utils";
beforeAll(() => {
    console.log("moduleA global before all");
});

it("test sum", () => {
    expect(sum(2, 3)).toEqual(5);
});