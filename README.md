# React Postal Code

React Postal Code is a library that can be used inside any ReactJS app. This library can be used to render Country, District & Block/City for any given Indian Pin Code. This library uses the official REST API provided by the Indian Government.

## About

The four input fields are wrapped inside an `<div>` element and each input field is also wrapped inside `<div>`. So that a user can style it according to the need in the project.

Whenever the wrong Pincode is entered red border appears on the pin code input field and on entering a right pin code, city, district and state input fields get automatically filled with correct data

## Working

```js
import { Pin } from 'react-postal-code'
```

### JS

```js
import React, { useState } from 'react';
import { Pin } from 'react-postal-code'

function App() {
  const [input, setInput] = useState<string>('');
  return (
    <>
        <input type="search" onChange={(e) => setInput(e.target.value)}>
        <Pin
            pincode={input}
            showBlock={true}
            showCountry={true}
            showDistrict={true}
            // lengthValidation="Optional custom length error message"
            // errorState="Optional custom error state for no data or data error"
        />
    </>
  );
}
```

### Playground

Codesandbox Implementation of this Library [here](https://codesandbox.io/s/relaxed-ritchie-8c3yy6?file=/src/App.tsx)

## Pin Props

1. Props for changing CSS Styles

| Name          | Description                      | Required |
| ------------- | -------------------------------- | -------- |
| \_container   | Container which wraps all 3 divs | Optional |
| \_validation  | Class name for Length Check      | Optional |
| \_error_state | Class Name for Error Check       | Optional |
| \_district    | Class Name for District div      | Optional |
| \_block       | Class Name for block div         | Optional |
| \_country     | Class Name for Country div       | Optional |

2. Props for changing error states.

By default,

- For a Pin code less than 6 digits - "Error - Enter 6 digits"
- If a Pin code is not found/data error - "Error - No Data found"

| Name             | Description                             | Required |
| ---------------- | --------------------------------------- | -------- |
| lengthValidation | Props for changing invalid length state | Optional |
| errorState       | Props for changing data error state     | Optional |

3. Pin component props.

By default,

- showCountry - `false`
- showDistrict - `false`
- showBlock - `false`
  Turn them to `true` to render out these data

| Name         | Description                         | Required |
| ------------ | ----------------------------------- | -------- |
| pincode      | Props for changing Pin Code         | Required |
| showCountry  | Props for rendering Country Name    | Optional |
| showDistrict | Props for rendering District Name   | Optional |
| showBlock    | Props for rendering Block/City Name | Optional |

### Note

This will only work for Indian Postal/Pin Codes.
Provide `true` to one of showCountry/showDistrict/showBlock props

## Owner

[Abhinav](https://twitter.com/abhhnv)
