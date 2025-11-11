# 🎯 Animações de Scroll - Guia Completo

## 📚 O que foi criado?

Criei um sistema de animações baseado em scroll que faz os elementos **aparecerem quando entram na tela** e **desaparecerem quando saem**.

### Arquivos Criados:

1. **`src/hooks/useScrollAnimation.js`** - Hook personalizado com useInView
2. **`src/components/ScrollReveal.jsx`** - Componente wrapper para facilitar o uso
3. **`src/components/About.jsx`** - Exemplo aplicado (ATUALIZADO)

---

## 🚀 Como Funciona?

### Conceito

O Framer Motion possui o hook `useInView` que detecta quando um elemento está visível na tela. Combinado com animações, criamos o efeito de aparecer/desaparecer.

```jsx
const { ref, isInView } = useInView(ref, options);

// isInView = true quando elemento está visível
// isInView = false quando elemento sai da tela
```

---

## 💡 Como Usar

### Opção 1: Usando o Componente ScrollReveal (Mais Fácil)

```jsx
import ScrollReveal from './ScrollReveal';

<ScrollReveal variant="slideUp">
  <div>Seu conteúdo aqui</div>
</ScrollReveal>
```

### Variantes Disponíveis:

- `fadeIn` - Fade simples
- `slideUp` - Desliza de baixo para cima
- `slideDown` - Desliza de cima para baixo
- `slideLeft` - Desliza da esquerda
- `slideRight` - Desliza da direita
- `scale` - Zoom in/out
- `rotateScale` - Rotação + zoom
- `blurFade` - Blur + fade

### Props do ScrollReveal:

```jsx
<ScrollReveal
  variant="slideUp"       // Tipo de animação
  once={false}            // true = anima só uma vez | false = anima toda vez
  threshold={0.2}         // % do elemento visível para animar (0-1)
  margin="0px 0px -100px 0px"  // Margem para disparar animação
  delay={0}               // Delay em segundos
  className=""            // Classes CSS adicionais
>
  {children}
</ScrollReveal>
```

---

## 🎨 Exemplos Práticos

### Exemplo 1: Header de Seção

```jsx
<ScrollReveal variant="slideUp">
  <h2 className="text-4xl font-bold text-center">
    Meu <span className="gradient-text">Título</span>
  </h2>
  <p className="text-center text-gray-600">Subtítulo aqui</p>
</ScrollReveal>
```

### Exemplo 2: Grid com Delay em Cascata

```jsx
<div className="grid md:grid-cols-3 gap-6">
  {items.map((item, index) => (
    <ScrollReveal 
      key={item.id} 
      variant="slideUp" 
      delay={index * 0.1}
    >
      <div className="card-glass p-6">
        {item.content}
      </div>
    </ScrollReveal>
  ))}
</div>
```

### Exemplo 3: Duas Colunas com Direções Diferentes

```jsx
<div className="grid md:grid-cols-2 gap-8">
  <ScrollReveal variant="slideLeft">
    <div>Conteúdo da esquerda</div>
  </ScrollReveal>
  
  <ScrollReveal variant="slideRight">
    <div>Conteúdo da direita</div>
  </ScrollReveal>
</div>
```

### Exemplo 4: Animar Apenas Uma Vez

```jsx
<ScrollReveal variant="scale" once={true}>
  <div>Este elemento anima apenas na primeira vez</div>
</ScrollReveal>
```

---

## 🔧 Aplicando nos Seus Componentes

### Skills.jsx

```jsx
import ScrollReveal from './ScrollReveal';

const Skills = () => {
    return (
        <section id="skills" className="section-container">
            <ScrollReveal variant="slideUp">
                <h2>Minhas Habilidades</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                    <ScrollReveal 
                        key={skill.name} 
                        variant="scale" 
                        delay={index * 0.1}
                    >
                        <div className="card-glass p-6">
                            {/* conteúdo do skill */}
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
};
```

### Projects.jsx

```jsx
import ScrollReveal from './ScrollReveal';

const Projects = () => {
    return (
        <section id="projects" className="section-container">
            <ScrollReveal variant="slideUp">
                <h2>Meus Projetos</h2>
            </ScrollReveal>

            {/* Se usar Swiper, não precisa de ScrollReveal */}
            {/* Mas pode envolver o Swiper inteiro */}
            <ScrollReveal variant="fadeIn">
                <Swiper {...config}>
                    {/* slides */}
                </Swiper>
            </ScrollReveal>

            {/* Ou aplicar em grid */}
            <div className="grid md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ScrollReveal 
                        key={project.id} 
                        variant="slideUp"
                        delay={index * 0.1}
                    >
                        <div className="project-card">
                            {/* conteúdo */}
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
};
```

