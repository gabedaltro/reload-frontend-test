# Frontend Test

First of all, welcome!

This is the [Reload Health](https://reload.co) test for frontend positions.

### Summary

- [Stack](#stack)
- [Steps](#Steps)
- [Description](#description) (Here you will find what is required from this test)
- [Utils](#utils)

## Stack

We expect this test to be written according to this technology stack:

### Core

- ReactJS
- Typescript
- Styled-components
- ContextAPI

### Bonus

This is not required in this test but will count positively if you use/implement it.

- NextJS
- CI/CD (Gitlab ci if you're hosting at Gitlab and Github actions if you're using Github)

## Steps

You should:

- Download the JSON file
- Create a repository in Github/Gitlab and host the code there
- Export images from figma
- Mention and describe in the README file about the project
- Give us your best, use your **best practices**
- Follow the prototyping in Figma

## Description

This section will describe what we expect from you in this test.

You must create a dashboard to show products. [Click here to see the design you must follow](https://www.figma.com/file/tAcUO4he80CxDqN032yaxz/Frontend-Test?node-id=0%3A1).

The dashboard must work in one breakpoint: **428px** (more breakpoints is not required, but will count positively if you implement it)

You must show the skeleton page for 2 seconds before going to the home page.

When the user click in the card's button, the product must be added in his shopping cart:

- If no one product has been added, the shopping cart progress bar should be empty
- If has one product added, the shopping cart progress bar should be 1/4
- If has two products added, the shopping cart progress bar should be 2/4
- If has three products added, the shopping cart progress bar should be 3/4
- If has four products added, the shopping cart progress bar should be full
- If the user tries to add a product that has already been added, the modal should appear

## Utils

```code
interface ProductProps {
  id: number;
  name: string;
  brand: string;
  score: number;
  price: string;
  capsuleAmount: number;
  isInPack: boolean;
  hasPrecaution: boolean;
  hasSynergy: boolean;
  healthGoals: {
      score: number;
  }[];
  symptoms: {
      score: number;
  }[];
}
```
