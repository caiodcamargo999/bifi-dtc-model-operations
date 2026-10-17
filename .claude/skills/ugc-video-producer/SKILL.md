---
name: ugc-video-producer
description: >-
  Produz vídeos UGC com avatar IA realista no Higgsfield a partir de um ângulo/roteiro já aprovado —
  escolhe entre 7 formatos (UGC realista, sua imagem e voz, voiceover, animado, podcast, DualCast,
  trend), cria o avatar, trava a voz, gera os blocos e entrega o pacote por ângulo. Use quando o
  usuário disser "faz o vídeo UGC", "avatar falando", "cria o criativo em vídeo", "UGC com IA",
  "podcast com avatar", "dois personagens", "adapta esse vídeo de referência pro meu produto",
  "gera no Higgsfield", ou depois que o dtc-vsl-writer entregar um roteiro.
---

# UGC Video Producer

Transforma roteiro aprovado em vídeo. **Não escreve copy** (isso é `dtc-vsl-writer`) e **não reimplementa
as travas anti-bug** de `reference/bifi-skills/` — roteia para elas via `bifi-creative-handoff`.
Esta skill decide formato, avatar, voz e execução no Higgsfield.

Leia antes: `knowledge/video-stack/01-stack-e-conectores.md` (ferramentas, limites, saldo).

## Portões (não pule)

1. **Sem brief e sem roteiro aprovado, sem vídeo.** Falta? Volte ao `dtc-pipeline` / `dtc-vsl-writer`.
2. **`peptide-compliance` AUDIT no roteiro antes de gastar crédito.** Reprovou no texto, reprova no vídeo.
3. **Cheque o saldo** (`balance`) e diga o custo estimado antes de gerar. Saldo zero = pare e avise.
4. **Teste 1 bloco antes do lote.** Aprovou rosto, voz e lábios no bloco 1, só então gere o resto.

## Passo 1 — escolha o formato

| Formato | Quando | Execução |
|---|---|---|
| **A. UGC realista** | Padrão. Prova social, rotina, "descobri isso" | Avatar `soul_2` → vídeo falado por bloco |
| **B. Sua imagem e voz** | Dono/expert aparece | Foto própria como referência + `create_voice` (voz própria) |
| **C. Voiceover** | Produto demonstrável, sem rosto | Imagens do produto + `text2speech_v2` |
| **D. Animado** | Mecanismo difícil de filmar | Personagem estilizado; ver `video-prompt-builder-bifi` |
| **E. Podcast** | Autoridade, ângulo de descoberta/educação | Mesa + microfone; 1 avatar apresenta, plano médio estável |
| **F. DualCast** | Debate, objeção e resposta, "meu marido não acreditou" | 2 avatares no quadro; falas alternadas, cada bloco com um falante |
| **G. Trend** | Formato viral validado | `marketing_studio_v2_reference2video` ou `ad_reference_id` — copia estrutura, nunca texto/identidade do original |

Default por estágio de consciência: unaware/problem-aware → A ou E · solution-aware → F ou C · most-aware → B.

## Passo 2 — avatar (uma vez por ângulo)

- Derive o avatar do **avatar do brief** (idade, contexto, registro), não do gosto estético.
- Gere o start frame com `soul_2` (9:16, selfie de celular, luz natural, imperfeições de pele reais).
  Para rigor fotorrealista use `photorealism-prompts-bifi`.
- Personagem recorrente entre ângulos: `ai_influencer_prepare` → `ai_influencer_generate`, e guarde o `soul_id`.
- Mostre 2–3 opções e **espere a escolha**. Rosto escolhido vira referência de todos os blocos.

## Passo 3 — voz (trave antes do vídeo)

1. Gere o áudio do roteiro inteiro com `text2speech_v2` (variant `elevenlabs`) ou `elevenlabs_v4`.
   Idioma e sotaque pelo `voice_id`; direção de emoção pela instrução.
2. Use esse áudio como `audio_references` nos blocos. Voz idêntica entre clipes é o que separa
   "campanha" de "colagem".
3. Voz do próprio dono: `create_voice`. **Nunca** clonar voz de terceiro ou de celebridade.

## Passo 4 — blocos de vídeo

- Segmente com `bifi-creative-handoff` (frases ≤ 20 palavras, números por extenso, pronúncia na fala).
- Modelo por teto: `seedance_2_0` (≤15s) · `kling3_0` (≤15s, multi-shot) · `seedance_2_5` (≤30s) ·
  `marketing_studio_video` (12–15s, presets UGC/Unboxing/Review).
- Prompt em inglês, prosa descritiva: quem, onde, câmera de celular, gesto ancorado à palavra, e
  "no subtitles, no text overlay, no logo, no watermark".
- Gere o bloco 1, mostre, ajuste, só então o resto (`generate_video_batch`).
- Hook entra **já falando**, sem respiração ou pausa inicial.

## Passo 5 — pós

Une os blocos, legenda, música: manual (sem conector de edição). `upscale_video` se precisar de 1080p.
Triagem opcional com `virality_predictor`.

## Entrega

```
public/<slug>/04-VIDEOS/
  AD<N>-<angulo>/
    roteiro.md          fala limpa + formato + modelo + voice_id
    avatar-ref.png      (ou ID do job)
    blocos/             clipes aprovados em ordem
    _STATUS.md          formato, saldo gasto, takes descartados, pendências
```

Cada vídeo herda o par **estática N + long text N**. Teste por ângulo, não peça solta.

## Nunca

- Dizer que gerou sem job concluído. Reportar o `job_id` e o status real.
- Avatar IA como "cliente real" ou como médico. É porta-voz.
- Reaproveitar avatar/hook/voz de outro produto (regra 8).
- Rodar em lote antes do teste de 1 bloco.
