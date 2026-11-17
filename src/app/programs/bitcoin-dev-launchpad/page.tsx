import { getProgramRoster } from "@/lib/program-roster";
import BitcoinDevLaunchpadPage from "./BitcoinDevLaunchpadPage";

export default function Page() {
    return <BitcoinDevLaunchpadPage cohort1={getProgramRoster("bitcoin-dev-launchpad", 1)} cohort2={getProgramRoster("bitcoin-dev-launchpad", 2)} />;
}
