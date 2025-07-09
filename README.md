# Gemini CLI 学习平台

专为新手开发者打造的 Gemini CLI 学习平台，提供详细教程、常见问题解答、视频指南和最新产品动态，帮助您快速掌握这个强大的 AI 命令行工具。

## 🚀 项目特性

- **现代化设计**: 使用 Next.js 14 + Tailwind CSS 构建的响应式网站
- **SEO 优化**: 完整的 SEO 配置，包括结构化数据和元标签
- **官方内容整合**: 整合 Google 官方博客内容和 GitHub 项目信息
- **用户友好**: 简洁直观的界面设计，适合新手开发者
- **移动端适配**: 完全响应式设计，支持各种设备

## 📋 网站功能

### 首页
- Hero 区域：吸引人的标题和描述
- 功能特性展示：Gemini CLI 的核心功能
- 快速开始指南：三步上手教程
- 官方动态：来自 Google 的最新消息

### 核心模块（规划中）
- **教程模块**: 入门到进阶的完整学习路径
- **FAQ 模块**: 常见问题分类和搜索功能
- **视频教程**: 直观的操作演示
- **产品动态**: 版本更新和发布历史

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **图标**: Heroicons + Lucide React
- **SEO**: 自定义 SEO 配置 + 结构化数据
- **部署**: Vercel (推荐)

## 🚀 快速开始

### 环境要求
- Node.js 20 或更高版本
- npm 或 yarn

### 安装和运行

1. 克隆项目
```bash
git clone <repository-url>
cd geminicli
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本
```bash
npm run build
npm start
```

## 📁 项目结构

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # 根布局
│   ├── page.tsx        # 首页
│   └── sitemap.ts      # 站点地图
├── components/         # React 组件
│   ├── navigation.tsx  # 导航栏
│   ├── footer.tsx      # 页脚
│   ├── hero-section.tsx
│   ├── features-section.tsx
│   ├── quick-start-section.tsx
│   └── blog-highlights-section.tsx
└── lib/
    ├── utils.ts        # 工具函数
    └── seo.ts          # SEO 配置
```

## 🎨 设计理念

- **简洁专业**: 清晰的视觉层次，易于导航
- **内容为王**: 突出 Gemini CLI 的核心价值
- **用户体验**: 快速加载，直观操作
- **可访问性**: 遵循 Web 可访问性标准

## 📈 SEO 优化

- 完整的元数据配置
- 结构化数据 (Schema.org)
- 自动生成的 sitemap
- 优化的 robots.txt
- 语义化 HTML 结构

## 🚀 部署

推荐使用 Vercel 部署：

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 自动部署完成

## 📝 许可证

本项目基于 MIT 许可证开源。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📞 联系

如有问题或建议，请通过 GitHub Issues 联系我们。

---

**注意**: 本站为非官方学习资源网站，旨在帮助开发者更好地学习和使用 Gemini CLI。官方项目请访问 [Google Gemini CLI](https://github.com/google-gemini/gemini-cli)。
