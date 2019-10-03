# React Hooks

## Configuration

Hooks is a new API from React that allow us to use state and other features without write one class.

- After create a new app
  - `yarn create react-app my-app`
- Create the `.editorconfig`
- Install the **Eslint** and **Prettier**
  - `yarn add eslint -D`
  - `yarn add prettier eslint-config-prettier eslint-plugin-prettier -D`
  - `yarn add eslint-plugin-react-hooks -D`
- Then initialize Eslint
  - `yarn eslint --init`
- After installed everything, configure the .eslintrc.js/.prettierrc/.editorconfig => (Files)[https://gist.github.com/richardyamamoto/48629ca8b08df04521d547aacfbdd63c]

---

## useState

The `useState()` allow us to create state inside functional components. So every single state is going to have an `useState()`.

- In first hand we import it from react
  - `import React, { useState } from 'react`
- Now we create a constant that will receive the `useState()`

```js
const [] = useState();
```

- We are going to use unstruction
- The first parameter of `useState()` is the state itself
  - That could be an Array, Object, String, Number, etc.
- And the fist item of the unstructured array is the name of the state and the second the method that will manipulate it

```js
const [techList, setTechList] = useState([]);
```

- The whole file going to looks like

```js
import React, { useState } from 'react';

function App() {
  const [techList, setTechList] = useState(['ReactJS', 'React Native']);
  const [newTech, setNewTech] = useState('');

  const handleChange = event => {
    setNewTech(event.target.value);
  };

  const handleAdd = () => {
    setTechList([...techList, newTech]);
    setNewTech('');
  };
  return (
    <>
      <ul>
        {techList.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <input type="text" value={newTech} onChange={handleChange} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
```

---

## useEffect

The method `useEffect()` overwrite the life cycle methods `componentDidMount()`, `componentDidUpdate()` and `componentWillUnmount()`. It always run in first instance and with changes.

- The `useEffect()` waits:
  1. - First parameter, the fuction that will be executed
  2. - Second parameter, when its going to be executed
       2.1 - It is a dependencies array that listen to variable changes

```js
useEffect(() => {}, []);
```

- Analog to `componentDidUpdate()`
- The function that we want to execute is the `localStorage.setItem()`
  - The first parameter is the name of the array
  - The second parameter is the data that we are going to set into the local storage
    - Use `JSON.stringify(<state>)`

```js
useEffect(() => {
  localStorage.setItem('techList', JSON.stringify(techList));
}, [techList]);
```

- Analog to `componentDidMount()`
- Then if we want to to record the tech list array in our local storage and mount only once
- The `useEffect()` must listen to an empty dependencie array.
- And verify if there is any data inside the local storage.

```js
useEffect(() => {
  const storageTechList = localStorage.getItem('techList');

  if (storageTechList) {
    setTechList(JSON.parse(storageTechList));
  }
}, []);
```

- Analog to `componentWillUnmount()`
- It is used when we want to do something when the component stop existing
- The `useEffect()` will return the function that we will execute

```js
useEffect(() => {
  //Block of code that will run normally
  return () => {
    // The function that will be executed when the component stop existing
  };
}, []);
```

---
