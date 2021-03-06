# 导航并访问SAP SuccessFactors中的工具及支持

[[toc]]

::: tip 本节目标

- 登录SAP SuccessFactors

- 描述SAP SuccessFactors主页

- 定义人员和操作搜索

- 进入管理员中心(Administration Center)
:::

## 登录SAP SuccessFactors

本节介绍如何登录SAP SuccessFactors以及如何浏览主页和管理员中心。

![Log In Screen](./img/20220506161532.png)

每个SAP SuccessFactors用户都会为您公司的SAP SuccessFactors实例分配一个用户名和密码。此外，还会为您的公司分配一个URL和公司ID。要登录SAP SuccessFactors，请在登录屏幕上出现提示时输入公司ID、用户名和密码。登录屏幕的外观取决于实例中使用的主题。

![Support FAQ Link](./img/20220506161656.png)

当用户单击登录页面上的问号图标时，他们将可以访问“支持常见问题解答(support FAQ)”链接。

![Support for SAP SuccessFactors end users](./img/20220506161827.png)

这将把他们带到一个网页，在那里他们将获得有关SAP SuccessFactors的常见问题的答案。这包括解决帐户和登录问题的信息。
SAP SuccessFactors允许从一个用户帐户同时进行多个会话。例如，一个用户可以从多个设备登录到他们的帐户。这可能会在Provisioning中受到限制，目前，Provisioning限制对SSO客户不可用。

## 主页 Home Page

![SuccessFactors Home Page](./img/20220506162019.png)

SuccessFactors主页是SAP SuccessFactors HXM套件的默认起始页。在主页上，您可以查看待定的截止任务、未决问题以及有价值的团队指标和业务分析。它概述了SAP SuccessFactors HXM套件中的活动，并帮助您在必要时快速采取行动。

作为经理，你可以跟踪团队的进展，并在主页上查看有价值的团队见解。您还可以查看实时分析标题和显示对您的业务重要的实时数据的仪表盘。

如果您是人力资源业务合作伙伴，您的主页会提醒您更改需要您批准的请求，以及其他需要您注意的人力资源数据问题。您还可以在主页上添加链接，以便快速访问您喜爱的管理工具和报表。

如果您是系统管理员，可以配置默认主页，因为它将显示给SAP SuccessFactors系统的新用户。您可以从各种标准主页互动程序中进行选择，也可以创建自己的自定义互动程序。可以在主页上组织和分组互动程序，并针对特定角色或受众。您还可以创建一个引导式主页浏览，解释每个互动程序在组织中的使用方式。

### 新用户的默认主页 Default Home Page for New Users

作为管理员，您可以配置默认内容和布局，这些内容和布局将显示在公司用户的主页上。您可以选择默认情况下显示哪些磁贴，以及用户可以添加哪些磁贴。还可以创建和添加自定义程序。新用户将看到您配置的默认主页，然后可以自由地对其进行个性化设置，以更好地满足他们的需求。

### 个性化和基于角色的主页 Personalized and Role-Based Home Page

作为员工，主页是SAP SuccessFactors应用程序的主要入口点，通常是登录后看到的第一件事。您的个人待办事项列表显示分配给您的任务，从学习活动到目标设定截止日期，再到人力资源变更。您可以个性化主页的布局和内容，以适应您的角色和偏好。

要个性化主页，您可以选择添加或删除管理员启用的任何互动程序。您还可以按不同的顺序重新排列互动程序，并将自己的“快速链接”添加到个人主页，以便快速访问您最喜欢的页面和报告。经理和高管可以查看团队见解，并添加分析仪表盘和标题，以跟踪重要指标。

### 主页管理权限 Home Page Administration Permissions

![Permissions](./img/20220506162749.png)

作为管理员，您需要具有以下权限才能管理系统中的默认主页。

### 主页互动程序 Home Page Tiles

