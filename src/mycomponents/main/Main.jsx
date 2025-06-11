import { Clients } from "./Clients";
import { Gas } from "./Gas";
import { Services } from "./Services";
import { Welcome } from "./Welcome";
import { Whoare } from "./Whoare";
import { WhyGaia } from "./WhyGaia";


export function Main() {
    return (
        <main className="max-w-[1240px] mx-auto max-mini:px-4 px-6 font-[exo]">
            <Welcome />
            <Whoare />
            <Services /> 
            <Gas /> 
            <Clients />
            <WhyGaia />
        </main>
    )
}