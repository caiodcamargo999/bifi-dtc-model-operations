---
name: advertorial-html-builder
description: >-
  Monta o HTML completo do advertorial/pre-lander a partir da copy longa — esqueleto de seções,
  CSS validado, e o quiz modal de qualificação com índice de resultado, escassez, tela de
  não-qualificado e propagação de query params para o checkout. Use quando o usuário pedir
  "monta o advertorial", "gera o HTML", "advertorial em HTML", "pre-lander", "página do
  advertorial", "coloca o quiz", "ADV1/ADV2", ou na etapa 3 do pipeline.
---

# Advertorial HTML Builder

Transforma copy longa em página pronta. **Não reinvente CSS nem a lógica do quiz** —
os dois estão validados em `templates/advertorial/` e são reaproveitados verbatim.

Leia antes:
- `templates/advertorial/skeleton.html` — o esqueleto de 22 seções
- `templates/advertorial/advertorial.css` · `quiz.js` · `quiz-overlay.html`
- `reference/crowned/advertorials/ADV1–ADV4.html` — os 4 originais, para calibrar

---

## Os 3 arquétipos

Escolha pelo **Formato do código emocional do avatar** (ver brief).

| Arquétipo | Origem | Estrutura | Para quem |
|---|---|---|---|
| **STORY** | ADV2 / ADV3 | 22 seções, jornada de uma protagonista | O padrão. Serve 70% dos casos. |
| **WARNING/LETTER** | ADV1 | Carta de alerta + P.S. de autoridade | Problem-aware, urgência |
| **NEWS/EXPOSÉ** | ADV4 | Masthead, breadcrumb, seção de comentários | Cético, quer terceira parte |

**STORY é o cavalo de batalha.** ADV2 (atriz da Broadway, 45+) e ADV3 (pós-parto) provam a tese:
mesmo esqueleto, mesmas 22 seções, mesma ordem — só a protagonista e o gatilho mudam.
É assim que se escala para 4 advertoriais sem 4 reescritas.

---

## Esqueleto STORY — as 22 seções

Ordem fixa. Cada H2 é obrigatório.

```
 1  A vida ANTES — o atributo como identidade
 2  O momento assustador em que percebeu
 3  De [identidade] a se esconder
 4  O diagnóstico de 90 segundos que não resolveu
 5  O post das 11PM com 400 comentários (+ o comentário da autoridade)
 6  O segredo exposto: por que TODAS as soluções falham no MESMO passo
    └ sidebar-box: "o problema real está a N milímetros de profundidade"
 7  A fórmula que bateu com o que a autoridade explicou, ponto a ponto
 8  Chamaram de [PRODUTO]®
 9  A ciência por trás           → 1 .front-card por ativo
10  O sistema de N etapas        → 1 .path-card por etapa
    ▸ CTA + escassez
11  Timeline de 90 dias          → 4 .tl-stage
12  Real Results                 → 4 .tst (cada um abre com a OBJEÇÃO que a pessoa tinha)
13  N sinais de que foi feito pra alguém como você
14  Who It Is NOT For            ← desqualificação honesta
15  O custo real de não resolver + comparativo vs solução dominante
16  A razão real pela qual as pessoas desistem
17  Onde conseguir + oferta
    ▸ CTA + escassez
```

**Seções 5, 6 e 14 são as que mais sobem conversão** e as que mais somem em advertorial ruim:
- **5** — a prova social externa que introduz a autoridade sem parecer publicidade
- **6** — a camada de *delivery*: por que tudo falhou pelo MESMO motivo (o reframe central)
- **14** — desqualificar honestamente é o maior gerador de confiança da peça

---

## O quiz de qualificação

O quiz é o motor de conversão do formato: **todo `<a class="cta-btn">` da página abre o quiz
em vez de navegar**. O usuário responde 6 perguntas, recebe um "índice" personalizado e só
então chega ao checkout — com os query params da URL propagados.

### Estrutura das 6 perguntas

