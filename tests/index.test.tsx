import "@testing-library/jest-dom";
import { render, RenderResult, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { AppData } from "../global.interface";
import Apps from "../pages/apps/index";
import Dashboard from "../pages/index";
import { addApp } from "../store/appSlice";

import { store } from "../store/store";

const renderApps = (): RenderResult =>
  render(
    <Provider store={store}>
      <Apps />
    </Provider>
  );

// check if dashboard component is rendered
describe("Dashboard", () => {
  it("renders a dashboard page", () => {
    render(<Dashboard />);
    expect(screen.getByTestId("dashboard")).toBeInTheDocument();
  });
});

// check if apps list is initially empty
describe("Apps redux state tests", () => {
  it("Should initially set apps to an empty object", () => {
    const state = store.getState().app;
    expect(state).toEqual([]);
  });
});

// check if apps page is rendered
test("Renders Apps page", () => {
  renderApps();
  expect(screen.getByTestId("apps")).toBeInTheDocument();
});

// check if a new app is created successfully
test("Adds a new app", () => {
  let state = store.getState().app;
  const initialAppCount = state.length;

  store.dispatch(
    addApp({
      id: "4",
      name: "Tester",
      url: "Testers manual",
      region: "tester-west-00",
      created: "00/00/0000",
      environment: "test",
    })
  );
  state = store.getState().app;
  const newlyAddedApp: AppData | any = state.find(
    (app: AppData) => app.id === "4"
  );
  expect(newlyAddedApp?.name).toBe("Tester");
  expect(newlyAddedApp?.url).toBe("Testers manual");
  expect(state.length).toBeGreaterThan(initialAppCount);
});
