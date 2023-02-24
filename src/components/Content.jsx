import Editor from "./Editor";
import Start from "./Start";

export default function Content({emitter, settings, file, setFile})
{
    return(
        <main>
            {
                file ?
                <Editor emitter={emitter} settings={settings} file={file} setFile={setFile} />
                :
                <Start emitter={emitter} settings={settings} file={file} setFile={setFile} />
            }
        </main>
    );
}