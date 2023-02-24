import { getDayPeriodGreetings } from "../scripts/dateUtils";
import "../styles/Start.css";

export default function Start({emitter, settings, setFile})
{
    const fileOpen = () =>
    {
        emitter.invoke("file:open").then((f) => 
        {
            if(f)
            {
                setFile(f);
            }
        });
    }

    return(
        <section className="section start-section" data-testid="start-section">
            <h2 className="greetings-title">{getDayPeriodGreetings(settings?.language || "en")}</h2>
            <div className="start-options-box">
                <div>
                    <h2 className="div-title">Arquivos recentes</h2>
                    {
                        settings && settings?.recentFiles?.length > 0 ?
                        <ul>
                            {
                                // settings.recentFiles.map()
                            }
                        </ul>
                        :
                        <p className="no-recent-files">Sem arquivos recentes...</p>
                    }
                </div>
                <div>
                    <button onClick={fileOpen}>Abrir arquivo</button>
                    <span>OU</span>
                    <button>Criar novo</button>
                </div>
            </div>
        </section>
    );
}