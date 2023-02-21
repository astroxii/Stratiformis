import "../styles/Editor.css";

export default function Editor({emitter, file, setFile})
{
    const checkChanges = (editor) =>
    {
        if(editor.value !== file.content && file.saved)
        {
            setFile({...file, saved: false});
        }
        else if(editor.value === file.content && !file.saved)
        {
            setFile({...file, saved: true});
        }
    }

    return(
        <section className="section editor-section" data-testid="editor-section">
            <textarea onInput={(e) => checkChanges(e.target)} defaultValue={file.content} className="editor" data-testid="editor"></textarea>
            <div className="editor-information">
                a
            </div>
        </section>
    );
}