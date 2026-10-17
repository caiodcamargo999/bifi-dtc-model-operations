# Stack de vídeo UGC — o que usar, por função

Verificado em 2026-10-17 contra o conector Higgsfield desta conta. Quando algo não foi testado, está marcado.

## O que é o AvatarHype (e o que não é)

**É um curso gravado**, não uma ferramenta de geração. Vende o método de criar anúncios com avatar IA;
a geração acontece em ferramentas externas pagas por uso.

| Produto | Preço | Conteúdo |
|---|---|---|
| UGC Realista | R$ 197 | Personagens realistas, clonar a própria imagem |
| Animados | R$ 147 | Em regravação; 20 min + guia de 8 prompts |
| Pacote Completo | R$ 247 | UGC + Animados + DualCast (2h17 de aulas) |
| Módulo de clonagem de voz | US$ 7 + ~US$ 9/mês (ferramenta externa) | Só a própria voz, com verificação de consentimento |

Inclui 3 assistentes de IA, 86 prompts, 8 documentos "Como foi feito" e 392 músicas/efeitos.
Custo de referência da página: ~US$ 0,30 por clipe de 10s (varia com a plataforma e inclui takes descartados).
A página não menciona API, lip sync nem tradução nativos, nem política de reembolso.

**Os 7 formatos** que a skill `ugc-video-producer` replica como estrutura: UGC realista · sua imagem e voz ·
voiceover (imagens do produto + narração) · animado · podcast · DualCast (dois personagens no quadro) · trends
(adaptar um vídeo de referência ao seu produto).

Não temos acesso aos 86 prompts nem às aulas (conteúdo pago). As skills usam a estrutura pública dos formatos
e as ferramentas abaixo — não reproduzem material do curso.

## Mapa por função → ferramenta (Higgsfield já conectado)

| Função | Ferramenta no conector | Observação |
|---|---|---|
| Rosto/avatar realista | `soul_2` (Soul 2.0, "UGC realista"), `ai_influencer_*` (personagem persistente), avatares do Marketing Studio | Criar o avatar uma vez; reutilizar o ID |
| Consistência de personagem | `soul_id`, `soul_cast`, `manage_reference_elements` | Sem isso o rosto muda entre clipes |
| Vídeo falando (voz nativa + lábios) | `seedance_2_0` (4–15s), `seedance_2_5` (até 30s), `kling3_0` (3–15s, multi-shot), `wan2_7` (áudio sincronizado), `marketing_studio_video` (12–15s, presets UGC/Unboxing/Review) | `seedance_2_0` modo `std` exige plano Plus ou superior |
| Voz IA | `text2speech_v2` (ElevenLabs, MiniMax, Seed Speech…), `elevenlabs_v4`, `qwen_audio_tts` | Passar o áudio como `audio_references` no vídeo mantém a voz idêntica entre clipes |
| Clonar a própria voz | `create_voice` (widget de gravação/upload) | Só voz própria ou com consentimento por escrito |
| Trocar a voz de um vídeo pronto | `voice_change` | Mantém timing e imagem |
| **Tradução + lip sync** | `dubbing` | 18 idiomas: eng cmn fra hin ita jpn kor **por** rus tur **spa** deu ara pol ind fil swe fin |
| Copiar a estrutura de um anúncio de referência | `marketing_studio_v2_reference2video`, `ad_reference_id` | Estrutura, nunca o conteúdo do concorrente |
| Pós (upscale, fundo, reenquadrar) | `upscale_video`, `remove_background`, `reframe` | |
| Previsão de retenção/hook | `virality_predictor` | Triagem, não substitui teste real |

## Outros conectores desta conta que fecham a operação

| Conector | Papel |
|---|---|
| Google Drive | Arquivo de ativos aprovados |
| ClickUp | Fila de produção e status por ângulo |
| Make | Automação (ex.: vídeo aprovado → Drive → ClickUp) |
| Facebook Ads MCP / skill `meta-campaign-upload` | Subir o criativo, sempre PAUSED, IA desligada |
| Rarity Ecom DTC Analytics | Ler Hook Rate/Body Rate de volta (`get_vturb_video_stats`) para fechar o ciclo |
| Vercel | Hospedar os advertoriais |
| Canva / Figma | Capas, overlays e legendas, se necessário |

## Não conectado (só se o Higgsfield não bastar)

ElevenLabs direto (vozes por idioma/sotaque mais finas e clone profissional), HeyGen/Synthesia
(avatar com lip sync dedicado), CapCut (edição final, música, legendas). Nenhum tem conector aqui.
A edição final (juntar clipes, legenda, música) hoje é manual.

## Limites reais — leia antes de prometer prazo

- **Saldo Higgsfield em 2026-10-17: 0,2 créditos, plano free.** Nada abaixo roda até recarregar.
- Qualidade do lip sync do `dubbing` e dos modelos com áudio nativo **não foi testada** nesta conta.
  Rodar um teste de 1 clipe por idioma antes de produzir em lote.
- PT-BR: `dubbing` tem `por` (sem distinguir BR de PT) — validar sotaque no teste. `qwen_audio_tts` aceita `pt`.
- Cada take descartado custa crédito. Orçar 2–3 takes por bloco.

## Compliance de vídeo sintético

- Avatar não pode parecer pessoa real reconhecível, nem se apresentar como médico/profissional certificado.
- Depoimento de "cliente" com avatar IA é prova inventada (regra 7 do projeto): usar como porta-voz/demonstração,
  nunca como resultado de cliente real.
- Divulgar conteúdo sintético quando a plataforma exigir.
- Ver `knowledge/peptides/02-ad-platform-compliance.md`.
