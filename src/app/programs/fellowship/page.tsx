import { getProgramRoster } from "@/lib/program-roster";
import FellowshipPage from "./FellowshipPage";

export default function Page() {
    return <FellowshipPage members={getProgramRoster("fellowship")} />;
}
