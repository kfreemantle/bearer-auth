# bearer-auth


 ###### File Structure

bearer-auth
├─ .gitignore
├─ LICENSE
├─ README.md
├─ __tests__
│  └─ src
│     └─ auth
│        ├─ middleware
│        │  ├─ basic-auth-middleware.test.js
│        │  └─ bearer-auth-middleware.test.js
│        └─ router
│           ├─ handlers
│           │  ├─ getSecret.test.js
│           │  ├─ getUsers.test.js
│           │  ├─ signin.test.js
│           │  └─ signup.test.js
│           └─ router.test.js
├─ index.js
├─ package-lock.json
├─ package.json
└─ src
   ├─ auth
   │  ├─ middleware
   │  │  ├─ basic.js
   │  │  └─ bearer.js
   │  ├─ models
   │  │  ├─ index.js
   │  │  └─ users.js
   │  └─ router
   │     ├─ handlers.js
   │     └─ index.js
   ├─ error-handlers
   │  ├─ 404.js
   │  └─ 500.js
   └─ server.js
