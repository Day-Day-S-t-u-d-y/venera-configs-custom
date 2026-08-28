# Venera 漫画源仓库

这是按 Venera 漫画源仓库结构整理的自用源列表。Venera 中添加仓库时，仓库地址应指向本仓库根目录下的 `index.json`。

## 使用方式

1. 本目录已推送到 GitHub 仓库 `Day-Day-S-t-u-d-y/venera-configs-custom`。
2. 在 Venera 的「漫画源」页面点击添加仓库。
3. 仓库地址填写：

```text
https://cdn.jsdelivr.net/gh/Day-Day-S-t-u-d-y/venera-configs-custom@main/index.json
```

也可以直接使用 GitHub Raw 地址：

```text
https://raw.githubusercontent.com/Day-Day-S-t-u-d-y/venera-configs-custom/main/index.json
```

## 实时更新

仓库推送到 `main` 后，GitHub Actions 会自动对变更的 `.js` 和 `.json` 文件执行 jsDelivr purge。Venera 端点击仓库刷新时，会从本仓库的 `index.json` 和各源文件地址获取最新版本。

## 已整合漫画源

| 名称 | Key | Version | 文件 |
|---|---|---:|---|
| 18漫画 | `mh18` | 1.0.0 | `mh18.js` |
| 爱看漫 | `ikmmh` | 1.0.6 | `ikmmh.js` |
| 百合会 | `baihehui` | 1.0.0 | `baihehui.js` |
| 包子漫画 | `baozi` | 1.1.6 | `baozi.js` |
| 动漫啦 | `dongman_la` | 1.0.1 | `dongman_la.js` |
| 动漫屋 | `dm5` | 7.0.0 | `dm5.js` |
| 古风漫画 | `GfmhApp` | 1.3.0 | `gfmh.js` |
| 嗨皮漫画 | `happy` | 1.0.0 | `happy.js` |
| 禁漫天堂 | `jm` | 1.4.0 | `jm.js` |
| 拷贝漫画 | `copy_manga` | 1.6.0 | `copy_manga.js` |
| 漫画1234 | `mh1234` | 1.0.0 | `mh1234.js` |
| 漫画柜 | `ManHuaGui` | 1.2.1 | `manhuagui.js` |
| 漫画人 | `manhuaren` | 1.0.0 | `manhuaren.js` |
| 漫蛙吧 | `manwaba` | 1.1.3 | `manwaba.js` |
| 漫小肆 | `mxs` | 1.0.0 | `mxs.js` |
| 热辣漫画 | `hot_manga` | 1.0.0 | `hot_manga.js` |
| 如漫画 | `rumanhua_fixed_v15` | 1.2.6 | `rumanhua.js` |
| 少年ジャンプ＋ | `shonen_jump_plus` | 1.1.1 | `shonen_jump_plus.js` |
| 紳士漫畫 | `wnacg` | 1.0.5 | `wnacg.js` |
| 腾讯动漫（正版） | `qq_comic_official_v1` | 1.0.3 | `tencent_comic_official.js` |
| 香蕉漫画 | `manhuauo_banana_v2` | 1.0.3 | `manhuauo.js` |
| 优酷漫画 (修复版) | `ykmh` | 1.0.6 | `ykmh.js` |
| 再漫画 | `zaimanhua` | 1.0.2 | `zaimanhua.js` |
| CCC追漫台 | `ccc` | 1.0.1 | `ccc.js` |
| comick | `comick` | 1.2.0 | `comick.js` |
| ehentai | `ehentai` | 1.1.8 | `ehentai.js` |
| GoDa漫画 | `goda` | 1.2.1 | `goda.js` |
| H-Comic | `hcomic` | 1.0.0 | `hcomic.js` |
| hitomi.la | `hitomi` | 1.1.2 | `hitomi.js` |
| jcomic.net | `jcomic` | 1.0.0 | `jcomic.js` |
| Kavita | `kavita` | 1.0.0 | `kavita.js` |
| Komga | `komga` | 1.0.0 | `komga.js` |
| Komiic | `Komiic` | 1.0.6 | `komiic.js` |
| Lanraragi | `lanraragi` | 1.1.0 | `lanraragi.js` |
| MangaDex | `manga_dex` | 1.1.1 | `manga_dex.js` |
| MYCOMIC | `mycomic` | 1.1.0 | `mycomic.js` |
| nhentai | `nhentai` | 1.1.0 | `nhentai.js` |
| Picacg | `picacg` | 1.0.6 | `picacg.js` |
| カドコミ | `comic_walker` | 1.0.0 | `comic_walker.js` |

## 维护规则

- 每次修改源文件后，同步更新源文件里的 `version`，并重新生成/检查 `index.json`。
- `key` 是 Venera 内部唯一标识，已发布后不要随意改名。
- 新增源时，优先按开发日志的流程先保存首页、搜索、分类、详情、章节和图片样本，再写解析器。
- 对签名 URL、Referer、防盗链和加密图片要分层判断；不要把 URL 参数里的 `key` 直接当成图片加密。
- 发布前至少运行 `node --check *.js` 和 `node scripts/validate-index.mjs`。

## 说明

本仓库已把压缩包中带空格或临时后缀的文件名整理为稳定文件名，例如 `copy_manga.js`、`gfmh.js`、`komiic.js`、`ykmh.js`。源内站点解析逻辑保持原样，避免在没有现场网页验证的情况下扩大改动范围。
