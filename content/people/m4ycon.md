---
name: m4ycon
image: /assets/images/people/fellows/m4ycon.jpg
programs:
  - program: fellowship
    name: Fellowship
    organization: Vinteum
    role:
      EN: Fellow
      BR: Fellow
    status: current
    start: '2026-04'
    cohort: 2
    work:
      EN: Peer Observer / BNOC
      BR: Peer Observer / BNOC
    href: /programs/fellowship
  - program: bitcoin-dev-launchpad
    name: Bitcoin Dev Launchpad
    organization: Vinteum
    role:
      EN: Alumnus
      BR: Ex-participante
    status: past
    cohort: 2
    work:
      EN: Peer Observer
      BR: Peer Observer
    href: /programs/bitcoin-dev-launchpad
    fundedBy: Vinteum
focus:
  - P2P Networking
  - Monitoring
  - Metrics
links:
  - label: GitHub
    href: 'https://github.com/m4ycon'
    icon: github
projects:
  - name: peer-observer
    href: 'https://github.com/peer-observer/peer-observer'
    description:
      EN: >-
        Tooling to monitor for P2P anomalies and attacks using Bitcoin Core
        honey pot nodes
      BR: Ferramentas para monitorar anomalias e ataques na rede P2P do Bitcoin.
    contribution:
      EN: Contributed 2 merged pull requests.
      BR: Contribuição por meio de 2 pull requests integrados.
contributions:
  - id: github-peer-observer-peer-observer-465
    title:
      EN: Add dashboards for compact block reconstruction metrics
      BR: Add dashboards for compact block reconstruction metrics
    date: '2026-10-20'
    source: 'peer-observer/peer-observer · #465'
    type: PR
    href: 'https://github.com/peer-observer/peer-observer/pull/465'
  - id: github-peer-observer-peer-observer-420
    title:
      EN: Watching compact block reconstructions via log-extractor
      BR: Watching compact block reconstructions via log-extractor
    date: '2026-06-30'
    source: 'peer-observer/peer-observer · #420'
    type: PR
    href: 'https://github.com/peer-observer/peer-observer/pull/420'
discussions:
  - id: compact-block-degradation
    title:
      EN: >-
        Compact block reconstruction degradation between September - October
        2026
      BR: >-
        Compact block reconstruction degradation between September - October
        2026
    source: BNOC
    date: '2026-10-22'
    href: >-
      https://bnoc.xyz/t/compact-block-reconstruction-degradation-between-september-october-2026/198
updatedAt: '2026-11-17'
---
## EN

m4ycon has contributed to peer-observer. Selected work includes compact-block reconstruction metrics and Bitcoin network observability.

The [year-four report](/assets/files/Vinteum-Year-Four-Report-2026.pdf), covering August 2025–August 2026, describes m4ycon's progression from operating network-observation infrastructure to building research tools. His compact-block reconstruction contribution to peer-observer was merged, supporting analysis of when a node can reconstruct a block immediately and when it must request more transactions. He also ran patched Bitcoin Core nodes to investigate a proposed compact-block-prefilling change and feed measurements into review.

Another project was Cluster Mempool Observer, a recorder and replayer intended to preserve a node's mempool history for later analysis. At the report's cutoff, backend and data-integrity work were underway and public access remained a goal. Long-running instrumented nodes and retained debug logs supported this experimental work.

## PT

m4ycon tem contribuições em peer-observer. Seu trabalho inclui métricas de reconstrução de blocos compactos e observabilidade da rede Bitcoin.

O [relatório do quarto ano](/assets/files/Vinteum-Year-Four-Report-2026.pdf), que cobre agosto de 2025 a agosto de 2026, descreve a passagem de m4ycon da operação de infraestrutura de observação da rede à criação de ferramentas de pesquisa. Sua contribuição de reconstrução de blocos compactos ao peer-observer foi integrada, permitindo analisar quando um nó reconstrói um bloco imediatamente e quando precisa pedir mais transações. Ele também executou nós Bitcoin Core modificados para investigar uma proposta de pré-preenchimento de blocos compactos e levar medições à revisão.

Outro projeto foi o Cluster Mempool Observer, um gravador e reprodutor destinado a preservar o histórico do mempool de um nó para análise posterior. Até o período coberto pelo relatório, havia trabalho em backend e integridade dos dados, e o acesso público permanecia um objetivo. Nós instrumentados e logs de depuração preservados apoiavam os experimentos.