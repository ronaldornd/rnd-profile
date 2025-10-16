# 📝 Guia de Personalização - Landing Page Ronaldx

## 🎯 Primeiros Passos

### 1. Adicionar Foto/Avatar Real

**Opção 1: Usar foto local**
```jsx
// Em Hero.jsx e About.jsx, substitua:
<div className="w-full h-full rounded-full bg-gray-200 dark:bg-dark-card flex items-center justify-center text-6xl font-bold gradient-text">
  R
</div>

// Por:
<img 
  src="/images/sua-foto.jpg" 
  alt="Ronaldx" 
  className="w-full h-full rounded-full object-cover"
/>
```

**Opção 2: Usar Gravatar ou URL externa**
```jsx
<img 
  src="https://github.com/ronaldornd.png" 
  alt="Ronaldx" 
  className="w-full h-full rounded-full object-cover"
/>
```

### 2. Atualizar Número de WhatsApp

Procure por `https://wa.me/5581982914552` em:
- `Hero.jsx`
- `Contact.jsx`
- `Footer.jsx`

Substitua por: `https://wa.me/5581999999999` (seu número com DDI + DDD)

### 3. Adicionar Imagens dos Projetos

**Passo 1:** Coloque suas imagens em `public/images/`

**Passo 2:** Em `Projects.jsx`, atualize:
```jsx
{
  id: 1,
  name: 'Sistema de Gerenciamento',
  image: '/images/projeto1.png', // 🎨 Troque o emoji
  // ... resto do projeto
}
```

**Dica:** Use imagens no formato:
- PNG ou JPG
- Tamanho recomendado: 800x600px
- Otimizadas (<500KB cada)

### 4. Personalizar Projetos

Em `Projects.jsx`, atualize o array `projects`:

```jsx
const projects = [
  {
    id: 1,
    name: 'Nome do Projeto',
    category: 'fullstack', // ou 'frontend' ou 'backend'
    description: 'Descrição curta e objetiva',
    problem: 'Que problema resolve?',
    learning: 'O que você aprendeu fazendo?',
    image: '/images/projeto.png',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/ronaldornd/projeto',
    demo: 'https://projeto.vercel.app', // ou null se não tiver
  },
  // Adicione mais projetos...
];
```

### 5. Atualizar Experiências

Em `Experience.jsx`, edite o array `experiences`:

```jsx
const experiences = [
  {
    title: 'Seu Cargo/Função',
    organization: 'Nome da Empresa/Instituição',
    period: 'Mês/Ano - Mês/Ano',
    description: 'O que você fez nesta posição',
    achievement: 'Principal conquista',
    icon: '💼', // Escolha um emoji
  },
];
```

### 6. Ajustar Habilidades

Em `Skills.jsx`, edite as categorias e níveis:

```jsx
{
  name: 'JavaScript',
  icon: <FaJs className="text-yellow-400" />,
  level: 85, // 0-100, seja honesto!
}
```

**Dica:** Seja realista nos níveis:
- 0-40: Iniciante
- 40-70: Intermediário
- 70-90: Avançado
- 90-100: Expert

### 7. Certificações

Em `CertificationsAndHighlights.jsx`:

```jsx
const certifications = [
  {
    name: 'Nome do Curso',
    platform: 'Plataforma (DIO, Udemy, etc)',
    date: 'Mês Ano',
    description: 'Breve descrição',
    link: 'https://link-do-certificado.com', // ou '#'
    icon: '🎓',
  },
  // Para certificados com detalhes de competências (aparece destaque especial):
  {
    name: 'Cybersecurity Essentials',
    platform: 'Cisco Networking Academy',
    date: '02/04/2024',
    description: 'Descrição do curso',
    link: '#',
    icon: '🔒',
    hours: '30 horas', // Opcional - aparece como badge
    grade: '7,9', // Opcional - aparece como badge
    skills: [ // Opcional - cria layout especial em destaque
      'Competência 1',
      'Competência 2',
      'Competência 3'
    ]
  },
];
```

**Dica:** Certificados com o campo `skills` aparecem em destaque maior com layout de duas colunas!

### 8. Depoimentos

Em `Testimonials.jsx`:

```jsx
const testimonials = [
  {
    name: 'Nome da Pessoa',
    role: 'Cargo/Relação',
    content: 'O que a pessoa disse sobre você',
    avatar: '👤', // Emoji ou URL de foto
    rating: 5, // 1-5 estrelas
  },
];
```

### 9. Status Atual

Em `Contact.jsx`, atualize:

```jsx
<p className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
  <span className="text-2xl">📚</span>
  O que você está fazendo agora
</p>
```

### 10. Sobre Você

Em `About.jsx`, personalize:

```jsx
// Bio criativa
<p className="text-lg text-gray-700 dark:text-gray-300">
  Sua história única aqui...
</p>

// Curiosidades
<p className="text-gray-700 dark:text-gray-300">
  💪 Sua curiosidade interessante
</p>
```

