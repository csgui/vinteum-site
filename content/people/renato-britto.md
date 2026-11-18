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
      EN: Completed Bitcoin Core v31 RPC support, response types and integration tests.
      BR: Concluiu o suporte aos RPCs do Bitcoin Core v31, tipos de resposta e testes de integração.
  - name: rust-bitcoin
    href: 'https://github.com/rust-bitcoin/rust-bitcoin'
    description:
      EN: Rust Bitcoin library
      BR: Bibliotecas Rust para desenvolver aplicações Bitcoin.
    contribution:
      EN: Added BIP32 seed-length validation and daily corpus-based fuzzing CI.
      BR: Adicionou validação do comprimento de seeds BIP32 e CI diário de fuzzing baseado em
        corpus.
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
  - id: github-rust-bitcoin-rust-bitcoin-6729
    title:
      EN: Daily corpus-based fuzzing
      BR: Fuzzing diário baseado em corpus
    source: 'rust-bitcoin/rust-bitcoin · #6729'
    type: PR
    href: https://github.com/rust-bitcoin/rust-bitcoin/pull/6729
    description:
      EN: Adds daily fuzzing from a persistent qa-assets corpus, saves updated inputs and reports
        crashes. Merged pull request.
      BR: Adiciona fuzzing diário a partir de um corpus persistente em qa-assets, salva entradas
        atualizadas e relata crashes. Pull request integrado.
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
