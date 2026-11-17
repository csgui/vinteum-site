---
name: Moises Pompilio
image: /assets/images/people/fellows/moisespompilio.jpg
programs:
  - program: fellowship
    name: Fellowship
    organization: Vinteum
    role:
      EN: Fellow
      BR: Fellow
    status: past
    end: '2025-11'
    start: '2025-03'
    cohort: 1
    work:
      EN: Floresta
      BR: Floresta
    href: /programs/fellowship
  - program: bitcoin-dev-launchpad
    name: Bitcoin Dev Launchpad
    organization: Vinteum
    role:
      EN: Alumnus
      BR: Ex-participante
    status: past
    cohort: 1
    work:
      EN: Floresta
      BR: Floresta
    href: /programs/bitcoin-dev-launchpad
    fundedBy: OpenSats
focus:
  - Bitcoin Nodes
  - Rust
  - Utreexo
links:
  - label: GitHub
    href: 'https://github.com/moisesPompilio'
    icon: github
  - label: X
    href: 'https://x.com/maicomjt'
    icon: twitter
projects:
  - name: Floresta
    href: 'https://github.com/getfloresta/Floresta'
    description:
      EN: 'A lightweight and embeddable Bitcoin client, built for sovereignty.'
      BR: Cliente Bitcoin compacto e integrável em outras aplicações.
    contribution:
      EN: Contributed 2 merged pull requests.
      BR: Contribuição por meio de 2 pull requests integrados.
contributions:
  - id: github-getfloresta-Floresta-1376
    title:
      EN: 'refactor(wire): separate block and proof error handling'
      BR: 'refactor(wire): separate block and proof error handling'
    date: '2026-11-03'
    source: 'getfloresta/Floresta · #1376'
    type: PR
    href: 'https://github.com/getfloresta/Floresta/pull/1376'
  - id: github-getfloresta-Floresta-1375
    title:
      EN: 'refactor(chain): separate block structure and BIP34 validation'
      BR: 'refactor(chain): separate block structure and BIP34 validation'
    date: '2026-11-02'
    source: 'getfloresta/Floresta · #1375'
    type: PR
    href: 'https://github.com/getfloresta/Floresta/pull/1375'
updatedAt: '2026-11-17'
---
## EN

Moises Pompilio contributes to Floresta, a lightweight Bitcoin node using Utreexo. His merged validation refactor separates block-structure checks (Merkle roots, witness commitments and block weight) from the height-dependent BIP34 coinbase check, with reusable fixtures and tests for invalid blocks. A companion change separates errors attributable to the block sender from Utreexo-proof errors, and adds chain-mocked tests for peer punishment and request-state cleanup. See [block validation](https://github.com/getfloresta/Floresta/pull/1375) and [wire error handling](https://github.com/getfloresta/Floresta/pull/1376).

In Vinteum’s [August 2026 alumni retrospective](https://www.vinteum.org/blog/bitcoin-dev-launchpad-first-cohort-alumni-outlook), he describes moving from the first Bitcoin Dev Launchpad cohort into a fellowship testing LDK-node interoperability, then expanding his Floresta work into RPCs, Electrum and wallets with OpenSats support.

## PT

Moises Pompilio contribui para o Floresta, um nó Bitcoin leve que utiliza Utreexo. Seu refactor integrado separa verificações estruturais dos blocos (raízes de Merkle, compromissos de witness e peso) da verificação de altura da coinbase exigida pelo BIP34, com fixtures reutilizáveis e testes de blocos inválidos. Uma mudança complementar distingue erros atribuíveis ao remetente do bloco de erros nas provas Utreexo e acrescenta testes com uma cadeia simulada para punição de peers e limpeza do estado das requisições. Veja a [validação de blocos](https://github.com/getfloresta/Floresta/pull/1375) e o [tratamento de erros de rede](https://github.com/getfloresta/Floresta/pull/1376).

Na [retrospectiva de agosto de 2026 da Vinteum](https://www.vinteum.org/blog/bitcoin-dev-launchpad-first-cohort-alumni-outlook), ele descreve a passagem da primeira turma do Bitcoin Dev Launchpad ao fellowship, com testes de interoperabilidade no LDK-node, e depois a ampliação do trabalho no Floresta para RPCs, Electrum e carteiras, com apoio da OpenSats.
