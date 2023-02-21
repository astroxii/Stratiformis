export function getDayPeriodGreetings(lang)
{
    let dp = "";
    const hour = new Date().getHours();

    if(hour >= 6 && hour < 12)
    {
        dp = lang === "en" ? "Good morning" : lang === "pt-br" ?  "Bom dia" : null;
    }
    else if(hour >= 12 && hour <= 17)
    {
        dp = lang === "en" ? "Good afternoon" : lang === "pt-br" ?  "Boa tarde" : null;
    }
    else
    {
        dp = lang === "en" ? "Good night" : lang === "pt-br" ?  "Boa noite" : null;
    }

    return dp;
}