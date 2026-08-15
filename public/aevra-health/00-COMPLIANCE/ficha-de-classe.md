# Ficha de Classe — AEVRA Health

> Gerado por `peptide-compliance` (modo CLASSIFY) · Etapa 0 do pipeline
> **Auditoria operacional de copy, não parecer jurídico.** Valide a política vigente da marca,
> da plataforma e do jurídico do anunciante antes de publicar.

---

## O que foi encontrado

Link fornecido: `http://quiz5.aevrasurvey.com/` — é um **funil de quiz** (SPA em Vite),
não uma página de produto. O conteúdo do quiz é carregado via JS. Rastreando o bundle:

| Descoberta | Fonte |
|---|---|
| Age gate **21+** embutido no funil | bundle `index-GSLvDf2Q.js` |
| Destino: `shop.aevrahealth.com/products-list?q=tesamorelin` | bundle |
| Google Tag Manager `GTM-NRPZX3N3` | HTML do funil |
| `aevrasurvey.com` (raiz) → **404** | só os subdomínios de quiz existem |

### A empresa
**AEVRA HEALTH AND FITNESS LLC** — 7726 Winegard Road, Orlando, FL 32809 · +1 866-610-2623

Plataforma de **telessaúde com supervisão médica**. Posicionamento declarado:
*"Precision longevity, performance, and hormonal optimization."*

Linhas de oferta (meta description do site):
- **GLP-1** para gestão de peso
- **TRT / reposição hormonal**
- **Tratamento de ED**
- **Tesamorelina** (peptídeo — é onde este funil específico aterrissa)

### Modelo declarado pela própria marca
- Prioriza **GLP-1 de marca aprovados pela FDA**, dispensados por farmácias licenciadas nos EUA
- Preparações **manipuladas** vêm da **Olympia Pharmacy** (503A, Orlando FL) e são
  explicitamente declaradas **não aprovadas pela FDA**
- Provedor licenciado avalia elegibilidade — **"Not all patients will qualify"**
- Tratamento só depois de avaliação médica completa
- Conformidade com **HIPAA** e Notice of Privacy Practices

> As divulgações do site são adequadas e estão visíveis. Isso é um bom sinal:
> o anunciante já opera com a postura regulatória correta.

### Catálogo encontrado na loja
| Produto | Preço |
|---|---|
| Tesamorelin 10mg (3ml) — Lyophilized | $165.00 |
| Tesamorelin 5mg (3ml) — Lyophilized | $82.80 |

---

## CLASSIFICAÇÃO

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CLASSE:        D — medicamento sob prescrição (telessaúde)
               ⚠️ com componente manipulado NÃO aprovado pela FDA
CATEGORIA:     Telessaúde com prescrição + farmácia de manipulação 503A
VIA:           Injetável (subcutânea) — tesamorelina liofilizada

TETO DE CLAIM: Regido pela avaliação médica, não pela copy.
               A copy vende a AVALIAÇÃO, nunca o resultado do tratamento.

VERBOS LIBERADOS:
  may be appropriate for · a licensed provider will evaluate ·
  see if you qualify · physician-supervised · personalized protocol

VERBOS PROIBIDOS:
  guaranteed · will make you lose X lbs · cures · reverses aging ·
  qualquer promessa de resultado, prazo ou dose

DISCLAIMERS OBRIGATÓRIOS (em toda peça):
  · Not all patients will qualify
  · Treatment only after a comprehensive medical evaluation
  · Compounded preparations are not FDA-approved
  · Not medical advice — consult a qualified healthcare provider
  · Individual results vary
  · 21+ (o funil já tem age gate)

TRÁFEGO VIÁVEL:
  Meta      ⚠️ altamente restrito — saúde pessoal + perda de peso + prescrição
  Google    ⚠️ exige certificação de anunciante de saúde/farmácia (LegitScript)
  TikTok    ❌ praticamente inviável para prescrição
  Native    ⚠️ viável com aprovação editorial (Taboola/Outbrain têm política própria)
  E-mail/SEO ✅ o canal mais realista para este perfil de oferta
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## ⚠️ Atenção específica da tesamorelina

