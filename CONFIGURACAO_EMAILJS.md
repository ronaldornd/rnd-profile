# 📧 Configuração do EmailJS

Guia completo para configurar o envio de emails no seu portfólio usando EmailJS (100% gratuito).

---

## 🚀 Passo 1: Criar Conta no EmailJS

1. Acesse: **https://www.emailjs.com/**
2. Clique em **"Sign Up"** (no canto superior direito)
3. Crie sua conta com email ou Google
4. Confirme seu email

✅ **Plano gratuito:** 200 emails/mês

---

## 📮 Passo 2: Conectar seu Email

1. No dashboard, clique em **"Email Services"** (menu lateral)
2. Clique em **"Add New Service"**
3. Escolha seu provedor de email:
   - **Gmail** (recomendado)
   - Outlook
   - Yahoo
   - Outros

### Para Gmail:

1. Selecione **"Gmail"**
2. Clique em **"Connect Account"**
3. Faça login com sua conta Google
4. Autorize o EmailJS
5. Dê um nome ao serviço (ex: "Portfolio Contact")
6. Copie o **Service ID** (ex: `service_abc123`)

---

## 📝 Passo 3: Criar Template de Email

1. Clique em **"Email Templates"** (menu lateral)
2. Clique em **"Create New Template"**
3. Configure o template:

### Template Recomendado:

**Subject (Assunto):**
```
🔔 Nova Mensagem do Portfolio - {{from_name}}
```

**Content (Corpo do Email):**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #22c55e, #16a34a); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .info { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #22c55e; border-radius: 5px; }
        .message { background: white; padding: 20px; margin: 20px 0; border-radius: 5px; white-space: pre-wrap; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔔 Nova Mensagem do Portfolio!</h1>
        </div>
        <div class="content">
            <div class="info">
                <strong>👤 Nome:</strong> {{from_name}}
            </div>
            <div class="info">
                <strong>📧 Email:</strong> <a href="mailto:{{from_email}}">{{from_email}}</a>
            </div>
            <div class="info">
                <strong>⏰ Data:</strong> {{timestamp}}
            </div>
            
            <h3>💬 Mensagem:</h3>
            <div class="message">
                {{message}}
            </div>

            <p style="margin-top: 30px;">
                <strong>Para responder:</strong> 
                <a href="mailto:{{from_email}}" style="background: #22c55e; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
                    Responder Email
                </a>
            </p>
        </div>
        <div class="footer">
            <p>Email enviado automaticamente do seu portfolio</p>
        </div>
    </div>
</body>
</html>
```

4. Configure os **parâmetros do template**:
   - `from_name` (Nome do remetente)
   - `from_email` (Email do remetente)
   - `message` (Mensagem)
   - `to_name` (Seu nome - valor padrão: "Ronaldx")
   - `timestamp` (Data/hora - preenchido automaticamente)

5. Em **"To Email"**, coloque: `{{to_email}}` ou seu email fixo: `ronaldo.s.barbosa@outlook.com`

6. Clique em **"Save"**

7. Copie o **Template ID** (ex: `template_xyz456`)

---

## 🔑 Passo 4: Obter Public Key

1. Clique em **"Account"** (menu lateral)
2. Na seção **"API Keys"**
3. Copie sua **Public Key** (ex: `Abc123XyZ456`)

---

## ⚙️ Passo 5: Configurar no Projeto

1. Abra o arquivo `.env` na raiz do projeto

2. Adicione as credenciais:

```env
# EMAILJS - ENVIO DE EMAILS
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz456
VITE_EMAILJS_PUBLIC_KEY=Abc123XyZ456
```

3. **Substitua pelos seus valores reais!**

---

## ✅ Passo 6: Testar

1. Reinicie o servidor de desenvolvimento:
```bash
npm run dev
```

2. Acesse a seção de contato

3. Preencha o formulário e envie

4. Verifique seu email! 📬

---

## 🎯 Template Simplificado (Alternativa)

Se preferir um template mais simples:

**Subject:**
```
Nova Mensagem - {{from_name}}
```

**Content:**
```
Você recebeu uma nova mensagem através do seu portfolio:

Nome: {{from_name}}
Email: {{from_email}}

Mensagem:
{{message}}

---
Enviado em: {{timestamp}}
```

---

## 🔧 Personalização Avançada

### Adicionar mais campos ao formulário:

1. No `Contact.jsx`, adicione novos campos:
```jsx
const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',        // NOVO
    subject: '',      // NOVO
    message: '',
});
```

2. No template do EmailJS, adicione as variáveis:
```html
<strong>📱 Telefone:</strong> {{phone}}
<strong>📋 Assunto:</strong> {{subject}}
```

3. No `emailService.js`, inclua nos `templateParams`:
```javascript
const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,        // NOVO
    subject: formData.subject,    // NOVO
    message: formData.message,
    // ...
};
```

---

## 📊 Monitoramento

No dashboard do EmailJS você pode ver:
- ✅ Emails enviados com sucesso
- ❌ Emails que falharam
- 📈 Estatísticas de uso
- 🔔 Alertas de limite

---

## 🚨 Resolução de Problemas

### ❌ "Public Key not found"
- Verifique se copiou a Public Key corretamente
- Certifique-se de que está no arquivo `.env`
- Reinicie o servidor

### ❌ "Service ID invalid"
- Confirme o Service ID no dashboard
- Verifique se o serviço está ativo

### ❌ "Template not found"
- Confirme o Template ID
- Verifique se o template foi salvo

### ❌ Email não chegou
- Verifique a caixa de spam
- Confirme o email de destino no template
- Veja logs no dashboard do EmailJS

### ❌ "Failed to send email"
- Verifique sua conexão com internet
- Confirme todas as credenciais
- Veja console do navegador para detalhes

---

## 🔒 Segurança

✅ **O que é seguro:**
- Public Key pode ser exposta no frontend
- Service ID e Template ID são públicos

⚠️ **Não exponha:**
- Sua senha do EmailJS
- Private Key (se houver)

---

## 💰 Limites do Plano Gratuito

- 📧 **200 emails/mês**
- ✅ Todos os recursos básicos
- ✅ Templates ilimitados
- ✅ Serviços ilimitados

**Upgrade (se necessário):**
- Personal: $7/mês - 1.000 emails
- Professional: $35/mês - 10.000 emails

---

## 🎉 Pronto!

Seu formulário de contato agora envia emails reais! 

**Próximos passos:**
- [ ] Testar envio de email
- [ ] Personalizar template
- [ ] Configurar notificação WhatsApp (opcional)
- [ ] Adicionar Google reCAPTCHA (opcional)
- [ ] Configurar auto-resposta (opcional)

---

## 📚 Recursos Adicionais

- [Documentação EmailJS](https://www.emailjs.com/docs/)
- [Templates de Email](https://www.emailjs.com/docs/examples/basic/)
- [API Reference](https://www.emailjs.com/docs/sdk/send/)
- [FAQ](https://www.emailjs.com/docs/faq/)

---

**Dúvidas?** Abra uma issue no GitHub ou me chame no WhatsApp! 💚
