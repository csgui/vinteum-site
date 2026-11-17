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
  - id: github-stratum-mining-sv2-apps-977
    title:
      EN: 'fix(jd-server): ask again for transactions the node lost between rounds'
      BR: 'fix(jd-server): ask again for transactions the node lost between rounds'
    date: '2026-11-05'
    source: 'stratum-mining/sv2-apps · #977'
    type: PR
    href: 'https://github.com/stratum-mining/sv2-apps/pull/977'
updatedAt: '2026-11-17'
---
## EN

plebhash develops infrastructure for Stratum V2 adoption. Vinteum’s [year-four report](/assets/files/Vinteum-Year-Four-Report-2026.pdf) documents his work connecting the reference implementation to Bitcoin Core, leading the extraction of the Job Declarator Server into the reusable jd_server_sv2 library, and developing sv2-uniffi bindings for C++ and Python. The library work is designed to let pools integrate the Job Declaration Protocol without depending on Core IPC.

His merged [missing-transaction recovery change](https://github.com/stratum-mining/sv2-apps/pull/977) handles transactions disappearing from the node’s mempool between validation rounds. A [follow-up](https://github.com/stratum-mining/sv2-apps/pull/986) lets the client discard a refused declaration without dropping its pool/server connections, bounds retry rounds and adds declaration-outcome logging.

## PT

plebhash desenvolve infraestrutura para a adoção do Stratum V2. O [relatório do quarto ano da Vinteum](/assets/files/Vinteum-Year-Four-Report-2026.pdf) documenta seu trabalho conectando a implementação de referência ao Bitcoin Core, liderando a extração do Job Declarator Server para a biblioteca reutilizável jd_server_sv2 e desenvolvendo bindings C++ e Python com sv2-uniffi. A biblioteca foi projetada para permitir a integração do Job Declaration Protocol por pools sem dependência do IPC do Core.

Sua [mudança de recuperação de transações ausentes](https://github.com/stratum-mining/sv2-apps/pull/977), já integrada, trata transações que desaparecem do mempool do nó entre rodadas de validação. Uma [mudança complementar](https://github.com/stratum-mining/sv2-apps/pull/986) permite descartar uma declaração recusada sem derrubar as conexões com pool e servidor, limita as rodadas de novas tentativas e registra os resultados das declarações.