---
name: Renato Britto (satsfy)
image: /assets/images/people/fellows/renatobritto.jpg
alternateImage: /assets/images/people/fellows/bukele.jpg
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
      EN: Rust-Bitcoin
      BR: Rust-Bitcoin
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
      EN: Rust-Bitcoin
      BR: Rust-Bitcoin
    href: /programs/bitcoin-dev-launchpad
    fundedBy: Vinteum
focus:
  - Rust
  - Wallets
  - RPC
links:
  - label: GitHub
    href: 'https://github.com/satsfy'
    icon: github
  - label: X
    href: 'https://x.com/0xsatsfy'
    icon: twitter
  - label: Website
    href: 'https://satsfy.xyz/'
    icon: website
  - label: Blog
    href: 'https://satsfy.xyz/'
    icon: blog
projects:
  - name: corepc
    href: 'https://github.com/rust-bitcoin/corepc'
    description:
      EN: Rust library for interacting with Bitcoin Core over JSONRPC
      BR: Biblioteca Rust para interagir com o Bitcoin Core via JSON-RPC.
    contribution:
      EN: Contributed one merged pull request.
      BR: Contribuição por meio de um pull request integrado.
  - name: rust-bitcoin
    href: 'https://github.com/rust-bitcoin/rust-bitcoin'
    description:
      EN: Rust Bitcoin library
      BR: Bibliotecas Rust para desenvolver aplicações Bitcoin.
    contribution:
      EN: Contributed one merged pull request.
      BR: Contribuição por meio de um pull request integrado.
contributions:
  - id: github-rust-bitcoin-corepc-615
    title:
      EN: Finish off support for Bitcoin Core v31.0
      BR: Finish off support for Bitcoin Core v31.0
    date: '2026-06-16'
    source: 'rust-bitcoin/corepc · #615'
    type: PR
    href: 'https://github.com/rust-bitcoin/corepc/pull/615'
  - id: github-rust-bitcoin-rust-bitcoin-6212
    title:
      EN: 'bitcoin: validate master key seed length'
      BR: 'bitcoin: validate master key seed length'
    date: '2026-05-27'
    source: 'rust-bitcoin/rust-bitcoin · #6212'
    type: PR
    href: 'https://github.com/rust-bitcoin/rust-bitcoin/pull/6212'
updatedAt: '2026-11-17'
affiliations:
  - organization: Spiral
    role: { EN: Grantee, BR: Bolsista }
    status: current
    start: '2026-10'
---
## EN

Renato Britto (satsfy) contributes across the rust-bitcoin ecosystem. Vinteum’s [year-four report](/assets/files/Vinteum-Year-Four-Report-2026.pdf) traces his move from production backend and authentication systems into Bitcoin open source after the Bitcoin Dev Launchpad. His work includes dependency and CI maintenance, seed corpora for fuzzing, and a compatibility-layer effort intended to let downstream projects migrate across breaking APIs incrementally rather than all at once.

His merged [BIP32 seed validation](https://github.com/rust-bitcoin/rust-bitcoin/pull/6212) introduces a validated seed type so invalid lengths are rejected at construction. In [corepc](https://github.com/rust-bitcoin/corepc/pull/615), he completed Bitcoin Core v31 support across client methods, response types and integration tests, including cluster-mempool and private-broadcast RPCs.

## PT

Renato Britto (satsfy) contribui em diferentes projetos do ecossistema rust-bitcoin. O [relatório do quarto ano da Vinteum](/assets/files/Vinteum-Year-Four-Report-2026.pdf) descreve sua transição de sistemas de backend e autenticação em produção para o código aberto Bitcoin após o Bitcoin Dev Launchpad. Seu trabalho inclui manutenção de dependências e CI, corpora iniciais para fuzzing e uma iniciativa de camada de compatibilidade para permitir migrações graduais de projetos dependentes entre APIs incompatíveis.

Sua [validação de seeds BIP32](https://github.com/rust-bitcoin/rust-bitcoin/pull/6212), já integrada, introduz um tipo de seed validado que rejeita comprimentos inválidos na construção. No [corepc](https://github.com/rust-bitcoin/corepc/pull/615), concluiu o suporte ao Bitcoin Core v31 em métodos do cliente, tipos de resposta e testes de integração, incluindo RPCs de cluster mempool e transmissão privada.
