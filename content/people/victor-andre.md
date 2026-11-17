---
name: Victor André
image: /assets/images/people/fellows/victorandre.jpg
programs:
  - program: fellowship
    name: Fellowship
    organization: Vinteum
    role:
      EN: Fellow
      BR: Fellow
    status: past
    end: '2026-09'
    start: '2026-04'
    cohort: 2
    work:
      EN: Bitcoin Core / BNOC
      BR: Bitcoin Core / BNOC
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
      EN: BIP324
      BR: BIP324
    href: /programs/bitcoin-dev-launchpad
    fundedBy: Vinteum
focus:
  - BIP324
  - Fuzzing
  - Research
links:
  - label: GitHub
    href: 'https://github.com/victorandre957'
    icon: github
  - label: Blog
    href: 'https://victorandre957.github.io/personal_blog/'
    icon: blog
projects:
  - name: Bitcoinfuzz
    href: 'https://github.com/bitcoinfuzz/bitcoinfuzz'
    description:
      EN: Differential Fuzzing of Bitcoin protocol implementations and libraries
      BR: Fuzzing diferencial de implementações e bibliotecas Bitcoin.
    contribution:
      EN: Contributed one merged pull request.
      BR: Contribuição por meio de um pull request integrado.
contributions:
  - id: github-bitcoinfuzz-bitcoinfuzz-637
    title:
      EN: 'rustbicoin (feat): add BIP324 EllSwift fuzz targets'
      BR: 'rustbicoin (feat): add BIP324 EllSwift fuzz targets'
    date: '2026-08-17'
    source: 'bitcoinfuzz/bitcoinfuzz · #637'
    type: PR
    href: 'https://github.com/bitcoinfuzz/bitcoinfuzz/pull/637'
    description:
      EN: Adds rust-bitcoin to differential testing of EllSwift decoding and secret-key
        round trips.
      BR: Adiciona rust-bitcoin ao teste diferencial da decodificação EllSwift e de round
        trips a partir de chaves secretas.
  - id: victor-bip324-traffic-lab
    title:
      EN: BIP324 Traffic Lab and passive traffic analysis
      BR: BIP324 Traffic Lab e análise passiva de tráfego
    source: Vinteum · 2026
    href: /assets/files/Vinteum-Year-Four-Report-2026.pdf
    description:
      EN: Developed a Warnet-based BIP324 Traffic Lab and a passive-analysis pipeline examining
        packet size, timing, direction, flow structure and ports. The work investigates
        what remains observable despite encryption. In 2026, port randomisation was still
        an implementation and discussion direction.
      BR: Desenvolveu um BIP324 Traffic Lab baseado em Warnet e um pipeline de análise passiva
        de tamanho, tempo, direção dos pacotes, estrutura dos fluxos e portas. O trabalho
        investiga o que permanece observável apesar da criptografia. Em 2026, a randomização
        de portas ainda era uma direção de implementação e discussão.
    type: Research
discussions:
  - id: passive-traffic-bnoc
    title:
      EN: Passive Traffic Analysis of Bitcoin P2P v2
      BR: Passive Traffic Analysis of Bitcoin P2P v2
    source: BNOC
    date: '2026-08-13'
    href: 'https://bnoc.xyz/t/passive-traffic-analysis-of-bitcoin-p2p-v2/161'
    description:
      EN: Passive-analysis research examining what remains observable in encrypted BIP324
        traffic.
      BR: Pesquisa de análise passiva sobre o que permanece observável no tráfego criptografado
        BIP324.
writing:
  - id: github-ClubeBitcoinUnB-theses-4
    title:
      EN: Academic thesis on Bitcoin
      BR: Trabalho acadêmico sobre Bitcoin
    date: '2026-02-02'
    source: Clube Bitcoin UnB · GitHub
    href: 'https://github.com/ClubeBitcoinUnB/theses/pull/4'
  - id: personal-blog-bip324-traffic-ml-v2-preliminary-results
    title:
      EN: >-
        Classifying BIP324 Traffic in a Full Network Capture: Preliminary ML
        Results
      BR: >-
        Classifying BIP324 Traffic in a Full Network Capture: Preliminary ML
        Results
    source: victorandre957.github.io
    href: >-
      https://victorandre957.github.io/personal_blog/posts/bip324-traffic-ml-v2-preliminary-results/
  - id: personal-blog-what-bip324-changes-for-bitcoin-p2p
    title:
      EN: BIP324 in Bitcoin Core
      BR: BIP324 in Bitcoin Core
    source: victorandre957.github.io
    href: >-
      https://victorandre957.github.io/personal_blog/posts/what-bip324-changes-for-bitcoin-p2p/
updatedAt: '2026-11-17'
---
## EN

Victor André studies Bitcoin P2P privacy and encrypted transport. His work combines passive analysis of BIP324 traffic with differential fuzzing, investigating what network observers can still infer from encrypted connections.

## PT

Victor André pesquisa privacidade P2P do Bitcoin e transporte criptografado. Seu trabalho combina análise passiva do tráfego BIP324 e fuzzing diferencial para investigar o que observadores da rede ainda podem inferir de conexões criptografadas.
