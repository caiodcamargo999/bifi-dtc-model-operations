---
name: dtc-advertorial
description: >-
  Escreve peças de texto longo para DTC e peptídeos — long text ads de Meta/Native (incluindo o
  lote de 8 variações, uma por ângulo), advertoriais, e-mails e páginas de pré-venda — em blocos
  funcionais rotulados. Use quando o usuário pedir "long text", "8 variações", "ad text",
  "advertorial", "texto longo", "página de pré-venda", "pre-lander", "e-mail", "copy escrita",
  "artigo", ou quiser a versão em texto de um ângulo já validado em vídeo. Também acione para
  adaptar um advertorial ao formato/Ethos de um avatar específico.
---

# Advertorial & Long Text

O texto longo é onde a venda fecha. O vídeo compra a atenção; o advertorial converte —
25 a 30% de passagem para o checkout é a faixa de referência, e ela **não muda com o formato do
criativo de entrada**. Ou seja: um advertorial fraco desperdiça todo criativo bom acima dele.

Leia antes:
- `knowledge/frameworks/01-block-anatomy.md`
- `knowledge/frameworks/02-avatar-emotional-code.md` — o **Formato** do avatar decide o registro
- `public/<slug>/01-BRIEF/brief.md`
- `templates/advertorial.template.md`

---

## 0. Modo 8× — o lote da etapa 2

Quando o pedido for o **pacote de long text ads** (etapa 2 do pipeline), entregue
**8 ads, um por ângulo** — não 8 variações do mesmo texto.

```
public/<slug>/02-CRIATIVOS-TOPO/ad-texts/
  AD1-causa-raiz.md      AD5-historia-emocional.md
  AD2-qualificacao.md    AD6-sub-nicho.md
  AD3-delivery.md        AD7-timeline.md
  AD4-alternativa.md     AD8-descoberta.md
```

Regras do lote:
- **Ângulo N = estática N = hooks N.x.** O pacote é testável por ângulo, não por peça solta.
- Cada ad usa um **avatar diferente** e, por consequência, um **registro diferente**
  (ver tabela abaixo). Oito ads no mesmo registro é um teste, não oito.
- Cada ad abre com o hook do próprio ângulo, já validado no lote de hooks.
- 400–700 palavras cada.
- Ao fim do lote, uma tabela de cobertura: ângulo · avatar · registro · estágio de consciência.
  Se dois ads colidirem em avatar **e** registro, funda e gere outro ângulo.

---

## 1. Escolha o registro pelo avatar

O erro mais caro deste formato é escrever o registro errado para a persona.
Puxe o **Formato** do código emocional do avatar no brief:

| Formato do avatar | Registro do texto | Abertura típica |
|---|---|---|
| UGC / Reels íntimo | 1ª pessoa, curto, cru, sem subtítulo | Confissão |
| Advertorial investigativo | 1ª pessoa + mecanismo, subtítulos, mais longo | "Por que tudo falhou e o que mudou" |
| Notícia de saúde | 3ª pessoa jornalística, fonte citada, sóbrio | Descoberta / relato |
| Comparativo | Tabela mental, prós e contras honestos | "Usei X por 8 meses. Aqui está a verdade." |
| Conservador + FAQ | Cauteloso, compatibilidade, disclaimers visíveis | Reasseguramento |
| Comunidade / grupo | Coloquial, "outra mãe me contou" | Peer-to-peer |

> Advertorial científico frio para avatar comunitário morre por frieza.
> UGC emocional sem mecanismo para avatar veterano morre por leviandade.
> O mesmo mecanismo, registros opostos.

---

## 2. Estrutura

Use a mesma gramática de blocos do vídeo, com três diferenças:

1. **Subhead abaixo do headline** — qualifica e filtra, e é onde entra o "se você [situação], leia isto"
2. **Identificação do narrador** logo cedo: nome, idade, situação ("I'm Jess. I'm 31.")
3. **Densidade de prova maior** — o leitor de texto longo é mais cético e tem mais tempo pra duvidar

Comprimento por formato:
| Peça | Palavras |
|---|---|
| Long text ad (Meta/Native) | 400–700 |
| Advertorial (pre-lander) | 1.200–2.500 |
| E-mail | 200–450 |

---

## 3. Formato de saída

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LONG TEXT · [produto] · Ângulo [N] · Avatar: [nome] · [N] palavras · [idioma]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[HEADLINE]
If your hair started falling out in clumps after GLP-1, do this every morning.

[SUBHEAD — QUALIFICAÇÃO + LOOP]
What I found by chance in a forgotten Facebook video changed everything,
and I regret not seeing it sooner.

[IDENTIFICAÇÃO DO NARRADOR]
I'm Nina, I'm twenty-nine years old.

[HISTÓRIA EMOCIONAL]
...

[INVALIDANDO SOLUÇÕES]
...
```

Rótulo funcional acima de cada bloco, sempre. Quem revisa precisa ver a estrutura, não só o texto.

---

## 4. Regras específicas de texto longo

- **O bloco de honestidade é obrigatório.** "Nos primeiros dias, nada. Quase desisti no dia 5."
  Em texto longo ele é o maior gerador de confiança do formato — o leitor está caçando o truque.
- **Um detalhe sensorial concreto por bloco emocional.** "Senti o ar quente do secador no topo da
  cabeça e vi a pele aparecendo." Detalhe é o que separa depoimento de anúncio.
- **Timeline com marcos datados**, não faixas vagas: "dia 9", "semana 7", não "algumas semanas".
- **Nunca feche a venda no texto do ad** quando o funil for advertorial: o ad entrega ao artigo,
  o artigo entrega ao checkout. Misturar as duas funções derruba a passagem.
- **A promessa do texto tem que bater com a promessa da página de destino.** Mismatch reprova a
  conta e gera chargeback.

---

## 5. Validação

- [ ] Registro bate com o Formato do avatar no brief
- [ ] Narrador identificado nas primeiras 3 linhas
- [ ] Bloco de honestidade presente
- [ ] Timeline com marcos datados + "results vary"
- [ ] Densidade de prova: ≥3 blocos de prova distintos
- [ ] CTA depois da quebra de objeções, nunca antes
- [ ] Disclaimers da classe regulatória presentes
- [ ] Se bilíngue: PT-BR é **transcriação**, não tradução literal — o VOC precisa soar nativo
- [ ] Rodou `peptide-compliance` em modo AUDIT
- [ ] Modo 8×: tabela de cobertura sem colisão de avatar + registro

**Entrega:**
- Modo 8× (etapa 2) → `public/<slug>/02-CRIATIVOS-TOPO/ad-texts/AD<N>-<angulo>.md`
- Advertorial longo (etapa 3) → `public/<slug>/03-ADVERTORIAIS/ADV<N>-<angulo>/copy.md`,
  depois `advertorial-html-builder` monta o `index.html` com quiz
