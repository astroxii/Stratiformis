import Editor from "./Editor";
import Start from "./Start";

export default function Content({emitter, file})
{
    return(
        <main>
            {
                file ?
                <Editor emitter={emitter} file={file} />
                :
                <Start emitter={emitter} file={file} />
            }
        </main>
    );
}