## 🎨 Personalização Visual

### Mudar Cores Principais

Em `tailwind.config.js`:

```js
colors: {
  primary: {
    500: '#0ea5e9', // Sua cor primária
    600: '#0284c7', // Tom mais escuro
  },
}
```

**Paletas sugeridas:**

| Tema | Cor Primária | Código |
|------|--------------|--------|
| Azul Tech | Azul | #0ea5e9 |
| Verde Code | Verde | #10b981 |
| Roxo Criativo | Roxo | #8b5cf6 |
| Laranja Energia | Laranja | #f97316 |

### Adicionar Fonte Personalizada

Em `index.html`, adicione no `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

Em `tailwind.config.js`:

```js
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
  },
}
```

## 🔗 Links e Redes Sociais

Procure e substitua em TODOS os componentes:

- `https://github.com/ronaldornd` → Seu GitHub
- `https://linkedin.com/in/ronaldosbarbosaa` → Seu LinkedIn
- `ronaldo.s.barbosa@outlook.com` → Seu email
- `https://wa.me/5581982914552` → Seu WhatsApp

### Verificação Rápida

Use a busca do VS Code (Ctrl+Shift+F) e procure por:
- `ronaldornd`
- `ronaldosbarbosaa`
- `ronaldo.s.barbosa`
- `yourphone`

## 📊 Estatísticas do GitHub

Em `CertificationsAndHighlights.jsx`, atualize os números reais:

```jsx
<div className="text-3xl font-bold text-primary-500 mb-1">15+</div>
<div className="text-sm text-gray-600 dark:text-gray-400">Repositórios</div>
```

Veja suas estatísticas em: https://github.com/ronaldornd

## 🎭 Easter Eggs Personalizados

Em `Footer.jsx`, customize a mensagem secreta:

```jsx
<p className="font-bold">🎉 Você encontrou o Easter Egg!</p>
<p className="text-sm mt-1">
  "Sua frase inspiradora aqui"
</p>
```

## 📱 Formulário de Contato

### Opção 1: Email direto (atual)
Já configurado para abrir o cliente de email.

### Opção 2: Formspree (grátis)
1. Crie conta em https://formspree.io
2. Em `Contact.jsx`:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('https://formspree.io/f/SEU_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
  });
  // ... resto do código
};
```

### Opção 3: EmailJS
1. Crie conta em https://emailjs.com
2. Siga documentação para integrar

## 🚀 Otimizações

### Comprimir Imagens

Antes de adicionar imagens, otimize em:
- https://tinypng.com (PNG/JPG)
- https://squoosh.app (Qualquer formato)

### Meta Tags para SEO

Em `index.html`:

```html
<head>
  <title>Ronaldx - Desenvolvedor Web Júnior</title>
  <meta name="description" content="Portfólio de Ronaldx, desenvolvedor júnior especializado em React, Node.js e PostgreSQL">
  <meta name="keywords" content="desenvolvedor, react, nodejs, portfolio">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Ronaldx - Desenvolvedor Web">
  <meta property="og:description" content="Transformo ideias em código">
  <meta property="og:image" content="/og-image.jpg">
</head>
```

## 📝 Checklist Final

Antes de publicar, verifique:

- [ ] ✅ Foto/avatar real adicionada
- [ ] ✅ Todos os links funcionando
- [ ] ✅ Número de WhatsApp correto
- [ ] ✅ Email correto em todos os lugares
- [ ] ✅ Projetos com imagens reais
- [ ] ✅ Informações pessoais atualizadas
- [ ] ✅ Certificados com links válidos
- [ ] ✅ Testado em mobile
- [ ] ✅ Testado em diferentes navegadores
- [ ] ✅ Imagens otimizadas
- [ ] ✅ Meta tags configuradas

## 💡 Dicas Pro

1. **Seja Autêntico:** Use sua voz, não copie
2. **Atualize Regularmente:** Adicione novos projetos
3. **Use Boas Fotos:** Imagens de qualidade fazem diferença
4. **Teste Muito:** Em diferentes dispositivos e navegadores
5. **Peça Feedback:** Mostre para amigos e professores
6. **Analytics:** Adicione Google Analytics para ver visitas
7. **Performance:** Use Lighthouse do Chrome para verificar

## 🆘 Problemas Comuns

### Imagens não aparecem
- Verifique se estão na pasta `public/`
- Use caminho começando com `/` (ex: `/images/foto.jpg`)

### Tema não salva
- Verifique se o localStorage está habilitado no navegador

### Animações lentas
- Reduza a duração em `transition={{ duration: 0.3 }}`

### Layout quebrado no mobile
- Teste com DevTools do navegador (F12 > Toggle Device Toolbar)

## 📞 Precisa de Ajuda?

Se algo não funcionar, verifique:
1. Console do navegador (F12)
2. Terminal onde o Vite está rodando
3. Documentação das bibliotecas

---

**Boa sorte com seu portfólio! 🚀**
