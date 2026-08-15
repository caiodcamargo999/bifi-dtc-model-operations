# STATUS — AEVRA Health · Tesamorelina

```
PRODUTO   Tesamorelina (peptídeo GHRH) — AEVRA Health
URL       http://quiz5.aevrasurvey.com/  →  shop.aevrahealth.com
EMPRESA   AEVRA HEALTH AND FITNESS LLC · Orlando, FL
CLASSE    D — prescrição / telessaúde (+ manipulado não aprovado pela FDA)
RELAÇÃO   Aevra é cliente (jurídico deles valida claims)
CHECKOUT  https://shop.aevrahealth.com/checkout ⚠️ ver item nº1 abaixo
SLUG      aevra-health
```

| Etapa | Status | Saída |
|---|---|---|
| **0 · Compliance** | ✅ | `00-COMPLIANCE/ficha-de-classe.md` |
| **1 · Brief** | ✅ aprovado, com etapa 2/3 já embutidas | `01-BRIEF/brief.md` + `brief.html` |
| **2 · Criativos de topo** | ✅ completa | `02-CRIATIVOS-TOPO/` |
| **3 · Advertoriais** | ✅ **3 de 3 construídos** | `03-ADVERTORIAIS/` |

**Pipeline completo.** Falta apenas: regerar 1 imagem (AD02) e o cliente confirmar 2 itens
de negócio (VOC real, fluxo de checkout). Ver pendências abaixo.

---

## Etapa 3 — entregue

| Advertorial | Ângulo | Registro | Hero image |
|---|---|---|---|
| `03-ADVERTORIAIS/ADV1-pos-glp1/` | 6 — Pós-GLP-1 | comunidade/peer-to-peer | AD06.jpg |
| `03-ADVERTORIAIS/ADV2-alcance/` | 3 — Alcance (category killer) | investigativo | AD03.jpg |
| `03-ADVERTORIAIS/ADV3-pinch-test/` | 2 — Pinch Test | UGC cru | ⏸ aguardando AD02 regerado |

Arquétipo **STORY** (17 seções — 22 do esqueleto menos "AS SEEN ON" e "comentários",
omitidas por compliance, ver abaixo). Cada um com quiz de qualificação de 6 perguntas,
`CHECKOUT_URL` configurada, `withParams` intacto (tracking do afiliado preservado).

### Adaptações de compliance vs. o padrão-ouro Crowned — leia antes de publicar

O esqueleto do Crowned (ADV2/ADV3 originais) usa táticas que **não são compatíveis com
Classe D** e foram deliberadamente removidas ou reformuladas aqui:

| Padrão Crowned | O que mudou aqui | Por quê |
|---|---|---|
| Veículo de imprensa fictício + logos "AS SEEN ON" (NBC/CBS/Fox não verificados) | Masthead com a marca real da Aevra, seção "AS SEEN ON" **removida inteiramente** | Logos de imprensa não autorizados são falsa credibilidade — risco direto de compliance |
| Jornalista fabricado ("Rebecca Shaw") + contagem de views fake ("251.328 👁") | Byline neutra "Aevra Health · Patient Education Team" | Nunca fabricar identidade de autor/profissional em conteúdo de saúde |
| Depoimentos nomeados com foto + selo "verified" ("Melissa", "Kayla") | "Patterns Providers Commonly See" — explicitamente rotulado como composição ilustrativa, sem nome, sem selo de verificação | Testemunho de saúde fabricado apresentado como real é o risco legal mais sério do formato |
| Timeline de resultado pessoal ("Semana 2: baby hairs") | "The Trial Timeline" — descreve o desenho do ESTUDO clínico (26 semanas, medido por TC), nunca promete resultado individual | Classe D não permite promessa de prazo/resultado de tratamento médico |
| "Chamaram de Crowned®" (nome de ritual de consumo) | "This isn't a weight-loss program. It's a compartment-specific evaluation." | Decisão já registrada na etapa 1: batizar um ritual de consumo aumenta o risco em Classe D |
| Barra de escassez falsa ("82% do estoque reservado") + contador de frete | **Removida.** CTA tem só o disclaimer inline | Escassez fabricada em funil médico é agressiva e não verificável |
| Resultado do quiz = "índice" pseudo-diagnóstico + desconto de 70% | Resultado reformulado: "you may be a candidate", contagem neutra de sinais marcados, **sem** imagem de produto, disclaimer completo embutido no resultado (não só no rodapé) | Um quiz não pode diagnosticar nem prometer aprovação — isso é função do provedor licenciado |
| Seção de comentários estilo Facebook (fabricada) | **Removida inteiramente** | Comentários fabricados apresentados como reais |
| — | Seção de **referências reais** adicionada (Falutz et al., NEJM 2007; meta-análise de RCTs) | O Crowned já tinha isso (`.refs`) — mantido e trocado pelas citações certas da tesamorelina |

**Isto não é frescura de compliance — é o que separa uma conta que sobrevive à revisão de
plataforma/jurídico de uma que não sobrevive.** Se o jurídico da Aevra quiser reintroduzir
qualquer um dos padrões da esquerda, é decisão deles, documentada e assinada — não algo
para reintroduzir por conta própria copiando o Crowned.

### Pendência de imagem — ADV3

`AD02.jpg` (Pinch Test) mostra o oposto do que a copy descreve — dedos pinçando uma dobra
mole com facilidade, quando o argumento é que **não dá para pinçar**. Prompt corrigido em
`02-CRIATIVOS-TOPO/imagens-estaticas/PROMPTS-PARA-NANO-BANANA.txt`. Até a regeração,
`ADV3-pinch-test/index.html` não tem hero image (nota em `imagens/_PENDENTE.md`).

