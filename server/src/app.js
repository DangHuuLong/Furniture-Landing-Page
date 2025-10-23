import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

//Cho phép FE gọi API khác origin.
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true //cho phép gửi cookie (sau này dùng refresh token).
}));
app.use(express.json());
app.use(cookieParser()); //đọc cookie từ request (sẽ dùng cho auth).

app.get('/health', (req, res) => res.json({ ok: true }));

export default app;
