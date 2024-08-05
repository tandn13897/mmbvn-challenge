import { describe, it } from "vitest";
import HomePage from "./index";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import { Provider } from "react-redux";

describe("Render Homepage", () => {
  it("should render the Homepage", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </Provider>
    );

    const homeElement = screen.getByText("Home");
    expect(homeElement).toBeDefined();
  });
});
