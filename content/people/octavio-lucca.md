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
      EN: Contributed 2 merged pull requests.
      BR: Contribuição por meio de 2 pull requests integrados.
contributions:
  - id: github-peer-observer-peer-observer-509
    title:
      EN: 'fix(archive): Dont trust the length prefix when reading a message'
      BR: 'fix(archive): Dont trust the length prefix when reading a message'
    date: '2026-11-01'
    source: 'peer-observer/peer-observer · #509'
    type: PR
    href: 'https://github.com/peer-observer/peer-observer/pull/509'
  - id: github-peer-observer-peer-observer-482
    title:
      EN: 'add(archive): --low-data mode'
      BR: 'add(archive): --low-data mode'
    date: '2026-09-03'
    source: 'peer-observer/peer-observer · #482'
    type: PR
    href: 'https://github.com/peer-observer/peer-observer/pull/482'
updatedAt: '2026-11-17'
---
## EN

Octavio Lucca works on Bitcoin network observability. Vinteum’s [year-four report](/assets/files/Vinteum-Year-Four-Report-2026.pdf) describes his trajectory from peer-observer data collection and archiving to a reusable replay library that can be tested without invoking the CLI. Adapting this tooling to Floresta led to getpeerinfo RPC contributions and a Floresta-compatible fork-observer deployment; the report also documents work on Prometheus/Grafana monitoring and tracking DNS seed behaviour.

His merged [low-data archive mode](https://github.com/peer-observer/peer-observer/pull/482) preserves transaction identifiers and block metadata while omitting large raw payloads. A later [archive-reader fix](https://github.com/peer-observer/peer-observer/pull/509) avoids allocating memory solely from an untrusted length prefix and reports truncated data as an I/O error.

## PT

Octavio Lucca trabalha com observabilidade da rede Bitcoin. O [relatório do quarto ano da Vinteum](/assets/files/Vinteum-Year-Four-Report-2026.pdf) descreve sua trajetória da coleta e do arquivamento de dados no peer-observer a uma biblioteca de replay reutilizável, testável sem executar a CLI. A adaptação dessas ferramentas ao Floresta levou a contribuições no RPC getpeerinfo e à implantação de um fork-observer compatível; o relatório também registra trabalho com Prometheus/Grafana e acompanhamento do comportamento dos seeds DNS.

Seu [modo de arquivamento low-data](https://github.com/peer-observer/peer-observer/pull/482), já integrado, preserva identificadores de transações e metadados de blocos sem armazenar os grandes payloads brutos. Uma [correção posterior no leitor de arquivos](https://github.com/peer-observer/peer-observer/pull/509) evita alocar memória apenas com base em um prefixo de tamanho não confiável e retorna erro de I/O para dados truncados.
