// first file executed
// third party library 和 js 檔省略副檔名
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';  // -> App 是個元件

// 抓 /public/index.html 中的 #root 元素 
// 在 root 上 render App 的東西
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); // -> 這是 jsx 語法

