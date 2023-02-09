# React Modal component

A simple component displaying a personalized message in a new window.

# Installation

Run the following command: `npm install modal-react-for-projects`

# How to use

```
import React, { useState } from 'react';
import { Modal } from 'modal-react-for-projects';

const App = () => {

const [show, setShow] = useState(false);

return (
    <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
                <p className="text">Your message here</p>
            </Modal>
  );
};

export default App;

```

## Example

![Render example](https://imgur.com/4xJfcEt)
