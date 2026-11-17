---
name: bc1cindy
image: /assets/images/people/fellows/bc1cindy.jpg
programs:
  - program: fellowship
    name: Fellowship
    organization: Vinteum
    role:
      EN: Fellow
      BR: Fellow
    status: current
    start: '2026-05'
    cohort: 2
    work:
      EN: Fungi Protocol
      BR: Fungi Protocol
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
      EN: Payjoin Dev Kit
      BR: Payjoin Dev Kit
    href: /programs/bitcoin-dev-launchpad
    fundedBy: Vinteum
focus:
  - Payjoin
  - Privacy
  - Rust
links:
  - label: GitHub
    href: 'https://github.com/bc1cindy'
    icon: github
  - label: X
    href: 'https://twitter.com/bc1cindy'
    icon: twitter
  - label: YouTube
    href: 'https://www.youtube.com/@CindyBTC'
    icon: youtube
  - label: Website
    href: 'https://linktr.ee/CindyBTC'
    icon: website
projects:
  - name: Payjoin Dev Kit
    href: 'https://github.com/payjoin/rust-payjoin'
    description:
      EN: Supercharged batching to save you fees and preserve your privacy
      BR: >-
        Implementação de Payjoin para pagamentos colaborativos com maior
        privacidade.
    contribution:
      EN: Contributed 2 merged pull requests.
      BR: Contribuição por meio de 2 pull requests integrados.
contributions:
  - id: github-payjoin-rust-payjoin-962
    title:
      EN: Optimize SessionPersister trait for better ownership semantics
      BR: Optimize SessionPersister trait for better ownership semantics
    date: '2025-08-19'
    source: 'payjoin/rust-payjoin · #962'
    type: PR
    href: 'https://github.com/payjoin/rust-payjoin/pull/962'
  - id: github-payjoin-rust-payjoin-945
    title:
      EN: Replace bitcoincore-rpc with custom reqwest client
      BR: Replace bitcoincore-rpc with custom reqwest client
    date: '2025-08-14'
    source: 'payjoin/rust-payjoin · #945'
    type: PR
    href: 'https://github.com/payjoin/rust-payjoin/pull/945'
updatedAt: '2026-11-17'
---
## EN

bc1cindy has contributed to Payjoin Dev Kit. Selected work includes Payjoin RPC integration and session persistence.

The [2026 annual report](/assets/files/Vinteum-Year-Four-Report-2026.pdf) traces bc1cindy's work from Payjoin integrations into research on how wallet behavior makes transactions distinguishable. The work includes issues and patches across Cake Wallet, Bull Bitcoin, Liana, bitcoin_base and rust-payjoin, covering transaction ordering, change behavior, locktimes and coin selection. This work examines information leaked by implementation choices, not just whether a privacy protocol is supported.

bc1cindy also worked on lumen-fingerprints, which uses Floresta to study transaction construction across the chain, and decluster, an experimental framework combining wallet fingerprints, transaction amounts, payment-graph structure and dense-subset-sum analysis. This research also includes reviews of concurrent PSBT development in Fungi.

## PT

bc1cindy tem contribuições em Payjoin Dev Kit. Seu trabalho inclui integração RPC e persistência de sessões no Payjoin.

O [relatório anual de 2026](/assets/files/Vinteum-Year-Four-Report-2026.pdf) acompanha a trajetória de bc1cindy das integrações de Payjoin à pesquisa sobre como o comportamento das carteiras torna transações distinguíveis. Seu trabalho inclui issues e patches em Cake Wallet, Bull Bitcoin, Liana, bitcoin_base e rust-payjoin, envolvendo ordenação de transações, comportamento do troco, locktimes e seleção de moedas. O trabalho examina informações reveladas por escolhas de implementação, além da simples presença de um protocolo de privacidade.

Também trabalhou em lumen-fingerprints, que usa Floresta para estudar a construção de transações ao longo da blockchain, e decluster, um framework experimental que combina características de carteiras, valores de transações, estrutura do grafo de pagamentos e análise de dense-subset-sum. A pesquisa se conecta à revisão do desenvolvimento de PSBTs concorrentes no Fungi.