<<<<<<< HEAD
# 👨‍💻 **minecraft-auth-registry**

<br>

## Features

- It was made using the [PocketMine-MP 4.6.2](https://github.com/pmmp/PocketMine-MP/releases/tag/4.6.2)
- Minecraft version v1.19.11

  <br>

# How to use

Create your server with default [PocketMine-MP](https://doc.pmmp.io/en/rtfd/installation.html)

  <br>

## Configure

> **api/typeorm/data-sources.ts**

```javascript
  type: "mysql",
  host: process.env.DB_HOST || 'localhost',
  port: 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_DATABASE || 'test',
  entities: [User],
```
