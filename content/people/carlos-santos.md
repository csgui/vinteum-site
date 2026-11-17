---
name: Carlos Santos
image: /assets/images/people/github/carlos-santos.jpg
links:
  - label: GitHub
    href: 'https://github.com/caarloshenriq'
    icon: github
  - label: Blog
    icon: blog
    href: 'https://www.carlossantos.sh/'
programs:
  - program: fellowship
    name: Fellowship
    organization: Vinteum
    role:
      EN: Fellow
      BR: Fellow
    status: current
    work:
      EN: Payjoin Dev Kit
      BR: Payjoin Dev Kit
    start: '2026-09'
writing:
  - id: personal-blog-payjoin-bip77-bip78
    title:
      EN: 'BIP 78 & BIP 77: Understanding Payjoin from the Ground Up'
      BR: 'BIP 78 & BIP 77: Understanding Payjoin from the Ground Up'
    date: '2026-05-17'
    source: carlossantos.sh
    href: 'https://www.carlossantos.sh/posts/payjoin-bip77-bip78/'
  - id: personal-blog-payjoin-poc
    title:
      EN: 'Payjoin POC: Implementing no_std on the payjoin ecosystem'
      BR: 'Payjoin POC: Implementing no_std on the payjoin ecosystem'
    date: '2026-03-24'
    source: carlossantos.sh
    href: 'https://www.carlossantos.sh/posts/payjoin-poc/'
focus:
  - Payjoin
  - Fuzzing
  - Rust
updatedAt: '2026-11-17'
contributions:
  - id: github-payjoin-rust-payjoin-2022
    title:
      EN: Add FFI receiver checklists fuzz target
      BR: Add FFI receiver checklists fuzz target
    date: '2026-11-04'
    source: 'payjoin/rust-payjoin · #2022'
    type: PR
    href: 'https://github.com/payjoin/rust-payjoin/pull/2022'
    description:
      EN: Merged in November 2026. Exercises receiver callbacks and checklists with malformed or
        mismatched host responses, covering callback failures, refused saves, and synchronous and
        asynchronous persistence adapters. Replays saved state to check application integration
        beyond core receiver logic.
      BR: Integrado em novembro de 2026. Exercita callbacks e checklists do recebedor com respostas
        malformadas ou incompatíveis da aplicação, cobrindo falhas de callbacks, recusas de gravação
        e adaptadores síncronos e assíncronos de persistência. Reconstrói o estado salvo para verificar
        a integração além da lógica central do recebedor.
  - id: github-payjoin-rust-payjoin-1887
    title:
      EN: Add v2 receiver fuzz target
      BR: Add v2 receiver fuzz target
    date: '2026-10-14'
    source: 'payjoin/rust-payjoin · #1887'
    type: PR
    href: 'https://github.com/payjoin/rust-payjoin/pull/1887'
    description:
      EN: >-
        Reviewed and refined the fuzz harness initially implemented by
        @benalleng.
      BR: >-
        Revisou e refinou o harness de fuzzing inicialmente implementado por
        @benalleng.
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
---
## EN

Carlos Santos contributes to Payjoin Dev Kit, focusing on fuzz testing of Payjoin v2 and receiver interfaces. His testing work covers the integration between Rust receiver logic and applications using foreign-function bindings, including callbacks and persistence.

## PT

Carlos Santos contribui para o Payjoin Dev Kit, com foco em fuzzing de Payjoin v2 e interfaces de recebedores. Seu trabalho testa a integração entre a lógica do recebedor em Rust e aplicativos que usam bindings para outras linguagens, incluindo callbacks e persistência.
