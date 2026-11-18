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
  - label: "X"
    href: "https://x.com/lucasbalieiro"
    icon: "twitter"
projects:
  - name: Stratum V2
    href: https://github.com/stratum-mining/stratum
    description:
      EN: Rust protocol libraries for the Stratum V2 mining ecosystem.
      BR: Bibliotecas de protocolo em Rust para o ecossistema de mineração Stratum V2.
    contribution:
      EN: Develops and reviews protocol libraries, with sustained work on message validation, fuzzing and regression infrastructure, no_std compatibility and the separation of protocol crates from mining applications.
      BR: Desenvolve e revisa bibliotecas de protocolo, com trabalho contínuo em validação de mensagens, fuzzing e infraestrutura de regressão, compatibilidade com no_std e separação entre crates de protocolo e aplicações de mineração.
  - name: sv2-apps
    href: https://github.com/stratum-mining/sv2-apps
    description:
      EN: Stratum V2 pool and miner applications, currently in alpha.
      BR: Aplicações de pool e mineração Stratum V2, atualmente em estágio alfa.
    contribution:
      EN: Develops and reviews pool and miner applications, spanning mining behavior, integration testing and reliable deployment and release infrastructure.
      BR: Desenvolve e revisa aplicações de pools e mineradores, abrangendo comportamento da mineração, testes de integração e infraestrutura confiável de implantação e releases.
  - name: sv2-ui
    href: https://github.com/stratum-mining/sv2-ui
    description:
      EN: Setup wizard and monitoring dashboard for Stratum V2 mining.
      BR: Assistente de configuração e dashboard de monitoramento para mineração Stratum V2.
    contribution:
      EN: Develops setup and configuration flows, container lifecycle tooling, diagnostics and test infrastructure to make Stratum V2 deployments easier to operate and troubleshoot.
      BR: Desenvolve fluxos de configuração, ferramentas de ciclo de vida de contêineres, diagnósticos e infraestrutura de testes para facilitar a operação e a investigação de problemas em instalações Stratum V2.
  - name: interoperability-tests-sv2
    href: https://github.com/stratum-mining/interoperability-tests-sv2
    description:
      EN: Specification-conformance testing across Stratum V2 implementations.
      BR: Testes de conformidade com a especificação entre implementações Stratum V2.
    contribution:
      EN: Develops the compliance-testing harness, endpoint configuration and protocol scenarios for comparing independent Stratum V2 deployments. Additional scenario checks remain under review.
      BR: Desenvolve a estrutura de testes de conformidade, a configuração de endpoints e cenários de protocolo para comparar instalações independentes de Stratum V2. Verificações adicionais de cenários seguem em revisão.
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
updatedAt: '2026-11-18'
affiliations:
  - organization: OpenSats
    role: { EN: Grantee, BR: Grantee }
    status: current
    start: '2026-01'
    href: 'https://opensats.org/blog/sixteenth-wave-of-bitcoin-grants'
---
## EN

Lucas Balieiro contributes to the Stratum V2 Reference Implementation for Bitcoin mining. His work includes message validation, structured fuzzing and interoperability testing, alongside solo-mining tools, code review and investigations of unexpected behavior.

## PT

Lucas Balieiro contribui para a implementação de referência do Stratum V2 para mineração de Bitcoin. Seu trabalho inclui validação de mensagens, fuzzing estruturado e testes de interoperabilidade, além de ferramentas de mineração solo, revisão de código e investigação de comportamentos inesperados.
