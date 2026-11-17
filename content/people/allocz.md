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
      EN: Contributed one merged pull request. Improved the RPC integration-test harness and debug-event
        assertions to test changes in node behavior.
      BR: Contribuiu com um pull request integrado. Melhorou o ambiente de testes de integração
        RPC e as verificações de eventos de depuração para testar mudanças no comportamento do nó.
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
  - id: allocz-btcd-storage-ibd
    title:
      EN: btcd initial block download and storage
      BR: Download inicial e armazenamento do btcd
    source: Vinteum · 2026 annual report
    type: Research
    href: /assets/files/Vinteum-Year-Four-Report-2026.pdf
    description:
      EN: Investigated resource usage during initial block download. UTXO-cache misses led to
        skip_prevout_fetch to avoid unnecessary disk reads; a separate investigation led to depth-based
        pruning of the spend journal.
      BR: Investigou o consumo de recursos no download inicial de blocos. Falhas de acesso ao
        cache de UTXOs levaram a skip_prevout_fetch para evitar leituras desnecessárias em disco;
        outra investigação levou à poda do spend journal por profundidade.
  - id: allocz-go-secp256k1-backends
    title:
      EN: Portable Go secp256k1 and native-backend experiments
      BR: secp256k1 portátil em Go e experimentos com backend nativo
    source: Vinteum · 2026 annual report
    type: Research
    href: /assets/files/Vinteum-Year-Four-Report-2026.pdf
    description:
      EN: Worked on a portable Go secp256k1 library with an optional libsecp256k1 backend when
        CGO is available. Substitution into btcd was experimental.
      BR: Trabalhou em uma biblioteca secp256k1 portátil em Go, com backend opcional de libsecp256k1
        quando CGO está disponível. A substituição da biblioteca no btcd era experimental.
updatedAt: '2026-11-17'
---
## EN

Allocz contributes to btcd and Go cryptography libraries. His work covers node storage, RPC reliability and testing, alongside experiments with portable secp256k1 implementations and optional native cryptographic backends.

## PT

Allocz contribui para o btcd e bibliotecas de criptografia em Go. Seu trabalho abrange armazenamento do nó, confiabilidade do RPC e testes, além de experimentos com implementações portáteis de secp256k1 e backends criptográficos nativos opcionais.
