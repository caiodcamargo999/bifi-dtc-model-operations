# BIFI Copy Engine

Você manda o **link do produto no ecommerce**. O sistema devolve o pacote completo:
brief-mestre, 8 imagens estáticas, 8 long text ads e advertoriais em HTML com quiz.

Tudo modelado no **Crowned** — brief, estáticas, advertoriais e quiz foram engenharia-reversados
e viraram templates reutilizáveis.

---

## Como usar

```
Cole o link do produto:
   https://loja.com/products/xyz

→ dtc-pipeline assume e executa as 3 etapas, parando para aprovação entre elas.
```

Ou etapa a etapa:

| Você diz | Roda |
|---|---|
| "monta o brief desse produto [link]" | Etapa 1 → `brief.md` + `brief.html` |
| "gera as estáticas e os 8 ad texts" | Etapa 2 → `statics/` + `adtext/` |
| "monta o advertorial do ângulo 3" | Etapa 3 → `index.html` + quiz |
| "faz o mesmo pro produto X" | Pipeline inteiro, do zero, com a mesma estrutura |

---

## As 3 etapas

### Etapa 1 — Fundação
Ingestão da URL (produto, ativos, preço, garantia, **reviews como VOC**) → classificação
regulatória → brief-mestre com 10 avatares, Won't Tell/Can't Tell, Big Idea, MUP e mecanismo
→ renderizado como HTML navegável com sidebar, accordion e botões de copiar.

**⏸ Portão:** você confere MUP e Big Idea. Tudo depois sai deles.

### Etapa 2 — Criativos de topo
Três entregas em paralelo, **pareadas por ângulo**:

- **8 ângulos × 5 hooks** — cada hook com padrão e nível de Pathos declarados
- **8 imagens estáticas** — UGC cru 1:1, sem texto, sem logo, sem produto
- **8 long text ads** — um por ângulo, cada um com avatar e registro diferentes

Estática N + hooks N.x + ad text N = o mesmo ângulo. O pacote é testável por ângulo.

**⏸ Portão:** você escolhe os 2–4 ângulos que viram advertorial.

### Etapa 3 — Advertoriais
Copy longa + HTML completo com o **quiz de qualificação de 6 perguntas** —
índice de resultado, escassez, tela de não-qualificado e propagação de query params
para o checkout (preserva o tracking do afiliado).

Três arquétipos: **STORY** (o padrão), **WARNING/LETTER**, **NEWS/EXPOSÉ**.

---

## O que foi extraído do Crowned

| Asset | Onde | Uso |
|---|---|---|
| Brief completo | `reference/crowned/` | Calibrar profundidade |
| 4 advertoriais | `reference/crowned/advertorials/` | Os 3 arquétipos |
| CSS do advertorial (36KB) | `templates/advertorial/advertorial.css` | Reuso verbatim |
| Quiz completo (9KB) | `templates/advertorial/quiz.js` | Reuso verbatim |
| CSS + JS do brief | `templates/brief-html/` | Reuso verbatim |
| Formato das estáticas | `knowledge/frameworks/05-static-ad-format.md` | Especificação visual |

**Reutiliza-se estrutura, nunca conteúdo.** MUP, Big Idea, avatares, VOC e hooks
são sempre construídos do zero — MUP reciclado é a falha mais cara na clonagem de campanha.

---

## Estrutura

```
CLAUDE.md                  Pipeline, regras, idioma
.claude/skills/            10 skills
.claude/agents/            voc-miner · avatar-researcher · mechanism-architect · copy-critic
knowledge/
  frameworks/              blocos · avatar · mecanismo · hooks · formato estáticas
  peptides/                classes regulatórias · compliance de plataforma
  metrics/                 benchmarks + diagnóstico métrica → bloco
templates/
  brief-html/              skeleton + css + js
  advertorial/             skeleton + css + quiz
reference/
  crowned/                 padrão-ouro (brief + 4 advertoriais)
  bifi-skills/             as 4 skills de produção de vídeo/imagem
public/<slug>/             ← TODO entregável final
  _STATUS.md
  01-BRIEF/
  02-CRIATIVOS-TOPO/       angulos-e-hooks · imagens-estaticas · ad-texts
  03-ADVERTORIAIS/
```

**Tudo que é entregável vai para `public/`**, organizado por produto e numerado por etapa.
O resto do repositório é maquinário: conhecimento, templates e referência.

---

## Geração de imagem

A geração acontece no **Google Antigravity**, que já tem o Nano Banana nativo.
Este projeto entrega os 8 conceitos e o arquivo `statics/_prompts.txt` — prompts limpos,
um por bloco, prontos para colar. Você gera lá e devolve os PNGs para `statics/`.

Os prompts saem no formato que o Nano Banana espera: prosa descritiva em vez de keywords,
`Square 1:1 format.` declarado, e negação explícita de texto/logo no fim (ele renderiza
texto muito bem e adiciona sozinho se não for barrado).

O sistema **nunca simula que gerou uma imagem**.

---

## Escopo e limites

- O sistema **estrutura e formata** copy de saúde. Não valida ciência nem inventa claim médico.
- Compliance aqui é **operacional, não jurídico**. Políticas e status regulatório mudam.
- **Classe C** (peptídeos research-grade: BPC-157, TB-500, ipamorelin) não gera copy de
  aquisição — o pipeline para e explica as alternativas.
- Garantias, prazos e estatísticas saem marcados `⟨verificar⟩` até serem confirmados.
- Depoimentos e logos "AS SEEN ON" só entram se forem reais e autorizados.
