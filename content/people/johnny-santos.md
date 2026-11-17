---
name: Johnny Santos
image: /assets/images/people/grantees/johnnysantos.jpg
programs:
  - program: grants
    name: Grants
    organization: Vinteum
    role:
      EN: Grantee
      BR: Bolsista
    status: current
    work:
      EN: P2Pool V2
      BR: P2Pool V2
    href: /programs/grants
  - program: bitcoin-dev-launchpad
    name: Bitcoin Dev Launchpad
    organization: Vinteum
    role:
      EN: Alumnus
      BR: Ex-participante
    status: past
    cohort: 2
    work:
      EN: P2Pool V2
      BR: P2Pool V2
    href: /programs/bitcoin-dev-launchpad
    fundedBy: Vinteum
focus:
  - Mining
  - P2Pool V2
links:
  - label: GitHub
    href: 'https://github.com/johnnyasantoss'
    icon: github
  - label: X
    href: 'https://twitter.com/johnnyasantos'
    icon: twitter
  - label: Nostr
    href: >-
      https://njump.me/npub1j0nyf54ndc6keq80xfyeqfumn2l23e3k79f33x5jsqxnut6a8dyqp74mu0
    icon: nostr
  - label: Website
    href: 'https://johnnyasantos.com/'
    icon: website
  - label: Blog
    href: 'https://johnnyasantos.com/'
    icon: blog
projects:
  - name: P2Pool V2
    href: 'https://github.com/p2poolv2/p2poolv2'
    description:
      EN: P2Poolv2 - Rebooting P2Pool for Bitcoin
      BR: Implementação P2Pool V2 para mineração Bitcoin descentralizada.
    contribution:
      EN: Contributed 2 merged pull requests.
      BR: Contribuição por meio de 2 pull requests integrados.
contributions:
  - id: github-p2poolv2-p2poolv2-672
    title:
      EN: Use BIP323 version mask for nVersion rolling
      BR: Use BIP323 version mask for nVersion rolling
    date: '2026-10-01'
    source: 'p2poolv2/p2poolv2 · #672'
    type: PR
    href: 'https://github.com/p2poolv2/p2poolv2/pull/672'
  - id: github-p2poolv2-p2poolv2-623
    title:
      EN: Avoid non-determinism in uncle processing
      BR: Avoid non-determinism in uncle processing
    date: '2026-09-04'
    source: 'p2poolv2/p2poolv2 · #623'
    type: PR
    href: 'https://github.com/p2poolv2/p2poolv2/pull/623'
writing:
  - id: personal-blog-my-work-on-p2poolv2
    title:
      EN: What I've been up to
      BR: What I've been up to
    date: '2026-08-05'
    source: johnnyasantos.com
    href: 'https://johnnyasantos.com/blog/2026/08/05/my-work-on-p2poolv2/'
updatedAt: '2026-11-17'
---
## EN

Johnny Santos has contributed to P2Pool V2. Selected work includes P2Pool V2 mining and deterministic share processing.

The [year-four report](/assets/files/Vinteum-Year-Four-Report-2026.pdf), covering August 2025–August 2026, describes how Johnny's Bitcoin Dev Launchpad proof of concept grew into work on P2Poolv2's compact block relay. Adapting the protocol to the project's architecture required changes to synchronization, message flow and reconstruction. At the report’s cutoff, the relay implementation was approaching completion.

His work also expanded into realistic network testing: testnet nodes exposed header-sync, storage and networking problems, while a persistent deployment supported longer-running investigations. The report records container and CI improvements and bitcoin-capnp, an experiment with Bitcoin Core's Cap'n Proto interface.

## PT

Johnny Santos tem contribuições em P2Pool V2. Seu trabalho inclui mineração com P2Pool V2 e processamento determinístico de shares.

O [relatório do quarto ano](/assets/files/Vinteum-Year-Four-Report-2026.pdf), que cobre agosto de 2025 a agosto de 2026, descreve como a prova de conceito de Johnny no Bitcoin Dev Launchpad se tornou trabalho de retransmissão de blocos compactos no P2Poolv2. Adaptar o protocolo à arquitetura do projeto exigiu mudanças em sincronização, fluxo de mensagens e reconstrução. Ao final do período coberto pelo relatório, a implementação estava próxima da conclusão.

O trabalho também avançou para testes em condições de rede mais realistas: nós em testnet revelaram problemas de sincronização de cabeçalhos, armazenamento e comunicação, enquanto uma implantação persistente permitiu investigações prolongadas. O relatório registra melhorias em contêineres e CI e o bitcoin-capnp, um experimento com a interface Cap'n Proto do Bitcoin Core.