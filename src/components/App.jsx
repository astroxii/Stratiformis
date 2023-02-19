const { ipcRenderer } = window;
import { Fragment, useState } from "react";
import ActionsBar from "./ActionsBar";
import Content from "./Content";
import TopBar from "./TopBar";

export default function App()
{
    const [file, setFile] = useState(null);
    const [settings, setSettings] = useState(null)// useState(ipcRenderer.invoke("app:settings:get").then((s) => JSON.parse(s)));

    return(
        <Fragment>
            <TopBar emitter={ipcRenderer} file={file}/>
            <ActionsBar emitter={ipcRenderer} file={file}/>
            <Content emitter={ipcRenderer} file={file}/>
        </Fragment>
    );
}