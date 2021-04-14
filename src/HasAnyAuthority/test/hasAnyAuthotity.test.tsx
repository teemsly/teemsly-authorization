import hasAnyAuthority from "../hasAnyAuthotiry";

test("Check the authotiry is ADMIN and the filter is ADMIN", () => {
  expect(hasAnyAuthority(["ADMIN"], ["ADMIN"])).toBe(true);
});

test("Check if the authotiry is not allowed", () => {
  expect(hasAnyAuthority(["USER"], ["ADMIN"])).toBe(false);
});

test("Check multimple authoriry", () => {
  expect(hasAnyAuthority(["USER", "ADMIN"], ["ADMIN"])).toBe(true);
});
