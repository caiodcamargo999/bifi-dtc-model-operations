# Formato de imagem estática — o padrão UGC cru

Engenharia reversa das 8 estáticas validadas do Crowned.

---

## O princípio

A imagem tem que passar como **algo que uma amiga postaria** — não como criativo publicitário.
É isso que compra o scroll no feed nativo.

Toda vez que alguém "melhora" a foto — luz bonita, produto no quadro, texto por cima, modelo
sorrindo — a imagem vira anúncio, o cérebro do usuário reconhece e o CTR cai.
**O feio é intencional e é o ativo.**

---

## Especificação

| Atributo | Valor |
|---|---|
| Proporção | 1:1 |
| Texto sobreposto | nenhum |
| Logo / marca | nenhum |
| Produto no quadro | nenhum |
| Câmera | celular, frontal ou traseira, mão |
| Luz | dura, de cima, banheiro — ou flash direto |
| Exposição | levemente estourada |
| Enquadramento | amador, torto, cortado |
| Foco | às vezes levemente errado |
| Cenário | doméstico real, com bagunça verdadeira |
| Sujeito | sem maquiagem, pele cansada, expressão específica |
| Conteúdo | **o problema demonstrado fisicamente** |

---

## O que aparece no quadro

O que faz a imagem funcionar não é a pessoa — é **a evidência física do problema**,
mostrada num momento privado que ninguém fotografaria de propósito.

Referências das estáticas do Crowned:
- Mulher no banheiro, cabelo molhado, **segurando uma mecha de fios caídos na palma da mão**,
  expressão de choque contido. Pia com produtos reais, escova com fios, toalha no ombro.
- **Vista de cima da cabeça**, mulher 60+, couro cabeludo visível através do cabelo,
  luz dura de banheiro, bancada com produtos ao fundo. Ângulo que ninguém escolheria.

**O padrão:** ângulo que a pessoa passa a vida evitando. É por isso que reconhece.

---

## Banco de momentos fotografáveis

Puxe dos *sinais comportamentais* do avatar no brief — eles já são visuais.

| Momento | Demonstra |
|---|---|
| Mecha de fios na palma da mão | volume da perda |
| Topo da cabeça visto de cima | o sinal que ela esconde |
| Ralo do chuveiro | frequência diária |
| Escova cheia de fios | acúmulo |
| Rabo de cavalo fino na mão | perda de densidade, tátil |
| Risca sob luz dura de banheiro | o sinal diagnóstico |
| Gaveta com produtos abandonados | histórico de fracasso |
| Foto antiga no celular vs espelho | o antes/depois **sem split-screen** |
| Chapéu/lenço na mão, hesitando | o comportamento de camuflagem |
| Elástico dando a volta extra | o teste de consciência do brief |

Oito conceitos precisam de **oito enquadramentos diferentes**.
Oito variações do mesmo plano é um teste, não oito.

---

## Vocabulário de prompt

**Use**
```
shot on iPhone · front-facing camera · handheld phone snapshot
harsh overhead bathroom lighting · direct on-camera flash · fluorescent light
slightly overexposed · mild motion blur · amateur framing · slightly tilted
candid · unposed · no makeup · tired skin · real domestic clutter
```

**Nunca use**
```
professional photography · studio lighting · beauty shot · soft glow
cinematic · perfectly composed · flawless skin · model · smiling
```

**Frase final obrigatória** (pessoa/pele visível), sem alteração:
```
visible pores, micro-texture, natural skin imperfections, subtle peach fuzz, natural skin sheen, no airbushing, no smoothing filters
```

---

## Pareamento

O pacote é testável **por ângulo**. Estática N, hook N e long text ad N são o mesmo ângulo:

```
ÂNGULO 3 — Mecanismo/Delivery
  ├── AD03.png        gaveta de produtos abandonados
  ├── hooks 3.1–3.5
  └── adtext AD3
```

Assim o teste isola a variável certa. Oito peças soltas sem pareamento não ensinam nada.

---

## Erros que matam o formato

1. **Produto no quadro** — vira anúncio de produto, perde o registro nativo
2. **Texto sobreposto** — a plataforma penaliza e o usuário reconhece como ad
3. **Pessoa bonita e bem iluminada** — quebra a identificação; o público é quem se esconde
4. **Sorriso** — o momento é de aflição contida, não de resolução
5. **Before/after em split-screen** — reprova em Meta e destrói o realismo
6. **Cenário limpo demais** — banheiro de catálogo não é o banheiro dela
