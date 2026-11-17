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
    description:
      EN: Moved from production backend and authentication systems into Bitcoin open source
        after Bitcoin Dev Launchpad.
      BR: Passou de sistemas de backend e autenticação em produção para o código aberto
        Bitcoin após o Bitcoin Dev Launchpad.
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
      EN: Contributed one merged pull request. Maintained dependencies and CI and built
        seed corpora for fuzzing.
      BR: Contribuição por meio de um pull request integrado. Manteve dependências e CI
        e construiu corpora iniciais para fuzzing.
contributions:
  - id: github-rust-bitcoin-corepc-615
    title:
      EN: Finish off support for Bitcoin Core v31.0
      BR: Finish off support for Bitcoin Core v31.0
    date: '2026-06-16'
    source: 'rust-bitcoin/corepc · #615'
    type: PR
    href: 'https://github.com/rust-bitcoin/corepc/pull/615'
    description:
      EN: Completes Bitcoin Core v31 support across client methods, response types and integration
        tests, including cluster-mempool and private-broadcast RPCs.
      BR: Conclui o suporte ao Bitcoin Core v31 em métodos do cliente, tipos de resposta
        e testes de integração, incluindo RPCs de cluster mempool e transmissão privada.
  - id: github-rust-bitcoin-rust-bitcoin-6212
    title:
      EN: 'bitcoin: validate master key seed length'
      BR: 'bitcoin: validate master key seed length'
    date: '2026-05-27'
    source: 'rust-bitcoin/rust-bitcoin · #6212'
    type: PR
    href: 'https://github.com/rust-bitcoin/rust-bitcoin/pull/6212'
    description:
      EN: Introduces a validated BIP32 seed type that rejects invalid lengths at construction.
      BR: Introduz um tipo de seed BIP32 validado que rejeita comprimentos inválidos na
        construção.
  - id: renato-rust-bitcoin-compatibility
    title:
      EN: Gradual API migration and fuzzing infrastructure
      BR: Migração gradual de APIs e infraestrutura de fuzzing
    source: Vinteum · 2026
    href: /assets/files/Vinteum-Year-Four-Report-2026.pdf
    description:
      EN: Worked on a compatibility-layer effort intended to let downstream projects migrate
        across breaking APIs incrementally rather than all at once.
      BR: Trabalhou em uma iniciativa de camada de compatibilidade para permitir migrações
        graduais de projetos dependentes entre APIs incompatíveis, em vez de uma mudança
        de uma só vez.
    type: Tooling
updatedAt: '2026-11-17'
affiliations:
  - organization: Spiral
    role: { EN: Grantee, BR: Bolsista }
    status: current
    start: '2026-10'
---
## EN

Renato Britto (satsfy) contributes across the rust-bitcoin ecosystem, with experience in production backend and authentication systems. His Bitcoin work covers RPC compatibility, seed validation, maintenance and tooling for testing and gradual API migration.

## PT

Renato Britto (satsfy) contribui em diferentes projetos do ecossistema rust-bitcoin, com experiência em sistemas de backend e autenticação em produção. Seu trabalho em Bitcoin abrange compatibilidade de RPCs, validação de seeds, manutenção e ferramentas para testes e migração gradual de APIs.
