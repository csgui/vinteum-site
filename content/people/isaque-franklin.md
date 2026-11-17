---
name: Isaque Franklin
image: /assets/images/people/fellows/isaquefranklin.jpg
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
      EN: libsecp256k1
      BR: libsecp256k1
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
      EN: Studying Bitcoin cryptography
      BR: Estudando criptografia Bitcoin
    href: /programs/bitcoin-dev-launchpad
    fundedBy: Vinteum
focus:
  - Cryptography
  - Silent Payments
links:
  - label: GitHub
    href: 'https://github.com/IsaqueFranklin'
    icon: github
  - label: X
    href: 'https://x.com/IsaqueFranklin0'
    icon: twitter
  - label: Website
    href: 'https://www.harlock.xyz/'
    icon: website
  - label: Blog
    href: 'https://www.harlock.xyz/'
    icon: blog
projects:
  - name: odin-secp256k1
    href: 'https://github.com/odin-bitcoin/odin-secp256k1'
    description:
      EN: 'Odin language bindings for Bitcoin secp256k1 library. '
      BR: Bindings da biblioteca secp256k1 para a linguagem Odin.
    contribution:
      EN: Contributed one merged pull request.
      BR: Contribuição por meio de um pull request integrado.
  - name: WalletWasabi
    href: 'https://github.com/WalletWasabi/WalletWasabi'
    description:
      EN: >-
        Open-source, non-custodial, privacy preserving Bitcoin wallet for
        Windows, Linux, and Mac.
      BR: Carteira Bitcoin open source com foco em privacidade.
    contribution:
      EN: Contributed one merged pull request.
      BR: Contribuição por meio de um pull request integrado.
contributions:
  - id: github-odin-bitcoin-odin-secp256k1-4
    title:
      EN: 'add: Makefile to clone & build libsecp submodule'
      BR: 'add: Makefile to clone & build libsecp submodule'
    date: '2026-08-29'
    source: 'odin-bitcoin/odin-secp256k1 · #4'
    type: PR
    href: 'https://github.com/odin-bitcoin/odin-secp256k1/pull/4'
  - id: github-WalletWasabi-WalletWasabi-14639
    title:
      EN: Add k_max limit check for silent payments specified in BIP 352
      BR: Add k_max limit check for silent payments specified in BIP 352
    date: '2026-06-05'
    source: 'WalletWasabi/WalletWasabi · #14639'
    type: PR
    href: 'https://github.com/WalletWasabi/WalletWasabi/pull/14639'
writing:
  - id: personal-blog-understanding-libsecp256k1s-ecdh-module
    title:
      EN: Understanding libsecp256k1's ECDH Module
      BR: Understanding libsecp256k1's ECDH Module
    source: harlock.xyz
    href: 'https://www.harlock.xyz/understanding-libsecp256k1s-ecdh-module'
  - id: personal-blog-intuition-about-the-glv-endomorphism-on-secp256k1
    title:
      EN: Intuition about the GLV endomorphism on secp256k1
      BR: Intuition about the GLV endomorphism on secp256k1
    source: harlock.xyz
    href: 'https://www.harlock.xyz/intuition-about-the-glv-endomorphism-on-secp256k1'
updatedAt: '2026-11-17'
---
## EN

Isaque Franklin has contributed to odin-secp256k1, WalletWasabi. Selected work includes secp256k1 bindings and Silent Payments validation.

The [2026 annual report](/assets/files/Vinteum-Year-Four-Report-2026.pdf) describes Isaque's research-oriented trajectory into Bitcoin cryptography, guided by Edil Medeiros. His libsecp256k1 study covers field and group operations, modular inversion, safeGCD and exhaustive testing, connecting mathematical foundations to the implementation choices in a production cryptographic library. He also produced technical writing from that study.

A separate strand involves working through the Nested MuSig2 paper and reviewing an implementation in a libsecp256k1 fork. Alongside that research, he worked on the Wasabi Wallet BIP 352 k_max check and experimented with Odin bindings.

## PT

Isaque Franklin tem contribuições em odin-secp256k1, WalletWasabi. Seu trabalho inclui bindings de secp256k1 e validação de Silent Payments.

O [relatório anual de 2026](/assets/files/Vinteum-Year-Four-Report-2026.pdf) descreve a trajetória de Isaque na pesquisa em criptografia Bitcoin, orientada por Edil Medeiros. Seu estudo de libsecp256k1 abrange operações de campo e de grupo, inversão modular, safeGCD e testes exaustivos, conectando fundamentos matemáticos às escolhas de implementação de uma biblioteca criptográfica de produção. Também produziu textos técnicos a partir desse estudo.

Outra frente envolve a leitura do artigo de Nested MuSig2 e a revisão de uma implementação em um fork de libsecp256k1. Em paralelo, trabalhou na verificação de k_max do BIP 352 no Wasabi Wallet e experimentou bindings para Odin.