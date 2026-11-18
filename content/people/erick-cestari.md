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
      BR: Grantee
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
affiliations:
  - organization: Lightning Labs
    role:
      EN: Security engineering intern
      BR: Estagiário de engenharia de segurança
    status: past
    start: '2026-03'
    end: '2026-06'
    href: 'https://lightning.engineering/'
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
projects:
  - name: Bitcoinfuzz
    href: 'https://github.com/bitcoinfuzz/bitcoinfuzz'
    description:
      EN: Differential fuzzing of Bitcoin protocol implementations and libraries.
      BR: >-
        Fuzzing diferencial de implementações e bibliotecas do protocolo
        Bitcoin.
    contribution:
      EN: Maintains and extends cross-implementation testing, reviews contributions and investigates
        disagreements to distinguish implementation bugs from protocol ambiguities. His work broadens
        Bitcoin and Lightning coverage and keeps known differences from obscuring new findings.
      BR: Mantém e amplia os testes entre implementações, revisa contribuições e investiga divergências
        para distinguir bugs de ambiguidades no protocolo. Seu trabalho expande a cobertura de Bitcoin
        e Lightning e evita que diferenças conhecidas ocultem novas descobertas.
  - name: Smite
    href: 'https://github.com/lnfuzz/smite'
    description:
      EN: Snapshot fuzzing for the Bitcoin Lightning Network.
      BR: Fuzzing baseado em snapshots para a Lightning Network.
    contribution:
      EN: Develops the protocol and testing infrastructure needed to explore Lightning channel behavior
        with snapshot fuzzing. His work connects structured test scenarios and coverage improvements
        to investigating crashes and reporting implementation defects upstream.
      BR: Desenvolve a infraestrutura de protocolo e testes para explorar o comportamento de canais
        Lightning com fuzzing baseado em snapshots. Seu trabalho conecta cenários estruturados e
        melhorias de cobertura à investigação de crashes e ao relato de defeitos aos projetos de origem.
  - name: Fuzzamoto
    href: 'https://github.com/oss-garage/fuzzamoto'
    description:
      EN: Full-node fuzzing for Bitcoin protocol implementations.
      BR: Fuzzing de nós completos de implementações do protocolo Bitcoin.
    contribution:
      EN: Contributes to transport support and reusable testing infrastructure so fuzzing scenarios can
        exercise Bitcoin Core through both legacy and BIP324 encrypted connections, extending protocol
        coverage beyond isolated library tests.
      BR: Contribui para o suporte a transportes e a infraestrutura reutilizável de testes para que
        cenários de fuzzing exercitem o Bitcoin Core por conexões legadas e criptografadas com BIP324,
        ampliando a cobertura do protocolo além dos testes isolados de bibliotecas.
