## 5. Indicadores de Desempenho

_Apresentam-se abaixo os principais indicadores de desempenho e algumas metas para o processo. As informações necessárias para gerar esses indicadores devem estar contempladas no modelo relacional. Foram definidos, no mínimo, três indicadores de desempenho essenciais para o controle eficiente dos processos._

| **Indicador**                    | **Objetivos**                                                    | **Descrição**                                                                          | **Fonte de dados**                  | **Fórmula de cálculo**                                                                     |
| --------------------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------- |
| Taxa de Conclusão de Ordens de Serviço | Avaliar a eficiência no atendimento técnico                     | Mede a porcentagem de ordens de serviço concluídas em relação ao total de ordens geradas | Tabela_Ordens_Servico               | (número de O.S. concluídas / número total de O.S. abertas) * 100                           |
| Quantidade de Ordens de Serviço por Técnico | Acompanhar a produtividade de cada técnico      | Conta ordens de serviço concluídas, agrupadas por cada técnico.      | Tabela_Ordens_Servico                    | (número de ordens de serviço feitas pelo técnico / número total de ordens de serviço) * 100                        |
| Eficiência no Controle de Estoque | Controlar a disponibilidade de produtos e reduzir indisponibilidades | Mede a taxa de produtos disponíveis no estoque em relação à demanda média do período   | Tabela_Estoque, Tabela_Vendas       | (quantidade de itens disponíveis / demanda média do período) * 100                         |

_Obs.: Todas as informações para gerar os indicadores devem estar no modelo relacional da aplicação._
