---
name: Caio
image: /assets/images/people/fellows/caio.jpg
programs:
  - program: bitcoin-dev-launchpad
    name: Bitcoin Dev Launchpad
    organization: Vinteum
    role:
      EN: Alumnus
      BR: Ex-participante
    status: past
    cohort: 1
    work:
      EN: Boltz
      BR: Boltz
    href: /programs/bitcoin-dev-launchpad
links:
  - label: GitHub
    href: 'https://github.com/kiocos'
    icon: github
updatedAt: '2026-11-17'
affiliations:
  - organization: Boltz
    role: { EN: Developer, BR: Desenvolvedor }
    status: past
projects:
  - name: Boltz atomic-swap client
    href: https://github.com/BoltzExchange/boltz-web-app
    current: false
    description:
      EN: Non-custodial swap client covering the full swap lifecycle, including normal operation and failure
        recovery.
      BR: Cliente de swaps sem custódia que cobre todo o ciclo da operação, incluindo o funcionamento
        normal e a recuperação em caso de falha.
    contribution:
      EN: Developed rescue-key recovery and backend-independent refunds for timed-out swaps, with end-to-end
        recovery tests.
      BR: Desenvolveu recuperação por rescue key e reembolsos de swaps expirados sem depender do backend,
        com testes de recuperação ponta a ponta.
contributions:
  - id: boltz-rust-swap-recovery
    title:
      EN: Rust API for restoring swap data
      BR: API em Rust para restaurar dados de swaps
    date: '2025-07-25'
    source: 'BoltzExchange/boltz-backend · #1010'
    type: PR
    href: https://github.com/BoltzExchange/boltz-backend/pull/1010
    description:
      EN: Merged a swap-restore endpoint that locates swaps from an extended public key and returns claim
        or refund details. Recovery logic and endpoint tests live in the Rust backend.
      BR: Integrou um endpoint de restauração que localiza swaps a partir de uma chave pública estendida
        e retorna dados de resgate ou reembolso. A lógica de recuperação e os testes do endpoint estão
        no backend Rust.
---
## EN

Caio is an alumnus of the first Bitcoin Dev Launchpad cohort. His Bitcoin engineering work has focused on non-custodial atomic swaps, client-side verification and recovery tools at Boltz.

## PT

Caio é ex-participante da primeira turma do Bitcoin Dev Launchpad. Seu trabalho em engenharia Bitcoin se concentrou em atomic swaps sem custódia, verificação no cliente e ferramentas de recuperação na Boltz.
