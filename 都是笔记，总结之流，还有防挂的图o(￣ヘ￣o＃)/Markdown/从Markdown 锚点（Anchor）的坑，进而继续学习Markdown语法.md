从Markdown 锚点（Anchor）的坑，进而继续学习Markdown语法
========
写东西需要插锚点，链接回去。结果，踩坑了。:sob:

(以下都是基于Github Flavored Markdown Processor的，因为其他的没测过，可能也是一样的吧~)

**参考文章：**

[README文件语法解读，即Github Flavored Markdown语法介绍__by 果冻虾仁](https://github.com/guodongxiaren/README 'Repo里面还有github支持的emoji的查询~')

## Markdown 插入锚点语法 ##

#### `[显示的文字](#锚点名)` ####
方括号中是你要在文章中显示的文字，可以随意填。**但是**！坑就出现在后面的锚点名了。

括号中填入的是 #+锚点名 ，这个锚点名可以直接使用文中你填标题里的的内容，就是用不同数量 "#" 包裹起来的内容。**但是**！坑就出现在填入的内容了。
## 坑 ## 
1. 得填完整内容。
2. 不能有标点，空格。换言之，就是只能出现中英字符，数字。
3. 如果有**大写字母** **全部**！**转换成小写**！这很重要！如果需要单词间隔，用"-"代替。
> 例如：Github Flavored Markdown Processor 就要写成：github-flavored-markdown-processor

被第三点坑惨了。测了好久。因为我的锚点是中文和大写字母混杂的。:sob:

----
## 文章中学到的新东西 ##

图片和链接的URL的写法

多级列表

代码高亮

复选框 

表格 

emoji

diff语法



