import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import TopBar from "../components/TopBar";

describe("Top bar status", () =>
{
    test("No filename displayed if no file is open", () =>
    {
        render(<TopBar />);

        const filenameDisplay = screen.getByTestId("filename-display");
        expect(filenameDisplay).toBeInTheDocument();
        expect(filenameDisplay).toHaveTextContent("");
    });

    test("Filename displayed if a file is open", () =>
    {
        render(<TopBar file={{filename: "test.txt", saved: true}} />);

        const filenameDisplay = screen.getByTestId("filename-display");
        expect(filenameDisplay).toBeInTheDocument();
        expect(filenameDisplay).toHaveTextContent("test.txt");
    });
});