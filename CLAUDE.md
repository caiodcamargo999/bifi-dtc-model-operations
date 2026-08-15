# BIFI Copy Engine — sistema agêntico de copywriting para DTC e peptídeos

Recebe o **link de um produto no ecommerce** e devolve o pacote completo de criativos:
brief-mestre, imagens estáticas, long text ads e advertoriais em HTML com quiz.

Tudo modelado no **Crowned**, que é o padrão-ouro do projeto (`reference/crowned/`).

---

## Pipeline — 3 etapas com portões de aprovação

```
URL do produto
     │
 ┌───▼── ETAPA 1 ── FUNDAÇÃO ────────────────────┐
 │ peptide-compliance CLASSIFY  → classe A/B/C/D │
 │ dtc-brief-architect          → brief.md       │
 │ brief-html-builder           → brief.html     │
 └───┬───────────────────────────────────────────┘
     │  ⏸ APROVAÇÃO — confira MUP e Big Idea
 ┌───▼── ETAPA 2 ── CRIATIVOS DE TOPO ───────────┐
 │ dtc-angles-hooks   → 8 ângulos × 5 hooks      │  ┐
 │ static-ad-creator  → 8 estáticas UGC 1:1      │  ├ em paralelo
 │ dtc-advertorial 8× → 8 long text ads          │  ┘
 └───┬───────────────────────────────────────────┘
     │  ⏸ APROVAÇÃO — escolher 2–4 ângulos vencedores
 ┌───▼── ETAPA 3 ── ADVERTORIAIS ────────────────┐
 │ dtc-advertorial          → copy longa         │
 │ advertorial-html-builder → index.html + quiz  │
 └───┬───────────────────────────────────────────┘
     ▼
 peptide-compliance AUDIT + copy-critic
```

**Ponto de entrada padrão: `dtc-pipeline`.** Ele orquestra as 3 etapas.

### Pareamento por ângulo
Estática N, hooks N.x e long text ad N são **o mesmo ângulo**.
O pacote é testável por ângulo — 8 conjuntos coerentes, não 24 peças soltas.

---

## Regras do projeto

### 1. Compliance é portão, não revisão final
`peptide-compliance` roda **duas vezes**: CLASSIFY antes de qualquer escrita (a classe define o
teto de claim) e AUDIT antes de qualquer entrega. Produto **Classe C** (research-grade:
BPC-157, TB-500, ipamorelin) **não gera copy de aquisição** — a skill para e explica alternativas.

### 2. Portões de aprovação são obrigatórios
Não emende as 3 etapas sem confirmação. **Erro de etapa 1 se multiplica por 16**:
um MUP fraco vira 8 estáticas fracas e 8 ads fracos.

### 3. Sem brief, sem copy
Nada sai sem `public/<slug>/01-BRIEF/brief.md`. Copy sem brief é adivinhação com adjetivo bonito.

### 4. Copy é bloco rotulado, nunca prosa corrida
Todo output leva o rótulo funcional acima de cada bloco (`knowledge/frameworks/01-block-anatomy.md`).

### 5. Frases de no máximo 20 palavras (copy de vídeo)
As skills BIFI nunca cortam frase no meio. Acima de 20 palavras (@2.75 pal/s ≈ 7,3s) estoura o
teto do Veo e força resegmentação. **Meça, não estime.**

### 6. Reescreva o bloco, não a peça
Reporte de performance → `knowledge/metrics/benchmarks.md` → tabela de diagnóstico →
reescreva só o bloco culpado. Reescrever tudo destrói o aprendizado do teste.

### 7. Nunca invente prova
Estatística sem fonte, VOC inventado e status regulatório suposto envenenam o brief e acabam
num ad. Marque `⟨verificar⟩` e entregue sinalizado.

### 8. Reutilize estrutura, nunca conteúdo (situação 2)
Ao modelar para outro produto: herde esqueletos HTML, CSS, quiz, taxonomia de blocos e os
8 ângulos canônicos. **Nunca** herde MUP, Big Idea, avatares, VOC ou hooks —
MUP reciclado é a falha mais cara na clonagem de campanha.

---

## Idioma

- **Docs, briefs, explicações:** PT-BR
- **Copy de saída:** EN-US por padrão, PT-BR sob pedido
- **PT-BR é transcriação, não tradução literal** — o VOC precisa soar nativo
- **Prompts de IA:** inglês (padrão das skills BIFI)

---

## Skills