作为管理员，您可以管理默认主页上显示的互动程序。默认情况下，您可以控制系统的新用户可以在主页上看到哪些磁贴，以及单个用户可以选择添加或删除哪些磁贴。
可以使用管理主页配置工具管理主页互动程序。如果您已被授予相应的权限，您可以通过访问Admin Center->Manage Home Page

### 主页互动程序的可见性 Visibility of Home Page Tiles

没有专门用于控制主页互动程序可见性的系统权限。但是，某些程序的可见性由另一个现有权限决定。例如，只有具有访问目标管理权限的用户才能在主页上看到目标磁贴。

此外，在主页上，您可以使用基于角色的权限控制互动程序组的可见性。主页分为“部分(sections)”，每个部分包含预定义的“程序组(tile group)”。可以使用基于角色的权限控制磁贴组的可见性，但不能控制单个磁贴本身。你将在本课程后面练习。

### 标准主页互动程序 Standard Home Page Tiles

一系列标准主页互动程序显示来自SuccessFactors HXM套件的信息和操作。

主页互动程序显示重要信息，使您能够直接从主页采取行动或查看更多信息。作为管理员，您可以选择在公司的默认主页上包括哪些标准主页磁贴。作为员工，您可以启用、禁用和重新排列个人主页上的互动程序。

### 自定义主页互动程序 Custom Home Page Tiles

作为管理员，您可以创建自定义互动程序，并将其添加到实例中的SuccessFactors主页。您可以使用内置的富文本编辑器或插入任何标准HTML来创建自定义互动程序。对于每个自定义互动程序，您可以配置其出现在主页上的目标受众和活动日期。

您可以直接在互动程序的正面显示动态内容，以便用户可以立即看到它。它允许直接在主页互动程序上显示动态信息，从而改进了用户对操作的调用，使Fiori主页更具吸引力，并避免用户额外点击互动程序。需要启用此可选功能，然后在SuccessFactors和第三方应用程序中进行设置。

新员工的下一代入职(Onboarding)功能可在新员工入职前访问主页。客户现在可以通过定制的磁贴向这些外部用户共享公司信息，以便新员工能够更快地加入。因此，新员工可以在开始日期之前访问主页。

## 主页导航 Home Page Navigation

### 导航菜单 Navigation Menu

![Navigation Menu](./img/20220506163818.png)

导航菜单（也称为主菜单）在左上角作为下拉菜单提供，并显示您可以访问的模块。根据用户在组织中的角色，他们可能会在菜单中看到不同的选项。例如，管理员将看到管理中心，但基本最终用户不会看到。此访问权限由权限或系统配置决定。

::: warning Note
当您在整个系统中移动时，导航菜单的顶部名称会发生变化，以指示您正在查看的页面。
:::

### 姓名下拉菜单 Name Drop-Down Menu

屏幕右上角“姓名”菜单中较小的下拉菜单允许员工以另一个用户的身份代理，从“设置”中访问和管理他们的个人设置和首选项，访问管理中心，并注销系统。

![Name Menu](./img/20220506164115.png)

#### 设置 Setting

姓名下拉菜单中的“设置”链接允许用户管理其个人设置和首选项。这包括密码、通知、语言、表单、代理分配、组和移动访问。要访问设置页面，请选择姓名菜单，然后从下拉菜单中选择设置。

您可以使用“设置”页面设置多个单独的选项：

- 密码更改（如果适用）。如果您的公司使用单点登录（SSO），则此选项不适用。
- 安全问题选择，如果适用。如果在公司设置下启用了安全问题，则此选项可用。
- 从系统接收通知（如适用）。这是所有通知的可选功能，根据您的系统设置而定。
- 语言偏好选择（如果适用）。这仅适用于实例是多语言实现的情况。
- 指定代理，如适用。如果启用此功能，则可以指定代理；如果指定为代理，则可以成为代理。

::: warning Note
SAP SuccessFactors实例的设置因您的全局设置而异。列出的选项可能是可访问的，也可能是不可访问的。
:::

