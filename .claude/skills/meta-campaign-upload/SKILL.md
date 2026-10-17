---
name: meta-campaign-upload
description: >-
  Sobe campanhas no Meta Ads Manager com TODA automação de IA desligada — Advantage+ Creative,
  Advantage+ Audience, Advantage+ Placements, dynamic creative e business AI. Cria campanha →
  ad set → criativo → ad, sempre em PAUSED, e verifica por leitura que nenhuma feature de IA
  ficou ligada. Use quando o usuário pedir "sobe a campanha", "cria a campanha no Meta",
  "upload no ads manager", "sobe esses criativos", "cria o ad set", "duplica a campanha",
  "sobe sem Advantage+", "desliga as IAs do anúncio", ou mandar copy/imagens para virar anúncio.
---

# Meta Campaign Upload — sem nenhuma automação de IA

## Regra dura do projeto

**Nenhuma automação de IA da Meta entra nos anúncios. Isso é o padrão do sistema, não uma
opção.** Vale para criativo, público, placements e automações de ad set — Advantage+ em
qualquer forma, e qualquer coisa que a Meta rotule "AI".

Aplique **sempre, em toda campanha, sem perguntar.** Não trate como preferência a confirmar
a cada subida. O usuário já decidiu, uma vez, para todas.

### Quando o usuário pedir para ligar alguma

Só ligue se ele pedir **explicitamente, naquele momento, nomeando o que quer ligar.**
"Pode usar o que a Meta recomendar" não conta. Ao ligar, diga qual feature, o que ela faz
com a peça e registre no relatório final.

**Nunca ligue por conta própria**, nem quando a API sugerir, nem quando parecer que melhora
a entrega, nem quando `ads_get_opportunity_score` recomendar. A recomendação da Meta não é
autorização do usuário.

### Se não conseguir desligar

**Pare e reporte. Não suba "quase certo".** Uma camada ligada contamina a peça inteira —
e numa campanha de saúde, imagem ou copy alterada por IA deixa de ser questão de estética
e vira questão de claim.

### Sobre o desacordo documentação × prática

A documentação da Meta diz que as features são opt-in. Relatos de operação dizem que várias
aparecem ligadas sozinhas em campanhas novas de Sales e Leads. **Não tome partido.**
Faça as duas coisas: opt-out explícito na escrita **e** verificação por leitura depois.
O passo 5 não é opcional.

---

## O mapa da IA — 4 camadas, não 1

Desligar só o criativo deixa três camadas ligadas. As quatro:

| Camada | O que a Meta liga sozinha | Onde se desliga |
|---|---|---|
| **Criativo** | 23 features de Advantage+ Creative | `degrees_of_freedom_spec` no `ads_create_creative` |
| **Público — audience** | Advantage+ Audience (**ligado por padrão**) | `targeting_automation.advantage_audience: 0` |
| **Público — detailed** | Advantage+ detailed targeting | `targeting_optimization: "none"` |
| **Público — lookalike** | Advantage+ lookalike (**ligado por padrão**) | `targeting_relaxation_types.lookalike: 0` |
| **Placements** | Advantage+ Placements (automáticos) | `publisher_platforms` + posições explícitas |
| **Ad set — outros** | Dynamic creative, business AI de resposta | `is_dynamic_creative: false`, `biz_ai_enabled_state` |

**Três campos diferentes controlam o público, não um.** Zerar só o `advantage_audience` deixa
a expansão de lookalike ligada — e ela vem ligada de fábrica em objetivos suportados.

### O que isso é no Ads Manager

| Na interface | Na API |
|---|---|
| **"Further limit the reach of your ads" → "Switch setup"** | `targeting_automation.advantage_audience: 0` |
| Advantage+ audience ligado (o default da Meta) | `advantage_audience: 1` |

**É sempre o setup limitado. Advantage+ Audience sempre off.**

Com Advantage+ Audience ligado, a Meta **não respeita** o que você definiu: o mínimo de idade
não pode passar de 25 como controle, e qualquer máximo vira apenas sugestão. A faixa 18–65 e a
exclusão do Alasca só viram limite de verdade no setup limitado.

