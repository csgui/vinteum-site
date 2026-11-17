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
      EN: "Contributed 2 merged pull requests on compact-block reconstruction monitoring and dashboards. Progressed from operating network-observation infrastructure to building research tools, using long-running instrumented nodes and retained debug logs for experiments."
      BR: "Contribuiu com 2 pull requests integrados sobre monitoramento de reconstrução de blocos compactos e dashboards. Passou da operação de infraestrutura de observação da rede à criação de ferramentas de pesquisa, usando nós instrumentados de longa duração e logs de depuração preservados nos experimentos."
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
    description:
      EN: "Merged compact-block reconstruction monitoring, enabling analysis of when nodes reconstruct blocks immediately and when they must request additional transactions."
      BR: "Monitoramento de reconstrução de blocos compactos integrado, permitindo analisar quando nós reconstroem blocos imediatamente e quando precisam pedir transações adicionais."
  - id: compact-block-prefilling-measurements
    title:
      EN: "Measuring a compact-block-prefilling proposal"
      BR: "Medições de uma proposta de pré-preenchimento de blocos compactos"
    source: "Vinteum · Year Four Report · August 2025–August 2026"
    type: Research
    href: "/assets/files/Vinteum-Year-Four-Report-2026.pdf"
    description:
      EN: "Ran patched Bitcoin Core nodes to investigate a proposed compact-block-prefilling change and feed measurements into review."
      BR: "Executou nós Bitcoin Core modificados para investigar uma proposta de mudança no pré-preenchimento de blocos compactos e levar medições à revisão."
  - id: cluster-mempool-observer-recorder
    title:
      EN: "Cluster Mempool Observer recorder and replayer"
      BR: "Gravador e reprodutor Cluster Mempool Observer"
    source: "Vinteum · Year Four Report · August 2025–August 2026"
    type: Tooling
    href: "/assets/files/Vinteum-Year-Four-Report-2026.pdf"
    description:
      EN: "Worked on a recorder and replayer to preserve a node’s mempool history for later analysis. As of August 2026, backend and data-integrity work were underway, and public access remained a goal."
      BR: "Trabalhou em um gravador e reprodutor para preservar o histórico do mempool de um nó para análise posterior. Em agosto de 2026, havia trabalho em backend e integridade dos dados, e o acesso público permanecia um objetivo."
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

m4ycon works on Bitcoin network observability and research tooling. His contributions to peer-observer track compact-block reconstruction, while his experimental work uses instrumented nodes, retained logs and mempool recording to investigate network behavior.

## PT

m4ycon trabalha em observabilidade da rede Bitcoin e ferramentas de pesquisa. Suas contribuições ao peer-observer acompanham a reconstrução de blocos compactos, enquanto seus experimentos usam nós instrumentados, logs preservados e gravação do mempool para investigar o comportamento da rede.
