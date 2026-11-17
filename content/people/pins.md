---
name: Pins
image: /assets/images/people/grantees/pins.jpg
programs:
  - program: grants
    name: Grants
    organization: Vinteum
    role:
      EN: Grantee
      BR: Bolsista
    status: current
    work:
      EN: LND
      BR: LND
    href: /programs/grants
focus:
  - Lightning
  - Taproot
  - Cryptography
links:
  - label: GitHub
    href: 'https://github.com/MPins'
    icon: github
  - label: X
    href: 'https://x.com/pins_btc'
    icon: twitter
projects:
  - name: btcd
    href: 'https://github.com/btcsuite/btcd'
    description:
      EN: An alternative full node bitcoin implementation written in Go (golang)
      BR: Implementação de nó Bitcoin em Go.
    contribution:
      EN: Contributed one merged pull request.
      BR: Contribuição por meio de um pull request integrado.
  - name: lnd
    href: 'https://github.com/lightningnetwork/lnd'
    description:
      EN: Lightning Network Daemon ⚡️
      BR: Implementação de nó Lightning.
    contribution:
      EN: Contributed one merged pull request. Built coverage-guided fuzz targets for Channel
        Link and Funding Manager and expanded reusable testing infrastructure in 2026.
      BR: Contribuição por meio de um pull request integrado. Construiu alvos de fuzzing
        guiado por cobertura para Channel Link e Funding Manager e ampliou a infraestrutura
        reutilizável de testes em 2026.
contributions:
  - id: github-btcsuite-btcd-2524
    title:
      EN: Add VerifyLowS helper function to ECDSA signature
      BR: Add VerifyLowS helper function to ECDSA signature
    date: '2026-05-14'
    source: 'btcsuite/btcd · #2524'
    type: PR
    href: 'https://github.com/btcsuite/btcd/pull/2524'
    description:
      EN: Introduces the VerifyLowS helper for ECDSA signatures.
      BR: Introduz o helper VerifyLowS para assinaturas ECDSA.
  - id: github-lightningnetwork-lnd-9975
    title:
      EN: Add Support for P2TR Fallback Addresses in BOLT-11
      BR: Add Support for P2TR Fallback Addresses in BOLT-11
    date: '2025-09-15'
    source: 'lightningnetwork/lnd · #9975'
    type: PR
    href: 'https://github.com/lightningnetwork/lnd/pull/9975'
    description:
      EN: Adds Taproot (P2TR) fallback addresses to BOLT-11 Lightning invoices.
      BR: Adiciona endereços Taproot (P2TR) de fallback às invoices Lightning BOLT-11.
  - id: pins-lnd-state-machine-fuzzing
    title:
      EN: LND state-machine fuzzing and interoperability
      BR: Fuzzing de máquinas de estados do LND e interoperabilidade
    source: Vinteum · 2026
    href: /assets/files/Vinteum-Year-Four-Report-2026.pdf
    description:
      EN: Built coverage-guided fuzz targets for LND’s Channel Link and Funding Manager
        state machines and expanded reusable testing infrastructure in 2026. Also participated
        in the Lightning specification meeting, where implementation teams coordinate interoperability.
      BR: Construiu alvos de fuzzing guiado por cobertura para as máquinas de estados Channel
        Link e Funding Manager do LND e ampliou a infraestrutura reutilizável de testes
        em 2026. Também participou do encontro de especificação Lightning, no qual equipes
        de implementações coordenam interoperabilidade.
    type: Tooling
updatedAt: '2026-11-17'
---
## EN

Pins contributes to LND and the Go Bitcoin ecosystem, working on Lightning invoices, signature helpers and testing infrastructure. His 2026 work expanded into coverage-guided fuzzing of the state machines involved in channel operation and funding.

## PT

Pins contribui para o LND e o ecossistema Bitcoin em Go, trabalhando com invoices Lightning, helpers de assinaturas e infraestrutura de testes. Em 2026, ampliou seu trabalho para fuzzing guiado por cobertura das máquinas de estados de operação e financiamento de canais.
