import { OrdersBoard } from "./OrderBoard/OrdersBoard.component";
import { Container } from "./Orders.style";

export function Orders() {
  return (
    <Container>
      <OrdersBoard title="Fila de Espera" icon="⏱️" />
      <OrdersBoard title="Em Preparação" icon="🔪" />
      <OrdersBoard title="Pronto" icon="✅" />
    </Container>
  );
}