**Nunca chame `ads_creative_create_image_variations`.** É geração de variação por IA.
Está fora, sempre, independentemente do que o usuário pedir na hora.

---

## Ordem de execução

```
0. Levantamento     → conta, página, pixel, IG
1. Campanha         → ads_create_campaign        (PAUSED)
2. Ad set           → ads_create_ad_set          (PAUSED)
3. Criativo         → ads_create_creative        ← o bloco crítico
4. Ad               → ads_create_ad              (PAUSED)
5. VERIFICAÇÃO      → ads_get_creatives + ads_get_ad_entities
```

Tudo nasce **PAUSED**. Isso é a rede de segurança: nada gasta dinheiro até alguém ativar
manualmente. **Não ative nada** com `ads_activate_entity` sem o usuário pedir explicitamente,
naquele momento, para aquela campanha.

---

## Passo 0 — antes de criar qualquer coisa

### Parâmetros obrigatórios em TODA chamada

| Campo | Regra |
|---|---|
| `client_conversation_id` | 20 caracteres `[A-Za-z0-9]`. Gere **uma vez** e repita **idêntico** em todas as chamadas Meta da conversa. Nunca use ID de conta/campanha |
| `advertiser_request` | As palavras do usuário, **literais**. Não parafraseie, não traduza, não troque por termo técnico |
| `client_model` | O identificador exato do modelo, se declarado no contexto. Se não houver, omita — não chute |

### Levantamento

1. `ads_get_ad_accounts` — confirme a conta. Se `is_ads_mcp_enabled` for `false`, **pare**
2. `ads_get_ad_account_pages` — pegue `page_id`. Para Lead Ads, confira `leadgen_tos_accepted`
3. `ads_get_ig_accounts` — `instagram_user_id`, se for entregar no Instagram
4. `ads_get_datasets` — `pixel_id`, se o objetivo for conversão

**Se faltar qualquer um desses, pergunte. Não invente ID.**

---

## Passo 1 — Campanha

`ads_create_campaign`

- `objective`: só valores ODAX — `OUTCOME_SALES`, `OUTCOME_LEADS`, `OUTCOME_TRAFFIC`,
  `OUTCOME_ENGAGEMENT`, `OUTCOME_AWARENESS`, `OUTCOME_APP_PROMOTION`. Objetivo legado é rejeitado
- `buying_type`: `AUCTION`
- **CBO vs ABO:** a ferramenta empurra CBO. Pergunte ao usuário. Se ele não tiver preferência,
  use CBO (`campaign_daily_budget`). Se for ABO, **não passe nenhum budget aqui** — vai no ad set
- `special_ad_categories`: `[]`, salvo se for habitação, crédito, emprego ou política

⚠️ **Advantage+ Shopping Campaign está fora por padrão.** É um tipo de campanha inteiramente
automatizado — não dá para desligar as camadas dentro dela. Se o usuário pedir pelo nome,
explique que ela é incompatível com a regra e peça confirmação explícita antes de criar.

⚠️ **`ads_get_opportunity_score` recomenda ligar automações.** A ferramenta de campanha sugere
chamá-la depois de criar. Pode chamar e pode mostrar o resultado ao usuário — mas
**recomendação da Meta não é autorização dele.** Nunca aja sobre a recomendação sozinho.

A resposta traz `valid_optimization_goals` e `recommended_optimization_goal`. **Use essa lista
no passo 2** — não chute optimization goal.

---

## Passo 2 — Ad set

`ads_create_ad_set`

### Defaults obrigatórios — 3 das 4 camadas se desligam aqui

**Ponto de partida: [`reference/adset-defaults.json`](reference/adset-defaults.json).**
Leia o arquivo e aplique. **Nada ali é placeholder.** Todo campo vai como está, em toda
campanha, salvo pedido explícito do usuário em contrário.

