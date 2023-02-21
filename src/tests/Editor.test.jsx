import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Editor from "../components/Editor";

describe("Editor Content", () =>
{
    test("Same as {file.content} on open", () =>
    {
        const testContent = "Content of file...";
        render(<Editor file={{content: testContent}}/>);

        const editor = screen.getByTestId("editor");
        expect(editor).toHaveValue(testContent);
    });
});