---

## Etapa 2 — entregue

| Entrega | Arquivo |
|---|---|
| **40 hooks** (8 ângulos × 5) | `02-CRIATIVOS-TOPO/angulos-e-hooks.md` |
| **8 imagens estáticas geradas** (JPEG, 1024×1024) | `02-CRIATIVOS-TOPO/imagens-estaticas/AD01–08.jpg` |
| **8 prompts Nano Banana** | `02-CRIATIVOS-TOPO/imagens-estaticas/PROMPTS-PARA-NANO-BANANA.txt` |
| **8 long text ads** (4.855 palavras) | `02-CRIATIVOS-TOPO/ad-texts/AD1–AD8` |

**Pareamento por ângulo:** AD0N.jpg ↔ hooks N.x ↔ ad text ADN. 8 conjuntos testáveis.

**Distribuição de Pathos:** 95% em nível 3–4 (meta era ≥40%). Zero hooks em nível 1.

**Correções de compliance aplicadas nesta rodada:**
- Extensão de arquivo corrigida: as 8 imagens saíram como JPEG mas com extensão `.png` — renomeadas para `.jpg` em todo o projeto (conceitos, prompts, ad-texts, angulos-e-hooks, brief.html)
- **AD02 marcado para regeração** (ver acima)
- Valor não-verificado "eleven thousand dollars" removido do AD3 (bloco PONTO DE DESESPERO)
  e dos hooks 3.3 e 8.4, substituído por linguagem qualitativa defensável

**Adaptação estrutural registrada:** o ângulo 7 do playbook Crowned era *Timeline/Sequência*
("semana 2: menos queda"). Não transfere para Classe D. Foi substituído por *A Métrica Errada*.

---

## Etapa 1 — entregue

**`01-BRIEF/brief.html`** — agora com **as 4 seções antes pendentes preenchidas** com o
conteúdo real da etapa 2 (40 hooks copiáveis, 8 ad texts em versão anotada e versão limpa,
8 conceitos de estática com preview de imagem) + link direto pros 3 advertoriais da etapa 3.
170KB, arquivo único, sem dependência externa.
**`01-BRIEF/brief.md`** — 5.603 palavras, a fonte.

### O que confere primeiro

1. **MUP — "the fat behind the wall"** — passou nos 3 testes (nome, absolvição, invalidação)
2. **Big Idea** — *"Você não tem um problema de peso. Você tem um problema de endereço."*
3. **Camada 3 da hierarquia (alcance)** — é o coração da peça, equivalente ao *delivery* do Crowned

---

## 🚩 Pendências de negócio (não são erro de execução — dependem de você/Aevra)

### 1. VOC ainda não é real
Tentei coleta real via busca nesta rodada (r/PeptideGuide, r/Ozempic, "can't pinch belly fat",
"tesamorelin experience"). **A ferramenta de busca disponível não retorna threads/comentários
reais do Reddit** — só agrega artigos de saúde de veículos como Healthline/AOL. Os 6 temas de
VOC no brief continuam **inferidos**, marcados `⟨verificar⟩`, e os 3 hooks que dependiam deles
(2.4, 5.5, 8.5) seguem marcados `⟨v⟩`. Não inventei verbatim para preencher a lacuna —
isso violaria a regra nº7 do projeto (nunca invente prova). Para resolver de verdade:
acesso manual a fóruns, ou uma ferramenta com navegação real.

### 2. Checkout vs. avaliação médica
Você passou `https://shop.aevrahealth.com/checkout` e eu integrei — todo CTA do quiz leva
pra lá. Mas o site-mãe da Aevra declara *"treatment is only initiated after a comprehensive
medical evaluation"*, e esse endpoint parece ser o checkout geral da loja, não um formulário
de intake médico. Suavizei o quanto deu na copy (CTA diz "Continue to Aevra Health", nunca
"comprar", e o resultado do quiz tem disclaimer inline dizendo que um provedor licenciado
revisa antes de qualquer dispensação) — mas **o processo de negócio em si continua sem
resposta**. Se existir uma URL de intake/avaliação separada, é ela que deveria estar aqui.

## Pendências `⟨verificar⟩` restantes

| # | Item | Impacto |
|---|---|---|
| 1 | VOC não coletado (ver acima) | 🔴 Alto |
| 2 | Garantia / política de reembolso | Médio — objeção "e se não funcionar" |
| 3 | Queda de GH ~14%/década | Baixo — citação a confirmar |
| 4 | TAM de peptídeos (~$52bi) — fonte primária | Baixo |
| 5 | Benchmarks são do Crowned (Classe A), não desta oferta | Médio — servem de estrutura, não de meta |
| 6 | AD02.jpg precisa regeração | Alto — bloqueia hero do ADV3 |

## Decisões estruturais registradas

- **"Solução 2.0" NÃO foi usada.** Com Classe D, batizar um ritual de consumo em vez do produto
  aumenta o risco. Etapa 3 nomeia como avaliação clínica, nunca como produto/ritual.
- **Registro emocional é declínio e identidade**, não vergonha e ocultação (que era o Crowned).
- **Longevidade é força PRIMÁRIA** aqui (era moderada no Crowned).
- **GLP-1 é contexto do problema, nunca alvo de ataque** — avatar 2 e ADV1 dependem disso.
- **Testemunhos, imprensa e escassez fabricados foram removidos da etapa 3** — ver tabela
  de adaptações acima. Isso diverge do esqueleto literal do Crowned de propósito.
