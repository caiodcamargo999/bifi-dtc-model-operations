---
name: video-localization
description: >-
  Traduz e localiza vídeos de anúncio para outros idiomas com lip sync — dublagem automática no
  Higgsfield, troca de voz, e a regra de transcriação para o VOC soar nativo. Use quando o usuário
  disser "dublar", "traduzir o vídeo", "versão em espanhol/português/alemão", "lip sync", "localizar
  criativo", "mesmo vídeo pra outro mercado", "trocar a voz", ou quiser escalar um criativo vencedor
  para novos países.
---

# Video Localization

Escala um criativo **que já ganhou** para novos mercados. Não localize teste: localize vencedor.

Leia antes: `knowledge/video-stack/01-stack-e-conectores.md`.

## Duas rotas — escolha pelo tipo de peça

| Rota | Quando | Como | Qualidade do nativo |
|---|---|---|---|
| **1. Dublagem automática** | Vídeo pronto, rápido, teste de mercado | `dubbing` (traduz + sintetiza + lip sync) | Boa para testar; tradução literal |
| **2. Regerar com roteiro transcriado** | Vencedor que vai escalar no mercado | Roteiro transcriado → voz nova → blocos regerados | Máxima; custa mais |

Regra: **rota 1 para validar, rota 2 para escalar.** Dublagem automática traduz; não adapta VOC, gíria
nem referência cultural. Um ad que depende de "soar como a vizinha" precisa da rota 2.

## Rota 1 — dublagem

1. Confirme que o vídeo existe como `media_id` enviado ou `job_id` concluído.
2. **Teste 1 vídeo por idioma** e avalie: lábios, sotaque, nomes próprios, siglas (GHK-Cu etc.), números.
3. Aprovado → `dubbing` com `target_language`. Códigos:
   `eng cmn fra hin ita jpn kor por rus tur spa deu ara pol ind fil swe fin`
4. Sem voz do original desejada? `voice_change` depois da dublagem (preset ou `create_voice` própria).
5. Legenda: a dublagem não gera. Refaça a legenda no idioma-alvo.

Limites conhecidos: `por` não distingue BR de PT; `spa` não distingue ES de LatAm. Valide o sotaque no teste.
Vídeo com texto na tela ou dois falantes sobrepostos tende a falhar — regere, não dubleie.

## Rota 2 — transcriação

1. Pegue o roteiro original e o avatar do brief. **Transcrie, não traduza** (regra do projeto):
   o VOC do mercado-alvo precisa soar de gente de lá. Se não há VOC no idioma, acione `voc-miner`.
2. Reescreva respeitando **≤ 20 palavras por frase** no idioma novo (português costuma crescer ~15% sobre o inglês).
3. Mantenha os blocos rotulados e o Pathos; mude a expressão, não a função do bloco.
4. Passe `peptide-compliance` AUDIT **no idioma-alvo**: regra de claim e plataforma muda por país.
5. Gere voz (`text2speech_v2`, idioma pelo `voice_id`) → blocos com `ugc-video-producer`.
6. Reuse o mesmo rosto do avatar para continuidade de marca, se o mercado aceitar; senão, avatar local.

## Checklist de pronúncia por idioma

Marca, ingrediente e sigla viram fala fonética **dentro do roteiro**, não em nota.
Ex.: GHK-Cu → "G-H-K copper" (en) · "gê-agá-cá cobre" (pt). Números por extenso.

## Entrega

```
public/<slug>/04-VIDEOS/AD<N>-<angulo>/localizados/<idioma>/
  roteiro.md      (rota 2) ou nota "dublagem automática" (rota 1)
  video.mp4       job_id registrado
  _STATUS.md      rota, voz, resultado do teste de lábios, saldo gasto
```

## Nunca

- Dublar antes de ter um vencedor.
- Publicar dublagem sem ouvir o vídeo inteiro no idioma-alvo.
- Clonar a voz de uma pessoa real sem consentimento escrito.
- Assumir que a claim aprovada em EN-US vale em outro país.
