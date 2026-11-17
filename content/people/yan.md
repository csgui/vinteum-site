---
name: Yan
image: /assets/images/people/fellows/yan.jpeg
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
      EN: Bitcoin Dev Kit
      BR: Bitcoin Dev Kit
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
      EN: Bitcoin Dev Kit
      BR: Bitcoin Dev Kit
    href: /programs/bitcoin-dev-launchpad
    fundedBy: Vinteum
focus:
  - Wallets
  - Bitcoin Analysis
  - Testing
links:
  - label: GitHub
    href: 'https://github.com/yan-pi'
    icon: github
  - label: X
    href: 'https://x.com/yamigake'
    icon: twitter
  - label: Website
    href: 'https://indianboy.sh/'
    icon: website
  - label: Blog
    href: 'https://indianboy.sh/'
    icon: blog
  - label: GitHub
    href: 'https://github.com/yanfsb'
    icon: github
projects:
  - name: bdk-cli
    href: 'https://github.com/bitcoindevkit/bdk-cli'
    description:
      EN: 'A CLI wallet library and REPL tool to demo and test the BDK library '
      BR: Carteira de linha de comando e REPL para testar e demonstrar o BDK.
    contribution:
      EN: Contributed one merged pull request.
      BR: Contribuição por meio de um pull request integrado.
  - name: BlockSci (Clube Bitcoin UnB)
    href: 'https://github.com/ClubeBitcoinUnB/BlockSci'
    description:
      EN: A high-performance tool for blockchain science and exploration
      BR: Fork do BlockSci para análise e exploração de dados de blockchains.
    contribution:
      EN: Contributed one merged pull request.
      BR: Contribuição por meio de um pull request integrado.
contributions:
  - id: github-bitcoindevkit-bdk-cli-312
    title:
      EN: Add command to delete saved wallet config
      BR: Add command to delete saved wallet config
    date: '2026-10-22'
    source: 'bitcoindevkit/bdk-cli · #312'
    type: PR
    href: 'https://github.com/bitcoindevkit/bdk-cli/pull/312'
  - id: github-ClubeBitcoinUnB-BlockSci-14
    title:
      EN: Change from Travis/CircleCi in favor of Github Actions
      BR: Change from Travis/CircleCi in favor of Github Actions
    date: '2026-08-12'
    source: 'ClubeBitcoinUnB/BlockSci · #14'
    type: PR
    href: 'https://github.com/ClubeBitcoinUnB/BlockSci/pull/14'
writing:
  - id: personal-blog-floresta-mainnet-journey
    title:
      EN: 'Three Weeks Stuck on IBD: Getting Floresta to Sync on a VPS'
      BR: 'Three Weeks Stuck on IBD: Getting Floresta to Sync on a VPS'
    date: '2026-04-30'
    source: indianboy.sh
    href: 'https://indianboy.sh/blog/floresta-mainnet-journey'
  - id: personal-blog-floresta-on-steamdeck
    title:
      EN: Running a Floresta Node on a Steam Deck
      BR: Running a Floresta Node on a Steam Deck
    date: '2026-04-10'
    source: indianboy.sh
    href: 'https://indianboy.sh/blog/floresta-on-steamdeck'
updatedAt: '2026-11-17'
---
## EN

Yan works on Bitcoin wallet infrastructure and BDK. Vinteum’s [year-four report](/assets/files/Vinteum-Year-Four-Report-2026.pdf) describes research into compact descriptor metadata for script indices that were derived, revealed or used, building on proposed BIP393 annotations and exploring Elias–Fano encoding. He developed a reusable research API from an earlier proof of concept, including encoding, decoding, wallet import/export and selected-index derivation. The research remained in benchmarking and validation during the report period.

His merged [bdk-cli command](https://github.com/bitcoindevkit/bdk-cli/pull/312) deletes saved configuration entries without deleting wallet databases. In the [Clube Bitcoin UnB BlockSci fork](https://github.com/ClubeBitcoinUnB/BlockSci/pull/14), he migrated CI to GitHub Actions with Linux, macOS ARM64 and Nix checks.

## PT

Yan trabalha com infraestrutura de carteiras Bitcoin e BDK. O [relatório do quarto ano da Vinteum](/assets/files/Vinteum-Year-Four-Report-2026.pdf) descreve pesquisa sobre metadados compactos de descritores para índices de scripts derivados, revelados ou usados, partindo das anotações propostas no BIP393 e explorando a codificação Elias–Fano. Ele desenvolveu uma API reutilizável de pesquisa a partir de uma prova de conceito, com codificação, decodificação, importação/exportação de carteiras e derivação de índices específicos. A pesquisa permanecia em benchmarking e validação no período coberto pelo relatório.

Seu [comando no bdk-cli](https://github.com/bitcoindevkit/bdk-cli/pull/312), já integrado, remove configurações salvas sem apagar os bancos de dados das carteiras. No [fork do BlockSci do Clube Bitcoin UnB](https://github.com/ClubeBitcoinUnB/BlockSci/pull/14), migrou o CI para GitHub Actions com verificações de Linux, macOS ARM64 e Nix.