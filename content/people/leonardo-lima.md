---
name: Leonardo Lima
image: /assets/images/people/grantees/leonardolima.jpg
programs:
  - program: grants
    name: Grants
    organization: Vinteum
    role:
      EN: Grantee
      BR: Bolsista
    status: past
    start: '2023-12'
    end: '2026-08'
    work:
      EN: Bitcoin Dev Kit
      BR: Bitcoin Dev Kit
    href: /programs/grants
    description:
      EN: "Became a BDK maintainer in April 2025, following earlier BDK and Fedimint work through Summer of Bitcoin."
      BR: "Tornou-se mantenedor do BDK em abril de 2025, após trabalho no BDK e no Fedimint pelo Summer of Bitcoin."
focus:
  - Wallets
  - Rust
  - Bitcoin Dev Kit
links:
  - label: GitHub
    href: 'https://github.com/oleonardolima'
    icon: github
  - label: X
    href: 'https://x.com/_oleonardolima'
    icon: twitter
  - label: Nostr
    href: >-
      https://primal.net/p/npub1ez8efu9rjxu64g0lalty2ffmr2tgkzjz92rkafyfyz5463wr8ars8zls5t
    icon: nostr
projects:
  - name: Bitcoin Dev Kit
    href: 'https://github.com/bitcoindevkit/bdk'
    description:
      EN: 'A modern, lightweight, descriptor-based wallet library written in Rust!'
      BR: >-
        Biblioteca Rust para construir carteiras Bitcoin baseadas em
        descriptors.
    contribution:
      EN: "Contributed 2 merged pull requests on canonicalization and transaction ordering. Maintenance work also includes reviews, releases and contributor guidance."
      BR: "Contribuiu com 2 pull requests integrados sobre canonicalização e ordenação de transações. A manutenção também inclui revisões, lançamentos e orientação a contribuidores."
contributions:
  - id: github-bitcoindevkit-bdk-2038
    title:
      EN: >-
        refactor(chain,core)!: replace CanonicalIter with sans-IO CanonicalTask
        + ChainQuery trait
      BR: >-
        refactor(chain,core)!: replace CanonicalIter with sans-IO CanonicalTask
        + ChainQuery trait
    date: '2026-06-15'
    source: 'bitcoindevkit/bdk · #2038'
    type: PR
    href: 'https://github.com/bitcoindevkit/bdk/pull/2038'
    description:
      EN: "Merged canonicalization refactor separating computation from I/O through a generic ChainQuery interface, allowing chain-data sources to vary without coupling them to canonicalization logic."
      BR: "Refatoração integrada da canonicalização que separa processamento e I/O por uma interface genérica ChainQuery, permitindo variar fontes de dados da cadeia sem acoplá-las à lógica de canonicalização."
  - id: github-bitcoindevkit-bdk-2027
    title:
      EN: 'feat(chain): add new list_ordered_canonical_txs method'
      BR: 'feat(chain): add new list_ordered_canonical_txs method'
    date: '2025-11-24'
    source: 'bitcoindevkit/bdk · #2027'
    type: PR
    href: 'https://github.com/bitcoindevkit/bdk/pull/2027'
  - id: bdk-structure-aware-fuzzing-signing
    title:
      EN: "Structure-aware wallet fuzzing and signing separation"
      BR: "Fuzzing estruturado de carteiras e separação de assinatura"
    source: "Vinteum · Year Four Report · August 2025–August 2026"
    type: Tooling
    href: "/assets/files/Vinteum-Year-Four-Report-2026.pdf"
    description:
      EN: "Developed structure-aware fuzzing that generates valid but adversarial wallet states, and worked toward separating signing from bdk_wallet."
      BR: "Desenvolveu fuzzing estruturado que gera estados de carteira válidos, mas adversariais, e trabalhou para separar a assinatura do bdk_wallet."
  - id: bdk-kernel-ipc-utxo-research
    title:
      EN: "BitcoinKernel, IPC and UTXO-oriented wallet research"
      BR: "Pesquisa de carteiras com BitcoinKernel, IPC e orientação a UTXOs"
    source: "Vinteum · Year Four Report · August 2025–August 2026"
    type: Research
    href: "/assets/files/Vinteum-Year-Four-Report-2026.pdf"
    description:
      EN: "BitcoinKernel- and IPC-based chain sources and a more UTXO-oriented wallet model remained research directions during August 2025–August 2026."
      BR: "Fontes de dados da cadeia baseadas em BitcoinKernel e IPC e um modelo de carteira mais orientado a UTXOs permaneciam direções de pesquisa entre agosto de 2025 e agosto de 2026."
updatedAt: '2026-11-17'
affiliations:
  - organization: Btrust
    role: { EN: Grantee, BR: Bolsista }
    status: current
    start: '2026-09'
media:
  - id: bdk-maintainer-announcement
    title:
      EN: Leonardo Lima named BDK maintainer
      BR: Leonardo Lima se torna mantenedor do BDK
    source: Vinteum
    href: 'https://www.vinteum.org/blog/leonardo-lima-named-bdk-maintainer-and-renews-his-vinteum-grant'
    date: '2025-04'
    mediaType: article
---
## EN

Leonardo Lima is a Bitcoin Dev Kit maintainer working on wallet correctness and architecture in Rust. His contributions include transaction graphs, canonicalization and transaction ordering, alongside fuzz testing, code review and contributor guidance.

## PT

Leonardo Lima é mantenedor do Bitcoin Dev Kit e trabalha em correção e arquitetura de carteiras em Rust. Suas contribuições incluem grafos de transações, canonicalização e ordenação de transações, além de fuzzing, revisão de código e orientação a contribuidores.
