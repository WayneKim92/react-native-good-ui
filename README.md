# good-ui

good UI that supports react-native based android, ios and web

## Requirement
```sh
# Enter commend in root directory at your react-native project
# If you want to use it in Web, refer to https://docs.expo.dev/versions/latest/sdk/reanimated/
yarn add react-native-reanimated
```

## Installation

```sh
yarn add react-native-good-ui
```

## Usage

```jsx
import { Text } from 'react-native';

import { Spacer, Column, Row, Select } from 'react-native-good-ui';
import { storage } from 'react-native-good-ui';

function AComponent() {
  <Column>
    <Text>Hello World</Text>

    <Spacer preset={'huge'}/>

    <Row>
      <Text>Hello</Text>
      <Text>Wayne</Text>
    </Row>

    <Select options={['option 1', 'option 2']}/>
  </Column>
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