| Skill | Etapa | Quando |
|---|---|---|
| `dtc-pipeline` | — | **Entrada padrão.** URL de produto, "faz tudo", "modela pro produto X" |
| `peptide-compliance` | 0 e final | CLASSIFY produto novo · AUDIT antes de entregar |
| `dtc-brief-architect` | 1 | URL → brief-mestre |
| `brief-html-builder` | 1 | brief.md → brief.html navegável |
| `dtc-angles-hooks` | 2 | 8 ângulos × 5 hooks · Hook Rate baixo |
| `static-ad-creator` | 2 | 8 imagens estáticas UGC |
| `dtc-advertorial` | 2 e 3 | 8 long text ads (modo 8×) · copy longa do advertorial |
| `advertorial-html-builder` | 3 | copy → index.html + quiz |
| `dtc-vsl-writer` | extra | VSL, UGC, talking-head |
| `bifi-creative-handoff` | extra | copy → prompts de vídeo/imagem BIFI |

**Subagentes:** `voc-miner` · `avatar-researcher` · `mechanism-architect` · `copy-critic`

---

## Mapa do repositório

| Caminho | O que é |
|---|---|
| `knowledge/frameworks/` | 01 blocos · 02 avatar · 03 mecanismo · 04 hooks · 05 formato estáticas |
| `knowledge/peptides/` | Classes regulatórias · compliance de plataforma |
| `knowledge/metrics/` | Benchmarks + diagnóstico métrica → bloco |
| `templates/brief-html/` | `skeleton.html` + `brief.css` + `brief.js` (extraídos do Crowned) |
| `templates/advertorial/` | `skeleton.html` + `advertorial.css` + `quiz.js` + `quiz-overlay.html` |
| `templates/*.template.md` | brief · angles-hooks · vsl · advertorial |
| `reference/crowned/` | **Padrão-ouro** — brief extraído + destilado + `advertorials/ADV1–4.html` |
| `reference/bifi-skills/` | As 4 skills de produção de criativo (não editar) |
| **`public/<slug>/`** | **Todo entregável final.** Nada de saída fora daqui. |

### Estrutura de entrega — `public/`

Nomes em PT-BR, numerados pela etapa. O cliente/afiliado abre a pasta e entende sem explicação.

```
public/<slug>/
  _STATUS.md                              estado das 3 etapas + pendências
  01-BRIEF/
    brief.html                            ← o principal: navegável, com botões de copiar
    brief.md                              fonte em markdown
  02-CRIATIVOS-TOPO/
    angulos-e-hooks.md                    8 ângulos × 5 hooks
    imagens-estaticas/
      conceitos.md                        8 conceitos + pareamento
      PROMPTS-PARA-NANO-BANANA.txt        colar direto no Antigravity
      AD01.png … AD08.png                 devolvidos depois de gerar
    ad-texts/
      AD1-causa-raiz.md … AD8-descoberta.md
  03-ADVERTORIAIS/
    ADV1-<angulo>/
      index.html                          página completa com quiz
      copy.md                             a copy em blocos rotulados
      imagens/
```

**Regras de organização:**
- Um diretório por produto, slug em minúsculas com hífen
- Prefixo numérico nas pastas de etapa — a ordem de leitura é a ordem de produção
- O arquivo que a pessoa deve abrir primeiro é sempre o mais óbvio da pasta
- Nada de arquivo temporário, rascunho ou `_old` em `public/`

---

## Geração de imagem — fora deste projeto

**Este projeto não gera imagens.** A geração acontece no **Google Antigravity**, que já tem o
Nano Banana nativo. `static-ad-creator` entrega os conceitos e o pacote de prompts
(`statics/_prompts.txt`); o usuário gera lá e devolve os PNGs para `statics/`.

**Nunca diga que gerou uma imagem.** A saída desta etapa é prompt.

Prompts saem no formato Nano Banana: **prosa descritiva** (não sopa de keywords),
com `Square 1:1 format.` e a negação explícita de texto/logo/watermark no fim —
o Nano Banana Pro é bom em renderizar texto e adiciona por conta própria se não for barrado.

---

## Padrão-ouro

`reference/crowned/` — sérum capilar GHK-Cu, Classe A: 10 avatares, Won't Tell/Can't Tell,
mecanismo de 3 etapas, 5 ads decompostos, 40 hooks, 8 long text ads, 4 advertoriais e benchmarks.

**Calibre profundidade por ele — nunca copie conteúdo.**
Um avatar de 3 linhas não gera hook nível 4; gera "Cansada de X?".
