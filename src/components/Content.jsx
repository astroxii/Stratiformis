import Editor from "./Editor";
import Start from "./Start";

export default function Content({emitter, file, setFile})
{
    return(
        <main>
            {
                file ?
                <Editor emitter={emitter} file={file} setFile={setFile} />
                :
                <Start emitter={emitter} file={file} setFile={setFile} />
            }
        </main>
    );
}