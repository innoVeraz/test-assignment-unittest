/**
 * @jest-environment jsdom
 */

import * as main from "../ts/main";
import * as functions from "../ts/functions";
import { Todo } from "../ts/models/Todo";

describe("displayError", () => {
  test("should set innerHTML to errorContainer", () => {
    document.body.innerHTML = `<div id="error" class="error"></div>`;

    main.displayError("här är text", true);

    let textValue = document.getElementById("error")?.innerHTML;
    expect(textValue).toBe("här är text");
  });

  test("should set class to show", () => {
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

describe("createHtml", () => {
  test("should create list item html in todosContainer", () => {
    document.body.innerHTML = `<ul id="todos"></ul>`;
    const todos: Todo[] = [
      new Todo("my todo", false),
      new Todo("my second todo", true),
    ];
    main.createHtml(todos);

    let listItems = document.querySelectorAll("#todos li");

    expect(listItems).toHaveLength(2);
    expect(listItems[0].innerHTML).toBe("my todo");
    expect(listItems[0].classList.contains("todo__text")).toBe(true);
    expect(listItems[0].classList.contains("todo__text--done")).toBe(false);
    expect(listItems[1].innerHTML).toBe("my second todo");
    expect(listItems[1].classList.contains("todo__text--done")).toBe(true);
  });
});
