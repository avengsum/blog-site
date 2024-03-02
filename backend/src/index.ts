import { Hono } from 'hono'
import blog from './routes/blogRoutes';
import { user } from './routes/userRoutes';

export const app = new Hono<{
  Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
  }
}>();

app.route('/api/v1/user', user)
app.route('/api/v1/book', blog)

export default app


// it run on surver 8787