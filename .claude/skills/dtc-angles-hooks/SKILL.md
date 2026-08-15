---
name: dtc-angles-hooks
description: >-
  Gera ângulos e hooks de resposta direta a partir do brief do produto — o padrão é 8 ângulos
  × 5 hooks = 40 hooks, cada um marcado com avatar, estágio de consciência e nível de Pathos.
  Use quando o usuário pedir "hooks", "ângulos", "ganchos", "headlines", "aberturas", "H1 e H2",
  "variações de hook", "mais hooks pra esse ângulo", ou quando o Hook Rate de uma campanha estiver
  abaixo da faixa e for preciso reabrir a criação. Também acione para auditar e reescrever hooks
  existentes contra o checklist e a escada de Pathos.
---

# Ângulos & Hooks

Transforma o brief em munição testável. Hook é a peça de maior alavancagem do funil inteiro:
Hook Rate abaixo de 50% significa que **o problema é a abertura, não a oferta**.

Leia antes:
- `knowledge/frameworks/04-awareness-hooks.md` — ângulos, padrões, checklist
- `knowledge/frameworks/02-avatar-emotional-code.md` — escada de Pathos
- `templates/angles-hooks.template.md` — a estrutura exata da saída
- `public/<slug>/01-BRIEF/brief.md` — a fonte. **Sem brief, não gere.** Rode `dtc-brief-architect` antes.

---

## Fluxo

### 1. Extraia a munição do brief

Antes de escrever qualquer hook, monte a lista de matéria-prima:
- Todos os **Won't Tell** (viram hook de confissão íntima, direto)
- Todas as linhas-flecha de **Can't Tell** (viram hook nível 4)
- Todos os **verbatims de VOC** (a sintaxe torta é o que soa real)
- Todos os **Gatilhos de Conversão** dos avatares
- O **MUP** e o **teste de consciência** (para estágios 4–5)

> A maior parte dos hooks bons **já está escrita no brief**. Seu trabalho é recortar e afiar,
> não inventar do zero. Hook inventado soa a agência; hook recortado de VOC soa a pessoa.

### 2. Gere por ângulo

Para cada um dos 8 ângulos canônicos, 5 hooks — **cada um de um padrão diferente**
(invalidação agressiva / qualificação visual / súplica-desafio / confissão íntima /
personificação-POV / aviso-autoridade invertida).

Não repita o mesmo padrão duas vezes dentro de um ângulo. Isso não é variação, é preguiça.

### 3. Formato de saída

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ÂNGULO 3 — MECANISMO / DELIVERY
Tese: o problema é onde chega, não a fórmula
Estágio-alvo: 2–3 (Product/Solution-Aware)
Avatar primário: A Veterana dos Produtos
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3.1 · invalidação agressiva · Pathos 2
Castor oil can go to hell. I tested 12 products and the only one that worked
was the one that actually stayed on my scalp.

3.2 · aviso / autoridade invertida · Pathos 3
Your $40 serum vanished down the drain in 45 seconds. It never reached your
follicle. Not once. That's why nothing worked.

[...]
```

Cada hook carrega **3 metadados**: padrão · nível de Pathos · (implícito) o ângulo.
Sem metadado, o hook não é testável e não entra no lote.

### 4. Pareamento H1 / H2

Ao fim de cada ângulo, indique o par recomendado para teste:

```
▸ PAR RECOMENDADO: H1 = 3.1 (invalidação) · H2 = 3.4 (confissão íntima)
  Mesma tese, padrões opostos. Testa registro, não mensagem.
```

### 5. Validação do lote (obrigatória antes de entregar)

- [ ] 40 hooks, 8 ângulos, 5 padrões distintos por ângulo
- [ ] **≥40% do lote em Pathos nível 3–4** ← se falhar, o lote inteiro volta pra reescrita
- [ ] Nenhum hook com mais de 2 frases
- [ ] Nenhum hook nomeia o produto
- [ ] Todo hook tem especificidade numérica ou visual
- [ ] Nenhum anti-padrão (pergunta genérica, adjetivo vazio, promessa numérica de resultado)
- [ ] Cobertura: os 5 estágios de consciência estão representados no lote
- [ ] Cobertura: nenhum avatar do brief ficou sem hook
- [ ] Rodou `peptide-compliance` em modo AUDIT sobre o lote

### 6. Entrega

Escreva em `public/<slug>/02-CRIATIVOS-TOPO/angulos-e-hooks.md` e ofereça o próximo passo:

> 40 hooks em `public/<slug>/02-CRIATIVOS-TOPO/angulos-e-hooks.md`.
> Próximo: `dtc-vsl-writer` (roteiro de vídeo) ou `dtc-advertorial` (long text / advertorial).

---

## Modo diagnóstico

Se o usuário trouxer performance ("hook rate 32%"), não gere lote novo às cegas:

1. Peça o hook rodando e o ângulo dele
2. Consulte `knowledge/metrics/benchmarks.md` → tabela de diagnóstico
3. Identifique se o problema é **nível de Pathos** (mais comum), **padrão errado pro avatar**,
   ou **desalinhamento hook ↔ oferta** (CTR alto + conversão baixa)
4. Gere 5 substitutos **do mesmo ângulo**, subindo um nível de Pathos

Trocar o ângulo inteiro quando só o hook falhou destrói o aprendizado do teste.
