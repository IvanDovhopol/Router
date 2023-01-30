import { ThemeProvider } from 'styled-components';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { theme } from 'constans/theme';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
