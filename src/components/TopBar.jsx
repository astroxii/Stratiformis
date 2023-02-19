import "../styles/TopBar.css";

export default function TopBar({emitter, file})
{
    const onClose = () =>
    {
        if(file?.saved || !file)
        {
            emitter.send("window:close");
        }
        else
        {
            // confirm exit
        }
    }
    const onMaximize = () =>
    {
        emitter.send("window:maximize");
    }
    const onMinimize = () =>
    {
        emitter.send("window:minimize");
    }

    return(
        <header className="top-bar">
            <div className="title-holder">
                <img src={`./images/icon.png`} alt=""/>
                <h1 className="title" tabIndex="-1">Stratiformis</h1>
            </div>
            <p className="filename" tabIndex="-1" data-testid="filename-display">{file?.filename || ""}</p>
            <div className="buttons">
                <button id="min-btn" onClick={onMinimize} tabIndex="-1"><div className="line"></div></button>
                <button id="max-btn" onClick={onMaximize} tabIndex="-1"><div className="square"></div></button>
                <button id="close-btn" onClick={onClose} tabIndex="-1"><div className="x"></div></button>
            </div>
        </header>
    );
}