# Benchmarks de tráfego — DTC saúde/beleza (EUA)

> Faixas de referência observadas, **não metas contratuais nem promessa de desempenho**.
> Varia por fonte, criativo, ângulo, público, período e qualidade do funil.
> Fonte: brief Crowned (H&W Hub), tráfego frio EUA.

---

## Faixas por formato

| Métrica | Imagem | Vídeo | Definição |
|---|---|---|---|
| **CPM** | $40–$55 | $50–$65 | Custo por mil impressões |
| **CPC** | $0.50–$0.80 | $1.00–$1.20 | Custo por clique no link |
| **Connect Rate** | >85% | >85% | Visualização da LP / cliques no link |
| **Hook Rate** | — | >50% | Reprodução ≥3s / impressões |
| **Body Rate** | — | >5% | Reprodução de 75% / reproduções |
| **Adv → Checkout** | 25–30% | 25–30% | Passagem do advertorial pro checkout |
| **Conversão no Checkout** | 8% | 12% | Compras / checkouts iniciados |
| **IC (custo por Initiate Checkout)** | $6–$8 | $8–$10 | — |

---

## A leitura que importa

O vídeo custa mais em **toda a entrada do funil** — CPM maior, CPC quase o dobro, IC mais alto —
e **compensa no fim**, convertendo 12% no checkout contra 8% da imagem.

> **Não compare formatos por CPC.** Comparar pelo clique faz a imagem parecer sempre superior
> e leva à decisão errada. A comparação válida é **IC contra taxa de checkout**:
> quanto custou colocar alguém no carrinho, e quantos daqueles fecharam.

---

## Diagnóstico por métrica — o que consertar

Esta é a tabela que fecha o loop entre performance e copy. Cada métrica fraca aponta
para um **bloco específico** (ver `frameworks/01-block-anatomy.md`).

| Métrica abaixo da faixa | Diagnóstico | O que reescrever |
|---|---|---|
| **Hook Rate < 50%** | O problema é a abertura, **não a oferta** | Bloco `HOOK`. Trocar padrão de hook e subir o nível de Pathos. Testar H2. |
| **Body Rate < 5%** | Entra e perde no meio | Blocos de `PROVA PESSOAL + TIMELINE` e `HISTÓRIA EMOCIONAL`. Falta loop aberto ou a virada mecânica demorou. |
| **Connect Rate < 85%** | Problema técnico, não de copy | Velocidade da LP, redirect, pixel. Não mexa na copy. |
| **Adv → Checkout < 25%** | O advertorial não fechou a venda | Blocos de `QUEBRA DE OBJEÇÕES` e `MECANISMO DA SOLUÇÃO`. Objeção viva no momento do CTA. |
| **Checkout < 8–12%** | Mismatch de promessa ou atrito de preço/oferta | Alinhamento ad ↔ LP ↔ checkout. Garantia visível. |
| **CPM muito acima** | Criativo com sinal de qualidade baixo, ou público estreito | Body image / claim agressivo pode estar penalizando a entrega. Rodar `peptide-compliance`. |
| **CTR alto + conversão baixa** | Hook desalinhado do produto | O hook prometeu outra coisa. Realinhar `HOOK` com `SOLUÇÃO 2.0`. |

---

## Como usar isto no ciclo de criação

1. Toda peça entregue declara qual **ângulo** e qual **estágio de consciência** ela ataca
2. Ao reportar performance, informe métrica + ângulo + avatar
3. A skill de copy usa a tabela de diagnóstico acima para reescrever **apenas o bloco culpado** —
   nunca a peça inteira. Reescrever tudo destrói o aprendizado do teste.
