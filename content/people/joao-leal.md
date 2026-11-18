---
name: João Leal
image: /assets/images/people/fellows/joao.jpg
programs:
  - program: fellowship
    name: Fellowship
    organization: Vinteum
    role:
      EN: Fellow
      BR: Fellow
    status: past
    end: '2025-08'
    start: '2024-12'
    cohort: 1
    work:
      EN: Floresta
      BR: Floresta
    href: /programs/fellowship
    description:
      EN: "After São Paulo BitDevs and Summer of Bitcoin, worked on Floresta during the Vinteum fellowship and Bitcoin Dev Launchpad. Early consensus-rule implementation took place under mentorship; he later returned to Summer of Bitcoin as a mentor."
      BR: "Após São Paulo BitDevs e Summer of Bitcoin, trabalhou no Floresta durante a fellowship da Vinteum e o Bitcoin Dev Launchpad. A implementação inicial de regras de consenso teve mentoria; depois, voltou ao Summer of Bitcoin como mentor."
  - program: bitcoin-dev-launchpad
    name: Bitcoin Dev Launchpad
    organization: Vinteum
    role:
      EN: Alumnus
      BR: Ex-participante
    status: past
    cohort: 1
    work:
      EN: Floresta
      BR: Floresta
    href: /programs/bitcoin-dev-launchpad
    fundedBy: OpenSats
focus:
  - Rust
  - Bitcoin Nodes
  - Mobile
links:
  - label: GitHub
    href: 'https://github.com/jaoleal'
    icon: github
projects:
  - name: rust-bitcoinkernel
    href: https://github.com/sedited/rust-bitcoinkernel
    description:
      EN: Rust bindings for the bitcoin kernel library
      BR: Bindings Rust para a biblioteca de validação do Bitcoin Core.
    contribution:
      EN: Contributed one merged pull request.
      BR: Contribuição por meio de um pull request integrado.
  - name: rust-bitcoin
    href: https://github.com/rust-bitcoin/rust-bitcoin
    description:
      EN: Rust Bitcoin library
      BR: Bibliotecas Rust para desenvolver aplicações Bitcoin.
    contribution:
      EN: Contributed one merged pull request.
      BR: Contribuição por meio de um pull request integrado.
  - name: floresta-nix
    href: https://github.com/getfloresta/floresta-nix
    description:
      EN: Nix packages, services and development resources for Floresta.
      BR: Pacotes, serviços e recursos de desenvolvimento Nix para Floresta.
    contribution:
      EN: Develops Nix build tooling for Floresta, including the reusable floresta-build.nix module.
      BR: Desenvolve ferramentas Nix para compilar o Floresta, incluindo o módulo reutilizável floresta-build.nix.
contributions:
  - id: github-sedited-rust-bitcoinkernel-158
    title:
      EN: 'Feat: Android support'
      BR: 'Feat: Android support'
    date: '2026-07-22'
    source: 'sedited/rust-bitcoinkernel · #158'
    type: PR
    href: https://github.com/sedited/rust-bitcoinkernel/pull/158
  - id: github-rust-bitcoin-rust-bitcoin-6502
    title:
      EN: Add default_rpc_port method to NetworkExt trait
      BR: Add default_rpc_port method to NetworkExt trait
    date: '2026-07-09'
    source: 'rust-bitcoin/rust-bitcoin · #6502'
    type: PR
    href: https://github.com/rust-bitcoin/rust-bitcoin/pull/6502
  - id: github-getfloresta-Floresta-165
    title:
      EN: Implement transaction consensus rules in Floresta
      BR: Implementar regras de consenso de transações no Floresta
    date: '2024-07-10'
    source: 'getfloresta/Floresta · #165'
    type: PR
    href: https://github.com/getfloresta/Floresta/pull/165
    description:
      EN: Merged transaction-validation work covering missing consensus checks, based on Bitcoin Core validation
        and discussion with the project maintainer.
      BR: Implementou verificações de consenso ausentes na validação de transações, com base no Bitcoin
        Core e em discussão com o mantenedor; PR integrado.
  - id: github-getfloresta-Floresta-590
    title:
      EN: Make Floresta getblock compatible with Bitcoin Core
      BR: Compatibilizar getblock do Floresta com Bitcoin Core
    date: '2025-07-28'
    source: 'getfloresta/Floresta · #590'
    type: PR
    href: https://github.com/getfloresta/Floresta/pull/590
    description:
      EN: Merged getblock response refactoring and verbosity level 2 for compatibility with the Bitcoin
        Core API.
      BR: Reestruturou respostas de getblock e adicionou o nível de verbosidade 2 para compatibilidade com
        a API do Bitcoin Core; PR integrado.
updatedAt: '2026-11-17'
affiliations:
  - organization: OpenSats
    role: { EN: Grantee, BR: Bolsista }
    status: current
    start: '2026-09'
    href: 'https://opensats.org/blog/fourteenth-wave-of-bitcoin-grants'
---
## EN

João Leal contributes to Bitcoin node software in Rust, with work on Floresta, rust-bitcoinkernel and rust-bitcoin. His contributions include consensus validation, RPC compatibility and Android support for BitcoinKernel bindings.

## PT

João Leal contribui para software de nós Bitcoin em Rust, com trabalho no Floresta, rust-bitcoinkernel e rust-bitcoin. Suas contribuições incluem validação de consenso, compatibilidade RPC e suporte a Android nos bindings de BitcoinKernel.
