# Guia de Animações de Saída com AnimatePresence

## 📚 Índice
1. [O que é AnimatePresence?](#o-que-é-animatepresence)
2. [Conceitos Básicos](#conceitos-básicos)
3. [Exemplos Práticos](#exemplos-práticos)
4. [Modos de AnimatePresence](#modos-de-animatepresence)
5. [Aplicação nos Componentes](#aplicação-nos-componentes)

---

## O que é AnimatePresence?

`AnimatePresence` é um componente do Framer Motion que permite animar elementos quando eles **saem** do DOM. Sem ele, o React remove os elementos imediatamente, sem dar tempo para a animação de saída acontecer.

### ✨ Principais Características:
- Anima componentes quando são **removidos** do DOM
- Detecta mudanças de `key` em componentes
- Suporta múltiplos modos de animação
- Funciona com arrays, renderização condicional e rotas

---

## Conceitos Básicos

### 1. Estrutura Básica

```jsx
import { AnimatePresence, motion } from 'framer-motion';

<AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Conteúdo
    </motion.div>
  )}
</AnimatePresence>
```

### 2. Propriedades Essenciais

- **initial**: Estado inicial quando o componente entra
- **animate**: Estado durante a presença do componente
- **exit**: Estado quando o componente sai (só funciona com AnimatePresence)
- **key**: Necessário para AnimatePresence detectar mudanças

---

## Exemplos Práticos

### Exemplo 1: Toggle Simples (Como no código que você mostrou)

```jsx
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const SimpleToggle = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        key="box"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="w-24 h-24 bg-blue-500 rounded-lg"
                    />
                )}
            </AnimatePresence>
            
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Esconder' : 'Mostrar'}
            </button>
        </div>
    );
};
```

### Exemplo 2: Lista Dinâmica

```jsx
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const DynamicList = () => {
    const [items, setItems] = useState([1, 2, 3]);

    const removeItem = (id) => {
        setItems(items.filter(item => item !== id));
    };

    return (
        <div>
            <AnimatePresence>
                {items.map((item) => (
                    <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        layout
                    >
                        Item {item}
                        <button onClick={() => removeItem(item)}>
                            Remover
                        </button>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};
```

### Exemplo 3: Filtro de Projetos

```jsx
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const FilteredProjects = () => {
    const [filter, setFilter] = useState('all');
    
    const projects = [
        { id: 1, category: 'frontend', name: 'Projeto A' },
        { id: 2, category: 'backend', name: 'Projeto B' },
        { id: 3, category: 'frontend', name: 'Projeto C' },
    ];

    const filtered = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);

    return (
        <div>
            <div>
                <button onClick={() => setFilter('all')}>Todos</button>
                <button onClick={() => setFilter('frontend')}>Frontend</button>
                <button onClick={() => setFilter('backend')}>Backend</button>
            </div>

            <AnimatePresence mode="popLayout">
                {filtered.map((project) => (
                    <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                    >
                        {project.name}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};
```

---

## Modos de AnimatePresence

### 1. `mode="sync"` (padrão)
Anima entrada e saída ao mesmo tempo.

```jsx
<AnimatePresence mode="sync">
  {/* Componentes */}
</AnimatePresence>
```

### 2. `mode="wait"`
Espera a animação de saída terminar antes de iniciar a de entrada.

```jsx
<AnimatePresence mode="wait">
  {/* Componentes */}
</AnimatePresence>
```

### 3. `mode="popLayout"`
Anima saída primeiro, depois reposiciona os elementos restantes.

```jsx
<AnimatePresence mode="popLayout">
  {/* Componentes */}
</AnimatePresence>
```

---

## Aplicação nos Componentes

### Aplicando em Projects.jsx

```jsx
import { AnimatePresence, motion } from 'framer-motion';

const Projects = () => {
    const [filter, setFilter] = useState('all');
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);

    return (
        <section>
            {/* Botões de filtro */}
            <div>
                {filters.map((f) => (
                    <button 
                        key={f.value}
                        onClick={() => setFilter(f.value)}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            {/* Grid com AnimatePresence */}
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
                            transition={{ 
                                duration: 0.4,
                                delay: index * 0.1 
                            }}
                        >
                            {/* Conteúdo do projeto */}
                        </motion.div>
                    ))}
                </div>
            </AnimatePresence>
        </section>
    );
};
```

### Aplicando em CertificationsAndHighlights.jsx

```jsx
import { AnimatePresence, motion } from 'framer-motion';

const CertificationsAndHighlights = () => {
    const [showAll, setShowAll] = useState(false);
    
    const visibleCerts = showAll 
        ? certifications 
        : certifications.slice(0, 3);

    return (
        <section>
            <AnimatePresence mode="popLayout">
                {visibleCerts.map((cert, index) => (
                    <motion.div
                        key={cert.name}
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ 
                            opacity: 0, 
                            scale: 0.8,
                            transition: { duration: 0.2 }
                        }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {/* Conteúdo da certificação */}
                    </motion.div>
                ))}
            </AnimatePresence>

            <button onClick={() => setShowAll(!showAll)}>
                {showAll ? 'Ver Menos' : 'Ver Mais'}
            </button>
        </section>
    );
};
```

---

## 🎨 Variações de Animação

### Saída com Rotação
```jsx
exit={{ 
    opacity: 0, 
    rotate: 180, 
    scale: 0 
}}
```

### Saída Lateral
```jsx
exit={{ 
    opacity: 0, 
    x: 100 
}}
```

### Saída com Blur
```jsx
exit={{ 
    opacity: 0, 
    filter: 'blur(10px)' 
}}
```

### Saída em Cascata
```jsx
exit={{ 
    opacity: 0, 
    y: -50,
    transition: { 
        duration: 0.2,
        delay: index * 0.05 
    }
}}
```

---

## ⚠️ Pontos Importantes

1. **Sempre use `key`**: AnimatePresence detecta mudanças pela prop `key`
2. **Componente direto**: O filho direto de AnimatePresence deve ser um motion component
3. **Renderização condicional**: Use `{condition && <Component />}` ou operador ternário
4. **Layout prop**: Combine com `layout` para animações suaves ao reordenar

---

## 🚀 Próximos Passos

1. Teste os exemplos fornecidos
2. Aplique nos seus componentes existentes
3. Experimente diferentes modos e animações
4. Combine com outras props do Framer Motion

---

## 📦 Componentes Criados

- `AnimatedList.jsx` - Lista dinâmica com add/remove
- `ProjectsWithExitAnimation.jsx` - Exemplo com filtros

Você pode testar esses componentes adicionando-os ao seu `App.jsx`!
