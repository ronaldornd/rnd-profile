# 🎬 Como Testar as Animações Exit

## 📁 Arquivos Criados

Foram criados os seguintes arquivos no seu projeto:

1. **`src/components/AnimatedList.jsx`** - Lista dinâmica com add/remove
2. **`src/components/ProjectsWithExitAnimation.jsx`** - Exemplo de filtro de projetos
3. **`src/components/AnimationExamples.jsx`** - Página completa com 4 exemplos diferentes
4. **`ANIMACOES_EXIT.md`** - Guia completo de uso

---

## 🚀 Como Testar

### Opção 1: Adicionar no App.jsx (Recomendado para teste)

Abra o arquivo `src/App.jsx` e adicione o componente de exemplos:

```jsx
import AnimationExamples from './components/AnimationExamples';

function App() {
    useVisitTracker();

    return (
        <ThemeProvider>
            <div className="min-h-100vh">
                <Navbar />
                <main>
                    <Hero />
                    
                    {/* Adicione esta linha para ver os exemplos */}
                    <AnimationExamples />
                    
                    <About />
                    <Experience />
                    <Skills />
                    <Projects />
                    <CertificationsAndHighlights />
                    <Contact />
                </main>
                <Footer />
                <ScrollToTop />
            </div>
        </ThemeProvider>
    );
}
```

### Opção 2: Testar Individualmente

Você pode testar cada componente separadamente:

```jsx
// Teste apenas a lista animada
import AnimatedList from './components/AnimatedList';

// Teste apenas projetos com filtro
import ProjectsWithExitAnimation from './components/ProjectsWithExitAnimation';

// Teste a página completa de exemplos
import AnimationExamples from './components/AnimationExamples';
```

---

## 📚 O Que Cada Exemplo Demonstra

### 1. AnimationExamples.jsx (Mais Completo)
- ✅ Toggle simples (mostrar/esconder)
- ✅ Lista dinâmica com add/remove
- ✅ Tabs com animação de conteúdo
- ✅ Modal animado com backdrop

### 2. AnimatedList.jsx
- ✅ Lista simples com botão para adicionar e remover
- ✅ Animação de entrada (scale, rotate)
- ✅ Animação de saída (scale, rotate invertido)
- ✅ Layout animado ao reordenar

### 3. ProjectsWithExitAnimation.jsx
- ✅ Filtro de categorias
- ✅ Animação ao filtrar (itens saem e entram)
- ✅ Delay em cascata
- ✅ Mensagem quando não há itens

---

## 🎨 Aplicando no Seu Projeto Real

### Para aplicar em `Projects.jsx`:

```jsx
import { AnimatePresence, motion } from 'framer-motion';

const Projects = () => {
    const [filter, setFilter] = useState('all');
    
    // ... seu código existente ...
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);

    return (
        <section>
            {/* Seus botões de filtro */}
            
            {/* Swiper SEM AnimatePresence - mantém como está */}
            {filter === 'all' ? (
                <Swiper {...swiperConfig}>
                    {/* Seu código do Swiper */}
                </Swiper>
            ) : (
                /* Grid COM AnimatePresence para filtros */
                <AnimatePresence mode="popLayout">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ 
                                    opacity: 0, 
                                    y: -50,
                                    transition: { duration: 0.2 }
                                }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {/* Seu card de projeto */}
                            </motion.div>
                        ))}
                    </div>
                </AnimatePresence>
            )}
        </section>
    );
};
```

### Para aplicar em `CertificationsAndHighlights.jsx`:

```jsx
import { AnimatePresence, motion } from 'framer-motion';

const CertificationsAndHighlights = () => {
    const [showAll, setShowAll] = useState(false);
    
    const visibleCertifications = showAll 
        ? certifications 
        : certifications.slice(0, 4);

    return (
        <section>
            <AnimatePresence mode="popLayout">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleCertifications.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            {/* Seu card de certificação */}
                        </motion.div>
                    ))}
                </div>
            </AnimatePresence>

            <button onClick={() => setShowAll(!showAll)}>
                {showAll ? 'Ver Menos' : 'Ver Todas'}
            </button>
        </section>
    );
};
```

---

## ⚠️ Pontos Importantes

1. **Sempre use `key`** única para cada elemento
2. **AnimatePresence** deve envolver os elementos que vão sair
3. Use **`mode="popLayout"`** para listas que reorganizam
4. Use **`mode="wait"`** para substituir conteúdo (como tabs)
5. Combine com **`layout`** para transições suaves ao reordenar

---

## 🎯 Próximos Passos

1. ✅ Execute o projeto: `npm run dev`
2. ✅ Adicione `<AnimationExamples />` no `App.jsx`
3. ✅ Navegue até a seção de exemplos
4. ✅ Teste cada interação
5. ✅ Escolha o estilo que mais gosta
6. ✅ Aplique nos seus componentes reais

---

## 🔧 Troubleshooting

### Animação não funciona?
- Verifique se `AnimatePresence` está envolvendo o componente
- Certifique-se de que tem uma prop `key` única
- Confirme que está usando `motion.div` (não apenas `div`)

### Elementos pulam?
- Adicione `layout` prop no motion component
- Use `mode="popLayout"` no AnimatePresence

### Animação muito rápida/lenta?
- Ajuste `duration` no `exit` ou `transition`
- Exemplo: `transition={{ duration: 0.5 }}`

---

## 📖 Documentação Adicional

- Leia o arquivo `ANIMACOES_EXIT.md` para mais detalhes
- [Framer Motion - AnimatePresence](https://www.framer.com/motion/animate-presence/)
- [Framer Motion - Examples](https://www.framer.com/motion/examples/)

---

Bons testes! 🚀✨