### Experience.jsx

```jsx
import ScrollReveal from './ScrollReveal';

const Experience = () => {
    const experiences = [/* ... */];

    return (
        <section id="experience" className="section-container">
            <ScrollReveal variant="slideUp">
                <h2>Experiência</h2>
            </ScrollReveal>

            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <ScrollReveal 
                        key={index} 
                        variant="slideLeft"
                        delay={index * 0.15}
                    >
                        <div className="card-glass p-6">
                            {/* conteúdo da experiência */}
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
};
```

### CertificationsAndHighlights.jsx

```jsx
import ScrollReveal from './ScrollReveal';

const CertificationsAndHighlights = () => {
    return (
        <section id="certifications" className="section-container">
            <ScrollReveal variant="slideUp">
                <h2>Certificações</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                    <ScrollReveal 
                        key={cert.name} 
                        variant="rotateScale"
                        delay={index * 0.1}
                    >
                        <div className="cert-card">
                            {/* conteúdo */}
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
};
```

---

## 🎬 Opção 2: Usando o Hook Diretamente

Se precisar de mais controle, use o hook diretamente:

```jsx
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MyComponent = () => {
    const { ref, isInView } = useScrollAnimation({
        once: false,
        threshold: 0.3,
        margin: "0px"
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
        >
            Conteúdo
        </motion.div>
    );
};
```

---

## ⚙️ Personalizando Animações

### Criando uma Variante Customizada

```jsx
const minhaVariante = {
    hidden: { 
        opacity: 0, 
        x: -100, 
        rotate: -45 
    },
    visible: { 
        opacity: 1, 
        x: 0, 
        rotate: 0,
        transition: { 
            duration: 0.8, 
            ease: "easeOut" 
        }
    }
};

<ScrollReveal variant={minhaVariante}>
  <div>Conteúdo com animação custom</div>
</ScrollReveal>
```

---

## 🎯 Configurações Recomendadas

### Para Títulos
```jsx
<ScrollReveal variant="slideUp" once={true}>
```

### Para Cards em Grid
```jsx
<ScrollReveal variant="scale" delay={index * 0.1} threshold={0.2}>
```

### Para Texto Longo
```jsx
<ScrollReveal variant="fadeIn" threshold={0.3}>
```

### Para Elementos Laterais
```jsx
// Esquerda
<ScrollReveal variant="slideLeft" threshold={0.4}>

// Direita
<ScrollReveal variant="slideRight" threshold={0.4}>
```

---

## 🚨 Pontos Importantes

1. **Performance**: Não envolver MUITOS elementos pequenos individualmente
   - ✅ Bom: Envolver seções completas ou cards
   - ❌ Ruim: Envolver cada palavra ou ícone

2. **Once vs Repetir**:
   - `once={true}` - Melhor para UX, anima só uma vez
   - `once={false}` - Mais dinâmico, anima toda vez

3. **Threshold**:
   - `0.1` - Dispara cedo (10% visível)
   - `0.5` - Dispara no meio (50% visível)
   - `1.0` - Dispara quando completamente visível

4. **Margin**:
   - `"0px 0px -100px 0px"` - Dispara 100px antes de aparecer
   - `"100px"` - Dispara 100px depois de aparecer

---

## 📊 Teste de Performance

Após aplicar, teste:

1. Scroll suave pela página
2. Veja se animações são fluidas
3. Verifique no DevTools (Performance tab)
4. Ajuste threshold e margin se necessário

---

## ✅ Checklist de Implementação

- [ ] Importar ScrollReveal nos componentes
- [ ] Envolver títulos de seção com ScrollReveal
- [ ] Aplicar em grids de cards com delay em cascata
- [ ] Testar em mobile e desktop
- [ ] Ajustar thresholds se necessário
- [ ] Escolher entre `once={true}` ou `once={false}`
- [ ] Verificar performance

---

## 🎉 Resultado Final

Agora sua página terá:
- ✅ Elementos que aparecem suavemente ao rolar
- ✅ Animações diferentes por seção
- ✅ Efeito cascata em listas
- ✅ Experiência mais dinâmica e profissional

---

## 📖 Referências

- [Framer Motion - useInView](https://www.framer.com/motion/use-in-view/)
- [Framer Motion - Scroll Animations](https://www.framer.com/motion/scroll-animations/)

---

Bom trabalho! 🚀✨
