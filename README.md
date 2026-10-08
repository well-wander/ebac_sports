# EBAC Sports — Exercício de Redux com React

Exercício do módulo **Introdução ao Redux com React** do curso de Engenheiro Front-End da [EBAC](https://ebaconline.com.br).

Fork do [projeto base](https://github.com/havokkmorands/ebac_sports), com o gerenciamento de estado trocado de `useState` para **Redux**.

## O que mudou

| Antes (`useState` no `App`) | Depois (Redux) |
|---|---|
| `produtos` + `useEffect` com `fetch` | **RTK Query**: `useGetProdutosQuery` em `src/services/api.ts` |
| `carrinho` + `adicionarAoCarrinho` | **slice** `carrinho` com a action `adicionar` |
| `favoritos` + `favoritar` | **slice** `favoritos` com a action `favoritar` |
| props passadas do `App` até o `Produto` | cada componente lê a store com **`useSelector`** e altera com **`useDispatch`** |

## Estrutura

```
src/
  services/api.ts            RTK Query: endpoint getProdutos
  store/index.ts             configureStore + tipo RootReducer
  store/reducers/carrinho.ts slice do carrinho
  store/reducers/favoritos.ts slice dos favoritos
```

## Detalhes

- O `App` só envolve a aplicação com o `Provider`; não guarda mais estado nem repassa props (fim do *prop drilling*).
- O reducer do carrinho é uma função pura: o aviso "Item já adicionado" fica no componente `Produto`, antes do `dispatch`.
- A lista mostra "Carregando..." e uma mensagem de erro usando o `isLoading` e o `isError` do RTK Query.
- Adicionado um `.gitattributes` para manter as quebras de linha em LF. Sem ele, no Windows o Prettier acusa erro na tela.

## Como rodar

```bash
npm install
npm start
```

A página abre em `http://localhost:3000`.
