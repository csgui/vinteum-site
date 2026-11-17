---
name: Lucas Lima
image: /assets/images/people/fellows/lucaslima.jpg
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
      EN: btcd
      BR: btcd
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
      EN: Secure Fountain Codes
      BR: Secure Fountain Codes
    href: /programs/bitcoin-dev-launchpad
    fundedBy: Vinteum
focus:
  - Bitcoin Core
  - Bitcoin Nodes
  - Rust
links:
  - label: GitHub
    href: 'https://github.com/lucasdbr05'
    icon: github
  - label: X
    href: 'https://x.com/Lucaslgol05'
    icon: twitter
projects:
  - name: Bitcoin Core
    href: 'https://github.com/bitcoin/bitcoin'
    description:
      EN: Bitcoin Core integration/staging tree
      BR: 'Bitcoin Core: implementação de nó e carteira Bitcoin.'
    contribution:
      EN: Contributed one merged pull request.
      BR: Contribuição por meio de um pull request integrado.
  - name: Floresta
    href: 'https://github.com/getfloresta/Floresta'
    description:
      EN: 'A lightweight and embeddable Bitcoin client, built for sovereignty.'
      BR: Cliente Bitcoin compacto e integrável em outras aplicações.
    contribution:
      EN: Contributed one merged pull request.
      BR: Contribuição por meio de um pull request integrado.
contributions:
  - id: github-bitcoin-bitcoin-36194
    title:
      EN: 'kernel: expose block header Merkle root'
      BR: 'kernel: expose block header Merkle root'
    date: '2026-09-16'
    source: 'bitcoin/bitcoin · #36194'
    type: PR
    href: 'https://github.com/bitcoin/bitcoin/pull/36194'
  - id: github-getfloresta-Floresta-833
    title:
      EN: 'fix(deps): re-enable help for florestad and floresta-cli'
      BR: 'fix(deps): re-enable help for florestad and floresta-cli'
    date: '2026-02-07'
    source: 'getfloresta/Floresta · #833'
    type: PR
    href: 'https://github.com/getfloresta/Floresta/pull/833'
discussions:
  - id: fountain-codes-storage
    title:
      EN: 'Fountain Codes: a way to reduce blockchain storage costs'
      BR: 'Fountain Codes: a way to reduce blockchain storage costs'
    source: Delving Bitcoin
    date: '2026-06-20'
    href: >-
      https://delvingbitcoin.org/t/fountain-codes-a-way-to-reduce-blockchain-storage-costs/2624
updatedAt: '2026-11-17'
---
## EN

Lucas Lima has contributed to Bitcoin Core, Floresta. Selected work includes libbitcoinkernel APIs and Floresta command-line tooling.

The [year-four report](/assets/files/Vinteum-Year-Four-Report-2026.pdf), covering August 2025–August 2026, describes Lucas's research into whether fountain codes could let pruned nodes contribute historical block data. He moved from simulations to a btcd proof of concept that groups blocks into epochs, stores encoded droplets and exchanges them between peers, including isolated regtest experiments using Warnet.

The approach remained experimental: larger network measurements of bandwidth, peer requirements and reconstruction costs were planned, with malicious peers and storage–bandwidth tradeoffs still open questions. The same report describes his btcd compact-block relay implementation and review-driven iteration, covering reconstruction, missing-transaction requests and fallback behavior.

## PT

Lucas Lima tem contribuições em Bitcoin Core, Floresta. Seu trabalho inclui APIs de libbitcoinkernel e ferramentas de linha de comando do Floresta.

O [relatório do quarto ano](/assets/files/Vinteum-Year-Four-Report-2026.pdf), que cobre agosto de 2025 a agosto de 2026, descreve a pesquisa de Lucas sobre o uso de fountain codes para permitir que nós podados contribuam dados históricos de blocos. Ele avançou de simulações para uma prova de conceito no btcd que agrupa blocos em épocas, armazena fragmentos codificados e os troca entre peers, incluindo experimentos isolados em regtest com Warnet.

A abordagem permanecia experimental: medições de rede maiores sobre banda, requisitos de peers e custos de reconstrução estavam planejadas, com peers maliciosos e os compromissos entre armazenamento e banda ainda em discussão. O mesmo relatório descreve a implementação de retransmissão de blocos compactos no btcd e os ajustes após revisão, incluindo reconstrução, pedidos de transações ausentes e fallback.