# Google Analytics 集成指南

## 📊 概述

本项目已集成 Google Analytics (GA4) 用于用户行为分析和网站性能监控。

## 🔧 配置

### 环境变量

在 `.env.local` 文件中配置：

```bash
NEXT_PUBLIC_GA_ID=G-NEQETT0ENG
```

### Vercel 部署配置

在 Vercel Dashboard 中设置环境变量：
- 变量名：`NEXT_PUBLIC_GA_ID`
- 值：`G-NEQETT0ENG`

## 📈 功能特性

### 自动跟踪

- ✅ **页面浏览**：自动跟踪所有页面访问
- ✅ **生产环境限制**：仅在生产环境加载 GA
- ✅ **隐私友好**：遵循 GDPR 和隐私最佳实践

### 事件跟踪

支持以下事件类型：

#### 1. 导航跟踪
```typescript
import { trackEvent } from '@/lib/gtag'

// 跟踪导航点击
trackEvent.navigation('installation')
```

#### 2. 外部链接跟踪
```typescript
// 跟踪外部链接点击
trackEvent.externalLink('https://github.com/google-gemini/gemini-cli')
```

#### 3. 下载跟踪
```typescript
// 跟踪文件下载
trackEvent.download('gemini-cli-guide.pdf')
```

#### 4. 搜索跟踪
```typescript
// 跟踪站内搜索
trackEvent.search('gemini cli installation')
```

#### 5. 用户参与度
```typescript
// 跟踪页面停留时间
trackEvent.engagement(120) // 120秒
```

## 🛠️ 使用示例

### 在组件中使用

```tsx
'use client'

import Link from 'next/link'
import { trackEvent } from '@/lib/gtag'

export default function NavigationLink() {
  const handleClick = () => {
    trackEvent.navigation('guides')
  }

  return (
    <Link href="/guides" onClick={handleClick}>
      使用指南
    </Link>
  )
}
```

### 外部链接跟踪

```tsx
'use client'

import { trackEvent } from '@/lib/gtag'

export default function ExternalLink() {
  const handleExternalClick = (url: string) => {
    trackEvent.externalLink(url)
  }

  return (
    <a 
      href="https://github.com/google-gemini/gemini-cli"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => handleExternalClick('https://github.com/google-gemini/gemini-cli')}
    >
      GitHub 项目
    </a>
  )
}
```

### 自定义事件

```tsx
import { event } from '@/lib/gtag'

// 发送自定义事件
event({
  action: 'video_play',
  category: 'engagement',
  label: 'tutorial_video_1',
  value: 1
})
```

## 📊 数据分析

### 可跟踪的指标

1. **页面性能**
   - 页面加载时间
   - 用户停留时间
   - 跳出率

2. **用户行为**
   - 导航路径
   - 点击热点
   - 搜索查询

3. **内容效果**
   - 最受欢迎的页面
   - 外部链接点击率
   - 下载统计

### Google Analytics 4 报告

访问 [Google Analytics](https://analytics.google.com/) 查看：

- **实时报告**：当前用户活动
- **受众报告**：用户特征和行为
- **获客报告**：流量来源分析
- **参与度报告**：页面和事件分析

## 🔒 隐私和合规

### 数据保护

- ✅ 仅收集必要的分析数据
- ✅ 不收集个人身份信息
- ✅ 遵循 GDPR 要求
- ✅ 支持用户选择退出

### Cookie 政策

GA4 使用以下 Cookie：
- `_ga`：用户标识
- `_ga_*`：会话数据
- `_gid`：用户区分

## 🚀 部署注意事项

### 环境检查

确保在 Vercel 中正确设置环境变量：

```bash
# 检查环境变量
echo $NEXT_PUBLIC_GA_ID
```

### 验证集成

1. 部署到生产环境
2. 访问网站页面
3. 在 GA4 实时报告中验证数据

## 📞 故障排除

### 常见问题

1. **GA 不加载**
   - 检查环境变量是否正确设置
   - 确认在生产环境中访问

2. **事件不触发**
   - 检查事件代码是否正确
   - 确认 GA ID 配置正确

3. **数据延迟**
   - GA4 数据通常有 24-48 小时延迟
   - 使用实时报告查看即时数据

### 调试模式

在开发环境中启用调试：

```typescript
// 临时启用开发环境 GA（仅用于调试）
if (process.env.NODE_ENV === 'development') {
  console.log('GA Event:', { action, category, label, value })
}
```

---

**注意**：请确保遵循当地的数据保护法规，并在网站上提供适当的隐私政策和 Cookie 声明。