```json
{
  "geo_locations": { "countries": ["US"] },
  "excluded_geo_locations": {
    "regions": [ { "key": "3844", "name": "Alaska", "country": "US" } ]
  },
  "age_min": 18,
  "age_max": 65,

  "targeting_automation": { "advantage_audience": 0 },
  "targeting_optimization": "none",
  "targeting_relaxation_types": { "lookalike": 0, "custom_audience": 0 },

  "publisher_platforms": ["facebook", "instagram"],
  "facebook_positions": ["feed", "video_feeds", "marketplace", "story", "facebook_reels"],
  "instagram_positions": ["stream", "story", "reels", "explore", "profile_feed"]
}
```

### As três travas de público — as três, sempre

| Campo | Valor | Ligado por padrão? |
|---|---|---|
| `targeting_automation.advantage_audience` | `0` | ✅ **Sim** |
| `targeting_optimization` | `"none"` | Não, mas passe assim mesmo |
| `targeting_relaxation_types.lookalike` | `0` | ✅ **Sim**, em objetivos suportados |
| `targeting_relaxation_types.custom_audience` | `0` | Chave irmã — passe junto |

`targeting_optimization: "expansion_all"` é o valor que **liga**. Nunca use.

### Geo e idade — fixos

| Default | Valor | Detalhe |
|---|---|---|
| País | **Estados Unidos** | `countries: ["US"]`. Só troque se o usuário pedir outro mercado |
| Exclusão | **Alasca** | `region key 3844`. Sai de toda campanha |
| Idade | **18 a 65+** | `age_min: 18`, `age_max: 65` |

⚠️ **`age_max: 65` já significa 65+.** É o valor máximo que a API aceita. Não "corrija"
para 99 ou 100 — a chamada é rejeitada.

⚠️ **Alasca é `3844`, não `3843`.** `3843` é o Alabama. As chaves de região dos EUA são
alfabéticas a partir de 3843, então os dois são vizinhos e trocar um pelo outro exclui o
estado errado sem erro nenhum na API — a campanha sobe e entrega no Alasca.

⚠️ **O Havaí não é excluído.** É comum excluir os dois juntos por frete, mas o pedido foi
só o Alasca. Só acrescente o Havaí (`3854`) se o usuário pedir.

⚠️ Só a exclusão do Alasca **não sobrevive** sem `advantage_audience: 0`. Com Advantage+
Audience ligado, a Meta trata as restrições geográficas e de idade como sinal, não como
limite. As duas travas andam juntas.

**`targeting_automation.advantage_audience: 0` é obrigatório em todo ad set.** Sem isso:
- Advantage+ Audience fica ligado
- `age_min`/`age_max` viram **sugestão**, não limite — a ferramenta move os dois para dentro
  do bloco de automação e a Meta entrega fora da faixa que você pediu

**`publisher_platforms` tem de estar presente em todo ad set.** Omitir = Advantage+ Placements
ligado. O campo nunca sai; o que muda é a lista dentro dele.

`audience_network`, `messenger`, `threads` e `whatsapp` **não entram por padrão** — mas isso é
decisão de mídia do usuário, não regra de IA. Adicione se ele pedir.

### Campos de automação — valores fixos

Estes três vão em **toda** chamada, sem exceção:

| Campo | Valor | Por quê |
|---|---|---|
| `is_dynamic_creative` | `false` | Combinação automática de assets |
| `is_dynamic_creative_format_automation` | `false` | Automação de formato |
| `biz_ai_enabled_state` | `NOT_ENABLED` | IA de resposta a mensagens |

### Campos normais de mídia

| Campo | Valor | Por quê |
|---|---|---|
| `promoted_object` | `{"pixel_id":"...","custom_event_type":"PURCHASE"}` | **Obrigatório** para `OFFSITE_CONVERSIONS`, `VALUE`, `LEAD_GENERATION`, `QUALITY_LEAD`, `APP_INSTALLS` |
| `attribution_spec` | omitir | Default 7d click + 1d view. Só passe se o usuário pedir janela específica |
| `targeting.interests` | omitir | **Nunca invente ID de interesse.** Sem ID real e verificado, use broad por `geo_locations` |

**UE:** se `geo_locations.countries` incluir país da UE, `dsa_beneficiary` e `dsa_payor` são
obrigatórios (DSA). Se omitir, a ferramenta preenche com o nome do negócio da conta.

---

## Passo 3 — Criativo (o bloco crítico)

`ads_create_creative`

