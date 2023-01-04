# good-ui

good UI that supports react-native based android, ios and web

## Installation

```sh
yarn add react-native-good-ui
# or
npm install react-native-good-ui
```

## Usage

```jsx
import { Text } from 'react-native';

import { Spacer, Column, Row } from 'react-native-good-ui';
import { storage } from 'react-native-good-ui';

function AComponent() {
  <Column>
    <Text>Hello World</Text>

    <Spacer preset={'huge'}/>

    <Row>
      <Text>Hello</Text>
      <Text>Wayne</Text>
    </Row>
  </Column>
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
