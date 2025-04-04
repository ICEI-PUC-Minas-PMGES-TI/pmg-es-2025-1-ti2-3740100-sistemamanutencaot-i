### Processo 4 – Diagnostico

Este processo representa o fluxo de gestão de manutenção na empresa. As oportunidades de melhoria incluem a automação do registro de solicitações, a integração com um sistema de monitoramento e a notificação automática de status para os clientes.

![Modelo BPMN do Processo](/docs/images/processos/novo/Diagnostico%20BPMN.png)
#### Detalhamento das atividades

### **Atividade 1 – Listar peças necessárias para manutenção**

| **Campo**             | **Tipo** | **Restrições** | **Valor default** |
|-----------------------|----------|----------------|-------------------|
| Peça                  | Caixa de Texto   | Obrigatório  | -           |
| Quantidade            | Número   | Obrigatório  | -           |

**Comandos:**

| **Comando**            | **Destino**                               | **Tipo**  |
|------------------------|-------------------------------------------|-----------|
| Adicionar              | Adiciona peças a lista                    | Default   |
| Remover                | Remove peças da lista                     | Default   |
| Enviar                 | Envia a lista                             | Default   |
| Cancelar               | Cancela a atividade                       | Default   |
| Aumentar quantidade    | Aumenta a quantidade de determinada peça  | Default   |
| Diminuir quantidade    | Diminui a quantidade de determinada peça  | Default   |
