---
name: dtc-brief-architect
description: >-
  Constrói o brief-mestre de um produto DTC ou peptídeo a partir de um link de ecommerce — a
  fundação de onde toda a copy sai. Produz avatares completos com Won't Tell / Can't Tell, código
  emocional (Ethos/Pathos/Formato), Big Idea, One Belief, MUP, mecanismo do problema e da solução,
  hierarquia de revelação, forças vitais, VOC, objeções e estágios de consciência. Use SEMPRE que
  o usuário enviar uma URL de produto, apresentar uma oferta nova, uma lista de ingredientes, ou
  pedir "brief", "avatares", "persona", "big idea", "mecanismo", "pesquisa de público", "monte a
  base do produto". Também acione para expandir ou corrigir um brief existente.
---

# DTC Brief Architect

Constrói a fundação. Nenhum hook, VSL ou advertorial deste projeto pode ser escrito sem o brief —
copy sem brief é adivinhação com adjetivo bonito.

**Antes de começar:** rode `peptide-compliance` em modo CLASSIFY. A classe define o teto de claim
de tudo que vier depois. Se a ficha de classe já existir na conversa, use-a e não repita.

Leia, nesta ordem:
1. `knowledge/frameworks/02-avatar-emotional-code.md`
2. `knowledge/frameworks/03-mechanism-big-idea.md`
3. `knowledge/frameworks/04-awareness-hooks.md`
4. `templates/brief.template.md` — a estrutura exata da saída
5. `reference/crowned/` — o padrão-ouro de profundidade. **Calibre por ele.**

---

## Fluxo

### 1. Ingestão da URL (antes de perguntar qualquer coisa)

Se veio um link de ecommerce, extraia tudo primeiro:

1. `WebFetch` na página do produto. Página JS-heavy voltou vazia? Tente `/products/<slug>.json`
   (Shopify), o `<script type="application/ld+json">`, ou peça um print ao usuário.
2. Colete: nome · claim principal · ativos e concentrações · posologia · preço e bundles ·
   garantia · selos · FAQ · fotos · público implícito
3. **Reviews são o filão de VOC** — especialmente as de 1–3 estrelas. Puxe verbatims literais.
4. Varra também "About", FAQ e política de reembolso real

**Registre a fonte de cada dado.** O que não estiver na página vira `⟨verificar⟩`, nunca invenção.

### 1b. Coleta complementar (uma rodada só)

Pergunte só o que a página não respondeu, com múltipla escolha quando der:

- Mercado e idioma de saída
- Concorrente de referência, se houver
- Profundidade: **Rápido** (4 avatares) ou **Completo** (10 avatares, padrão Crowned)?

### 2. Pesquisa

Para brief **Completo**, despache subagentes em paralelo (uma única mensagem, várias chamadas):

| Subagente | Entrega |
|---|---|
| `voc-miner` | 6 temas × 5 verbatims reais, agrupados e citados |
| `avatar-researcher` | Segmentação de mercado, gatilhos de entrada no problema, TAM |
| `mechanism-architect` | MUP candidato, cadeia causal, mapa de invalidação de concorrentes |

Sem acesso a ferramenta de busca? Construa a partir do que o usuário forneceu e
**marque cada bloco não-verificado com `⟨verificar⟩`**. Nunca invente estatística ou verbatim
sem marcar. Um brief com lacunas honestas vale mais que um brief inventado.

### 3. Construção

Siga `templates/brief.template.md` seção por seção. Nas seções críticas:

**Avatares** — 10 no Completo, 4 no Rápido. Cada um com os 9 campos.
- Nome memorável e visual ("A Viúva da Risca", não "Mulher 35-50")
- Narrativa começa num **momento concreto**, nunca num sintoma
- Sinais comportamentais são observáveis. Se dá pra sentir mas não ver, é motivador, não sinal.
- **Won't Tell:** 1ª pessoa, entre aspas, crua
- **Can't Tell:** 3ª pessoa + linha-flecha (→) que já é copy pronta
- Nenhum avatar pode ter o mesmo Gatilho de Conversão de outro. Colidiu, funde os dois.

**Big Idea** — passe no teste: tire o nome do produto. Ainda é interessante? É Big Idea.
Virou genérica? É slogan, reescreva.

**MUP** — passe nos 3 testes (nome, absolvição, invalidação). Falhou em um, não serve.

**Mecanismo do problema** — 5 a 7 vilões, cada um fechando uma **saída lógica** diferente.
Um deles obrigatoriamente mata a categoria concorrente inteira.

**Mecanismo da solução** — sistema nomeado de N etapas, nunca lista de ingredientes.

**Hierarquia de revelação** — 6 camadas na ordem fixa. A camada 3 (Delivery) é a mais importante
e a que mais some nos briefs ruins.

### 4. Validação antes de entregar

- [ ] Cada avatar tem Won't Tell **e** Can't Tell preenchidos e distintos entre si
- [ ] Pelo menos 3 itens de Can't Tell estão em Pathos nível 4 (ver escada)
- [ ] Cada vilão do mecanismo do problema declara qual saída fecha
- [ ] O mecanismo da solução é um sistema nomeado, não uma lista
- [ ] Todo claim do brief cabe no teto da classe regulatória
- [ ] Objeções cobrem: "já tentei tudo", "é [droga dominante]?", "quanto tempo?",
      "e se não funcionar?", "é genético", "posso usar com [condição]?"
- [ ] Estatísticas têm fonte, ou estão marcadas `⟨verificar⟩`
- [ ] Os 5 estágios de consciência têm mensagem **e** frase-exemplo

### 5. Saída

Escreva em `public/<slug>/01-BRIEF/brief.md` e **renderize o HTML** com `brief-html-builder`
→ `public/<slug>/01-BRIEF/brief.html`. O HTML é o formato que o time consome de verdade;
o markdown é a fonte.

Entregue com um resumo de 5 linhas — classe, Big Idea, MUP, nº de avatares, e o que ficou
`⟨verificar⟩` — e ofereça o próximo passo:

> Brief em `public/<slug>/01-BRIEF/brief.md` + `brief.html`.
> Confere principalmente o **MUP** e a **Big Idea** — tudo nas etapas seguintes sai deles.
> Próximo: etapa 2 (`dtc-angles-hooks` · `static-ad-creator` · `dtc-advertorial`).

---

## Lembre-se

- **Profundidade é o produto.** Um avatar de 3 linhas não gera hook nível 4. Ele gera "Cansada de X?".
- O Can't Tell é o ativo mais valioso do brief inteiro. Se ele estiver raso, o brief está raso.
- Nunca copie os avatares do Crowned para outro produto. Use-os para **calibrar profundidade**,
  não como conteúdo.
- Claims médicos são do anunciante. Este projeto formata e estrutura — não valida nem inventa.
- Marque o que não puder verificar. Lacuna honesta > confiança inventada.
