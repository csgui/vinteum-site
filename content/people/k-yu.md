---
name: K-YU
image: /assets/images/people/fellows/caioueda.jpg
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
      EN: Bitcoin Core / Bitcoinfuzz
      BR: Bitcoin Core / Bitcoinfuzz
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
      EN: Bitcoinfuzz
      BR: Bitcoinfuzz
    href: /programs/bitcoin-dev-launchpad
    fundedBy: Vinteum
focus:
  - Bitcoin Core
  - Fuzzing
  - Testing
links:
  - label: GitHub
    href: 'https://github.com/KY-U'
    icon: github
  - label: X
    href: 'https://x.com/KYU2029255'
    icon: twitter
  - label: LinkedIn
    href: 'https://www.linkedin.com/in/caio-ueda-sampaio-23511b253/'
    icon: linkedin
projects:
  - name: Bitcoinfuzz Corpora
    href: 'https://github.com/bitcoinfuzz/corpora'
    description:
      EN: Fuzz corpora for bitcoinfuzz
      BR: Corpus de teste para fuzzing diferencial no Bitcoinfuzz.
    contribution:
      EN: Contributed one merged pull request.
      BR: Contribuição por meio de um pull request integrado.
  - name: Bitcoin Core
    href: 'https://github.com/bitcoin/bitcoin'
    description:
      EN: Bitcoin Core integration/staging tree
      BR: 'Bitcoin Core: implementação de nó e carteira Bitcoin.'
    contribution:
      EN: Contributed one merged pull request.
      BR: Contribuição por meio de um pull request integrado.
contributions:
  - id: github-bitcoinfuzz-corpora-81
    title:
      EN: Add kernel_transaction_check corpus
      BR: Add kernel_transaction_check corpus
    date: '2026-11-13'
    source: 'bitcoinfuzz/corpora · #81'
    type: PR
    href: 'https://github.com/bitcoinfuzz/corpora/pull/81'
  - id: github-bitcoin-bitcoin-36686
    title:
      EN: 'test: cover cumulative input value range in CheckTxInput tests.'
      BR: 'test: cover cumulative input value range in CheckTxInput tests.'
    date: '2026-11-04'
    source: 'bitcoin/bitcoin · #36686'
    type: PR
    href: 'https://github.com/bitcoin/bitcoin/pull/36686'
updatedAt: '2026-11-17'
---
## EN

K-YU has contributed to Bitcoinfuzz Corpora, Bitcoin Core. Selected work includes Bitcoin Core validation tests and differential-fuzzing corpora.

In the [year-four report](/assets/files/Vinteum-Year-Four-Report-2026.pdf), covering August 2025–August 2026, K-YU's work progressed from extending fuzzing coverage to investigating how independent Bitcoin implementations disagree. He completed the libbitcoin-system integration in bitcoinfuzz, examining script verification, transaction validation, address parsing and block deserialization. The work included upstream fixes and improvements to corpora, CI and documentation.

As that integration matured, he began studying Bitcoin Core's build system, tests and development workflow and reviewing changes involving PSBTv2, BitcoinKernel bindings and transaction encapsulation. His differential-fuzzing work involves investigating disagreements to distinguish genuine bugs from permissible implementation differences.

## PT

K-YU tem contribuições em Bitcoinfuzz Corpora, Bitcoin Core. Seu trabalho inclui testes de validação no Bitcoin Core e corpus para fuzzing diferencial.

No [relatório do quarto ano](/assets/files/Vinteum-Year-Four-Report-2026.pdf), que cobre agosto de 2025 a agosto de 2026, o trabalho de K-YU avançou da ampliação da cobertura de fuzzing para a investigação de divergências entre implementações independentes de Bitcoin. Ele concluiu a integração de libbitcoin-system ao bitcoinfuzz, examinando verificação de scripts, validação de transações, interpretação de endereços e desserialização de blocos. O trabalho incluiu correções upstream e melhorias em corpora, CI e documentação.

Com o amadurecimento dessa integração, passou a estudar o sistema de compilação, os testes e o fluxo de desenvolvimento do Bitcoin Core e a revisar mudanças envolvendo PSBTv2, bindings de BitcoinKernel e encapsulamento de transações. Seu trabalho de fuzzing diferencial envolve investigar divergências para distinguir bugs reais de diferenças permitidas de implementação.