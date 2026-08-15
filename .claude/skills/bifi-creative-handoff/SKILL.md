---
name: bifi-creative-handoff
description: >-
  Ponte entre a copy produzida neste projeto e o pipeline de produção de criativos BIFI
  (prompts de vídeo com avatar falante, imagem fotorrealista, storyboard 3D, efeitos shot-by-shot).
  Prepara o pacote de handoff — roteiro segmentável, notas de cena, pronúncia, proporção, gestos —
  e roteia para a skill BIFI correta. Use quando o usuário disser "manda pra produção", "gera os
  prompts", "transforma em vídeo", "faz o start frame", "cria a imagem do avatar", "storyboard",
  "shot list", ou mencionar Veo, Kling, Seedance, Higgsfield, Nano Banana.
---

# BIFI Creative Handoff

Este projeto escreve a copy. As skills BIFI produzem o criativo.
Este skill é a junta entre os dois — e existe porque **a maior parte do retrabalho de produção
nasce de copy entregue sem os metadados que o gerador precisa**.

As skills de produção vivem em `reference/bifi-skills/`.

---

## Roteador

| O que o usuário quer | Skill BIFI | Reference |
|---|---|---|
| Copy + imagem de avatar real → vídeo falante | `avatar-vsl-video-prompts-bifi` | `reference/bifi-skills/avatar-vsl-video-prompts-bifi/` |
| Imagem realista (start frame do avatar, foto de produto) | `photorealism-prompts-bifi` | `reference/bifi-skills/photorealism-prompts-bifi/` |
| Vídeo sem avatar falante (brand film, B-roll, efeitos) | `video-prompt-builder-bifi` | `reference/bifi-skills/video-prompt-builder-bifi/` |
| Pipeline completo / storyboard 3D / execução no Higgsfield | `skill-black-belt-bifi` | `reference/bifi-skills/skill-black-belt-bifi/` |

**Leia o SKILL.md da skill de destino antes de gerar qualquer prompt.** Elas têm travas anti-bug
específicas (anti-corte da 1ª palavra, voz única, anti-legenda, teto de 2500 caracteres) que
não estão neste projeto e não podem ser reconstruídas de memória.

Sem imagem de avatar? Ofereça o pipeline encadeado:
**`photorealism-prompts-bifi` (start frame) → `avatar-vsl-video-prompts-bifi` (blocos falados)**

---

## Pacote de handoff

Antes de rotear, monte e confira o pacote. Cada item ausente vira uma pergunta na produção
ou um bloco regerado.

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HANDOFF · [produto] · [peça]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
① ROTEIRO
   Fala limpa, sem rótulos de bloco, pronta pra segmentar.
   Números por extenso. Nenhuma frase acima de 20 palavras.

② PARÂMETROS DE FALA
   Cadência:  [2.5 / 2.75 / 3.1] pal/s
   Palavras:  [N]     Duração estimada: [Y]s

③ PRONÚNCIA (reescrever NA PRÓPRIA FALA, entre aspas)
   GHK-Cu → "G-H-K copper" · niacinamide → "nye-uh-SIN-uh-mide" · [...]

④ AVATAR E CENA
   Imagem enviada? [sim/não → se não, gerar start frame primeiro]
   Proporção: herdar da imagem — nunca assumir 9:16
   Cenário: [carro parado / banheiro / selfie UGC / podcast]
   Idade aparente: [se 60+, a skill aplica boca mínima automaticamente]

⑤ BLOCOS ESPECIAIS
   [HOOK] entra já falando · [READS] leitura de pergunta · [REACTION/IDLE] escuta silenciosa

⑥ GESTOS ANCORADOS
   [palavra da fala → região do corpo]

⑦ MODELO DE GERAÇÃO
   Veo 3.1 (≈8s) / Kling V3 (≈10s) / Seedance 2.0 (≈15s)  ← perguntar se não travado
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Verificação de segmentabilidade

Antes de entregar, rode a checagem que evita o retrabalho mais comum:

1. **Meça a frase mais longa do roteiro.** Acima de 20 palavras? Volte ao `dtc-vsl-writer` e parta.
2. **Confira o teto do modelo.** `palavras da frase ÷ cadência` tem que caber no teto escolhido.
3. **Números e siglas por extenso.** `$3,500` e `74%` na fala geram erro de leitura no gerador.
4. **Sem travessão longo, aspas duplas ou reticências no texto que vai pro payload** — causa
   erro 422 no FAL (ver troubleshooting da skill de destino).
5. **Consolidação:** frases curtas vizinhas da mesma ideia devem estar juntas, pra formar blocos
   de ~8–9s em vez de dois clipes de 3–4s.

---

## Divisão de responsabilidade

| Este projeto | Skills BIFI |
|---|---|
| Avatar, ângulo, mecanismo, blocos de copy | Segmentação em blocos de vídeo |
| Teto de claim e compliance | Travas anti-bug de geração |
| Nível de Pathos e estrutura persuasiva | Sintaxe por modelo (Veo/Kling/Seedance) |
| Notas de pronúncia e cena | Execução (Higgsfield MCP, Nano Banana Pro) |

**Não reimplemente as travas das skills BIFI aqui.** Elas vieram de dezenas de bugs reais
e evoluem no repositório delas. Este skill entrega o insumo; elas fazem a produção.

---

## Nota de compliance na produção

Copy aprovada pode virar criativo reprovado. Antes de rotear, confirme:
- O avatar gerado não é semelhante reconhecível de pessoa real
- Não é apresentado como profissional de saúde certificado sem autorização
- Nenhuma marca, logo ou watermark de terceiros no frame
- Divulgação de conteúdo sintético, se a plataforma exigir

Ver `knowledge/peptides/02-ad-platform-compliance.md`, seção 5.
