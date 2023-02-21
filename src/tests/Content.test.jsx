import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Content from "../components/Content";

describe("Rendered Main Content", () =>
{
    test("Start component present if no file is open", () =>
    {
        render(<Content file={null} />);

        const start = screen.getByTestId("start-section");
        expect(start).toBeInTheDocument();
    });

    test("Editor component present if a file is open", () =>
    {
        render(<Content file={{filename: "abc", saved: true, content: "aaa"}} />);

        const editorView = screen.getByTestId("editor-section");
        expect(editorView).toBeInTheDocument();
    });
});