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
      EN: Contributed 2 merged pull requests covering RPC integration and session persistence.
      BR: Contribuiu com 2 pull requests integrados, envolvendo integração RPC e persistência de
        sessões.
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
  - id: bc1cindy-wallet-fingerprints
    title:
      EN: Wallet transaction fingerprints
      BR: Características identificáveis de transações de carteiras
    source: Vinteum · 2026 annual report
    type: Research
    href: /assets/files/Vinteum-Year-Four-Report-2026.pdf
    description:
      EN: Investigated implementation choices that make wallet transactions distinguishable. Issues
        and patches across Cake Wallet, Bull Bitcoin, Liana, bitcoin_base and rust-payjoin addressed
        transaction ordering, change behavior, locktimes and coin selection.
      BR: Investigou escolhas de implementação que tornam transações de carteiras distinguíveis.
        Issues e patches em Cake Wallet, Bull Bitcoin, Liana, bitcoin_base e rust-payjoin abordaram
        ordenação de transações, comportamento do troco, locktimes e seleção de moedas.
  - id: bc1cindy-lumen-fingerprints
    title:
      EN: Chain-wide transaction construction with lumen-fingerprints
      BR: Construção de transações na blockchain com lumen-fingerprints
    source: Vinteum · 2026 annual report
    type: Tooling
    href: /assets/files/Vinteum-Year-Four-Report-2026.pdf
    description:
      EN: Worked on lumen-fingerprints, using Floresta to study transaction construction across
        the chain.
      BR: Trabalhou em lumen-fingerprints, usando Floresta para estudar a construção de transações
        ao longo da blockchain.
  - id: bc1cindy-decluster
    title:
      EN: Experimental payment-graph analysis with decluster
      BR: Análise experimental do grafo de pagamentos com decluster
    source: Vinteum · 2026 annual report
    type: Research
    href: /assets/files/Vinteum-Year-Four-Report-2026.pdf
    description:
      EN: Worked on decluster, an experimental framework combining wallet fingerprints, transaction
        amounts, payment-graph structure and dense-subset-sum analysis.
      BR: Trabalhou em decluster, um framework experimental que combina características de carteiras,
        valores de transações, estrutura do grafo de pagamentos e análise de dense-subset-sum.
  - id: bc1cindy-fungi-psbt-review
    title:
      EN: Concurrent PSBT development in Fungi
      BR: Desenvolvimento de PSBTs concorrentes no Fungi
    source: Vinteum · 2026 annual report
    type: Code Review
    href: /assets/files/Vinteum-Year-Four-Report-2026.pdf
    description:
      EN: Reviewed concurrent PSBT development in Fungi as part of transaction-privacy research.
      BR: Revisou o desenvolvimento de PSBTs concorrentes no Fungi como parte da pesquisa em privacidade
        de transações.
updatedAt: '2026-11-17'
---
## EN

bc1cindy works on Bitcoin transaction privacy, combining Payjoin development with research into wallet fingerprints. This work examines how transaction construction and payment patterns reveal information, and includes experimental analysis tools and reviews of Fungi development.

## PT

bc1cindy trabalha com privacidade de transações Bitcoin, combinando desenvolvimento de Payjoin com pesquisa sobre características identificáveis de carteiras. Seu trabalho examina informações reveladas pela construção de transações e pelos padrões de pagamentos, incluindo ferramentas experimentais de análise e revisões do desenvolvimento de Fungi.
