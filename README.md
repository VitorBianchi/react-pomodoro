# Yarn
Bem semelhante ao NPM porém com funcionalidades extras

## Start new React Aplication
```sh
  # create new project
  yarn create react-app myapp --template=typescript
```

## Add a new package
```sh
  # Add a new package
  yarn add <package name>
```
<br>

# TypeScript

## Typescript is essential for keeping code clean
```ts
  interface ProductProps = {
    id: int;
    name: string;
    price: float;
    avaiable: true | none;
  }

  export function RowProduct(props: ProductProps){
    return (
      <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.price}</td>
        <td>{props.avaiable}</td>
      </tr>
    );
  }
```
<br>

# CSS
## Creating pure CSS variables
```css
:root {
  --variable-color: #ffffff;
}

body {
  background: var(--variable-color);
}
```

## Using 'rem' for more acessibility

```css
@media(max-width: 1080px){
  html{
    font-size: 93.75%;
  }
}

@media(max-width: 720px){
  html{
    font-size: 87.5%;
  }
}

```
<br>

# Usefull Aplications

## Diagrams
> whimsical.com

## Prototype
> figma.com

## Productivity
> www.notion.so