# Configuração: GitHub Pages e Testes (Vitest)

Este arquivo descreve passos rápidos para habilitar o deploy para GitHub Pages e como adicionar testes com Vitest.

## GitHub Pages (deploy via GitHub Actions)

1. Vá em *Settings > Pages* do repositório no GitHub.
2. Em *Source*, selecione **GitHub Actions**.
3. Salve as configurações. O workflow `.github/workflows/deploy.yml` já cria e publica o conteúdo da pasta `dist`.
4. Após o primeiro push na branch `main`, verifique a aba *Actions* para confirmar o sucesso do job `build-and-deploy`.
5. Se quiser usar um domínio customizado, adicione o arquivo `CNAME` dentro de `public/` (ou configure via Settings > Pages) e aguarde a propagação.

## Observações sobre permissões

- O workflow usa permissões `pages: write` e `id-token: write` para fazer o deploy.
- Garanta que a branch `main` esteja protegida conforme suas políticas (o deploy ainda funcionará com proteção, desde que a action tenha permissões adequadas).

## Adicionando testes com Vitest (opcional)

1. Instale as dependências:

```
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

2. Adicione scripts em `package.json`:

```
"scripts": {
  "test": "vitest",
  "test:watch": "vitest --watch"
}
```

3. Crie uma pasta de testes (ex: `src/__tests__/`) e adicione testes com a API do Vitest/Testing Library.

4. Atualize o workflow CI (`.github/workflows/ci.yml`) adicionando um passo `npm run test` antes do build para rodar os testes em CI.

Exemplo de passo a inserir no job `quality`:

```
- name: Run tests
  run: npm run test --if-present
```

> Nota: `--if-present` permite que o workflow não falhe se ainda não houver o script `test` definido.

## Recomendações finais

- Use `npm ci` em CI para instalações determinísticas.
- Mantenha cache (actions/cache) para acelerar execuções.
- Quando adicionar testes, considere executar apenas os testes afetados por mudanças para economizar tempo.