contributions:
  - id: github-eclair-3385
    title:
      EN: Report missing balance validation in Eclair splicing
      BR: Relatar ausência de validação de saldo no splicing do Eclair
    date: '2026-09-25'
    source: 'ACINQ/eclair · #3385'
    type: Research
    href: 'https://github.com/ACINQ/eclair/issues/3385'
    description:
      EN: Found with Smite that Eclair acknowledges an excessive splice-out before aborting later,
        rather than rejecting it as specified. Reported upstream as a protocol-compliance issue.
      BR: Identificou com o Smite que o Eclair aceita inicialmente uma retirada excessiva via splicing
        e só depois aborta, em vez de rejeitá-la conforme a especificação. Relatou a divergência ao projeto.
  - id: github-lightning-9492
    title:
      EN: Report unchecked output amounts in Core Lightning
      BR: Relatar valores de saída não validados no Core Lightning
    date: '2026-09-10'
    source: 'ElementsProject/lightning · #9492'
    type: Research
    href: 'https://github.com/ElementsProject/lightning/issues/9492'
    description:
      EN: Found with Smite that missing amount checks in interactive transaction handling could crash
        channel-related daemons. Reported the defect, which was subsequently fixed upstream.
      BR: Identificou com o Smite que a falta de validação de valores em transações interativas podia
        causar crashes em daemons de canais. Relatou o defeito, que depois foi corrigido pelo projeto.
  - id: github-lightning-9483
    title:
      EN: Fix uninitialized channel state in Core Lightning
      BR: Corrigir estado de canal não inicializado no Core Lightning
    date: '2026-09-14'
    source: 'ElementsProject/lightning · #9483'
    type: PR
    href: 'https://github.com/ElementsProject/lightning/pull/9483'
    description:
      EN: Authored the merged initialization fix for a flag governing unexpected transaction signatures.
        Discovered with Smite, it removes undefined behavior from peer-message handling.
      BR: Criou a correção integrada de inicialização de uma flag que controla assinaturas de transações
        inesperadas. Descoberta com o Smite, elimina comportamento indefinido no tratamento de mensagens.
  - id: github-bitcoinfuzz-bitcoinfuzz-708
    title:
      EN: Handle known btcd and rust-bitcoin P2P divergences
      BR: Tratar divergências P2P conhecidas entre btcd e rust-bitcoin
    date: '2026-11-13'
    source: 'bitcoinfuzz/bitcoinfuzz · #708'
    type: PR
    href: https://github.com/bitcoinfuzz/bitcoinfuzz/pull/708
    description:
      EN: Accounts for known parsing differences so differential tests can focus on unexpected behavior.
      BR: Considera diferenças conhecidas de parsing para que os testes diferenciais possam focar em comportamentos
        inesperados.
  - id: github-lnfuzz-smite-170
    title:
      EN: 'smite: add BOLT 4 onion routing (Sphinx)'
      BR: 'smite: add BOLT 4 onion routing (Sphinx)'
    date: '2026-11-05'
    source: 'lnfuzz/smite · #170'
    type: PR
    href: https://github.com/lnfuzz/smite/pull/170
  - id: github-oss-garage-fuzzamoto-92
    title:
      EN: Add BIP324 v2 transport support to Fuzzamoto
      BR: Adicionar transporte v2 BIP324 ao Fuzzamoto
    date: '2026-01-09'
    source: 'oss-garage/fuzzamoto · #92'
    type: PR
    href: https://github.com/oss-garage/fuzzamoto/pull/92
    description:
      EN: Merged encrypted P2P transport support, including initiator/responder roles and a feature flag
        for fuzzing Bitcoin Core over v2 connections.
      BR: Adicionou suporte integrado ao transporte P2P criptografado, com papéis de iniciador e respondente
        e uma flag para fuzzing do Bitcoin Core por conexões v2.
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
media:
  - id: youtube-LEaZI1OQpK0
    title:
      EN: 'Differential Fuzzing | Erick Cestari | bitcoin++ exploits edition | Feb 2026 Florianópolis, Brazil'
      BR: 'Differential Fuzzing | Erick Cestari | bitcoin++ exploits edition | Feb 2026 Florianópolis, Brazil'
    source: bitcoin++
    href: 'https://www.youtube.com/watch?v=LEaZI1OQpK0'
    mediaType: video
    thumbnail: /assets/images/people/media/erick-LEaZI1OQpK0.jpg
  - id: youtube-vGFdaVoa3BE
    title:
      EN: Differential Fuzzing on Lightning Network - Erick Cestari
      BR: Differential Fuzzing on Lightning Network - Erick Cestari
    source: bitcoin++
    href: 'https://www.youtube.com/watch?v=vGFdaVoa3BE'
    mediaType: video
    thumbnail: /assets/images/people/media/erick-vGFdaVoa3BE.jpg
updatedAt: '2026-11-18'
---
## EN

Erick Cestari is a Bitcoin and Lightning security researcher who maintains Bitcoinfuzz and contributes to Smite. Through fuzzing and protocol testing, he has reported bugs and vulnerabilities affecting Lightning implementations, including Core Lightning and Eclair, and helps develop reusable open-source testing infrastructure.

## PT

Erick Cestari é pesquisador de segurança de Bitcoin e Lightning, mantenedor do Bitcoinfuzz e contribuidor do Smite. Com fuzzing e testes de protocolo, relatou bugs e vulnerabilidades em implementações Lightning, incluindo Core Lightning e Eclair, e contribui para desenvolver infraestrutura reutilizável de testes de código aberto.
