import { getDayPeriodGreetings } from "../scripts/dateUtils";
import "../styles/Start.css";

export default function Start({emitter, settings, setSettings, file, setFile})
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
            <h2 className="greetings-title">{getDayPeriodGreetings(settings?.language || "pt-br")}</h2>
            <div className="start-options-box">
                <div>
                    <h2>Arquivos recentes</h2>
                    <ul>
                        {
                            // settings.recentFiles.map()
                        }
                    </ul>
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