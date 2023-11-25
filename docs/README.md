persist-pro / [Exports](modules.md)

# 📦 Persist - Pro 

Persist Pro: Uma biblioteca avançada para gerenciamento otimizado de localStorage. Facilita a persistência de dados no navegador, oferecendo uma interface simples e robusta para armazenamento e recuperação de dados, incluindo suporte a objetos e arrays. Ideal para projetos que necessitam de armazenamento local confiável e eficiente.

# Uso com React/Next.js
<details>
<summary>Veja aqui</summary>

---
## 📦 Instalação

- **Usando npm:**

```bash
npm install persist-pro
```

- **Usando yarn:**

```bash
yarn add persist-pro
```
--- 

Para utilizar o `useLocalStorage` no seu projeto, comece importando o hook e, em seguida, desestruture as propriedades retornadas para gerenciar facilmente os dados no `localStorage`.

```typescript
import { useLocalStorage } from 'persist-pro';
```

O hook `useLocalStorage` retorna um array com três elementos, que você pode desestruturar da seguinte forma:

```typescript
const [value, setValue, removeValue] = useLocalStorage('key', 'initialValue');
```

### Props `useLocalStorage`:
<details>
<summary>Veja aqui</summary>

| Elemento    | Tipo       | Descrição                                                                                                                                                             |
| ----------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value       | `any`      | Valor armazenado no localStorage.                                                                                                                                     |
| setValue    | `function` | Uma função para atualizar o valor armazenado no localStorage. Ao chamar setValor(novoValor), o valor no localStorage é atualizado, assim como o estado no componente. |
| removeValue | `function` | Uma função para remover a chave especificada do localStorage. Ao chamar removeValor(), a chave especificada e seu valor associado são removidos do localStorage.      |

</details>

### Exemplo de Uso:
> No exemplo a seguir, o hook é usado para gerenciar um nome de usuário:
```typescript
function MyComponent() {
  // Initializing the hook with the key 'user' and the initial value 'Visitor'
  const [userName, setUserName, removeUserName] = useLocalStorage('user', 'Visitor');

  // Example of how to update the value
  const changeName = () => {
    setUserName('Alice');
  };

  // Example of how to remove the key from localStorage
  const clearName = () => {
    removeUserName();
  };

  return (
    <div>
      <p>User Name: {userName}</p>
      <button onClick={changeName}>Change Name to Alice</button>
      <button onClick={clearName}>Clear User Name</button>
    </div>
  );
}
```
Neste exemplo, MyComponent utiliza o hook useLocalStorage para gerenciar o nome do usuário armazenado no localStorage. As funções changeName e clearName são usadas para atualizar e remover o nome do usuário, respectivamente.

</details>

--- 

# Uso com JavaScript

<details>
<summary>Veja aqui</summary>

### Incluindo o script no seu projeto
```html
<script src="./dist/index.ts"></script>
```

### Métodos
| Método | Descrição |
| ------ | --------- |
| `setLocalStorage` | Uma função para atualizar o valor armazenado no localStorage. Ao chamar `setLocalStorage`('key', newValue), o valor no localStorage é atualizado. Retorna um objeto de erro em caso de falha. |
| `getLocalStorage` | Uma função para recuperar o valor armazenado no localStorage. Ao chamar `getLocalStorage`('key'), o valor associado à 'key' no localStorage é retornado. Retorna um objeto de erro em caso de falha. |
| `removeLocalStorage` | Uma função para remover a chave especificada do localStorage. Ao chamar `removeLocalStorage`('key'), a chave especificada e seu valor associado são removidos do localStorage. Retorna um objeto de erro em caso de falha. |
| `clearLocalStorage` | Limpa o localStorage. Retorna um objeto de erro em caso de falha. |

### Exemplo de Uso:
Após incluir o script, as funções estarão disponíveis para uso. Abaixo estão exemplos de como usar cada função:

`setLocalStorage(key, value)`:
- Define um valor no localStorage
```javascript
// Define um valor no localStorage
PersistPro.setLocalStorage('myKey', 'myValue');
PersistPro.setLocalStorage('outherKey', { obj: 'value' });
```

`getLocalStorage(key)`:
- Recupera um valor do localStorage
```javascript
// Recupera um valor do localStorage
let myKey = PersistPro.getLocalStorage('myKey');
let outherKey = PersistPro.getLocalStorage('outherKey');
console.log(myKey, outherKey); // myValue, { obj: 'value' }
```

`removeLocalStorage(key)`:
- Remove um valor do localStorage
```javascript
// Remove um valor do localStorage
PersistPro.removeLocalStorage('minhaChave');
```

`clearLocalStorage()`:
- Limpa o localStorage
```javascript
// Limpa o localStorage
PersistPro.clearLocalStorage();
```

#### Tratamento de Erros
Cada método retorna um objeto de erro em caso de falha, o qual contém dois campos: `error`, um booleano que indica a presença de um erro, e `message`, que fornece uma descrição do erro. Exemplo de objeto de erro:
```javascript
{
  error: true,
  message: "Error setting localStorage item: [Detalhes do Erro]"
}
```

</details>

<!-- ---
### Como contribuir
Para contribuir com o projeto, leia o arquivo [CONTRIBUTING.md](/CONTRIBUTING.md) -->

<!-- ---
### Mais infos 
- [Rtk Translate](https://github.com/vitor-nogueira-dev/rtk-translate) - repositório no GitHub.

---
### Dúvidas, sugestões e melhorias 
Se você tiver dúvidas, quiser relatar um bug ou solicitar novos recursos, por favor, abra uma [issue](https://github.com/vitor-nogueira-dev/rtk-translate/issues) no nosso repositório, ou conecte-se comigo no Linkedin - [Vitor Nogueira](https://www.linkedin.com/in/vitor-nogueira-dev/)

---
### Referências
- [React Flag Kit](https://www.npmjs.com/package/react-flag-kit)
- [Rtk Translate](https://www.npmjs.com/package/rtk-translate)

---
### Licença
Rtk Translate is [MIT licensed](./LICENSE). -->
