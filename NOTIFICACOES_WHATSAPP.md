# 📱 Configuração de Notificações WhatsApp

Este guia explica como configurar as notificações automáticas no WhatsApp quando alguém visitar seu site.

## 🚀 Método 1: CallMeBot (Gratuito e Simples)

### Passo 1: Obter API Key

1. **Adicione o número do CallMeBot no WhatsApp:**
   - Número: **+34 644 39 44 83**

2. **Envie a mensagem de ativação:**
   ```
   I allow callmebot to send me messages
   ```

3. **Aguarde a resposta:**
   - Você receberá um **API Key** único
   - Exemplo: `123456`

### Passo 2: Configurar Variáveis de Ambiente

1. **Crie o arquivo `.env` na raiz do projeto:**
   ```bash
   cp .env.example .env
   ```

2. **Edite o arquivo `.env`:**
   ```env
   VITE_WHATSAPP_PHONE=5581982914552
   VITE_CALLMEBOT_API_KEY=seu_api_key_aqui
   ```

3. **Substitua `seu_api_key_aqui` pelo API Key recebido**

### Passo 3: Testar

1. **Reinicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

2. **Abra o site no navegador:**
   - Aguarde 2 segundos
   - Você deve receber uma notificação no WhatsApp!

### Passo 4: Deploy (Produção)

Ao fazer deploy, configure as variáveis de ambiente na sua plataforma:

#### **Vercel:**
```bash
vercel env add VITE_WHATSAPP_PHONE
vercel env add VITE_CALLMEBOT_API_KEY
```

#### **Netlify:**
1. Vá em **Site settings** → **Environment variables**
2. Adicione:
   - `VITE_WHATSAPP_PHONE` = `5581982914552`
   - `VITE_CALLMEBOT_API_KEY` = `seu_api_key`

---

## 📊 Informações Rastreadas

Cada notificação inclui:
- ⏰ Data e hora da visita
- 📱 Tipo de dispositivo (Mobile/Tablet/Desktop)
- 🌍 Idioma do navegador
- 📺 Resolução da tela
- 🔗 Origem do acesso (referrer)

---

## ⚙️ Personalização

### Desabilitar em Desenvolvimento

Para não receber notificações durante o desenvolvimento, comente a linha no `App.jsx`:

```jsx
function App() {
    // useVisitTracker(); // Comentar esta linha
    
    return (
        // ...
    );
}
```

### Alterar Intervalo de Notificação

Edite o arquivo `src/hooks/useVisitTracker.js`:

```javascript
// Aguarda 2 segundos antes de rastrear
const timer = setTimeout(() => {
    trackVisit();
}, 2000); // Altere este valor (em milissegundos)
```

### Personalizar Mensagem

No arquivo `src/hooks/useVisitTracker.js`, edite a variável `message`:

```javascript
const message = `
🔔 *Nova Visita no Portfolio!*

⏰ ${visitorInfo.timestamp}
${deviceType}
🌍 Idioma: ${visitorInfo.language}
📺 Resolução: ${visitorInfo.screenResolution}
🔗 Origem: ${visitorInfo.referrer}

✨ Adicione suas personalizações aqui!
`.trim();
```

---

## 🔒 Segurança

- ✅ O `.env` está no `.gitignore` (não será commitado)
- ✅ Notificações são enviadas apenas uma vez por sessão
- ✅ Aguarda 2 segundos para evitar notificações falsas
- ✅ Usa `sessionStorage` para controle de notificações

---

## 🐛 Resolução de Problemas

### Não estou recebendo notificações

1. **Verifique o API Key:**
   - Certifique-se de que copiou corretamente
   - Verifique se há espaços extras

2. **Verifique o número do WhatsApp:**
   - Formato: `55DDDNNNNNNNNN` (sem espaços, traços ou parênteses)
   - Exemplo: `5581982914552`

3. **Verifique o console do navegador:**
   - Abra DevTools (F12)
   - Procure por mensagens de erro ou sucesso

4. **Teste a URL diretamente:**
   ```
   https://api.callmebot.com/whatsapp.php?phone=5581982914552&text=Teste&apikey=SEU_API_KEY
   ```

### Erro de CORS

Isso é normal! O CallMeBot não suporta CORS, mas a mensagem é enviada mesmo assim. Ignore este aviso no console.

---

## 🎯 Método 2: Webhook Personalizado (Avançado)

Se preferir ter mais controle, você pode criar seu próprio webhook:

1. **Crie uma API no backend** (Node.js, Python, PHP)
2. **Use Twilio WhatsApp API** ou **WhatsApp Business API**
3. **Configure webhook para receber dados do frontend**

### Exemplo com Netlify Functions:

```javascript
// netlify/functions/notify-visit.js
exports.handler = async (event) => {
    const visitorData = JSON.parse(event.body);
    
    // Envie notificação usando Twilio ou outra API
    
    return {
        statusCode: 200,
        body: JSON.stringify({ success: true })
    };
};
```

---

## 📚 Recursos Adicionais

- [CallMeBot API Documentation](https://www.callmebot.com/blog/free-api-whatsapp-messages/)
- [Twilio WhatsApp API](https://www.twilio.com/whatsapp)
- [WhatsApp Business API](https://business.whatsapp.com/)

---

## ✅ Checklist de Configuração

- [ ] Adicionei o número do CallMeBot (+34 644 39 44 83)
- [ ] Enviei a mensagem de ativação
- [ ] Recebi o API Key
- [ ] Criei o arquivo `.env`
- [ ] Configurei as variáveis de ambiente
- [ ] Testei localmente
- [ ] Configurei variáveis no deploy (Vercel/Netlify)
- [ ] Testei em produção

---

**Pronto!** Agora você receberá notificações no WhatsApp sempre que alguém visitar seu site! 🎉
