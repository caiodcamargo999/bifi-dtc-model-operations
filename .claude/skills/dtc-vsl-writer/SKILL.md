---
name: dtc-vsl-writer
description: >-
  Escreve roteiros de vídeo de resposta direta (VSL, UGC, talking-head, TikTok Shop) para produtos
  DTC e peptídeos, em blocos funcionais rotulados e já calibrados para segmentação em prompts de
  avatar IA. Use quando o usuário pedir "VSL", "roteiro", "script de vídeo", "copy de vídeo",
  "criativo de vídeo", "UGC", "talking head", "roteiro de 60 segundos", "escreve o ad", ou quando
  quiser converter um ângulo/hook em peça completa. Também acione para reescrever um bloco
  específico depois de um reporte de performance (Hook Rate ou Body Rate abaixo da faixa).
---

# VSL / Video Script Writer

Escreve o roteiro. **A saída deste skill é a entrada do pipeline de produção BIFI** —
por isso a copy nasce já calibrada para virar prompt de avatar sem retrabalho.

Leia antes:
- `knowledge/frameworks/01-block-anatomy.md` — a gramática. **É a espinha deste skill.**
- `public/<slug>/01-BRIEF/brief.md` e `public/<slug>/02-CRIATIVOS-TOPO/angulos-e-hooks.md`
- `templates/vsl.template.md`
- `reference/crowned/brief_crowned_extracted.txt` — 5 ads decompostos bloco a bloco. Calibre por eles.

---

## Fluxo

### 1. Trave os parâmetros (uma rodada)

- **Ângulo e hook** (do lote existente, ou gere na hora)
- **Avatar-alvo** e, por consequência, o **código emocional** (Ethos/Pathos/Formato do brief)
- **Estrutura**: A transformação pessoal · B teste/experimento · C reframe científico · D comparativa
- **Duração**: 30s / 60s / 90s / 2min+
- **Idioma**: EN-US (padrão) / PT-BR / ambos
- **Cadência de fala**: natural 2.5 · **1.1x = 2.75 (padrão)** · 1.25x = 3.1 palavras/s

Se o usuário já travou algo na conversa, não repergunte.

### 2. Calcule o orçamento de palavras

```
palavras totais ≈ duração (s) × cadência (pal/s)
```

| Duração | @2.5 | @2.75 | @3.1 |
|---|---|---|---|
| 30s | ~75 | ~82 | ~93 |
| 60s | ~150 | ~165 | ~186 |
| 90s | ~225 | ~247 | ~279 |

Distribua o orçamento entre os blocos da estrutura escolhida. Hook nunca passa de 8% do total.

### 3. ⚠️ REGRA DE SEGMENTAÇÃO (a que evita retrabalho)

A copy vai ser cortada em blocos de vídeo pela skill `avatar-vsl-video-prompts-bifi`,
que **nunca corta frase no meio** e respeita o teto de duração do modelo
(Veo ≈8s · Kling ≈10s · Seedance ≈15s).

Portanto, escreva assim:

- **Nenhuma frase acima de 20 palavras** (@2.75 → 20 palavras ≈ 7,3s, cabe até no Veo)
- Frase que precise passar disso tem que ter **vírgula natural** no meio, para partir limpo
- **Prefira frases de 8–14 palavras.** Elas consolidam em blocos cheios de ~8–9s
- Evite dois períodos de 3–4 palavras seguidos — viram dois clipes curtos desperdiçados
- **Ponto final é ponto de corte.** Termine cada ideia num ponto, não numa vírgula pendurada
- Números por extenso na fala: `74%` → `seventy-four percent`; `$3,500` → `three thousand five hundred dollars`

> Um roteiro que ignora isso gera 30% mais blocos de vídeo e força resegmentação manual.
> Este é o principal ponto de fricção entre copy e produção — resolva na escrita.

### 4. Escreva em blocos rotulados

Todo bloco leva o rótulo funcional acima da fala. Nunca entregue prosa corrida.

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VSL · [produto] · Ângulo [N] · Avatar: [nome] · [duração] · @[cadência]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[HOOK — H1] · invalidação agressiva · Pathos 3
Castor oil can go to hell. I tested seventeen methods to unlock my hair growth,
and the only one that worked was the least known.

[HOOK — H2] · qualificação visual · Pathos 3
I'm begging you, before getting extensions, do this morning ritual for thirty days.

[ABERTURA — PROVA PESSOAL]
Listen, a friend told me this ritual could grow in eight weeks what my hair
hadn't grown in six months. I didn't believe her. But let's test it.

[PROVA PESSOAL + TIMELINE — SEMANA 1 · HONESTIDADE]
Week one. Obviously nothing happened. My hair looks exactly the same.
I'm not a salesperson here. I will tell you the truth.

[...]
```

### 5. Bloco de handoff de produção (obrigatório, ao final)

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRODUCTION HANDOFF → skills BIFI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Palavras totais:    [N]  ·  Cadência: [X] pal/s  ·  Duração estimada: [Y]s
Blocos de fala:     [N]  ·  Nenhuma frase acima de 20 palavras ✓
Frase mais longa:   [N] palavras ("...")

PRONÚNCIA — reescrever NA FALA antes de gerar o prompt:
  GHK-Cu       → "G-H-K copper"
  niacinamide  → "nye-uh-SIN-uh-mide"
  panthenol    → "PAN-thuh-nol"
  [outros termos do produto]

CENA SUGERIDA:      [banheiro / carro parado / selfie UGC / podcast]
PROPORÇÃO:          herdar da imagem de avatar enviada — não assumir 9:16
BLOCOS ESPECIAIS:   [HOOK] entra já falando · [READS] se houver leitura de pergunta
GESTOS ANCORADOS:   [palavra → região do corpo, se a copy citar parte do corpo]

Próximo passo: `bifi-creative-handoff`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 6. Validação antes de entregar

- [ ] A ordem da virada mecânica está correta e completa (transição → causa raiz → MUP →
      mecanismo do problema → mecanismo da solução → solução 2.0 → simplicidade)
- [ ] O produto é vendido como **método nomeado** (Solução 2.0), não como SKU
- [ ] Toda promessa tem bloco de prova a ≤2 blocos de distância
- [ ] A `CONSEQUÊNCIA EMOCIONAL` é identitária, não sintomática
- [ ] `CTA` só aparece depois de `QUEBRA DE OBJEÇÕES`
- [ ] H1 **e** H2 entregues, do mesmo ângulo, padrões diferentes
- [ ] Nenhuma frase acima de 20 palavras — **meça, não estime**
- [ ] "Results vary" presente junto de qualquer timeline
- [ ] Rodou `peptide-compliance` em modo AUDIT

---

## Modo reescrita de bloco

Reporte de performance nunca gera roteiro novo inteiro. Consulte
`knowledge/metrics/benchmarks.md` → tabela de diagnóstico, e reescreva **só o bloco culpado**:

| Sintoma | Bloco a reescrever |
|---|---|
| Hook Rate < 50% | `HOOK` — subir Pathos, trocar padrão, testar H2 |
| Body Rate < 5% | `TIMELINE` / `HISTÓRIA EMOCIONAL` — falta loop aberto ou a virada demorou |
| Adv → Checkout baixo | `QUEBRA DE OBJEÇÕES` / `MECANISMO DA SOLUÇÃO` |
| CTR alto + conversão baixa | Realinhar `HOOK` com `SOLUÇÃO 2.0` |

Reescrever a peça inteira destrói o aprendizado do teste. Mexa num bloco por vez.
