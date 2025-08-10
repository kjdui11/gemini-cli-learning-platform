@echo off
echo 正在回滚到SEO优化前的版本...

copy "backup\page.tsx.backup" "src\app\page.tsx"
copy "backup\layout.tsx.backup" "src\app\layout.tsx"
copy "backup\hero-section.tsx.backup" "src\components\hero-section.tsx"
copy "backup\seo.ts.backup" "src\lib\seo.ts"

echo 回滚完成！
echo 已恢复以下文件：
echo - src/app/page.tsx
echo - src/app/layout.tsx
echo - src/components/hero-section.tsx
echo - src/lib/seo.ts
pause
