# Peptídeos em DTC — classes e teto de claim

> ⚠️ **Este arquivo é orientação operacional de copy, não aconselhamento jurídico ou médico.**
> Status regulatório muda. Sempre valide o status vigente do ativo e a política real da marca
> antes de publicar. Quando houver conflito, vence o disclaimer aprovado pelo anunciante.

A palavra "peptídeo" cobre quatro mundos regulatórios completamente diferentes.
**Escrever copy sem classificar primeiro é o erro nº1 do nicho** — gera reprovação de conta,
chargeback e, no pior caso, exposição legal do afiliado.

---

## Classificação em 4 classes

### Classe A — Peptídeo cosmético tópico
**Exemplos:** Copper Tripeptide-1 (GHK-Cu), Palmitoyl Pentapeptide-4 (Matrixyl),
Acetyl Hexapeptide-8 (Argireline), Palmitoyl Tripeptide-1, Copper Peptides.

| | |
|---|---|
| **Categoria** | Cosmético |
| **Via** | Tópica (sérum, creme, leave-in) |
| **Teto de claim** | **Aparência.** "Aparência de cabelo mais cheio", "aparência de linhas reduzidas" |
| **Verbos permitidos** | *supports, helps, conditions, improves the appearance of, looks* |
| **Verbos proibidos** | *treats, cures, regrows, restores, reverses, heals, prevents* |
| **Tráfego** | Meta / Google / TikTok / Native — todos viáveis com copy de aparência |
| **Risco** | Baixo, se a copy ficar em aparência e ambiente |

> Um cosmético **não pode alterar estrutura ou função do corpo** na linguagem da copy.
> No momento em que você escreve "regrows hair", ele virou um medicamento não aprovado.
> Escreva **"supports the environment around the follicle"** e **"fuller-looking"**.

---

### Classe B — Peptídeo ingerível / suplemento alimentar
**Exemplos:** collagen peptides, whey/milk-derived bioactive peptides, creatina (tecnicamente não é peptídeo, mas cai na mesma vala comercial).

| | |
|---|---|
| **Categoria** | Suplemento alimentar (DSHEA, EUA) |
| **Teto de claim** | **Structure/function claim** + disclaimer obrigatório |
| **Disclaimer** | *"These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease."* |
| **Verbos permitidos** | *supports, helps maintain, promotes* — sempre sobre estrutura/função normal |
| **Verbos proibidos** | Qualquer referência a doença nomeada (artrite, osteoporose, alopecia, diabetes) |
| **Risco** | Médio. O risco real é **claim de doença**, não o ingrediente. |

---

### Classe C — Peptídeo de pesquisa / mercado cinza 🚨
**Exemplos:** BPC-157, TB-500 (Thymosin Beta-4), Ipamorelin, CJC-1295, Melanotan II,
GHK-Cu **injetável**, e a maioria do que é vendido como "research peptide".

| | |
|---|---|
| **Categoria** | **Nenhuma legítima em DTC.** Vendido como "research use only, not for human consumption" |
| **Status** | A FDA colocou vários desses (incluindo BPC-157 e ipamorelin) na **Categoria 2** da lista de substâncias a granel para manipulação — substâncias com risco significativo de segurança, não elegíveis para compounding. Peptídeos, em geral, **não atendem à definição de ingrediente dietético**. Muitos também constam da lista proibida da WADA. |
| **Teto de claim** | **Nenhum.** Não existe copy de resposta direta compatível. |
| **Tráfego** | Meta, Google e TikTok proíbem. Conta reprovada, frequentemente com ban permanente. |

> **REGRA DURA DO PROJETO:** este sistema **não produz copy de aquisição para Classe C.**
> Se o produto submetido for Classe C, a skill `peptide-compliance` para o pipeline e reporta.
> O que é possível fazer: conteúdo educacional/editorial sem oferta, sem promessa, sem CTA de compra —
> e mesmo isso é decisão do anunciante e do jurídico dele, não do copywriter.

---

### Classe D — Peptídeo farmacêutico aprovado
**Exemplos:** semaglutida (Ozempic/Wegovy), tirzepatida (Mounjaro/Zepbound), liraglutida, sermorelina.

| | |
|---|---|
| **Categoria** | Medicamento sob prescrição |
| **Teto de claim** | Regido pela bula. Publicidade de prescrição tem regras próprias (nos EUA exige fair balance e brief summary) |
| **Tráfego** | Google exige certificação para anunciantes de farmácia/prescrição; Meta restringe fortemente |
| **Uso realista em afiliado** | Quase sempre **como contexto do problema, não como produto**. Ex.: o ângulo "queda capilar pós-GLP-1" usa a droga como *gatilho do problema* enquanto vende um cosmético Classe A. |

> O ângulo **"pós-GLP-1"** é dos mais fortes do mercado atual justamente por isso:
> herda a urgência e o volume de busca de uma Classe D, mas vende uma Classe A.
> Ao escrever esse ângulo: nunca prometa nada sobre a droga, nunca desaconselhe uso,
> nunca sugira interrupção de tratamento. A droga é cenário, não alvo.

---

## Fluxo de classificação (a skill roda isso primeiro, sempre)

```
1. Qual é a via de administração?
   tópica → provável Classe A
   oral   → Classe B (ou D se prescrição)
   injetável/subcutânea → Classe C ou D — PARE e verifique

2. O ativo tem aprovação regulatória como medicamento?
   sim → Classe D
   não → siga

3. É vendido com rótulo "research use only" / "not for human consumption"?
   sim → CLASSE C → PIPELINE INTERROMPIDO

4. É comercializado como cosmético ou suplemento com rótulo de consumo?
   cosmético  → Classe A → teto: aparência
   suplemento → Classe B → teto: structure/function + disclaimer
```

---

## Tabela de tradução de claim

O trabalho real do copywriter de peptídeo é esta coluna do meio.

| O que a prospect quer ouvir | ❌ Nunca escreva | ✅ Escreva |
|---|---|---|
| Meu cabelo vai voltar | "regrows hair", "reverses baldness" | "supports the look of fuller, denser-looking hair" |
| Vai curar minha queda | "treats hair loss", "cures alopecia" | "supports the scalp environment where growth begins" |
| Some as rugas | "removes wrinkles" | "helps reduce the appearance of fine lines" |
| Vou emagrecer | "burns fat", "melts weight" | *(Classe A/B não sustenta isso — reveja o produto)* |
| Cura minha lesão | "heals injuries", "repairs tissue" | *(Classe C — pipeline interrompido)* |
| Reativa o que morreu | "revives dead follicles" | "dormant does not have to mean gone" |

> Note o padrão: **o claim se move do corpo para o ambiente, e do resultado para a aparência.**
> Isso não enfraquece a copy — a força vem do mecanismo, do avatar e do Pathos, não do verbo.
> Os ads de maior conversão do brief de referência são todos aparência + mecanismo.

---

## Blocos de segurança obrigatórios por classe

| Bloco | A | B | C | D |
|---|:-:|:-:|:-:|:-:|
| Disclaimer FDA (structure/function) | — | ✅ | — | — |
| "Results vary" / "Individual results may vary" | ✅ | ✅ | — | ✅ |
| "Consult your healthcare provider" (gravidez/amamentação/condição) | ✅ | ✅ | — | ✅ |
| Não substitui tratamento médico | ✅ | ✅ | — | ✅ |
| Termos reais da garantia (validar antes de publicar) | ✅ | ✅ | — | ✅ |
| Fair balance / brief summary | — | — | — | ✅ |