### As três travas

**1. `degrees_of_freedom_spec` é uma STRING JSON-ENCODED, não um objeto aninhado.**

```
"{\"creative_features_spec\":{\"text_optimizations\":{\"enroll_status\":\"OPT_OUT\"}}}"
```

Passar objeto nativo → rejeitado.

**2. Não combine com os atalhos.** `degrees_of_freedom_spec` + `advantage_plus_creative` ou
`advantage_plus_creative_features` na mesma chamada → **rejeitado**. Use só o
`degrees_of_freedom_spec`, sozinho.

**3. Opt-out explícito das 23 features.** O JSON pronto está em
[`reference/opt-out-spec.json`](reference/opt-out-spec.json). Leia o arquivo, serialize para
string JSON-encoded e passe em `degrees_of_freedom_spec`:

```bash
python3 -c "import json;print(json.dumps(json.load(open('reference/opt-out-spec.json')),separators=(',',':')))"
```

A string resultante tem ~1.140 caracteres. [`reference/features.md`](reference/features.md)
traz o nome de cada feature, o rótulo correspondente no Ads Manager e quais são as mais
destrutivas para copy de resposta direta — use ao explicar ao usuário o que foi desligado.

Não confie em "omitir já basta". Omitir pode bastar hoje e não bastar amanhã — e o custo de
errar é um anúncio no ar com imagem alterada pela Meta.

### ⚠️ `self_ai_disclosure` — sempre pergunte, nunca decida

Campo separado e **diferente** de tudo acima. Não é sobre a IA da Meta — é sobre **você** ter
usado IA generativa de terceiro para fazer a mídia.

- `OPT_IN` — a mídia foi criada ou editada com IA generativa
- `OPT_OUT` — não foi
- Omitir — desconhecido

**É decisão do anunciante, nunca sua. Sempre levante o campo e pergunte.** Não dá para mudar
depois: nenhuma ferramenta de update altera isso.

> **Relevante neste projeto:** as imagens dos advertoriais são geradas em Nano Banana /
> Higgsfield. Isso é IA generativa de terceiro. Se as mesmas imagens virarem criativo de
> anúncio, a pergunta do `self_ai_disclosure` é real e tem resposta provável `OPT_IN`.
> A declaração vale onde há regra de transparência de IA: União Europeia, Índia, Taiwan,
> Califórnia e Nova York.

### Campos por formato

| Formato | Obrigatórios |
|---|---|
| Imagem | `ad_account_id`, `page_id`, `link_url`, **um de** `image_hash`/`image_url` |
| Vídeo | `ad_account_id`, `page_id`, `video_id`, **um de** `image_hash`/`image_url` (é a thumbnail) |
| Carrossel estático | `ad_account_id`, `page_id`, `cards` (2–10) |
| Post existente | `ad_account_id`, `page_id`, `object_story_id` (`{page_id}_{post_id}`) |

Prefira `image_hash` a `image_url` — faça upload antes com `ads_creative_upload_local_image`
ou `ads_creative_upload_media` e use o hash retornado.

---

## Passo 4 — Ad

`ads_create_ad` — `ad_account_id`, `ad_set_id`, `ad_name`, `creative`.

O `creative` é string JSON com **exatamente uma** fonte:
`{"creative_id":"<id do passo 3>"}` — é o caminho normal, já que o criativo foi criado com
as travas corretas.

Nasce PAUSED.

---

## Passo 5 — VERIFICAÇÃO (não pule)

**Escrever o opt-out não prova que ele pegou.** Leia de volta.

1. **`ads_get_creatives`** no criativo que você acabou de criar.
   Inspecione `degrees_of_freedom_spec.creative_features_spec`.
   - Vazio ou ausente → ✅
   - Qualquer feature com `enroll_status: OPT_IN` → ❌ **reporte e não siga**
   - A Meta remove automaticamente features inelegíveis, então a lista pode voltar menor
     que a enviada. Isso é normal. O que não pode é voltar com algo em `OPT_IN`

