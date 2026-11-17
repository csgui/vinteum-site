---
name: plebhash
image: /assets/images/people/grantees/plebhash.png
programs:
  - program: grants
    name: Grants
    organization: Vinteum
    role:
      EN: Grantee
      BR: Bolsista
    status: current
    work:
      EN: Stratum V2
      BR: Stratum V2
    href: /programs/grants
focus:
  - Mining
  - Stratum V2
  - Rust
links:
  - label: GitHub
    href: 'https://github.com/plebhash'
    icon: github
  - label: X
    href: 'https://x.com/plebhash'
    icon: twitter
  - label: Website
    href: 'https://plebhash.github.io'
    icon: website
projects:
  - name: Stratum V2 Apps
    href: 'https://github.com/stratum-mining/sv2-apps'
    description:
      EN: Stratum V2 pool and miner applications
      BR: Aplicações Stratum V2 para pools e mineradores.
    contribution:
      EN: Contributed 2 merged pull requests.
      BR: Contribuição por meio de 2 pull requests integrados.
contributions:
  - id: github-stratum-mining-sv2-apps-986
    title:
      EN: >-
        JDC absorbs missing-txs refusals; JDS caps lost-transaction rounds at
        three and logs every answered declaration
      BR: >-
        JDC absorbs missing-txs refusals; JDS caps lost-transaction rounds at
        three and logs every answered declaration
    date: '2026-11-06'
    source: 'stratum-mining/sv2-apps · #986'
    type: PR
    href: 'https://github.com/stratum-mining/sv2-apps/pull/986'
    description:
      EN: Lets the client discard a refused declaration without dropping pool/server connections,
        caps lost-transaction retry rounds at three and logs declaration outcomes.
      BR: Permite que o cliente descarte uma declaração recusada sem derrubar conexões com
        pool e servidor, limita a três as rodadas de novas tentativas para transações perdidas
        e registra os resultados das declarações.
  - id: github-stratum-mining-sv2-apps-977
    title:
      EN: 'fix(jd-server): ask again for transactions the node lost between rounds'
      BR: 'fix(jd-server): ask again for transactions the node lost between rounds'
    date: '2026-11-05'
    source: 'stratum-mining/sv2-apps · #977'
    type: PR
    href: 'https://github.com/stratum-mining/sv2-apps/pull/977'
    description:
      EN: Requests transactions again when they disappear from the node’s mempool between
        validation rounds.
      BR: Solicita novamente transações que desaparecem do mempool do nó entre rodadas de
        validação.
  - id: plebhash-reusable-job-declaration
    title:
      EN: Reusable job declaration and language bindings
      BR: Declaração de jobs reutilizável e bindings
    source: Vinteum · 2026
    href: /assets/files/Vinteum-Year-Four-Report-2026.pdf
    description:
      EN: Connected the Stratum V2 reference implementation to Bitcoin Core, led extraction
        of the Job Declarator Server into the reusable jd_server_sv2 library, and developed
        sv2-uniffi bindings for C++ and Python. The library is designed to let pools integrate
        the Job Declaration Protocol without depending on Core IPC.
      BR: Conectou a implementação de referência do Stratum V2 ao Bitcoin Core, liderou
        a extração do Job Declarator Server para a biblioteca reutilizável jd_server_sv2
        e desenvolveu bindings C++ e Python com sv2-uniffi. A biblioteca foi projetada para
        permitir a integração do Job Declaration Protocol por pools sem dependência do IPC
        do Core.
    type: Tooling
updatedAt: '2026-11-17'
---
## EN

plebhash develops infrastructure for Stratum V2 adoption. His work connects the reference implementation to Bitcoin Core, makes job declaration reusable for pools and improves missing-transaction recovery in the Stratum V2 applications.

## PT

plebhash desenvolve infraestrutura para a adoção do Stratum V2. Seu trabalho conecta a implementação de referência ao Bitcoin Core, torna o protocolo de declaração de jobs reutilizável por pools e melhora a recuperação de transações ausentes nas aplicações Stratum V2.
