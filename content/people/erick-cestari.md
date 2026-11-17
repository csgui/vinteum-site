---
name: Erick Cestari
image: /assets/images/people/fellows/erickcestari.jpg
programs:
  - program: fellowship
    name: Fellowship
    organization: Vinteum
    role:
      EN: Fellow
      BR: Fellow
    status: past
    end: '2025-06'
    start: '2025-03'
    cohort: 1
    work:
      EN: Bitcoinfuzz / Smite
      BR: Bitcoinfuzz / Smite
    href: /programs/fellowship
  - program: grants
    name: Grants
    organization: Vinteum
    role:
      EN: Grantee
      BR: Bolsista
    status: current
    work:
      EN: Bitcoinfuzz / Smite
      BR: Bitcoinfuzz / Smite
    href: /programs/grants
  - program: bitcoin-dev-launchpad
    name: Bitcoin Dev Launchpad
    organization: Vinteum
    role:
      EN: Alumnus
      BR: Ex-participante
    status: past
    cohort: 1
    work:
      EN: Bitcoinfuzz / Smite
      BR: Bitcoinfuzz / Smite
    href: /programs/bitcoin-dev-launchpad
    fundedBy: Vinteum
focus:
  - Fuzzing
  - Lightning
  - Differential Testing
links:
  - label: Website
    href: 'https://erickcestari.dev/'
    icon: website
  - label: GitHub
    href: 'https://github.com/erickcestari'
    icon: github
  - label: X
    href: 'https://x.com/iamflops'
    icon: twitter
  - label: Blog
    href: 'https://erickcestari.dev/'
    icon: blog
projects:
  - name: Bitcoinfuzz
    href: 'https://github.com/bitcoinfuzz/bitcoinfuzz'
    description:
      EN: Differential fuzzing of Bitcoin protocol implementations and libraries.
      BR: >-
        Fuzzing diferencial de implementações e bibliotecas do protocolo
        Bitcoin.
    contribution:
      EN: >-
        Improves differential tests and the handling of known divergences
        between implementations.
      BR: >-
        Aprimora testes diferenciais e o tratamento de divergências conhecidas
        entre implementações.
  - name: Smite
    href: 'https://github.com/lnfuzz/smite'
    description:
      EN: Snapshot fuzzing for the Bitcoin Lightning Network.
      BR: Fuzzing baseado em snapshots para a Lightning Network.
    contribution:
      EN: Implements BOLT 4 onion routing to exercise Lightning protocol behavior.
      BR: >-
        Implementa roteamento onion de BOLT 4 para exercitar o comportamento do
        protocolo Lightning.
contributions:
  - id: github-bitcoinfuzz-bitcoinfuzz-708
    title:
      EN: Handle known btcd and rust-bitcoin P2P divergences
      BR: Tratar divergências P2P conhecidas entre btcd e rust-bitcoin
    date: '2026-11-13'
    source: 'bitcoinfuzz/bitcoinfuzz · #708'
    type: PR
    href: 'https://github.com/bitcoinfuzz/bitcoinfuzz/pull/708'
    description:
      EN: >-
        Accounts for known parsing differences so differential tests can focus
        on unexpected behavior.
      BR: >-
        Considera diferenças conhecidas de parsing para que os testes
        diferenciais possam focar em comportamentos inesperados.
  - id: github-lnfuzz-smite-170
    title:
      EN: 'smite: add BOLT 4 onion routing (Sphinx)'
      BR: 'smite: add BOLT 4 onion routing (Sphinx)'
    date: '2026-11-05'
    source: 'lnfuzz/smite · #170'
    type: PR
    href: 'https://github.com/lnfuzz/smite/pull/170'
writing:
  - id: personal-blog-eclair-oom-pending-channels
    title:
      EN: Crashing an eclair node with unfunded channels
      BR: Crashing an eclair node with unfunded channels
    date: '2026-09-30'
    source: erickcestari.dev
    href: 'https://erickcestari.dev/blog/eclair-oom-pending-channels/'
  - id: personal-blog-ping-flood-oom
    title:
      EN: Crashing a Lightning node with a flood of pings
      BR: Crashing a Lightning node with a flood of pings
    date: '2026-08-25'
    source: erickcestari.dev
    href: 'https://erickcestari.dev/blog/ping-flood-oom/'
updatedAt: '2026-11-17'
---
## EN

Erick Cestari works on Bitcoinfuzz and Smite, testing Bitcoin and Lightning implementations through differential and snapshot fuzzing. His contributions include P2P message testing and BOLT 4 onion routing.

Vinteum's [2026 annual report](/assets/files/Vinteum-Year-Four-Report-2026.pdf) documents Erick's role as a bitcoinfuzz maintainer and his work comparing Bitcoin and Lightning implementations. His targets include Lightning P2P parsing, BOLT 4 onion decoding, Schnorr signature verification and PSBT parsing. This work also involves reviewing other contributors' changes and investigating whether disagreements reflect implementation defects or ambiguities in protocol requirements.

His snapshot-fuzzing work on Smite is also part of his undergraduate thesis. He has improved fuzz harnesses, corpus management and CI across Bitcoin projects and added BIP324 encrypted-transport support in Fuzzamoto, extending node-level testing beyond legacy transport.

## PT

Erick Cestari trabalha no Bitcoinfuzz e no Smite, testando implementações de Bitcoin e Lightning com fuzzing diferencial e baseado em snapshots. Suas contribuições incluem testes de mensagens P2P e roteamento onion de BOLT 4.

O [relatório anual de 2026 da Vinteum](/assets/files/Vinteum-Year-Four-Report-2026.pdf) documenta a atuação de Erick como mantenedor do bitcoinfuzz e seu trabalho de comparação entre implementações de Bitcoin e Lightning. Seus alvos incluem parsing de mensagens P2P Lightning, decodificação onion de BOLT 4, verificação de assinaturas Schnorr e parsing de PSBTs. O trabalho também envolve revisar mudanças de outros contribuidores e investigar se divergências indicam defeitos nas implementações ou ambiguidades nos requisitos do protocolo.

Seu trabalho com fuzzing baseado em snapshots no Smite também faz parte do trabalho de conclusão de curso. Melhorou harnesses, gerenciamento de corpus e CI em projetos Bitcoin e adicionou suporte ao transporte criptografado BIP324 no Fuzzamoto, ampliando os testes de nós além do transporte legado.