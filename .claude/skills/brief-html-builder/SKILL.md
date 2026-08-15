---
name: brief-html-builder
description: >-
  Renderiza o brief-mestre como o HTML interativo de página única modelado no brief do Crowned —
  sidebar navegável, avatares em accordion, hooks e ad texts com botão de copiar, alternância
  EN/PT-BR e lightbox de imagens. Use quando o usuário pedir "brief em HTML", "monta o brief
  igual o do Crowned", "página do brief", "brief navegável", ou na etapa 1 do pipeline.
---

# Brief HTML Builder

Renderiza `brief.md` como a página que o time de afiliados realmente usa.
O formato importa: o brief do Crowned é consultado no meio da produção, e cada hook e ad text
tem botão de copiar porque é assim que ele é consumido.

Leia antes:
- `public/<slug>/01-BRIEF/brief.md` — a fonte de conteúdo
- `templates/brief-html/skeleton.html` — o shell com as 15 seções
- `templates/brief-html/brief.css` (16KB) e `brief.js` (4,9KB) — **verbatim, não reescreva**

---

## As 15 seções

| Grupo | Seções |
|---|---|
| Overview | 📋 Visão Geral |
| Audience | 🎯 Target · 👤 Avatares · 🧠 Won't/Can't Tell · 💡 Código Emocional |
| Copywriting | 💎 Big Idea · 🧪 Ingredientes · 💪 Forças & VOC · 🛡️ Objeções · 📊 Consciência · 📐 Estruturas Invisíveis |
| Creative | 🪝 Ângulos & Hooks · 📝 Long Text Ads · 🖼️ Imagens Estáticas |
| Performance | 📈 Métricas |

A seção **🖼️ Imagens Estáticas** é adição deste projeto — o brief do Crowned não tinha,
e é onde os 8 conceitos e prompts da etapa 2 ficam acessíveis junto do resto.

---

## Comportamentos (já no `brief.js`)

| Função | O que faz |
|---|---|
| `showSection(id, el)` | Troca a seção e o `#page-title` |
| `toggleAvatar(el)` | Accordion dos avatares |
| `toggleSidebar()` | Menu mobile |
| `copyHook(id)` / `copyAdText(id)` | Copia para o clipboard + toast |
| `switchLang(id,'en'|'ptbr',el)` | Alterna idioma **por card**, não global |
| `openLightbox(src)` | Amplia imagem |
| `showToast(msg)` | "✓ Copiado!" |

**`switchLang` é por card.** O usuário compara EN e PT-BR de um ad específico sem trocar a
página inteira. Mantenha essa granularidade.

---

## Montagem

1. Copie `skeleton.html` → `public/<slug>/01-BRIEF/brief.html`
2. Cole `brief.css` inline; ajuste só as custom properties de marca no topo
3. Preencha as 15 seções a partir do `brief.md`
4. Cole `brief.js` inline no fim do body
5. Atualize os `<span class="badge">` com as contagens reais (avatares, hooks, ads)
6. Imagens: embuta como `data:` URI (arquivo único, portátil) **ou** use `imagens/` relativa
   se o brief for entregue como pasta. O Crowned usa base64 — pesa 1,8MB mas abre em qualquer lugar.

---

## Regras de conteúdo

- **Todo hook e todo ad text precisa de botão de copiar.** É o modo de consumo real.
- **Avatares fechados por padrão.** 10 avatares abertos viram uma parede ilegível.
- Cada card de idioma tem `.lang-content.en` e `.lang-content.ptbr`; o PT-BR é
  **transcriação**, não tradução literal.
- Itens `⟨verificar⟩` do markdown viram badge de aviso visível — não os esconda na renderização.
- Blocos rotulados (`HOOK`, `PROVA PESSOAL + TIMELINE`) aparecem como label acima do texto,
  igual às Estruturas Invisíveis do Crowned. É o que torna o brief ensinável.

## Validação

- [ ] As 15 seções presentes e navegáveis
- [ ] Badges com contagens reais
- [ ] Todo hook e ad text com botão de copiar funcional
- [ ] `switchLang` funcionando por card
- [ ] Avatares em accordion, fechados por padrão
- [ ] Responsivo — hamburger funciona em mobile
- [ ] Itens `⟨verificar⟩` visíveis como aviso
- [ ] Abre corretamente com duplo clique, sem servidor
- [ ] Nenhuma dependência externa além das fontes do Google
