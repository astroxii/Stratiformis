import { getDayPeriodGreetings } from "../scripts/dateUtils";
import "../styles/Start.css";

export default function Start({emitter, settings, file, setFile})
{
    return(
        <section className="start-section" data-testid="start-section">
            <h2 className="greetings-title">{getDayPeriodGreetings(settings?.language || "pt-br")}</h2>
        </section>
    );
}