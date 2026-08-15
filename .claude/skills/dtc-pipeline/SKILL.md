---
name: dtc-pipeline
description: >-
  Orquestrador de ponta a ponta — recebe o link de um produto no ecommerce e executa as 3 etapas
  completas: (1) brief-mestre em MD + HTML modelado no Crowned, (2) 8 imagens estáticas + 8 long
  text ads em ângulos diferentes, (3) advertoriais com HTML e quiz. Use SEMPRE que o usuário
  enviar uma URL de produto, disser "roda o pipeline", "faz tudo", "modela isso pro produto X",
  "mesma coisa que o Crowned mas pra [produto]", "etapa 1/2/3", ou pedir o pacote completo de
  criativos de um produto novo. É o ponto de entrada padrão do projeto.
---

# DTC Pipeline — do link ao pacote completo

Orquestra as 3 etapas. Cada etapa tem um **portão de aprovação**: nada avança sem o usuário
confirmar, porque erro de etapa 1 se multiplica por 16 nas etapas seguintes.

```
  URL do produto
       │
   ┌───▼────────────────────────── ETAPA 1 ──┐
   │ peptide-compliance CLASSIFY             │
   │ dtc-brief-architect  → brief.md         │
   │ brief-html-builder   → brief.html       │
   └───┬─────────────────────────────────────┘
       │  ⏸ APROVAÇÃO — o brief é a fundação
   ┌───▼────────────────────────── ETAPA 2 ──┐
   │ dtc-angles-hooks     → 8 ângulos × 5    │
   │ static-ad-creator    → 8 estáticas      │
   │ dtc-advertorial      → 8 long text ads  │
   └───┬─────────────────────────────────────┘
       │  ⏸ APROVAÇÃO — escolher os ângulos vencedores
   ┌───▼────────────────────────── ETAPA 3 ──┐
   │ dtc-advertorial          → copy longa   │
   │ advertorial-html-builder → index.html   │
   │                            + quiz       │
   └───┬─────────────────────────────────────┘
       │  ⏸ AUDIT final
   peptide-compliance AUDIT + copy-critic
```

---

## ETAPA 0 — Ingestão do produto

Ao receber a URL, extraia **antes de perguntar qualquer coisa**:

1. `WebFetch` na página do produto. Se a página for JS-heavy e vier vazia, tente
   `/products/<slug>.json` (Shopify), o `<script type="application/ld+json">`, ou peça um print.
2. Colete: nome · claim principal · ativos e concentrações · posologia · preço e bundles ·
   garantia · selos · FAQ · reviews (o filão de VOC) · fotos do produto · público implícito
3. Varra também: página "About", FAQ, reviews de 1–3 estrelas, e a política de reembolso real

**Registre a fonte de cada dado.** O que não estiver na página vira `⟨verificar⟩` — nunca invenção.

Depois rode `peptide-compliance` CLASSIFY. **Classe C interrompe o pipeline aqui.**

Só então pergunte, numa rodada só:
- Mercado e idioma de saída
- Profundidade do brief: Completo (10 avatares) ou Rápido (4)
- Plataforma de geração de imagem disponível
- URL de checkout (para o quiz da etapa 3) — pode ficar `'#'` e ser preenchida depois

---

## ETAPA 1 — Brief

`dtc-brief-architect` → `public/<slug>/01-BRIEF/brief.md`
`brief-html-builder` → `public/<slug>/01-BRIEF/brief.html`

Entregue com um resumo de 5 linhas: classe, Big Idea, MUP, nº de avatares, e o que ficou `⟨verificar⟩`.

**Pare e peça aprovação.** Diga explicitamente o que revisar:
> Confere principalmente o **MUP** e a **Big Idea** — tudo nas etapas 2 e 3 sai deles.

---

## ETAPA 2 — Criativos de topo

Rode em paralelo (uma mensagem, várias chamadas), porque não dependem entre si:

| Skill | Saída |
|---|---|
| `dtc-angles-hooks` | `angles-hooks.md` — 8 ângulos × 5 hooks |
| `static-ad-creator` | `statics/` — 8 conceitos + prompts + imagens |
| `dtc-advertorial` (modo 8×) | `adtext/` — 8 long text ads, um por ângulo |

**Regra de pareamento:** a estática N, o long text N e o ângulo N são **o mesmo ângulo**.
O pacote é testável por ângulo — 8 conjuntos coerentes, não 24 peças soltas.

**Pare e peça aprovação.** Peça ao usuário para escolher os 2–4 ângulos que vão para a etapa 3.

---

## ETAPA 3 — Advertoriais

Para cada ângulo aprovado:
`dtc-advertorial` (copy longa) → `advertorial-html-builder` (HTML + quiz)
→ `public/<slug>/03-ADVERTORIAIS/ADV<N>-<angulo>/index.html`

Rode `peptide-compliance` AUDIT e `copy-critic` sobre o conjunto antes de fechar.

---

## Situação 2 — modelar para outro produto

Quando o usuário disser *"faz o mesmo pro produto X"*:

1. **Não copie conteúdo do produto anterior.** Copie **estrutura e profundidade**.
2. Rode o pipeline do zero a partir da URL nova.
3. O que se reutiliza: esqueletos HTML, CSS, lógica do quiz, taxonomia de blocos,
   os 8 ângulos canônicos, o formato visual das estáticas.
4. O que **nunca** se reutiliza: MUP, Big Idea, avatares, VOC, hooks, nomes de sistema.
   Um MUP reciclado é a falha mais comum e mais cara na clonagem de campanha.
5. Ao fim, diga em uma linha o que foi herdado como estrutura e o que foi construído do zero.

---

## Estado do pipeline

Mantenha `public/<slug>/_STATUS.md` atualizado a cada etapa:

```
PRODUTO: ...    URL: ...    CLASSE: ...    SLUG: ...
ETAPA 1  ✅ brief.md · brief.html          aprovado em [data]
ETAPA 2  ⏳ hooks ✅ · estáticas 6/8 · adtext ✅
ETAPA 3  ⬜
PENDÊNCIAS: ⟨verificar⟩ garantia · CHECKOUT_URL não definida
```

Assim qualquer sessão futura retoma sem reconstruir contexto.

---

## Regras

- **Portões de aprovação são obrigatórios.** Não emende as 3 etapas sem confirmação.
- **Erro de etapa 1 se multiplica.** MUP fraco = 8 estáticas e 8 ads fracos.
- **Paralelize dentro da etapa, nunca entre etapas.**
- Toda entrega passa por `peptide-compliance` AUDIT antes de ser considerada pronta.
- Nunca invente dado de produto. `⟨verificar⟩` e siga.
