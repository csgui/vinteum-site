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
    href: https://github.com/peer-observer/peer-observer
    description:
      EN: Tooling to monitor for P2P anomalies and attacks using Bitcoin Core honey pot nodes
      BR: Ferramentas para monitorar anomalias e ataques na rede P2P do Bitcoin.
    contribution:
      EN: Contributed merged compact-block reconstruction log metrics and Grafana dashboards tracking requested
        transactions and reconstruction time.
      BR: Contribuiu com métricas integradas de logs de reconstrução de blocos compactos e dashboards Grafana
        para acompanhar transações solicitadas e tempo de reconstrução.
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
      EN: Measuring a compact-block-prefilling proposal
      BR: Medições de uma proposta de pré-preenchimento de blocos compactos
    source: m4ycon/prefill-compact-blocks-review
    type: Research
    href: https://github.com/m4ycon/prefill-compact-blocks-review
    description:
      EN: 'Published node logs, parsed datasets and analysis notebooks for Bitcoin Core PR #35558, comparing
        useful and redundant prefill and compact-block reconstruction behavior.'
      BR: 'Publicou logs de nós, conjuntos de dados processados e notebooks de análise do PR #35558 do Bitcoin
        Core, comparando pré-preenchimento útil e redundante e o comportamento da reconstrução de blocos
        compactos.'
  - id: cluster-mempool-observer-recorder
    title:
      EN: Cluster Mempool Observer
      BR: Cluster Mempool Observer
    source: m4ycon/cluster-mempool-observer
    type: Tooling
    href: https://github.com/m4ycon/cluster-mempool-observer
    description:
      EN: Develops an experimental Bitcoin Core mempool recorder and analysis tool with a backend API and
        web interface. Data-integrity edge cases remain under investigation.
      BR: Desenvolve uma ferramenta experimental de gravação e análise do mempool do Bitcoin Core, com API
        de backend e interface web. Casos-limite de integridade dos dados seguem sob investigação.
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