2. **`ads_get_ad_entities`** no ad set. Confirme:
   - `targeting.targeting_automation.advantage_audience` = `0`
   - `targeting.targeting_optimization` = `"none"` (nunca `"expansion_all"`)
   - `targeting.targeting_relaxation_types.lookalike` = `0`
   - `targeting.targeting_relaxation_types.custom_audience` = `0`
   - `targeting.publisher_platforms` populado
   - `is_dynamic_creative` = `false`
   - `targeting.geo_locations.countries` = `["US"]`
   - `targeting.excluded_geo_locations.regions` contém a chave `3844` (Alasca)
   - `age_min` = `18` e `age_max` = `65`

   ⚠️ Se `age_min`/`age_max` voltarem diferentes do que você enviou, ou aparecerem dentro de
   um bloco de automação em vez de na raiz do `targeting`, **o Advantage+ Audience ficou
   ligado.** Corrija e suba de novo — não reporte como pronto.

3. **`ads_get_ad_preview`** no ad. Olhe o preview e compare com a imagem original.
   É a checagem final: se a Meta alterou alguma coisa, aparece aqui.

4. **Confirme que tudo está PAUSED.**

**Relate o resultado dos 4 itens ao usuário.** Não diga "subi com as IAs desligadas" —
diga o que a leitura de volta mostrou.

---

## Erros conhecidos

| Erro | Causa | Correção |
|---|---|---|
| Rejeição ao passar `degrees_of_freedom_spec` | Passou junto com `advantage_plus_creative` | Remova o atalho, deixe só o spec |
| `degrees_of_freedom_spec` ignorado | Passou objeto, não string | Serialize para string JSON-encoded |
| "Facebook Page is Missing" | `page_id` ausente dentro de `object_story_spec` | `page_id` é sempre obrigatório ali |
| Entrega fora da faixa etária | `advantage_audience` não foi zerado | `targeting_automation.advantage_audience: 0` |
| "Locations Overlap" | Local incluído e excluído se sobrepõem | Targetar país `US` e excluir a região `3844` é combinação válida. Se der o erro, confira se não há cidade/DMA incluída dentro do Alasca |
| Anúncio entregando no Alasca | Usou `3843` (Alabama) por engano | A chave do Alasca é `3844`. A API não acusa — exclui o estado errado em silêncio |
| `age_max` rejeitado | Passou valor acima de 65 | 65 é o teto e já significa 65+ |
| "Must Use Campaign Bid Strategy" | Passou bid no ad set sob campanha CBO | Bid vai na campanha, não no ad set |
| "Performance goal isn't available" | `optimization_goal` incompatível, ou falta `promoted_object` com `pixel_id` | Use `valid_optimization_goals` da resposta do passo 1 |
| ID de interesse rejeitado | Inventou o ID | Nunca invente. Use broad por `geo_locations` |

---

## Checklist antes de reportar pronto

- [ ] Mesmo `client_conversation_id` em todas as chamadas
- [ ] `advertiser_request` com as palavras literais do usuário
- [ ] Campanha, ad set e ad em **PAUSED**
- [ ] `degrees_of_freedom_spec` enviado como string, sozinho, com as 23 features em `OPT_OUT`
- [ ] País = `US`
- [ ] Alasca excluído, chave `3844` (não `3843`)
- [ ] `age_min: 18`, `age_max: 65`
- [ ] `targeting_automation.advantage_audience: 0` — setup limitado, Advantage+ Audience off
- [ ] `targeting_optimization: "none"`
- [ ] `targeting_relaxation_types.lookalike: 0` e `custom_audience: 0`
- [ ] `publisher_platforms` e posições explícitos
- [ ] `is_dynamic_creative: false`
- [ ] `is_dynamic_creative_format_automation: false`
- [ ] `biz_ai_enabled_state: NOT_ENABLED`
- [ ] Não é Advantage+ Shopping Campaign
- [ ] Nenhuma automação ligada por recomendação da API em vez de pedido do usuário
- [ ] `ads_creative_create_image_variations` **não** foi chamada
- [ ] `self_ai_disclosure` levantado com o usuário e definido por ele — ou deliberadamente omitido
- [ ] **Leitura de volta feita** e reportada: criativo, ad set, preview, status
- [ ] Nenhuma entidade ativada sem pedido explícito
