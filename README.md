# Test Deploy Project

ছোট একটা Node.js (Express) প্রজেক্ট — শুধু GitHub + Coolify deployment টেস্ট করার জন্য।

## এটা কী করে
- `/` route এ একটা JSON message দেখাবে
- `/health` route এ health check status দেখাবে

## ধাপ ১: GitHub এ Upload

```bash
cd test-project
git init
git add .
git commit -m "Initial commit - test deploy project"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

(GitHub এ আগে একটা নতুন empty repository বানিয়ে নিন, তারপর উপরের `<your-username>/<your-repo>` জায়গায় নিজের রিপো বসান)

## ধাপ ২: Coolify তে Deploy

1. Coolify Dashboard এ যান → **New Resource** → **Application**
2. Source হিসেবে **GitHub** বেছে নিন এবং আপনার repository connect করুন
3. Build Pack হিসেবে **Dockerfile** সিলেক্ট করুন (এই প্রজেক্টে Dockerfile আগে থেকেই দেওয়া আছে)
4. Port হিসেবে `3000` দিন
5. **Deploy** বাটনে ক্লিক করুন

Deploy হয়ে গেলে Coolify যে URL দিবে সেখানে গিয়ে চেক করুন — যদি JSON message দেখতে পান, তাহলে বুঝবেন সব ঠিকমতো কাজ করছে।

## Local এ টেস্ট করতে চাইলে

```bash
npm install
npm start
```

তারপর ব্রাউজারে যান: `http://localhost:3000`
