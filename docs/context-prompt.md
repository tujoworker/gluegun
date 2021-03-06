## ask

This is the lovely and talented [enquirer](https://github.com/enquirer/enquirer).

> This is an **async** function.

#### example

```js
// text input
const askAge = { type: 'input', name: 'age', message: 'How old are you?' }

// multiple choice
const askShoe = { 
  type: 'input',
  name: 'shoe',
  message: 'What shoes are you wearing?',
  choices: [ 'Clown', 'Other' ]
}

// ask a series of questions
const questions = [askAge, askShoe]
const { age, shoe } = await context.prompt.ask(questions)
```

## confirm

> This is an **async** function.

A pre-built prompt which asks a yes or no question.

#### parameters

* **message** is a `string` required for displaying a message to user.  It's the question you're asking. 

#### returns

`true` or `false`

#### example

```js
const isThe90s = await context.prompt.confirm('Ya`ll ready for this?')
```

## separator

Returns a separator you can use in your multiple choice prompts.  It will draw a nice `--------` line and will not be able to be selected by the user.

#### parameters

* none

#### returns

A value only relevant for a use a multiple choice prompt.

#### example

```js
 const choices = [
   'red',
   'green',
   context.prompt.separator(), 
   'cheese',
   'bread'
 ]
```
