---
name: static-ad-creator
description: >-
  Cria os conceitos e prompts das imagens estáticas de anúncio para produtos DTC — 8 conceitos,
  um por ângulo de copy, no formato UGC cru validado do Crowned (1:1, foto de celular real, sem
  texto, sem logo, sem produto). Entrega o pacote de prompts pronto para gerar no Google
  Antigravity / Nano Banana. Use quando o usuário pedir "imagens estáticas", "criativos de
  imagem", "as imagens do ad", "estáticas", "prompts das imagens", "AD01 até AD08", ou na
  etapa 2 do pipeline.
---

# Static Ad Creator

Produz o pacote de 8 imagens estáticas — **uma por ângulo de copy**, pareadas com os hooks
e os long text ads do mesmo número.

Leia antes:
- `public/<slug>/01-BRIEF/brief.md` — avatares e sinais comportamentais
- `public/<slug>/02-CRIATIVOS-TOPO/angulos-e-hooks.md` — os 8 ângulos
- `reference/bifi-skills/photorealism-prompts-bifi/SKILL.md` — a sintaxe dos prompts
- `knowledge/frameworks/05-static-ad-format.md` — o formato visual validado

---

## O formato validado (não negocie isto)

As estáticas do Crowned **não parecem anúncios**. São fotos de celular reais:

| Atributo | Valor |
|---|---|
| Proporção | **1:1** |
| Texto na imagem | **nenhum** — sem headline, sem legenda, sem badge |
| Logo / produto | **nenhum** — o produto não aparece |
| Câmera | celular, luz dura de banheiro, leve superexposição |
| Enquadramento | amador — cortado, torto, ângulo pouco lisonjeiro |
| Cenário | doméstico real, com bagunça (produtos na pia, escova, toalha) |
| Sujeito | pessoa real, sem maquiagem, expressão de aflição genuína |
| Conteúdo | **o problema demonstrado fisicamente** (cabelo na mão, couro cabeludo visto de cima) |

> **O princípio:** a imagem tem que passar como algo que uma amiga postaria, não como criativo.
> É isso que compra o scroll no feed. Toda vez que alguém "melhora" a foto — luz bonita,
> produto no quadro, texto por cima — o CTR cai, porque a imagem vira anúncio.

---

## Fluxo

### 1. Um conceito por ângulo

Para cada um dos 8 ângulos, defina o **momento fotografável**. Puxe dos
*sinais comportamentais* do avatar — eles já são visuais por construção.

```
CONCEITO 0N · Ângulo N — [nome]
Avatar:     [nome]
Momento:    [a cena exata, em uma frase]
Demonstra:  [o sinal físico visível no quadro]
Emoção:     [expressão — específica, nunca "triste"]
Cenário:    [ambiente + os objetos reais que estarão no quadro]
Pareia com: hook N.x · long text AD N
```

Cubra ângulos visuais **diferentes**: mão com cabelo, topo da cabeça, ralo do chuveiro,
escova cheia, espelho, rabo de cavalo na mão, foto antiga vs hoje, gaveta de produtos falhados.
Oito conceitos iguais em enquadramento = um teste, não oito.

### 2. Prompt fotorrealista

Siga `photorealism-prompts-bifi`. Estrutura: câmera + lente + abertura + ISO + luz + composição +
color science + detalhes físicos.

**Para o registro UGC, especifique explicitamente:**
- `shot on iPhone, front-facing camera` ou `handheld phone snapshot`
- `harsh overhead bathroom lighting` / `direct on-camera flash`
- `slightly overexposed, mild motion blur, amateur framing, slightly tilted`
- `candid, unposed, no makeup, tired skin`
- `real domestic clutter in background`
- **Nunca:** `professional photography`, `studio lighting`, `beauty shot`, `soft glow`

**Frase final obrigatória** quando houver pessoa/pele visível — sem alteração:
```
visible pores, micro-texture, natural skin imperfections, subtle peach fuzz, natural skin sheen, no airbushing, no smoothing filters
```

### 3. Geração — handoff para o Nano Banana