::: warning Note
在b1911之前，设置这个词被称为选项(Options)。应SAP中央团队的要求，它被普遍更改为设置，以使所有LOB的体验保持一致。用户现在可以更直观地理解这个术语，因为他们在所有SAP应用程序中都一致地看到它。
:::

### 产品内支持 In-Product Support

In Product Support（在屏幕右侧显示为Support侧栏）提供了一个集成的In Product dashboard，供管理员提交和管理客户问题。管理员可以从产品内部获得支持：

- 集中知识库 Centralize the knowledge base
- 提交新案例，包括视频捕获 Submit new cases, including video capture
- 访问案例管理 Access case administration
- 提供问题诊断的上下文，以支持客户服务 Provide context to issue diagnosis to support customer services

通过让管理员快速访问帮助、提交问题和提供问题状态，可以提高客户满意度。

可以从Action Search -> Platform Feature Settings中禁用产品内支持。

### 人员和操作搜索 People and Action Search

![People and Action Search](./img/20220506165021.png)

在页面顶部，一个搜索栏允许用户搜索功能或人员。

#### 人员搜索的好处

标题中的全局人员搜索使您能够搜索和查找组织中的人员。

全局标题人员搜索的好处包括：

- 轻松访问每个页面 Easy access from every page
- 支持模糊匹配，允许您通过与目标员工姓名有一个字符差异的搜索词查找员工。  
Supports for fuzzy matching, allowing you to find an employee by a search term that has one-character difference from the target employee name.
- 支持搜索包含带有口音、umlauts、DIERESE等字符的员工姓名。  
Supports searching for employee names that contain characters with accents, umlauts, diereses, etc.
- 支持按员工中心姓名搜索员工。  
Supports searching for employees by Employee Central names.
- 能够通过基于角色的权限控制搜索结果中显示的EC（员工中心）和非EC用户信息。  
Ability to control the EC (Employee Central) and non-EC user info displayed in the search results with Role-Based Permissions.

#### 人员搜索中的模糊搜索 Fuzzy Search in People Search

![Fuzzy Search](./img/20220506165551.png)

模糊搜索允许您通过与目标员工姓名有一个字符差异的搜索词查找员工。搜索员工时，新功能适用于以下情况：

- 一个缺少或多余的字符。如果搜索“Joerg”，结果也会返回“Jörg”，反之亦然。
- 一个拼写错误的字符。如果搜索“ALLEX”，搜索结果也会返回“Alex”和“Allen”，反之亦然。

先决条件：

- 在RBP中授予用户搜索(User Search)权限。
- Provisioning中启用Solr People Search。

要启用模糊搜索，请执行以下操作：

1. 从Action Search，转到Company System and Logo Settings
2. 启用Enable fuzzy search function for People Search
3. 单击“Save Company System Setting”保存更改。

::: warning Note
此功能现在适用于全局标题搜索和通用人员搜索。
:::

#### 在全局用户标题中搜索非活动用户 Inactive Users in the Global Header People Search

![Inactive People Search](./img/20220506170048.png)

默认情况下，非活动用户不包括在人员搜索结果中。使用此配置选项将其包括在内。

1. 从Action Seach进入Company System and Logo Settings
2. 选择“Show inactive user in people search”选项（需要基于角色的权限(Role-based Permissions)）。
3. 单击“Save Company System Setting”保存更改。

此公司级设置不影响人员配置文件(People Profile)或员工目录(Employee Directory)上的搜索功能。同样，用于控制人员配置文件或员工目录上的搜索功能的功能设置和权限（例如基于角色的权限）不影响人员搜索。

在全局标题的人员搜索结果中，未来的员工也会显示为非活动用户。

::: warning Note
人员搜索使用公司级别的“在人员搜索中显示非活动用户”
（需要基于角色的权限）仅设置而不设置基于角色的权限。不能基于权限角色限制人员搜索中非活动用户的可见性。
:::

### 操作搜索 Action Search

