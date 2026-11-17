---
name: Allocz
image: /assets/images/people/fellows/allocz.jpg
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
      EN: btcd
      BR: btcd
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
      EN: btcd
      BR: btcd
    href: /programs/bitcoin-dev-launchpad
    fundedBy: Vinteum
focus:
  - Go
  - Bitcoin Nodes
  - Cryptography
links:
  - label: GitHub
    href: 'https://github.com/allocz'
    icon: github
projects:
  - name: btcd
    href: 'https://github.com/btcsuite/btcd'
    description:
      EN: An alternative full node bitcoin implementation written in Go (golang)
      BR: Implementação de nó Bitcoin em Go.
    contribution:
      EN: Contributed one merged pull request.
      BR: Contribuição por meio de um pull request integrado.
  - name: secp256k1 (Go)
    href: 'https://github.com/decred/dcrd'
    description:
      EN: Decred daemon in Go (golang).
      BR: >-
        Repositório que inclui a biblioteca secp256k1 em Go usada por projetos
        Bitcoin.
    contribution:
      EN: Contributed one merged pull request.
      BR: Contribuição por meio de um pull request integrado.
contributions:
  - id: github-btcsuite-btcd-2600
    title:
      EN: 'btcd: fix getblock panic triggered by rpc call'
      BR: 'btcd: fix getblock panic triggered by rpc call'
    date: '2026-09-11'
    source: 'btcsuite/btcd · #2600'
    type: PR
    href: 'https://github.com/btcsuite/btcd/pull/2600'
  - id: github-decred-dcrd-3714
    title:
      EN: 'secp256k1: Reduce allocations.'
      BR: 'secp256k1: Reduce allocations.'
    date: '2026-07-06'
    source: 'decred/dcrd · #3714'
    type: PR
    href: 'https://github.com/decred/dcrd/pull/3714'
updatedAt: '2026-11-17'
---
## EN

Allocz has contributed to btcd, secp256k1 (Go). Selected work includes btcd RPC robustness and secp256k1 performance.

Vinteum's [2026 annual report](/assets/files/Vinteum-Year-Four-Report-2026.pdf) documents allocz's investigation of btcd's initial block download, connecting resource usage to specific storage mechanisms. UTXO-cache misses led to the skip_prevout_fetch optimization to avoid unnecessary disk reads; a separate investigation led to depth-based pruning of the spend journal. He also improved the RPC integration-test harness and debug-event assertions, so changes in node behavior can be tested more directly.

Allocz also worked on a portable Go secp256k1 library with an optional libsecp256k1 backend when CGO is available. Substituting this library into btcd remained an experiment, separate from an upstream backend migration.

## PT

Allocz tem contribuições em btcd, secp256k1 (Go). Seu trabalho inclui robustez do RPC do btcd e desempenho de secp256k1.

O [relatório anual de 2026 da Vinteum](/assets/files/Vinteum-Year-Four-Report-2026.pdf) documenta a investigação de allocz sobre o download inicial de blocos do btcd, relacionando o consumo de recursos a mecanismos específicos de armazenamento. Falhas de acesso ao cache de UTXOs levaram à otimização skip_prevout_fetch para evitar leituras desnecessárias em disco; outra investigação levou à poda do spend journal por profundidade. Também melhorou o ambiente de testes de integração RPC e as verificações de eventos de depuração, permitindo testar mudanças no comportamento do nó de forma mais direta.

Allocz também trabalhou em uma biblioteca secp256k1 portátil em Go, com backend opcional de libsecp256k1 quando CGO está disponível. A substituição da biblioteca criptográfica do btcd permaneceu um experimento, separado de uma migração integrada ao projeto.