**Este projeto não gera as imagens.** A geração acontece no **Google Antigravity**, que já tem
o Nano Banana nativo. A entrega desta skill é o **pacote de prompts pronto para colar lá**.

Nunca diga que gerou uma imagem. A saída é prompt.

#### Ajustes de prompt para o Nano Banana

O Nano Banana é Gemini — ele **não** é Midjourney. Três diferenças que mudam o prompt:

1. **Prosa descritiva, não sopa de keywords.** Escreva em frases completas, como quem descreve
   a cena para uma pessoa. Os detalhes técnicos (câmera, lente, ISO, luz) entram dentro da frase,
   não como tags separadas por vírgula.

2. **Negue o texto explicitamente.** O Nano Banana Pro é *bom* em renderizar texto — e por isso
   às vezes adiciona por conta própria. Como o formato exige quadro limpo, feche todo prompt com:
   `No text, no captions, no logos, no watermarks, no graphics overlaid on the image.`

3. **Declare a proporção na própria frase:** `Square 1:1 format.`

#### Consistência de personagem — decida antes de gerar

O Nano Banana mantém a mesma pessoa entre imagens quando você fornece uma imagem de referência.
Isso é uma escolha de campanha, não um detalhe técnico:

| Escolha | Quando |
|---|---|
| **8 mulheres diferentes** | Padrão. Cada ângulo tem seu avatar próprio — cobre mais perfis e evita cara de campanha produzida. |
| **A mesma mulher nas 8** | Só quando o conjunto conta uma progressão ou vai virar UGC de uma "criadora" recorrente. |

Pergunte ao usuário na primeira vez. Se for a mesma pessoa, gere a imagem 1, e as outras 7
usam ela como referência no Antigravity.

#### Nota de disclosure

Imagens do Nano Banana saem com **marca d'água SynthID embutida** (invisível, detectável).
Isso é bom: satisfaz sinalização de conteúdo sintético sem sujar o quadro. Ainda assim, cumpra
a divulgação exigida pela plataforma de anúncios quando ela pedir declaração explícita.

### 4. Saída

```
public/<slug>/02-CRIATIVOS-TOPO/imagens-estaticas/
  ├── conceitos.md        os 8 conceitos + pareamento + prompts comentados
  └── _prompts.txt        só os 8 prompts, limpos, um por bloco — para colar no Antigravity
```

O `_prompts.txt` é o arquivo de trabalho: sem comentário, sem markdown, sem numeração
que atrapalhe o colar. Um prompt por bloco, separados por linha em branco.

Depois que o usuário gerar no Antigravity, ele devolve os PNGs para
`public/<slug>/02-CRIATIVOS-TOPO/imagens-estaticas/AD01.png … AD08.png` e a seção 🖼️ do `brief.html` passa a exibi-los.

### 5. Validação

- [ ] 8 conceitos, um por ângulo, **enquadramentos diferentes entre si**
- [ ] Prompts em **prosa descritiva**, não lista de keywords (formato Nano Banana)
- [ ] Todos fecham com a negação explícita de texto/logo/watermark
- [ ] `Square 1:1 format.` declarado na própria frase
- [ ] Decisão de consistência de personagem tomada (8 pessoas diferentes vs a mesma)
- [ ] Nenhum prompt pede produto no quadro
- [ ] Registro UGC explícito (celular, luz dura, amador) em todos
- [ ] Frase final obrigatória presente em todos os que têm pele visível
- [ ] Cada conceito declara com qual hook e qual long text ad ele pareia
- [ ] Avatar gerado não é semelhante reconhecível de pessoa real
- [ ] Sem before/after de corpo justaposto (reprova em Meta — ver compliance)

---

## Nota de compliance visual

Imagem reprova por motivos que a copy não reprova. Antes de entregar, cheque
`knowledge/peptides/02-ad-platform-compliance.md`, seções 1 e 5:

- Nada que implique auto-percepção negativa como julgamento da pessoa
- Sem before/after corporal em split-screen
- Sem sugestão de que o avatar é profissional de saúde certificado
- Sem marca ou watermark de terceiros no quadro

O que **passa** é a demonstração do problema como **comportamento e momento** —
que é exatamente o que o formato validado já faz.
