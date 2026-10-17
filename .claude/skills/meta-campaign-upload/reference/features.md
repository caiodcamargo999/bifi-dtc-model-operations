# As 23 features de Advantage+ Creative

Fonte: [Meta for Developers — Get Started with Advantage+ Creative](https://developers.facebook.com/documentation/ads-commerce/marketing-api/creative/advantage-creative/get-started)

Nome da API → rótulo no Ads Manager. O rótulo é o que o usuário vê na interface; use-o
quando explicar ao usuário o que foi desligado.

| Nome na API | Rótulo no Ads Manager | Tipo |
|---|---|---|
| `adapt_to_placement` | Image touch-ups | ⚠️ **Default é opt-in** |
| `add_text_overlay` | Add dynamic overlays | Texto |
| `creative_stickers` | Create sticker CTA | Sobreposição |
| `description_automation` | Dynamic description | Texto |
| `enhance_cta` | Enhance CTA | Texto · rotulado "AI" |
| `image_animation` | — | Imagem |
| `image_background_gen` | Generate backgrounds | Imagem · **generativa** · rotulado "AI" |
| `image_brightness_and_contrast` | Adjust brightness and contrast | Imagem |
| `image_templates` | Add overlays | Sobreposição · rotulado "AI" |
| `image_text_translation` | Translate image text | Tradução |
| `image_touchups` | Visual touch-ups | Imagem |
| `image_uncrop` | Expand image | Imagem · **generativa** · rotulado "AI" |
| `inline_comment` | Relevant comments | Social |
| `media_type_automation` | Allow product video | Mídia |
| `pac_relaxation` | Flexible media | Mídia |
| `product_extensions` | Show products (Collection) | Catálogo |
| `reveal_details_over_time` | Reveal details over time | Formato |
| `text_optimizations` | Text improvements | Texto · rotulado "AI" |
| `text_translation` | Translate text | Tradução |
| `translate_voiceover` | Translate voiceover | Áudio |
| `video_auto_crop` | Visual touch-ups | Vídeo |
| `video_filtering` | — | Vídeo |
| `video_uncrop` | — | Vídeo · **generativa** |

## As mais destrutivas para copy de resposta direta

Se precisar priorizar, estas quatro são as que mais estragam uma peça trabalhada:

- **`text_optimizations`** — reescreve a copy. Um hook testado vira outra frase.
- **`image_uncrop`** / **`image_background_gen`** — inventam pixels que não existiam.
  Numa peça de saúde, imagem alterada por IA é um problema de claim, não de estética.
- **`image_templates`** / **`add_text_overlay`** — colocam texto sobre a imagem.
  Quebra o formato UGC cru e pode estourar a regra de texto do criativo.
- **`enhance_cta`** — troca o CTA que você escolheu.

## Como serializar

O arquivo `opt-out-spec.json` está em JSON normal, legível. O campo
`degrees_of_freedom_spec` do `ads_create_creative` espera **uma string JSON-encoded**.

Leia o arquivo, faça `JSON.stringify` (ou equivalente) do objeto inteiro e passe o resultado
como valor do campo. O resultado tem esta forma — aspas internas escapadas, tudo numa linha:

```
"{\"creative_features_spec\":{\"adapt_to_placement\":{\"enroll_status\":\"OPT_OUT\"}, ... }}"
```

Comando de conferência:

```bash
python3 -c "import json;print(json.dumps(json.load(open('opt-out-spec.json'))))"
```

## Observações que mudam com o tempo

- **v22.0 (jan/2025)** acabou com o bundle "Standard Enhancements" e passou tudo para
  opt-in individual por feature.
- A documentação diz que as features são **opt-in**. Relatos de operação dizem que várias
  aparecem ligadas sozinhas em campanhas novas de Sales e Leads. Por isso a skill faz
  opt-out explícito **e** verificação por leitura — a estratégia funciona nos dois mundos.
- A Meta **remove automaticamente** features inelegíveis para o formato do criativo. Se a
  leitura de volta trouxer menos features do que você enviou, é esperado. O que não pode
  voltar é qualquer coisa com `enroll_status: OPT_IN`.
- Esta lista tem 23 entradas na data em que a skill foi escrita. **A Meta adiciona features.**
  Se a verificação trouxer um nome que não está aqui, adicione ao `opt-out-spec.json` e
  avise o usuário que a lista mudou.

## Fora do `creative_features_spec`

- **Música** não fica aqui — é `asset_feed_spec.audios`.
- **Advantage+ Audience**, **Advantage+ Placements** e **dynamic creative** são do ad set,
  não do criativo. Ver SKILL.md, passo 2.
