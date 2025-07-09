# Gemini CLI 学习平台 - 部署指南

## 🚀 Vercel 部署

### 自动部署（推荐）

1. **连接 GitHub 仓库**
   - 访问 [Vercel Dashboard](https://vercel.com/dashboard)
   - 点击 "New Project"
   - 选择 GitHub 仓库：`kjdui11/gemini-cli-learning-platform`
   - 点击 "Import"

2. **配置项目设置**
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (默认)
   - **Build Command**: `npm run build` (自动检测)
   - **Output Directory**: `out` (自动检测)
   - **Install Command**: `npm install` (自动检测)

3. **环境变量**（如果需要）
   ```
   NODE_ENV=production
   ```

4. **部署**
   - 点击 "Deploy" 按钮
   - 等待构建完成（通常 2-3 分钟）
   - 获得部署 URL

### 手动部署

```bash
# 1. 安装 Vercel CLI
npm i -g vercel

# 2. 登录 Vercel
vercel login

# 3. 在项目根目录运行
vercel

# 4. 按照提示配置项目
# 5. 部署完成后获得 URL
```

## 📁 静态文件结构

构建后的静态文件位于 `out/` 目录：

```
out/
├── index.html              # 首页
├── installation/
│   └── index.html         # 安装指南
├── guides/
│   └── index.html         # 使用指南
├── commands/
│   └── index.html         # 命令参考
├── docs/
│   └── index.html         # 开发者文档
├── faq/
│   └── index.html         # 常见问题
├── _next/                 # Next.js 静态资源
├── sitemap.xml           # 网站地图
├── robots.txt            # 搜索引擎配置
└── favicon.ico           # 网站图标
```

## 🔧 配置说明

### Next.js 配置 (`next.config.ts`)

```typescript
const nextConfig: NextConfig = {
  output: 'export',           // 启用静态导出
  trailingSlash: true,        // URL 末尾添加斜杠
  images: {
    unoptimized: true,        // 禁用图片优化（静态导出需要）
  },
};
```

### Vercel 配置 (`vercel.json`)

```json
{
  "framework": "nextjs",
  "regions": ["hkg1"],        // 香港区域
  "buildCommand": "npm run build",
  "outputDirectory": "out",   // 静态文件输出目录
  "trailingSlash": true
}
```

## 🌐 域名配置

### 自定义域名

1. **在 Vercel Dashboard 中**
   - 进入项目设置
   - 点击 "Domains"
   - 添加自定义域名

2. **DNS 配置**
   ```
   类型: CNAME
   名称: www (或 @)
   值: your-project.vercel.app
   ```

### SSL 证书

Vercel 自动提供免费的 SSL 证书，支持 HTTPS。

## 📊 性能优化

### 构建优化

- ✅ 静态预渲染所有页面
- ✅ 自动代码分割
- ✅ 图片和资源优化
- ✅ CSS 和 JS 压缩
- ✅ Gzip 压缩

### SEO 优化

- ✅ 自动生成 sitemap.xml
- ✅ robots.txt 配置
- ✅ Meta 标签优化
- ✅ 结构化数据
- ✅ 语义化 HTML

## 🔍 监控和分析

### Vercel Analytics

在 Vercel Dashboard 中启用：
- **Web Analytics**: 页面访问统计
- **Speed Insights**: 性能监控
- **Audience Insights**: 用户分析

### 第三方工具

推荐集成：
- **Google Analytics**: 详细访问分析
- **Google Search Console**: SEO 监控
- **Lighthouse**: 性能评分

## 🚨 故障排除

### 常见问题

1. **构建失败**
   ```bash
   # 本地测试构建
   npm run build
   
   # 检查错误日志
   npm run lint
   ```

2. **页面 404 错误**
   - 检查路由配置
   - 确认文件路径正确
   - 验证 `trailingSlash` 设置

3. **静态资源加载失败**
   - 检查 `assetPrefix` 配置
   - 确认资源路径正确

### 调试命令

```bash
# 本地预览静态站点
npx serve out

# 检查构建输出
ls -la out/

# 验证 sitemap
curl https://your-domain.com/sitemap.xml
```

## 📝 部署清单

- [ ] 代码推送到 GitHub
- [ ] Vercel 项目配置完成
- [ ] 构建成功无错误
- [ ] 所有页面可正常访问
- [ ] SEO 元素正确显示
- [ ] 移动端适配正常
- [ ] 性能评分良好
- [ ] 自定义域名配置（可选）
- [ ] 分析工具集成（可选）

## 🔄 持续部署

每次推送到 `master` 分支时，Vercel 会自动：

1. 检测代码变更
2. 触发新的构建
3. 运行测试和检查
4. 部署到生产环境
5. 更新 CDN 缓存

## 📞 支持

如果遇到部署问题：

1. 查看 [Vercel 文档](https://vercel.com/docs)
2. 检查 [Next.js 静态导出指南](https://nextjs.org/docs/advanced-features/static-html-export)
3. 在项目 Issues 中报告问题

---

**部署完成后，您的 Gemini CLI 学习平台将在全球 CDN 上提供快速、可靠的访问体验！** 🎉
