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
      EN: Contributed one merged pull request.
      BR: Contribuição por meio de um pull request integrado.
contributions:
  - id: github-btcsuite-btcd-2524
    title:
      EN: Add VerifyLowS helper function to ECDSA signature
      BR: Add VerifyLowS helper function to ECDSA signature
    date: '2026-05-14'
    source: 'btcsuite/btcd · #2524'
    type: PR
    href: 'https://github.com/btcsuite/btcd/pull/2524'
  - id: github-lightningnetwork-lnd-9975
    title:
      EN: Add Support for P2TR Fallback Addresses in BOLT-11
      BR: Add Support for P2TR Fallback Addresses in BOLT-11
    date: '2025-09-15'
    source: 'lightningnetwork/lnd · #9975'
    type: PR
    href: 'https://github.com/lightningnetwork/lnd/pull/9975'
updatedAt: '2026-11-17'
---
## EN

Pins contributes to LND and the Go Bitcoin ecosystem. His merged [BOLT-11 change](https://github.com/lightningnetwork/lnd/pull/9975) adds Taproot (P2TR) fallback addresses to Lightning invoices, while a [btcd contribution](https://github.com/btcsuite/btcd/pull/2524) introduces a VerifyLowS helper for ECDSA signatures.

Vinteum’s [year-four report](/assets/files/Vinteum-Year-Four-Report-2026.pdf) records a shift in his 2026 work toward coverage-guided fuzzing: he built targets for LND’s Channel Link and Funding Manager state machines and expanded reusable testing infrastructure. This broadens his invoice and signature work into testing the state transitions involved in channel operation and funding. The report also documents his participation in the Lightning specification meeting, where implementation teams coordinate interoperability.

## PT

Pins contribui para o LND e o ecossistema Bitcoin em Go. Sua [mudança no BOLT-11](https://github.com/lightningnetwork/lnd/pull/9975), já integrada, adiciona endereços Taproot (P2TR) de fallback às invoices Lightning; uma [contribuição ao btcd](https://github.com/btcsuite/btcd/pull/2524) introduz o helper VerifyLowS para assinaturas ECDSA.

O [relatório do quarto ano da Vinteum](/assets/files/Vinteum-Year-Four-Report-2026.pdf) registra uma mudança de foco em 2026 para fuzzing guiado por cobertura: ele construiu alvos para as máquinas de estados Channel Link e Funding Manager do LND e ampliou a infraestrutura reutilizável de testes. Isso estende o trabalho com invoices e assinaturas ao teste das transições de estado na operação e no financiamento de canais. O relatório também documenta sua participação no encontro de especificação Lightning, no qual equipes de implementações coordenam interoperabilidade.
