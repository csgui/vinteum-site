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
  - id: btcd-fountain-code-storage-prototype
    title:
      EN: Fountain-coded block storage prototype in btcd
      BR: Protótipo de armazenamento de blocos com fountain codes no btcd
    source: lucasdbr05/btcd · poc/fountain-codes
    type: Research
    href: https://github.com/lucasdbr05/btcd/tree/poc/fountain-codes/fountain
    description:
      EN: Experimental btcd branch grouping blocks into epochs, persisting encoded droplets and exchanging
        epoch and droplet messages between peers.
      BR: Branch experimental do btcd que agrupa blocos em épocas, persiste fragmentos codificados e troca
        mensagens de épocas e fragmentos entre peers.
  - id: btcd-compact-block-relay
    title:
      EN: Compact-block relay proposal for btcd
      BR: Proposta de retransmissão de blocos compactos no btcd
    source: 'btcsuite/btcd · #2610'
    type: PR
    href: https://github.com/btcsuite/btcd/pull/2610
    description:
      EN: Open pull request implementing BIP152 compact-block relay across btcd peer, sync-manager and server
        layers, with transaction-ID and witness-transaction-ID relay.
      BR: Pull request aberto que implementa retransmissão de blocos compactos BIP152 nas camadas de peers,
        sincronização e servidor do btcd, com IDs de transações e de transações com witness.
discussions:
  - id: fountain-codes-storage
    title:
      EN: 'Fountain Codes: a way to reduce blockchain storage costs'
      BR: 'Fountain Codes: a way to reduce blockchain storage costs'
    source: Delving Bitcoin
    description:
      EN: "As of August 2026, the fountain-code approach remained experimental. Larger network measurements of bandwidth, peer requirements and reconstruction costs were planned; malicious peers and storage–bandwidth tradeoffs remained open questions."
      BR: "Em agosto de 2026, a abordagem com fountain codes permanecia experimental. Estavam planejadas medições de rede maiores sobre banda, requisitos de peers e custos de reconstrução; peers maliciosos e compromissos entre armazenamento e banda permaneciam questões abertas."
    date: '2026-06-20'
    href: >-
      https://delvingbitcoin.org/t/fountain-codes-a-way-to-reduce-blockchain-storage-costs/2624
updatedAt: '2026-11-17'
---
## EN

Lucas Lima contributes to Bitcoin node software, with work on libbitcoinkernel APIs and Floresta command-line tooling. His research explores fountain codes for historical block storage, alongside experimental btcd implementations and compact-block relay work.

## PT

Lucas Lima contribui para software de nós Bitcoin, com trabalho em APIs de libbitcoinkernel e ferramentas de linha de comando do Floresta. Sua pesquisa explora fountain codes para armazenar blocos históricos, além de implementações experimentais no btcd e retransmissão de blocos compactos.
