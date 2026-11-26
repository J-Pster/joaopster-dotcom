---
aliases:
  - "Amazon Inspector"
  - "inspector"
tags:
  - glossario
  - seguranca
---
# Inspector

O Amazon Inspector é o serviço de varredura de vulnerabilidades que analisa instâncias EC2, imagens de container no ECR e funções Lambda em busca de falhas de software conhecidas. Ele roda de forma contínua e prioriza achados por risco. No ECR, a varredura avançada (enhanced scanning) usa o Inspector, enquanto a básica usa uma base de CVEs mais simples.

> [!example] Exemplo
> Ao enviar uma imagem ao ECR com varredura avançada, o Inspector lista as CVEs encontradas.

Veja também: [[EC2]], [[ECR]], [[Lambda]]

## Onde aparece

- **Módulo 8:** [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 17:** [[17.02 - ECR Repositorio de Imagens|17.2]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.06 - Inspector Detective e Security Hub|19.6]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
