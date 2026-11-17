import { getProgramRoster } from "@/lib/program-roster";
import GrantsPage from "./GrantsPage";

export default function Page() {
    return <GrantsPage members={getProgramRoster("grants")} />;
}
