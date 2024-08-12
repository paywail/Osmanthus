import {
  createBrowserRouter,
} from 'react-router-dom';
import Editor from '../pages/editor';
import Preview from '../pages/preview';
import NotFound from '../pages/error/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Editor,
  },
  {
    path: "preview/:id",  // 动态路由
    Component: Preview,
  },
  {
    path: "*",  // 404页面
    Component: NotFound,
  },
]);
export default router;