操作搜索是一项功能，旨在促进导航和增强整个系统的可用性。
作为最终用户，您可以使用Action Search直接在页面顶部的搜索栏中查找几十个常见操作。你可以用自然语言描述你想做的事情，然后从建议的功能列表中选择。
作为管理员，您也可以使用操作搜索访问您的管理中心。你还可以：

- 根据关键字和同义词创建相关操作的搜索。
- 管理员可以管理和配置自己的操作关键字和自定义链接。

作为管理员，您可以访问Admin Center > Company Settings > Manage Action Search，以自定义用户在页眉的搜索栏中查找操作的方式。您可以为标准操作和自定义操作启用或禁用操作、添加您自己的搜索词或搜索标签。
SAP SuccessFactors 中有许多预定义的操作和释义。如果您希望用户具有附加关键字或释义来搜索 ，您可以在特定操作中添加自己的自定义释义。

例如，作为管理员，您可以将基于角色的权限称为 RBP。在 操作搜索 中，您可以从 操作搜索 中添加 RBP 作为可搜索释义。为此，在页面左侧的列表中单击 操作 。然后单击 添加自定义释义 选项。在 “用户搜索其中任意内容...” 下键入新的释义，并在 “显示此释义” 下的搜索结果中输入要显示的选项。然后单击保存 。

### 管理中心 Administration Center

#### 访问管理中心 Access Administration Center

具有任何管理权限的员工在“主页”导航菜单以及“名称”菜单中具有“管理中心”选项。

管理中心页面仅显示管理员具有权限的管理功能的链接。请记住，您只能访问您具有访问权限的页面。

管理员中心是可用于配置和维护 SuccessFactors 应用程序的各种管理功能和工具的中央访问点。管理员中心可用于监控整体系统健康状况、管理跨套件和第三方集成。

管理员中心使客户能够轻松访问 SAP SuccessFactors 系统的任何部分。

#### 管理中心 UI 版本 Admin Center UI Versions

管理员中心是 SAP SuccessFactors 的一项通用功能，当前具有两个版本的用户界面。其中包括OneAdmin 和 NextGen 管理。两个版本都包含管理系统所需的标准功能。新一代“管理”基于 SAP Fiori 设计提供更现代化的用户体验，并且包括附加功能。在您的实例中看到的“管理员中心”版本由公司的配置和个人偏好决定。

缺省情况下，所有 SuccessFactors 实例都具有访问 OneAdmin U I的权限。如果未启用新一代“管理员”，则客户只能查看和使用此 UI 版本。OneAdmin 是通用功能，不需要启用或配置。

如果在您的实例中启用新一代“管理员”，则这是所有管理员在导航到“管理员中心”页面时看到的缺省 UI。但是，作为单个用户，您可以使用痕迹链接在两个 UI 之间来回切换，以在 UI 之间切换。从会话到会话，都会记住您的个人偏好。这意味着 UI 不会更改，除非您手动彼此切换。

#### One Admin

OneAdmin 表示管理工具的默认用户界面。它适用于所有实例，并包括管理 SuccessFactors 应用程序所需的所有基本工具。

![OneAdmin](./img/20220506171927.png)

One Admin的主要功能：

- 管理工具 Admin Tools
- 工具搜索 Tool Search
- 管理员收藏夹 Admin Favorites
- 升级中心 Upgrade Center
- 新闻和更新 News & Updates
- 资源和物料 Resources & Materials

#### 下一代管理 Next Gen Admin

Next Gen Admin是在 2015 年第 2 季度引入的，是 管理员中心 UI 的最新版本。它支持OneAdmin 中存在的所有主要功能，以及更新的用户体验和一些附加新功能。启用后，Next Gen Admin 不会替换 OneAdmin，而是对其进行补充。每个管理员可以选择要使用的版本。

![Next Gen Admin](./img/20220506172217.png)

Next Gen Admin的主要功能：

