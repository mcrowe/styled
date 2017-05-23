# styled

Style components in pure Javascript.

## Usage

> npm install @mcrowe/styled --save

```js
import styled from '@mcrowe/styled'

const Box = styled('div', {
  display: 'flex'
})

const Row = styled(Box, {
  flexDirection: 'row'
})

const Button = styled('button', props => ({
  padding: 12,
  backgroundColor: props.primary ? 'green' : 'gray'
}))

const MyComponent = () =>
  <Row>
    <Button>No</Button>
    <Button primary>Yes</Button>
  </Row>
```

## Development

Install npm modules:

> npm install

Run tests:

> npm test

## Release

Release a new version:

> bin/release.sh

This will publish a new version to npm, as well as push a new tag up to github.
