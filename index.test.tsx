import * as React from 'react';
import { render } from '@testing-library/react-native';

// eslint-disable-next-line import/extensions
import App from './App';

describe('<App />', () => {
  it('renders with text', () => {
    // Arrange
    const { getByText } = render(<App />);

    // Act
    const screenText = getByText('Hello World!');

    // Assert
    expect(screenText).toBeDefined();
  });
});
