---
tags:
  - glossario
  - servico
---
# Performance Insights

O Performance Insights é o recurso do RDS e do Aurora que mostra a carga do banco (sessões ativas médias) e a divide por esperas, instruções SQL, hosts e usuários, para achar a causa de uma lentidão. Existe para diagnosticar consultas lentas e gargalos sem instalar agente, só ativando o recurso na instância. A AWS o vem incorporando ao CloudWatch Database Insights, e na prova ele aparece como a ferramenta para descobrir qual consulta pesa no banco.

> [!example] Exemplo
> O banco de pedidos fica lento às 10h, e o Performance Insights mostra que um único SELECT sem índice concentra a maior parte da carga.

## Onde aparece

- **Módulo 13:** [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.02 - RDS Instancias Classes e Armazenamento|13.2]], [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]]
