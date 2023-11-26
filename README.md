# ⭐️ Persist - Pro 

Persist Pro: Uma biblioteca avançada para gerenciamento otimizado de localStorage. Facilita a persistência de dados no navegador, oferecendo uma interface simples e robusta para armazenamento e recuperação de dados, incluindo suporte a objetos e arrays. Ideal para projetos que necessitam de armazenamento local confiável e eficiente.

---

## 💻 Demo 
🔗[Persist Pro Demo](https://persist-pro-demo.vercel.app/)

---

# ⚙️ Uso com React/Next.js
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

O hook `useLocalStorage` retorna um array com cinco elementos, que você pode desestruturar da seguinte forma:

```typescript
const [value, setValue, pushToStoredArray, removeValue, removeToArrayById] = useLocalStorage('key', 'initialValue');
```

### Props `useLocalStorage`:
<details>
<summary>Veja aqui</summary>


| Elemento          | Tipo       | Descrição                                                                                                                                                                    |
| ----------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value             | `any`      | Valor armazenado no localStorage.                                                                                                                                            |
| setValue          | `function` | Uma função para atualizar o valor armazenado no localStorage. Ao chamar `setValue(newValue)`, o valor no localStorage é atualizado, assim como o estado no componente.       |
| pushToStoredArray | `function` | Uma função para adicionar um item ao array no localStorage (é necessário que o valor salvo seja um `array`)                                                                  |
| removeValue       | `function` | Uma função para remover a chave especificada do hook `useLocalStorage`. Ao chamar `removeValue()`, a chave especificada e seu valor associado são removidos do localStorage. |
| removeToArrayById | `function` | Uma função para remover um item do array no localStorage (é necessário que o valor salvo seja um `array`)                                                                    |

</details>


### Exemplo de Usoa (valor simples):
> No exemplo a seguir, o hook é usado para gerenciar um nome de usuário:
```jsx
function MyComponent() {
  // Initializing the hook with the key 'user' and the initial value 'Visitor'
  const [userName, setUserName, pushToStoredArray, removeUserName, removeToArrayById] = useLocalStorage('userName', 'Visitor');

  // Another way of writing
  // const [useName, setUserName, , removeUserName] = useLocalStorage('userName', 'Visitor');
  // You can use the comma to skip and ignore an element in the array that you do not want to use.

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

### Exemplo de Uso (array):
> No exemplo a seguir, o hook é usado para gerenciar um array de frutas:
```jsx
function MyComponent() {
  const initialFruits = [{ id: 1, name: 'banana' }, { id: 2, name: 'maçã' }, { id: 3, name: 'laranja' }];
  const newFruits = [{ id: 1, name: 'melancia' }, { id: 2, name: 'goiaba' }];

  // Initializing the hook with the key 'fruits' and the initial value 'initialFruits'
  const [fruits, setFruits, pushToStoredArray, removeFruits, removeToArrayById] = useLocalStorage('fruits', initialFruits);


  // Example of how set new array
  const addFruit = () => {
    setFruits(newFruits);
  };

  // Example of how to update the value
  const addFruit = () => {
    pushToStoredArray({ id: 4, name: 'morango' });
  };

  // Example of how to remove the key from localStorage
  const clearFruits = () => {
    removeFruits();
  };

  // Example of how to remove item from array
  const handleRemoveLocalStorage = (id) => {
    removeToArrayById(id);
  }

  return (
    <div>
      {fruits.map((fruit, index) => (
         <div key={index}>
          <p>{fruit}</p>
          <button onClick={() => handleRemoveLocalStorage(fruit.id)}>Remove</button>
          <button onClick={clearFruits}>Clear fruits</button>
        </div>
      ))}
      <button onClick={addFruit}>Add fruit</button>
    </div>
  );
}
```

Neste exemplo, MyComponent utiliza o hook useLocalStorage para gerenciar um array de frutas armazenado no localStorage. As funções pushToStoredArray e removeToArrayById são usadas para adicionar e remover itens do array, respectivamente. A função setFruits é usada para inserir um novo array de frutas. A função clearFruits é usada para remover o array de frutas do localStorage. E a variável fruits é usada para renderizar o array de frutas na tela.

</details>

--- 

### ✨ Como contribuir
Para contribuir com o projeto, leia o arquivo [CONTRIBUTING.md](/CONTRIBUTING.md)

### ℹ️ Mais infos 
- [Persist Pro](https://www.npmjs.com/package/persist-pro) - pacote `npm`.

### ⁉️ Dúvidas, sugestões e melhorias 
Se você tiver dúvidas, quiser relatar um bug ou solicitar novos recursos, por favor, abra uma [issue](https://github.com/vitor-nogueira-dev/persist-pro-demo/issues) no nosso repositório, ou conecte-se comigo no Linkedin - [Vitor Nogueira](https://www.linkedin.com/in/vitor-nogueira-dev/)


### 🪪 Licença
Persist Pro is [MIT licensed](./LICENSE). 