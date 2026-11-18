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
    href: https://github.com/bitcoindevkit/bdk
    description:
      EN: A modern, lightweight, descriptor-based wallet library written in Rust!
      BR: Biblioteca Rust para construir carteiras Bitcoin baseadas em descriptors.
    contribution:
      EN: Contributed merged canonicalization and transaction-ordering changes. Research directions include
        BitcoinKernel/IPC chain sources and UTXO-oriented wallet models.
      BR: Contribuiu com mudanças integradas de canonicalização e ordenação de transações. Direções de pesquisa
        incluem fontes de dados BitcoinKernel/IPC e modelos de carteira orientados a UTXOs.
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
      EN: Structure-aware wallet fuzzing proposal
      BR: Proposta de fuzzing estruturado de carteiras
    source: 'bitcoindevkit/bdk_wallet · #271'
    type: PR
    href: https://github.com/bitcoindevkit/bdk_wallet/pull/271
    description:
      EN: Open pull request introducing LibFuzzer targets and structured generators for wallet updates,
        transaction creation, signing and persistence.
      BR: Pull request aberto que introduz alvos LibFuzzer e geradores estruturados para atualizações de
        carteira, criação de transações, assinatura e persistência.
  - id: bdk-wallet-signer-separation
    title:
      EN: Proposal to separate signers from Wallet
      BR: Proposta de separação dos signers de Wallet
    source: 'bitcoindevkit/bdk_wallet · #235'
    type: PR
    href: https://github.com/bitcoindevkit/bdk_wallet/pull/235
    description:
      EN: Proposed removing Wallet signer APIs in favor of rust-bitcoin’s Psbt::sign and a GetKey implementation.
        Closed without merging.
      BR: Propôs remover as APIs de assinatura de Wallet em favor de Psbt::sign do rust-bitcoin e de uma
        implementação de GetKey. Fechado sem integração.
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
