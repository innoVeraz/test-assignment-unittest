import { addTodo, changeTodo, removeAllTodos } from "../ts/functions";
import { Todo } from "../ts/models/Todo";

describe("addToDo", () => {
  test("should return error message if text < 3", () => {
    let todoText = "df";
    let todos: Todo[] = [];

    const result = addTodo(todoText, todos);

    expect(result).toStrictEqual({
      success: false,
      error: "Du måste ange minst tre bokstäver",
    });
  });

  test("should return success if text > 2", () => {
    let todoText = "hej";
    let todos: Todo[] = [];

    const result = addTodo(todoText, todos);

    expect(result).toStrictEqual({
      success: true,
      error: "",
    });
  });

  test("should push item to list", () => {
    let todoText = "hej";
    let todos: Todo[] = [];

    addTodo(todoText, todos);

    expect(todos.length).toBe(1);
  });
});

describe("changeTodo", () => {
  test("should update property done", () => {
    const todo = new Todo("my todo", false);

    changeTodo(todo);

    expect(todo.done).toBe(true);
  });
});

describe("removeAllTodos", () => {
  test("should remove all items from list", () => {
    const todos = [new Todo("grönsak", true), new Todo("Mjölk", false)];

    removeAllTodos(todos);

    expect(todos.length).toBe(0);
  });
});
