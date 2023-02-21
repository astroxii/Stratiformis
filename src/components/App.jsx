import { Fragment, useEffect, useState } from "react";
import ActionsBar from "./ActionsBar";
import Content from "./Content";
import TopBar from "./TopBar";
const { ipcRenderer } = window;

export default function App()
{
    const [file, setFile] = useState(null);
    const [settings, setSettings] = useState(null)// useState(ipcRenderer.invoke("app:settings:get").then((s) => JSON.parse(s)));

    return(
        <Fragment>
            <TopBar emitter={ipcRenderer} file={file} />
            <ActionsBar emitter={ipcRenderer} settings={settings} setSettings={setSettings} file={file} setFile={setFile} />
            <Content emitter={ipcRenderer} settings={settings} file={file} setFile={setFile} />
        </Fragment>
    );
}