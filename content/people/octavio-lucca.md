---
name: Octavio Lucca
image: /assets/images/people/fellows/octaviolucca.jpg
programs:
  - program: fellowship
    name: Fellowship
    organization: Vinteum
    role:
      EN: Fellow
      BR: Fellow
    status: past
    end: '2026-09'
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
  - Rust
links:
  - label: Website
    href: 'https://octavio.xyz/'
    icon: website
  - label: GitHub
    href: 'https://github.com/octaviolucca'
    icon: github
  - label: X
    href: 'https://x.com/octavio_lucca'
    icon: twitter
projects:
  - name: peer-observer
    href: 'https://github.com/peer-observer/peer-observer'
    description:
      EN: >-
        Tooling to monitor for P2P anomalies and attacks using Bitcoin Core
        honey pot nodes
      BR: Ferramentas para monitorar anomalias e ataques na rede P2P do Bitcoin.
    contribution:
      EN: Contributed 2 merged pull requests. Worked on data collection, archiving, Prometheus/Grafana
        monitoring and DNS seed tracking.
      BR: Contribuição por meio de 2 pull requests integrados. Trabalhou com coleta de dados,
        arquivamento, monitoramento com Prometheus/Grafana e acompanhamento de seeds DNS.
contributions:
  - id: github-peer-observer-peer-observer-509
    title:
      EN: 'fix(archive): Dont trust the length prefix when reading a message'
      BR: 'fix(archive): Dont trust the length prefix when reading a message'
    date: '2026-11-01'
    source: 'peer-observer/peer-observer · #509'
    type: PR
    href: 'https://github.com/peer-observer/peer-observer/pull/509'
    description:
      EN: Avoids allocating memory solely from an untrusted message-length prefix and reports
        truncated archive data as an I/O error.
      BR: Evita alocar memória apenas com base em um prefixo de tamanho não confiável e
        retorna erro de I/O para dados truncados no arquivo.
  - id: github-peer-observer-peer-observer-482
    title:
      EN: 'add(archive): --low-data mode'
      BR: 'add(archive): --low-data mode'
    date: '2026-09-03'
    source: 'peer-observer/peer-observer · #482'
    type: PR
    href: 'https://github.com/peer-observer/peer-observer/pull/482'
    description:
      EN: Preserves transaction identifiers and block metadata while omitting large raw
        payloads from the archive.
      BR: Preserva identificadores de transações e metadados de blocos sem armazenar os
        grandes payloads brutos no arquivo.
  - id: octavio-network-replay-floresta
    title:
      EN: Reusable network replay and Floresta monitoring
      BR: Replay reutilizável de rede e monitoramento do Floresta
    source: Vinteum · 2026
    href: /assets/files/Vinteum-Year-Four-Report-2026.pdf
    description:
      EN: Developed a reusable replay library testable without invoking the CLI. Adapting
        the tooling to Floresta led to getpeerinfo RPC contributions and a Floresta-compatible
        fork-observer deployment.
      BR: Desenvolveu uma biblioteca de replay reutilizável, testável sem executar a CLI.
        A adaptação ao Floresta levou a contribuições no RPC getpeerinfo e à implantação
        de um fork-observer compatível.
    type: Tooling
updatedAt: '2026-11-17'
---
## EN

Octavio Lucca works on Bitcoin network observability, from peer-observer data collection and archiving to reusable replay tooling. He also adapts monitoring tools to Floresta and works with Prometheus, Grafana and DNS seed behaviour.

## PT

Octavio Lucca trabalha com observabilidade da rede Bitcoin, da coleta e do arquivamento de dados no peer-observer a ferramentas reutilizáveis de replay. Também adapta ferramentas de monitoramento ao Floresta e trabalha com Prometheus, Grafana e comportamento de seeds DNS.
