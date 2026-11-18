---
name: Lucas Balieiro
image: /assets/images/people/fellows/lucasbalieiro.jpg
programs:
  - program: fellowship
    name: Fellowship
    organization: Vinteum
    role:
      EN: Fellow
      BR: Fellow
    status: past
    end: '2026-01'
    start: '2025-03'
    cohort: 1
    work:
      EN: Stratum V2
      BR: Stratum V2
    href: /programs/fellowship
    description:
      EN: "Moved from Bitcoin Dev Launchpad into a Vinteum fellowship on the Stratum V2 Reference Implementation, then continued contributing with independent support."
      BR: "Passou do Bitcoin Dev Launchpad para uma fellowship da Vinteum na implementação de referência do Stratum V2 e depois continuou contribuindo com apoio independente."
  - program: bitcoin-dev-launchpad
    name: Bitcoin Dev Launchpad
    organization: Vinteum
    role:
      EN: Alumnus
      BR: Ex-participante
    status: past
    cohort: 1
    work:
      EN: Stratum V2
      BR: Stratum V2
    href: /programs/bitcoin-dev-launchpad
    fundedBy: OpenSats
focus:
  - Mining
  - Stratum V2
  - Fuzzing
links:
  - label: GitHub
    href: 'https://github.com/lucasbalieiro'
    icon: github
projects:
  - name: Stratum V2
    href: https://github.com/stratum-mining/stratum
    description:
      EN: Stratum V2 protocol libraries
      BR: Bibliotecas do protocolo Stratum V2.
    contribution:
      EN: Contributed merged changes validating F32 serialization and adding structured fuzz generators
        for SV2 datatypes and messages.
      BR: Contribuiu com mudanças integradas para validar a serialização de F32 e acrescentar geradores
        estruturados de fuzzing para tipos e mensagens SV2.
contributions:
  - id: github-stratum-mining-stratum-2436
    title:
      EN: 'feat(binary-sv2)!: validate F32 values during serialization'
      BR: 'feat(binary-sv2)!: validate F32 values during serialization'
    date: '2026-11-03'
    source: 'stratum-mining/stratum · #2436'
    type: PR
    href: 'https://github.com/stratum-mining/stratum/pull/2436'
  - id: github-stratum-mining-stratum-2350
    title:
      EN: add generators to fuzz target
      BR: add generators to fuzz target
    date: '2026-10-28'
    source: 'stratum-mining/stratum · #2350'
    type: PR
    href: 'https://github.com/stratum-mining/stratum/pull/2350'
  - id: sv2-solo-mining-interoperability
    title:
      EN: Automatic container startup in sv2-ui
      BR: Inicialização automática de contêineres no sv2-ui
    source: 'stratum-mining/sv2-ui · #184'
    type: PR
    href: https://github.com/stratum-mining/sv2-ui/pull/184
    description:
      EN: Merged automatic restart of mining containers from saved application state, with startup status
        in the dashboard.
      BR: Integrou a reinicialização automática dos contêineres de mineração a partir do estado salvo, com
        o status de inicialização no dashboard.
  - id: sv2-interoperability-extranonce-tests
    title:
      EN: Stratum V2 extranonce compliance tests
      BR: Testes de conformidade de extranonce no Stratum V2
    source: 'stratum-mining/interoperability-tests-sv2 · #27'
    type: PR
    href: https://github.com/stratum-mining/interoperability-tests-sv2/pull/27
    description:
      EN: Open pull request extending the M-OEMCS-3 compliance scenario to request minimum extranonce sizes
        of 4, 10 and 32 bytes and report undersized server responses.
      BR: Pull request aberto que amplia o cenário de conformidade M-OEMCS-3 para solicitar extranonces
        mínimos de 4, 10 e 32 bytes e relatar respostas menores do servidor.
updatedAt: '2026-11-17'
affiliations:
  - organization: OpenSats
    role: { EN: Grantee, BR: Bolsista }
    status: current
    start: '2026-01'
    href: 'https://opensats.org/blog/sixteenth-wave-of-bitcoin-grants'
---
## EN

Lucas Balieiro contributes to the Stratum V2 Reference Implementation for Bitcoin mining. His work includes message validation, structured fuzzing and interoperability testing, alongside solo-mining tools, code review and investigations of unexpected behavior.

## PT

Lucas Balieiro contribui para a implementação de referência do Stratum V2 para mineração de Bitcoin. Seu trabalho inclui validação de mensagens, fuzzing estruturado e testes de interoperabilidade, além de ferramentas de mineração solo, revisão de código e investigação de comportamentos inesperados.
