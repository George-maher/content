// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { PermTool } from "../../src/components/LabToolsA";
import { Provider } from "../../src/store";

afterEach(cleanup);
beforeEach(() => localStorage.setItem("csf.lang", "en"));

describe("PermTool", () => {
  it("does not claim everyone can read chmod 604", async () => {
    const user = userEvent.setup();
    render(
      <Provider>
        <PermTool />
      </Provider>,
    );

    // Start at 640 (owner rw-, group r--, others ---).
    await user.click(screen.getByRole("checkbox", { name: /Group.*Read/ }));
    await user.click(screen.getByRole("checkbox", { name: /Others.*Read/ }));

    expect(screen.getByText("chmod 604 file.txt")).toBeInTheDocument();
    expect(screen.queryByText(/Everyone can read/)).not.toBeInTheDocument();
    expect(screen.getByText(/Looks reasonable/)).toBeInTheDocument();
  });

  it("still warns about world-writable files", async () => {
    const user = userEvent.setup();
    render(
      <Provider>
        <PermTool />
      </Provider>,
    );
    for (const name of [/Owner.*Execute/, /Group.*Write/, /Group.*Execute/, /Others.*Read/, /Others.*Write/, /Others.*Execute/]) {
      await user.click(screen.getByRole("checkbox", { name }));
    }
    expect(screen.getByText("chmod 777 file.txt")).toBeInTheDocument();
    expect(screen.getByText(/World-writable/)).toBeInTheDocument();
  });
});