- 管理主页 Admin Homepage Admin Tools
- 管理工具 Tool Search
- 工具搜索 Admin Favorites
- 管理员收藏夹 Upgrade Center
- 升级中心 Execution Manager
- 执行管理器 Performance
- 绩效指标 Metrics
- 集成中心 Integration Center
- 事件中心 Event Center

功能比较：

![Features of User Interface](./img/20220506172419.png)

#### 访问管理中心权限 Permission to Access Admin Center

任何被授予管理权限的人都可以访问“管理中心”。也就是说，有权访问至少一个管理工具或管理员设置的任何人也可以访问“管理员中心”页面。没有控制对“管理员中心”页面本身的访问权限的单独权限。

#### 工具搜索 Tool Search

要搜索任何管理员中心，请在 管理中心 页面上使用 工具搜索 框。当您开始键入功能名称时，系统会自动尝试完成键入的内容。例如，在搜索功能 管理招聘组(Manage Recruiting Groups) 时，系统会生成可能的结果列表以及突出显示功能的描述。

#### 我的收藏夹 My Favorites

在 管理中心 页面上，使用 我的收藏夹 磁贴访问最常用的工具。您可以包括定期执行的任务。要将任务添加到“我的收藏夹”，请单击光标悬停在管理员功能上时显示的星形图标。
在 管理中心 页面上，所选任务显示在 我的收藏夹 下。在主页上，所选任务会显示在 我的管理员收藏夹 磁贴上。
要从 我的收藏夹 列表中删除任务，请将鼠标悬停在 管理中心 页面上的管理员功能上，然后再次单击星形图标以取消选择。

### 升级中心 Upgrade Center

![Upgrade Center](./img/20220506173034.png)

升级中心是“管理中心”中的一个重要区域，使您可以轻松升级 SAP SuccessFactors 系统。通过内置文档和新功能的自助激活，升级中心旨在尽可能轻松地传达并激活关键增强。这样，客户便可以通过主要的选择性加入增强功能升级其公司的系统，而无需联系支持部门。

#### 了解升级中心 Understanding the Upgrade Center

升级中心不会取代激活与季度发布流程一起提供的全部新产品更新的常规流程。相反，它通过激活通常需要支持案例的主要选择性加入增强来补充这些增强。

在“升级中心”内，您可以：

- 使用 筛选方式 下拉菜单按模块筛选升级。
- 单击 了解更多 和 立即升级 链接，了解重要、推荐和可选升级。
- 单击 查看最近完成的升级 以查看已完成升级的摘要、完成日期和状态。您还可以访问文档、后续步骤，并根据此功能，在功能升级后的 30 天内撤消升级。  
您可以使用升级中心了解并应用重要的升级。在升级中心，您可以阅读有关可用升级的信息，查看屏幕截图和视频，以及链接到附加文档。升级中心还列出了升级的前提条件、执行升级所需的权限，以及升级后需要执行的配置步骤。单击即可轻松撤销最近的升级。如果看到您感兴趣的升级，但今天尚未做好执行准备，可以将其标记为“保存以备后用”。

::: warning Note
升级中心不允许您执行未被授予执行的升级。尽管任何管理用户都可以访问“升级中心”页面本身，但每个单独的升级都受相应的系统权限控制。如果您没有相应的权限，则可以查看有关升级的信息，但不能使用它来启用此功能。升级中心是管理中心的通用功能，在两个版本的管理中心中都可用。在 OneAdmin 中，单击 升级中心 Portlet 中的 按钮以访问该页面。使用新一代“管理中心”，转到“Release Center”磁贴，然后单击“升级中心”选项卡。要访问完整的 升级中心 ，请单击磁贴上的 查看更多 链接。
:::

#### 升级中心详细信息 Upgrade Center Information Details

单击 了解更多 时，会打开一个新窗口，其中提供有关所选功能的以下信息：显示新功能外观和操作的描述、图像或视频。
执行升级所需的时间长度。
升级的成本（如果有）。
升级所需的任何前提条件或相关性。
关于升级的文档和常见问题。
