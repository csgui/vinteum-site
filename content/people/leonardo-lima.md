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
      EN: Contributed 2 merged pull requests.
      BR: Contribuição por meio de 2 pull requests integrados.
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
  - id: github-bitcoindevkit-bdk-2027
    title:
      EN: 'feat(chain): add new list_ordered_canonical_txs method'
      BR: 'feat(chain): add new list_ordered_canonical_txs method'
    date: '2025-11-24'
    source: 'bitcoindevkit/bdk · #2027'
    type: PR
    href: 'https://github.com/bitcoindevkit/bdk/pull/2027'
updatedAt: '2026-11-17'
affiliations:
  - organization: Btrust
    role: { EN: Grantee, BR: Bolsista }
    status: current
    start: '2026-09'
---
## EN

Leonardo Lima has contributed to Bitcoin Dev Kit. Selected work includes BDK transaction graphs, canonicalization and transaction ordering.

Vinteum [announced Leonardo's BDK maintainership in April 2025](https://www.vinteum.org/blog/leonardo-lima-named-bdk-maintainer-and-renews-his-vinteum-grant), following earlier work in BDK and Fedimint through Summer of Bitcoin. The [year-four report](/assets/files/Vinteum-Year-Four-Report-2026.pdf) describes his subsequent work on wallet correctness and architecture: a merged canonicalization refactor separated computation from I/O through a generic ChainQuery interface, allowing chain-data sources to vary without coupling them to the canonicalization logic.

His work also includes structure-aware fuzzing that generates valid but adversarial wallet states, work toward separating signing from bdk_wallet, and maintenance through reviews, releases and contributor guidance. BitcoinKernel- and IPC-based chain sources and a more UTXO-oriented model remained research directions during the report period.

## PT

Leonardo Lima tem contribuições em Bitcoin Dev Kit. Seu trabalho inclui grafos de transações, canonicalização e ordenação de transações no BDK.

A Vinteum [anunciou Leonardo como mantenedor do BDK em abril de 2025](https://www.vinteum.org/blog/leonardo-lima-named-bdk-maintainer-and-renews-his-vinteum-grant), após contribuições ao BDK e ao Fedimint pelo Summer of Bitcoin. O [relatório do quarto ano](/assets/files/Vinteum-Year-Four-Report-2026.pdf) descreve seu trabalho posterior em correção e arquitetura de carteiras: uma refatoração integrada da canonicalização separou processamento e I/O por meio da interface genérica ChainQuery, permitindo variar as fontes de dados da cadeia sem acoplá-las à lógica de canonicalização.

Seu trabalho também inclui fuzzing estruturado que gera estados de carteira válidos, mas adversariais, trabalho para separar a assinatura do bdk_wallet e manutenção por meio de revisões, lançamentos e orientação a contribuidores. Fontes de dados baseadas em BitcoinKernel e IPC e um modelo mais orientado a UTXOs permaneciam direções de pesquisa no período coberto pelo relatório.