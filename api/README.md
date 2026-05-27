# Zenakhe Digital Solutions — API

Node.js/Express REST API for zendata-avenue.co.za

## Endpoints

| Method | Path       | Description              |
|--------|------------|--------------------------|
| GET    | /health    | Health check             |
| POST   | /contact   | Submit contact form      |

## Local Development

```bash
cd api
npm install
cp .env.example .env
# Edit .env with your local DB credentials
npm run dev
```

Test it:
```bash
curl -X POST http://localhost:3000/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Hello from test"}'
```

---

## Server Deployment (Hetzner VPS)

### 1. SSH into server
```bash
ssh root@YOUR_SERVER_IP
```

### 2. Install Node.js 20 + PM2
```bash
curl -fsSL https://rpm.nodesource.com/setup_20.x | bash -
dnf install -y nodejs
npm install -g pm2
```

### 3. Set up MySQL database
```bash
mysql -u root -p
```
```sql
CREATE DATABASE zenakhe_prod CHARACTER SET utf8mb4;
CREATE USER 'zenakhe'@'localhost' IDENTIFIED BY 'YourStrongPassword';
GRANT ALL PRIVILEGES ON zenakhe_prod.* TO 'zenakhe'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

Run the schema:
```bash
mysql -u zenakhe -p zenakhe_prod < /var/www/api/db/schema.sql
```

### 4. Upload API files
From your local machine:
```bash
scp -r api/* root@YOUR_SERVER_IP:/var/www/api/
```

### 5. Configure environment
```bash
cd /var/www/api
cp .env.example .env
nano .env
```

Fill in:
```
PORT=3000
NODE_ENV=production
DB_HOST=localhost
DB_USER=zenakhe
DB_PASSWORD=YourStrongPassword
DB_NAME=zenakhe_prod
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=your_gmail_app_password
NOTIFY_EMAIL=info@zendata-avenue.co.za
ALLOWED_ORIGIN=https://www.zendata-avenue.co.za
```

### 6. Install dependencies and start
```bash
cd /var/www/api
npm install --production
mkdir -p /var/log/zenakhe-api
pm2 start ecosystem.config.js --env production
pm2 save
pm2 startup
```

### 7. Nginx config (add to /etc/nginx/conf.d/zendata-avenue.conf)
```nginx
location /api/ {
    proxy_pass http://localhost:3000/;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_cache_bypass $http_upgrade;
}
```

### 8. Verify
```bash
curl https://www.zendata-avenue.co.za/api/health
# Should return: {"status":"ok","service":"Zenakhe Digital Solutions API",...}
```

---

## Gmail App Password Setup (for email notifications)

1. Go to myaccount.google.com → Security
2. Enable 2-Step Verification
3. Search "App passwords" → Create one for "Mail"
4. Copy the 16-character password into `SMTP_PASS` in `.env`

---

## PM2 Commands

```bash
pm2 status                    # check running processes
pm2 logs zenakhe-api          # view live logs
pm2 restart zenakhe-api       # restart after code changes
pm2 stop zenakhe-api          # stop
```
