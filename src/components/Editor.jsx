import { useRef } from "react";
import "../styles/Editor.css";

export default function Editor({emitter, file, setFile})
{
    const editor = useRef(null);

    const checkChanges = (editedContent) =>
    {
        if(editedContent !== file.content && file.saved)
        {
            setFile({...file, saved: false});
        }
        else if(editedContent === file.content && !file.saved)
        {
            setFile({...file, saved: true});
        }
    }

    const fileSaveOnKey = (e) =>
    {
        if(!file?.saved && e.ctrlKey && e.key === "s")
        {
            emitter.invoke("file:save", {...file, editedContent: document.getElementById("editor").value}).then((f) =>
            {
                setFile(f);
            });
        }
    }

    return(
        <section onKeyDown={(e) => fileSaveOnKey(e)} className="section editor-section" data-testid="editor-section">
            <textarea ref={editor} id="editor" onInput={(e) => {setFile({...file, editedContent: e.target.value}); checkChanges(e.target.value);}} defaultValue={file.content} className="editor" data-testid="editor"
            autoFocus={true} autoCorrect="false" autoCapitalize="false" autoComplete="false" spellCheck={false}></textarea>
            <div className="editor-information">
                <p>Palavras: {`${file.editedContent.trim().split("\n").join(" ").split(" ").length}`}</p>
                <p>Linhas: {`${file.editedContent.split("\n").length}`}</p>
            </div>
        </section>
    );
}