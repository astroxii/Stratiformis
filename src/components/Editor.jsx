import "../styles/Editor.css";

export default function Editor({emitter, file, setFile})
{
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

    return(
        <section className="section editor-section" data-testid="editor-section">
            <textarea id="editor" onInput={(e) => {checkChanges(e.target.value);}} defaultValue={file.content} className="editor" data-testid="editor"
            autoFocus={true} autoCorrect="false" autoCapitalize="false" autoComplete="false" spellCheck={false}></textarea>
            <div className="editor-information">
                <p>Palavras: {`${file.content.split("\n").join(" ").split(" ").length}`}</p>
                <p>Linhas: {`${file.content.split("\n").length}`}</p>
                {
                    /* TODO */
                }
            </div>
        </section>
    );
}