---
name: Vinicius Cestari
image: /assets/images/people/fellows/viniciuscestari.jpg
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
      EN: Bitcoin Core
      BR: Bitcoin Core
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
      EN: Bitcoin Core
      BR: Bitcoin Core
    href: /programs/bitcoin-dev-launchpad
    fundedBy: Vinteum
focus:
  - Bitcoin Core
  - IPC
  - Testing
links:
  - label: GitHub
    href: 'https://github.com/viniciusCestarii'
    icon: github
  - label: X
    href: 'https://x.com/VCestarii'
    icon: twitter
  - label: Website
    href: 'https://viniciuscestari.dev/'
    icon: website
  - label: Blog
    href: 'https://viniciuscestari.dev/'
    icon: blog
projects:
  - name: libsecp256k1
    href: 'https://github.com/bitcoin-core/secp256k1'
    description:
      EN: Optimized C library for EC operations on curve secp256k1
      BR: Biblioteca C otimizada para operações na curva secp256k1.
    contribution:
      EN: Contributed one merged pull request.
      BR: Contribuição por meio de um pull request integrado.
  - name: libmultiprocess
    href: 'https://github.com/bitcoin-core/libmultiprocess'
    description:
      EN: >-
        C++ library and code generator making it easy to call functions and
        reference objects in different processes
      BR: >-
        Biblioteca C++ para chamadas de funções e referências a objetos entre
        processos.
    contribution:
      EN: Contributed one merged pull request. Worked on serialization helpers, generated
        code, process-error handling, tests and builds, alongside IPC review.
      BR: Contribuição por meio de um pull request integrado. Trabalhou em helpers de serialização,
        código gerado, tratamento de erros de processos, testes e builds, além de revisão
        de IPC.
contributions:
  - id: github-bitcoin-core-secp256k1-1972
    title:
      EN: 'tests: silentpayments: deduplicate setup code'
      BR: 'tests: silentpayments: deduplicate setup code'
    date: '2026-11-12'
    source: 'bitcoin-core/secp256k1 · #1972'
    type: PR
    href: 'https://github.com/bitcoin-core/secp256k1/pull/1972'
    description:
      EN: Consolidates repeated Silent Payments test setup into reusable helpers.
      BR: Consolida a preparação repetida dos testes de Silent Payments em helpers reutilizáveis.
  - id: github-bitcoin-core-libmultiprocess-324
    title:
      EN: 'proxy: Name threads spawned by the event loop'
      BR: 'proxy: Name threads spawned by the event loop'
    date: '2026-08-11'
    source: 'bitcoin-core/libmultiprocess · #324'
    type: PR
    href: 'https://github.com/bitcoin-core/libmultiprocess/pull/324'
    description:
      EN: Makes event-loop worker and cleanup threads distinguishable in process tools and
        logs.
      BR: Permite distinguir workers e threads de limpeza do event loop nas ferramentas
        de processos e nos logs.
  - id: vinicius-rpc-over-ipc-prototype
    title:
      EN: RPC-over-IPC prototype in the 2140 fork
      BR: Protótipo de RPC via IPC no fork 2140
    source: Vinteum · 2026
    href: /assets/files/Vinteum-Year-Four-Report-2026.pdf
    description:
      EN: Developed an RPC-over-IPC prototype in the 2140 fork that evolved toward a generic
        Cap’n Proto interface after feedback.
      BR: Desenvolveu um protótipo de RPC via IPC no fork 2140 que evoluiu, após feedback,
        para uma interface Cap’n Proto genérica.
    type: Research
writing:
  - id: personal-blog-hunting-live-mutants
    title:
      EN: Teaching an Agent to Hunt Live Mutants in Bitcoin Core
      BR: Teaching an Agent to Hunt Live Mutants in Bitcoin Core
    date: '2026-09-09'
    source: viniciuscestari.dev
    href: 'https://viniciuscestari.dev/posts/hunting-live-mutants'
  - id: personal-blog-bitcoin-core-ipc-on-the-wire
    title:
      EN: Bitcoin Core IPC on the Wire
      BR: Bitcoin Core IPC on the Wire
    date: '2026-08-14'
    source: viniciuscestari.dev
    href: 'https://viniciuscestari.dev/posts/bitcoin-core-ipc-on-the-wire'
updatedAt: '2026-11-17'
---
## EN

Vinicius Cestari contributes to Bitcoin Core infrastructure, especially interprocess communication and libmultiprocess. His work spans serialization, generated code, error handling and testing, alongside IPC review and experiments with RPC interfaces.

## PT

Vinicius Cestari contribui para a infraestrutura do Bitcoin Core, especialmente comunicação entre processos e libmultiprocess. Seu trabalho abrange serialização, código gerado, tratamento de erros e testes, além de revisão de IPC e experimentos com interfaces RPC.
