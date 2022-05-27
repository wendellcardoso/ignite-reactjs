import { Container } from "./styles";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";

export function Dashboad() {
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    );
}