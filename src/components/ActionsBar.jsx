import "../styles/ActionsBar.css";

export default function ActionsBar({emitter, settings, setSettings, file, setFile})
{
    const fileSave = () =>
    {
        if(!file.saved)
        {
            // React setState doesn't update instantly, causing file.editedContent to not be the same as editor.value
            

            emitter.invoke("file:save", {...file, editedContent: document.getElementById("editor").value}).then((f) =>
            {
                setFile(f);
            });
        }
    }

    const fileClose = () =>
    {
        if(!file.saved)
        {

        }
        else
        {
            emitter.send("file:close");
            setFile(null);
        }
    }

    return(
        <div className="actions-bar">
            <div className="dropdown">
                <button>Arquivo</button>
                <ul className="dropdown-list">
                    <li>
                        <button disabled={!(file && !file?.saved)}
                        onClick={fileSave}>Salvar</button>
                    </li>
                    <div className="list-sep"></div>
                    <li>
                        <button disabled={!(file)}
                        onClick={fileClose}>Fechar</button>
                    </li>
                </ul>
            </div>
            <div className="dropdown">
                <button>Editor</button>
                <ul className="dropdown-list">
                    <li>
                        <button>Modo</button>
                    </li>
                    <li>
                        <button>Apar&ecirc;ncia</button>
                    </li>
                    <li>
                        <button>Idioma</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}