/**
 * @jest-environment jsdom
 */

import * as main from "../ts/main";
import * as functions from "../ts/functions";

describe("displayError", () => {
  test("should set innerHTML to errorContainer", () => {
    document.body.innerHTML = `<div id="error" class="error"></div>`;

    main.displayError("här är text", true);

    let textValue = document.getElementById("error")?.innerHTML;
    expect(textValue).toBe("här är text");
  });

  test("should set class name to show", () => {
    document.body.innerHTML = `<div id="error" class="error"></div>`;

    main.displayError("", true);

    let classList = document.getElementById("error")?.classList;
    expect(classList?.contains("show")).toBe(true);
  });

  test("should remove class show", () => {
    document.body.innerHTML = `<div id="error" class="error show"></div>`;

    main.displayError("", false);

    let classList = document.getElementById("error")?.classList;
    expect(classList?.contains("show")).toBe(false);
  });
});
