import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$2000,00</td>
            <td>Desenvolvimento</td>
            <td>01/01/2021</td>
          </tr>
          <tr>
            <td>Hamburguer</td>
            <td className="withdraw"> - R$20,00</td>
            <td>Comida</td>
            <td>01/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}