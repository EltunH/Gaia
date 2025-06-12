import { Clients } from "./Clients";
import { Gas } from "./Gas";
import { OurProjects } from "./OurProjects";
import { Services } from "./Services";
import { Welcome } from "./Welcome";
import { Whoare } from "./Whoare";
import { WhyGaia } from "./WhyGaia";


export function Main() {
    return (
        <main className="font-[exo]">
            <Welcome />
            <Whoare />
            <Services /> 
            <Gas /> 
            <Clients />
            <WhyGaia />
            <OurProjects />
        </main>
    )
}