| # | Pergunta | Tipo | Função |
|---|---|---|---|
| 1 | Qual imagem representa seu estado hoje? | única, **com imagens** | Autodiagnóstico visual. Abre com baixo atrito. |
| 2 | Faixa etária | única | Segmentação |
| 3 | **Quais destes sinais você nota?** | **múltipla** | ⭐ O núcleo. Cada opção é um sinal do brief. |
| 4 | Quando começou? | única | Gatilho de entrada → mapeia o avatar |
| 5 | Há quanto tempo? | única | Severidade |
| 6 | O que já tentou? | múltipla | Invalidação + fecha com "SEE IF I QUALIFY" |

**A pergunta 3 faz o trabalho pesado.** Cada opção é um *sinal comportamental* tirado direto
dos avatares do brief. Ao marcar 4, 5, 6 itens, a pessoa constrói sozinha o caso de que tem o
problema — e a contagem alimenta o índice do resultado.

### Configuração (edite só o topo do `quiz.js`)

```js
var CHECKOUT_URL = '#';              // ⚠️ definir antes de publicar
var IMGDIR       = 'imagens/';
var PRODUCT_IMG  = 'imagens/0XX.png';
var NONE_SIGNS   = 'None of the above';
var QS = [ ... ];                    // as 6 perguntas
var LOADERS = ['...','...','...'];   // 3 telas de processamento (~1,3s cada)
```

Depois adapte o texto do resultado: nome do índice, a frase de esperança mecânica,
a barra de escassez, a data de entrega e o CTA.

### Comportamentos que **não** se alteram

- Delegação de clique: qualquer `a.cta-btn` abre o quiz
- `withParams()` propaga os query params da URL ao checkout (**preserva o tracking do afiliado** —
  quebrar isso quebra a atribuição da campanha inteira)
- Exclusividade: marcar "None of the above" limpa as outras seleções
- ESC / clique fora / X fecham o modal
- Barra de progresso

### A tela de não-qualificado — não remova

Se a pessoa marca só "None of the above" nos sinais, ela vê:

> "Pelas suas respostas, [produto] não é o certo pra você agora.
> Preferimos te dizer isso a pegar seu dinheiro."
> + orientação para procurar um médico se houver perda súbita, em falhas, com dor ou descamação.

Isso é **o item de compliance mais importante da página** e também sobe a confiança de quem
qualifica. Nunca troque por um funil que aprova todo mundo.

---

## Montagem

1. Copie `skeleton.html` para `public/<slug>/03-ADVERTORIAIS/ADV<N>-<angulo>/index.html`
2. Cole `advertorial.css` inline no `<style>`; ajuste só as variáveis de marca
3. Preencha as 22 seções com a copy de `dtc-advertorial`
4. Cole `quiz-overlay.html` antes do `</body>` e `quiz.js` no `<script>`
5. Configure as 6 perguntas a partir dos sinais dos avatares do brief
6. Crie `imagens/` e referencie por caminho relativo
7. Preencha os disclaimers da classe regulatória no footer

## Validação

- [ ] Arquétipo bate com o Formato do avatar
- [ ] As 22 seções presentes e na ordem (STORY)
- [ ] Seções 5, 6 e 14 escritas com atenção — são as de maior impacto
- [ ] Quiz abre em **todos** os `cta-btn`
- [ ] `CHECKOUT_URL` definida — ou marcada como pendência explícita
- [ ] `withParams` intacta (tracking do afiliado)
- [ ] Tela de não-qualificado presente e honesta
- [ ] As 6 perguntas puxam dos sinais reais do brief
- [ ] Imagens existem e os caminhos resolvem
- [ ] Depoimentos reais/autorizados, ou marcados como dramatização
- [ ] "AS SEEN ON" só com logos de uso autorizado — **senão remova a seção**
- [ ] Seção de comentários (NEWS) só se real/autorizada, ou rotulada
- [ ] Disclaimers da classe no footer
- [ ] Promessa do advertorial bate com a da página de checkout
- [ ] `peptide-compliance` AUDIT rodado

---

## Escalando para N advertoriais

Para 4 advertoriais do mesmo produto, **não escreva 4 do zero**:
mantenha o esqueleto e o mecanismo, e troque **protagonista + gatilho de entrada + timeline**.
É exatamente a relação entre ADV2 e ADV3.

Escolha as protagonistas em avatares com **gatilhos de entrada diferentes**
(pós-parto · menopausa · pós-GLP-1 · refugiada da solução dominante), não em variações da mesma.
