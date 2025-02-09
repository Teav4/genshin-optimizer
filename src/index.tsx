import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga4';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
ReactGA.initialize(process.env.REACT_APP_GA_TRACKINGID as any, {
  testMode: process.env.NODE_ENV === "development"
});
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(undefined);
