import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from "../components/App";

describe("Application Initial Values", () =>
{
    test("No filename displayed if no file is open", () =>
    {
        render(<App />);

        const filenameDisplay = screen.getByTestId("filename-display");
        expect(filenameDisplay).toBeInTheDocument();
        expect(filenameDisplay).toHaveTextContent("");
    });
});