Este é o item de **maior risco publicitário** do catálogo, e é justamente onde este funil aterrissa.

1. **A aprovação da FDA é estreita.** Tesamorelina é aprovada como **EGRIFTA**, para redução de
   gordura abdominal excessiva em pacientes com **lipodistrofia associada ao HIV** — e só isso.
2. **Promover para "longevidade", "performance" ou composição corporal na população geral
   é uso off-label.** Anunciante pode discutir off-label em contexto clínico; **publicidade
   de resposta direta promovendo uso off-label é território de risco alto.**
3. **A versão manipulada não é aprovada pela FDA** — a própria Aevra declara isso.
4. Consta da **lista de proibições da WADA** (S2 — hormônios peptídicos e fatores de crescimento).
   Relevante se o público-alvo incluir atletas.
5. O formato **vial liofilizado** é a apresentação típica do mercado de peptídeos, não de
   medicamento de marca acabado — reforça a necessidade de deixar o enquadramento de
   prescrição explícito em toda peça.

**Consequência prática:** o ângulo de copy **não pode ser o resultado** (queimar gordura,
recompor o corpo, rejuvenescer). Tem que ser **a qualificação**: descobrir se você é elegível
para um protocolo supervisionado por médico.

---

## O que NÃO transfere do playbook Crowned

Este é o ponto mais importante deste documento. Crowned é **Classe A** (cosmético tópico,
drug-free, venda direta). Aevra é **Classe D**. Metade do playbook não atravessa:

| Elemento do Crowned | Transfere? | Por quê |
|---|:---:|---|
| Estrutura do brief (avatares, Won't/Can't Tell, forças vitais) | ✅ | Psicologia é agnóstica de classe |
| Anatomia de blocos de copy | ✅ | Gramática de DR continua valendo |
| Advertorial + quiz modal | ✅ | **Melhor ainda aqui** — vira intake médico real |
| Estáticas UGC cruas 1:1 | ⚠️ | Formato sim; conteúdo não pode mostrar resultado corporal |
| **"Solução 2.0"** (vender um ritual nomeado, não o SKU) | ❌ | Com prescrição, obscurecer o que se vende **aumenta** o risco |
| **Promessa de timeline** ("semana 2: menos queda") | ❌ | Não se promete resultado de tratamento médico |
| **Invalidação agressiva da concorrência** | ⚠️ | Não se pode desaconselhar tratamento médico alheio |
| **Before/after** | ❌ | Perda de peso + imagem corporal = reprovação certa no Meta |
| Hook "drug-free, sem dependência" | ❌ | Era o diferencial do Crowned; aqui é o oposto |

> **O quiz deles já existe e é a peça certa.** `quiz5` indica pelo menos 5 variantes em teste.
> O trabalho de maior valor aqui não é criar um funil novo — é **escrever os advertoriais
> e criativos que alimentam esse quiz**, com o teto de claim correto.

---

## Pendências antes de escrever qualquer copy

- ⟨verificar⟩ **Qual oferta é o alvo?** GLP-1, TRT, ED ou tesamorelina são 4 briefs distintos
- ⟨verificar⟩ Aevra é cliente ou é oferta de afiliado? Muda quem carrega o risco da copy
- ⟨verificar⟩ A loja vende vials direto com cupom "20OFF", mas o site-mãe descreve avaliação
  médica prévia. **Qual é o fluxo real de compra?** Isso decide se a copy pode ter "buy now"
  ou se todo CTA tem que levar à avaliação
- ⟨verificar⟩ Certificação LegitScript / status de anunciante de saúde no Google
- ⟨verificar⟩ Conteúdo real do quiz (não extraível do bundle — precisa de print ou acesso)
- ⟨verificar⟩ Política de reembolso e garantia reais
