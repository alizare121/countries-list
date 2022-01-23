import { ThemeContext, Icon } from '@components';
import { useContext } from 'react';

function App() {
  const [toggleTheme] = useContext(ThemeContext);
  return (
    <div>
      ali baba test
      <div onClick={toggleTheme}>
        <Icon name='moon' />
      </div>
    </div>
  );
}

export default App;
