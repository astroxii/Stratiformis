export default function Editor({emitter, file, setFile})
{
    return(
        <section className="editor-section" data-testid="editor-section">
            <textarea>

            </textarea>
            <div>
                INFO ABOUT FILE
            </div>
        </section>
    );
}