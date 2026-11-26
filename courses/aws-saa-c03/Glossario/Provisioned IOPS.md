---
tags:
  - glossario
  - conceito
---
# Provisioned IOPS

Provisioned IOPS é o modelo em que você contrata uma taxa de operações de E/S por segundo e paga por ela, em vez de depender do desempenho que o tamanho do volume daria. No EBS são os volumes io1 e io2 (io2 Block Express chega a 256.000 IOPS), e no RDS e no Aurora é o armazenamento com IOPS provisionado. Existe para bancos de dados críticos que precisam de latência baixa e previsível sob carga contínua, e na prova aparece quando o gp3 não basta ou a questão pede o máximo de IOPS e durabilidade.

> [!example] Exemplo
> Um banco Oracle transacional no EC2 usa um volume io2 com 40.000 IOPS provisionados para manter a latência estável no horário de pico.

## Onde aparece

- **Módulo 10:** [[10.03 - EBS SSD gp3 gp2 e Provisioned IOPS|10.3]], [[10.04 - EBS HDD Multi-Attach e Escolha do Volume|10.4]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.02 - RDS Instancias Classes e Armazenamento|13.2]], [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]]
