# 管理用户数据

[[toc]]

::: tip 本节目标

- 管理员工导入
- 管理用户数据文件 (UDF)
:::

## 管理员工导入 Manage Employee Import

要在实例中导入员工，管理员需要针对特定目标群体或每个可用条件的相应权限。

![Manage Employee Import](./img/20220508160418.png)

此权限不一定来自 RBP。操作搜索中提供了名为 管理员工导入(Manage Employee Import) 的工具。我们只需要查找用户，定义目标群体，然后单击 为所选用户保存定义(Save Definition For Selected Users) 按钮。

如果客户想要从 RBP 管理此权限，只需激活 Action Search > Platform Feature Settings 中提供的 在基于角色的权限中启用员工导入控制(Enable Control on Employee Import in Role-Based Permissions) 开关即可。

## 数据管理选项 Data Management Options

本部分描述如何在 SAP SuccessFactors 中访问和管理用户数据，其中包括以下主题：

- 数据管理选项  
Data management options

- 导出数据  
Exporting data

- 使用用户数据文件 (UDF) 更改数据  
Changing data using the user data file (UDF)

- 导入数据  
Importing data

- 使用“管理中心”链接管理数据更改  
Managing data changes using Admin Center links

您可以通过以下方式管理 SAP SuccessFactors 中的用户数据：

- 用户数据文件 (UDF)  
User Data File (UDF)

- 管理员中心中的链接  
Links in Admin Center

### 用户数据文件 (UDF) User Data File (UDF)

UDF 是逗号分隔符 (.csv) 文件，用于一次添加或更改一个或多个员工的数据。它是手动创建或作为人力资源信息系统 (HRIS) 的自动输出创建的。使用此文件，您可以通过管理中心手动导入文件或通过文件传输协议 (FTP) 自动上载来向 SAP SuccessFactors 中添加数据或更改信息。

使用 UDF 方法添加或更改数据具有一些优点：

- 仅更新系统中带有更改或添加文件的记录，忽略所有其他记录。  
Only records in the system with changes or additions in the file are updated, all others are ignored.

- 可以同时进行多个员工更新和添加。  
Multiple employee updates and additions can occur at the same time.

### 管理员中心中的链接 Links in Admin Center

您还可以通过“管理中心”手动输入，将数据直接输入到 SAP SuccessFactors 中。手动输入方法通常用于一次影响一个或两个用户的更改。

使用此方法具有以下优势：

- 无需等待 FTP 或完整文件导入即可进行快速、一次性更改。  
Quick, one-off changes can be made without waiting for the FTP or full file import.

- 可在数据导入后根据需要进行更正。  
Corrections can be made after data import as needed.

::: warning Warning
如果 .csv 文件未更新（使用手动导入的信息）进行下一次导入，则导入流程将覆盖使用管理员中心链接所做的任何更改。
:::

## 数据导出 Data Export

![Exporting Data](./img/20220508160815.png)

导出数据允许您下载 SAP SuccessFactors 系统中的现有用户列表。可将此文件用作更新或导入用户信息的基础。

### 用户数据文件 (UDF) 导出 User Data File (UDF) Export

![Exporting the UDF](./img/20220508160845.png)

要导出 UDF，请在“管理中心”页面上选择“更新用户信息(Update User Information )”，然后找到并单击“员工导出(Employee Export)”。

您可以使用 .csv 格式导出 SAP SuccessFactors 中的现有用户列表。这是最常用的格式，因为它允许您使用 Microsoft Excel 轻松修改数据。

::: tip 最佳实践
建议先下载现有 UDF，然后再进行更改并将其导入。在本地驱动器上使用存储的文件，会增加与当前系统数据不同步的风险，无论是上次导入后发生的手动更新，还是自动导入。
:::

#### 导出选项 Export Options

![Export Users](./img/20220508160913.png)

选择导出文件格式后，可以指定其他导出选项：

- 仅有效用户 Valid users only  
选择在导入文件中仅从 SAP SuccessFactors 导出活动用户。

- 短格式：仅系统字段 Short format: only system fields  
选择仅显示必填字段，忽略任何空字段或自定义字段。

::: warning Note
如果要包含用户薪酬数据，请勿选择 短格式(Short format) 。
:::

接下来，指定文件语言格式和批处理或预定处理选项：

- 字符编码 Character Encoding  
如果使用具有特定字符类型（例如，中文或日语）的语言，则可以从下拉菜单中选择相应的编码类型，以便系统识别这些字符。

- 作为批处理导出 Export as a batch process  
如果有大量员工，请选择此选项。它使您能够在运行导出时在系统中继续工作。文件可以下载时，您将收到通知。

最后，必须指定薪酬数据更新选项。

- 包括用户薪酬数据  Include User Compensation Data  
选择此选项以在导出文件中包含关于员工的薪酬数据。选择 提供附加选项。

下载文件后，您可以打开文件以对数据进行更改和添加。完成后，将新数据文件另存为 .csv 文件。为了您将原始数据文件作为备份，SAP SuccessFactors 建议使用新文件名保存新文件。

### 使用用户数据文件进行数据更改 Data Changes with the User Data File

![Using the UDF](./img/20220508161125.png)

UDF 由标准数据元素组成，其中包括必填字段、过滤器字段和可选字段。字段因配置和模块而异。

UDF 具有 11 个必填字段。

所需 UDF 字段:

|必填字段 Required Field|描述 Description|
|-------|-----|
|STATUS|有两种状态选择，活动或非活动。初始数据加载中的所有用户都具有活动状态。<br/>There are two status choices, active or inactive. All users on the initial data load have an active status.|
|USERID|这是每个用户的唯一系统标识符，设置后无法更改。格式可以是字母、数字或二者的组合。避免使用前导零和特殊字符，例如&或#。<br/>This is a unique system identifier for each user, and can not be changed once set. The format can be letters, numbers, or a combi- nation of the two. Avoid using leading zeros and special characters, for example & or #.|
|USERNAME|员工使用此信息登录系统。必须对每个用户唯一。考虑使用与登录公司网络相同的登录。<br/>Employees use this to log in to the system. It must be unique for each user. Consider using the same login that is used to log in to your company network.|
|FIRSTNAME|员工的名字。<br/>First name of the employee.|
|LASTNAME|员工的姓氏。<br/>Last name of the employee.|
|GENDER|“书写助手”需要此字段。仅提供缩写，M 表示男性，F 表示女性。<br/>This field is required for the Writing Assistant . Only provide the abbreviations, M for male or F for female.|
|EMAIL|员工的业务电子邮件地址。系统使用电子邮件地址进行通知。例如，发送电子邮件以通知个人表单已发送，或提醒个人项目到期或延迟。<br/>The business email address of the employee. The system uses email addresses for notifi- cation purposes. Emails are sent, for exam- ple, to inform individuals that forms have been sent, or to remind individuals that items are due or late.|
|MANAGER|此列要求员工经理的USERID 建立公司层级。对于被视为公司中最高级别的个人或个人， NO_MANAGER用于指定他们在层次结构中不具有高于他们的任何人。<br/>This column requires the USERID of the manager of the employee to establish the compa- ny hierarchy. For the individual or individuals who are considered to be the highest level in the company, NO_MANAGERis used to designate that they do not have anyone above them in the hierarchy.|
|HR|此列使用分配给员工的人力资源(HR) 代表的USERID。如果公司选择不向人力资源代表分配员工，则使用NO_HR。<br/>This column uses the USERID of the Human Resources (HR) representative that is assigned to the employee. If the company chooses not to assign an employee with an HR rep, use NO_HR.|
|TIMEZONE|此字段用于时戳。某些公司将其公司时区用作缺省时区。<br/>This field is used for time stamping. Some companies use their corporate time zone as the default.|
|DEFAULT-LOCALE|此设置是访问SAP SuccessFactors 时向用户显示的缺省语言。<br/>This setting is the default language that is displayed to the user when accessing SAP SuccessFactors.|
|PERSON_ID_EXTERNAL|分配标识是分配给人员的标识符，用于定义人员和公司之间的关系。您可以使用它来识别用户并根据需要进行更改。<br/>Assignment ID is an identifier assigned to a person to define the relationship between the person and a company. You can use it to identify users and change it if needed.|
|ASSIGNMENT_ID_EXTERNAL|人员的唯一标识符。<br/>A unique identifier of a person.|

SAP SuccessFactors UDF 中的标准过滤器

![SAP SuccessFactors UDF](./img/20220508161236.png)

SAP SuccessFactors 中有三个标准过滤器字段：

- 部门 DEPARTMENT
- 部 DIVISION
- 位置 LOCATION

这些字段显示在 SAP SuccessFactors 中，用于在报告和权限中进行筛选。附加过滤器字段由SAP SuccessFactors 顾问在实施期间创建。

“职位代码(Job Code)”字段为可选字段，用于将个人与能力相关联。职位代码分配给员工，并对应于系统中设置的职位角色。您可以将工作角色与一组能力相关联。

还有 15 个自定义字段可用于将您需要的其他数据引入 SAP SuccessFactors。

您的 实例的 .csv 模板已在配置期间提供给贵公司。但是，您可以使用“员工导出(Employee Export)”功能随时下载模板。

必须分别保留第 1 行和第 2 行（系统标识符和标签(System ID and Label)），包括模板中的所有必需列。您可以在系统配置期间重命名行2的标签。将文件格式另存为 .csv 文件。

#### 文件行为 File Behavior

上载 UDF 时，SAP SuccessFactors 会搜索文件中的记录，并仅对 USERID 字段与系统中的USERID 相匹配的 SAP SuccessFactors 中的数据进行更改。当 SAP SuccessFactors 遇到当前系统中不存在的 USERID 时，会将其视为新用户并以此方式添加到系统中。如果 UDF 不包含系统中现有用户的记录，则不会进行任何更改。

#### 使用 UDF 添加新用户 Adding New Users using the UDF

要添加新用户，请向 UDF 添加新行。完成必填字段并将文件导入到系统中。文件行为确定系统不识别新 USERID 并将此记录作为新用户添加。

#### 使用 UDF 更改用户数据 Changing User Data using the UDF

要使用 UDF 更改用户信息，必须首先从系统中导出当前数据，编辑需要编辑的记录，然后导入已更新的 UDF。文件行为确定系统识别已更改用户的 USERID 并在系统中相应地更改信息。

#### 使用 UDF 停用用户 Inactivating a User using the UDF

要停用用户，请按照更改用户数据时类似的步骤进行操作。在这种情况下，更改用户的STATUS 。要停用用户，SAP SuccessFactors 建议从系统中导出当前数据。将相应用户的STATUS 字段编辑为非活动状态，并将更新后的文件导入到系统中。文件行为确定系统识别inactivated用户的 USERID 并停用系统中的用户。

::: warning Note
将用户记录设置为非活动会冻结当前状态的用户账户，这意味着您无法更改账户。
:::

### 用户数据文件 (UDF) 导入 User Data File (UDF) Import

![Import Users](./img/20220508161405.png)

对 UDF 进行更改后，必须将其导入到 SAP SuccessFactors 中以供系统处理。此导入可以通过 “管理中心”手动执行，也可以通过 FTP 自动执行。

#### 导入用户数据 Importing User Data

要通过用户数据更改上载系统，可将用户数据文件(User Data File)上载到 SAP SuccessFactors 。格式必须正确且包含所有必填字段。

从 操作搜索 中，转到 员工导入(Employee Import) 工具。仅在未启用 Employee Central 的系统中可用。如果启用了Employee Central，则选择其他工具导入基本用户信息。

1. 从“操作搜索”中，转到“员工导入(Employee Import)”  
From the Action Search, go to Employee Import

2. 单击 选择文件 以选择您的用户数据文件  
Click Choose File to select your user data file

3. 指定如何为新员工分配初始密码  
Specify how initial passwords are to be assigned for new employees

4. 您可以选择其他选项：  
    You can optionally select other options:  
    1. 向新用户发送欢迎电子邮件：需要事先启用电子邮件模板。如果尚未启用，将显示警告。  
    Send welcome email to new users: The email template needs to be enabled beforehand. If it is not yet enabled, a warning is displayed.  
    2. 验证经理和 HR 字段：确保每个员工记录都有有效的经理和 HR 代表。  
    Validate Manager and HR fields: To ensure that each employee record has a valid manager and HR representative.  
    3. 处理非活动员工：将非活动员工的信息更新到系统中。  
    Process inactive Employees: To update the information of inactive employees to the system.  
    注意：员工导入无法用于导入非活动用户到系统。  
    Note: Employee Import cannot be used to import inactive users to the system.  
    4. 重新激活已清除的用户：如果用户在用户数据文件中处于活动状态，则在系统中重新激活已清除的用户。  
    Re-activate purged users: To reactivate purged users in the system if the users are active in the user data file.

5. 还有其他可选选项：  
    There are other optional options:  
    1. 如果更新包括经理更改，请展开 指定表单传送选项 部分以指定自动经理传输和自动文档移除选项。  
    If your updates include manager changes, expand the Specify Form routing options section to specify the automatic manager transfer and automatic document removal options.  
    2. 展开 “指定字符编码、区域设置和日期格式” 部分。缺省区域设置和日期格式为“English(United States)”和“MM/dd/yyyy”。系统中的其他可用区域设置取决于“配置”中语言包的配置，日期格式将与所选区域设置匹配。在 录用日期 和 退出日期 字段中仅支持多种日期格式。  
    Expand the Specify Character Encodings, Locale, and Date Format section. The default locale and date format are “English(United States)” and “MM/dd/yyyy”. Other available locales in your system depend on the configuration of Language Packs in Provisioning, and the date format will match the selected locale. Only multiple date format in the Hire Date and Exit Date fields are supported.  
    3. 指定薪酬表单更新选项 部分包含更新薪酬表单的选项。  
    The Specify Compensation form updating options section contains options to update compensation forms.  
    4. 验证导入文件 用于验证用户数据文件。如果发现任何错误，错误将显示在页面顶部。  
    Validate Import File is used to validate the user data file. If any errors are found, the errors are displayed on the top of the page.

6. 单击 导入用户文件 以导入用户数据。  
Click Import User File to import the user data.

![Import Users](./img/20220508161532.png)

上载文件后，将使用文件中的信息更新 SAP SuccessfFactors 用户数据库。将发送包含上载结果的电子邮件通知，包括任何错误。如果更新包括经理更改，则会发送另一个包含文档传输结果的电子邮件通知，其中包含表单已传输或传输失败的用户列表。

如果出现任何错误，需要在文件中更正这些错误，然后重新上载。如果这无法解决问题，请联系SAP Cloud Support。

可以在不使用 Employee Central 的情况下扫描“员工导入”文件。例如，在导入状态电子邮件中检测、跳过和报告包含跨站点脚本的字段。

::: warning Note
批量员工导入 和 增量员工导入 作业类型自 2021 年 5 月起删除。
:::

### 具有管理中心链接的数据更改管理 Data Change Management with the Admin Center Link

![Manage Users](./img/20220508161618.png)

在“管理员中心”中，使用 管理用户(Manage Users) 链接对用户记录进行快速、一次性更改。例如，您可以使用此链接将数据更改为手动或通过 FTP 导入的信息。这些更改可包括以下任务：

- 启动经理更改表单，并将表单从旧经理传输给新经理  
Initiating manager changes and transfer forms from an old to a new manager

- 将用户的状态修改为活动或非活动  
Modifying the status of a user to active or inactive

- 更改用户的名称  
Changing the name of a user Extended User Information

## 扩展用户信息 Extended user information

扩展用户信息包含 SAP SuccessFactors 系统中用户的补充数据，超出“基本”用户信息，例如姓名、职位位置和部门。

有三种类型的扩展用户信息：

- 个人信息：个人信息包含有关用户的补充“一对一”数据，即每个员工只有一条记录的数据。  
Personal information: Personal information consists of supplemental "one-to-one" data about a user— that is, data for which there is only one record for each employee.

- 背景信息：趋势信息由人才审查流程中的“一对多”评级数据组成，即每个员工可能有多条记录的数据。  
Background information: Trend information consists of "one-to-many" rating data from your talent review process— that is, data for which there may be multiple records for each employee.

- 趋势信息：背景信息包括用户的补充“一对多”背景数据，即每个员工可能有多条记录的数据。  
Trend information: Background information consists of supplemental "one-to-many" background data about a user— that is, data for which there may be multiple records for each employee.

建议管理员定期导出所有三个数据文件，并在应用程序外部保存这些文件，以防需要参考历史数据和/或需要恢复错误删除的旧记录。

还建议在手动导入任何参数文件数据之前，首先导出备份。如果发生错误（通常使用 “通过覆盖现有数据导入导入(Import by overwriting existing data)” 选项），则可以轻松恢复。

本节中提到的所有选项和文件类型也适用于 FTP 流程。

在 导入扩展用户信息(Import Extended User Information) 或 导出扩展用户信息(Export Extended User Information) 页面中，系统显示为上次导入或导出定义的设置。因此，不必重置每次导入或导出的所有设置。这样可以降低由错误设置导致的数据丢失风险。

## 用户管理 User Management

![Manage Users](./img/20220508161749.png)

在 管理中心 页面上，找到 管理员工(Manage Employees) 部分并导航到 Update User Information > Manager Users 以执行以下操作：

- 添加新用户： 单击 添加新用户 以在提供的文本字段中输入有关新用户的信息。保存更改。 
Add New Users: Click Add New Users to enter information about a new user in the text fields provided. Save changes.

- 更改用户数据： 单击用户名称以编辑其信息。在 编辑用户 窗口中，滚动浏览数据以查找要更改的字段，例如用户名、经理、地址、状态（活动或非活动）。进行编辑。保存更改。 
Change User Data: Click the name of the user to edit the information for that individual. In the Edit User window, scroll through the data to find the fields to change, for example, the name of the user, manager, address, status (active or inactive). Make the edits. Save the changes.

### 管理用户信息 Managing User Information

#### 用户信息 User Information

在 SAP SuccessFactors 中，用户信息由基本用户信息(Basic user information)和扩展用户信息(Extended user information)组成。如果您在 Employee Central 中管理用户，则还有更多的用户信息元素。本培训主要针对不在 Employee Central 中管理的用户管理基本用户信息和扩展用户信息。

向系统添加用户时，必须为用户提供基本用户信息。它包含员工姓名、性别、地址等数据。功能、报告、管理任务以及最重要的权限需要基本用户信息。

扩展用户信息包含有关用户的补充数据，并分为三种类型：

- 个人信息  
 Personal information

- 背景信息  
 Background information

- 趋势信息  
 Trend information

在 SuccessFactors 系统上线后，管理员需要执行持续的管理和维护活动，以确保其顺利运行。其中一项重要活动是用户信息管理，其中包括添加用户、管理用户帐户和更新用户信息等操作。

用户信息管理是 SAP SuccessFactors 系统中的基本活动。您需要确保包含公司所需的所有用户字段，并在数据模型中将所需信息进行定义。

确保已将所有用户数据字段包括在系统的数据模型中。使用所需信息设置数据模型是几乎所有SAP SuccessFactors 实施的标准部分。

如果要配置更改并在数据模型中添加用户数据字段，可以使用业务配置 UI(Business Configuration UI) (BCUI)。此工具使您能够从最终用户 UI 维护数据模型，而不是在 XML 文件中维护这些元素，并联系有权访问“Provisioning”的SAP Could Support。

##### 分配标识 Assignment ID

分配标识是分配给人员的标识符，用于定义人员和公司之间的关系。您可以使用它来识别用户并根据需要进行更改。

::: warning Note
目前，某些 SAP SuccessFactors 区域不支持分配 ID，例如，学习、薪酬、入职、招聘管理以及数据保护和隐私功能。这可能导致套件中的显示不一致。更改分配标识之前，我们建议您联系 SAP 专业服务评估与不一致相关的风险。如果您无法更改分配编号并且您仍需要更改用户标识，则创建支持工单以启动用户标识转换流程。
:::

分配标识 (assignment_id_external) 唯一、区分大小写、可见，并可提供给员工、临时工或实习人员。分配标识符用于在导入和导出工具、用户界面、API 和报告中识别 HXM Suite 中的用户。用户 ID (users_sys_id) 仍存在，但我们建议您将其用于系统集成。

系统自动为 2019 年第 3 季度发行版本之前创建的用户生成分配标识，其缺省值与当前用户标识相同。但是，在启用了员工中心的实例中，如果已使用业务规则生成分配标识，则系统将基于规则创建分配标识，并且分配标识可能与用户标识不同。使用员工导入、管理用户或 OData API 等用户管理工具创建新用户时，这些用户的分配标识也会添加到系统中。

只能通过 convertAssignmentIdExternal 函数导入更改分配标识。

为什么分配标识？

之前，在某些情况下（例如公司购置、员工重新安置或在 Employee Central 或其他 HRIS 系统上上线）要更改用户标识时，需要支持工单。用户 ID 转换过程成本高昂且耗时。除此之外， Employee Central、元数据框架或 SAP HANA 数据库中不支持用户标识转换。

现在，您可以使用分配标识来识别用户并根据需要进行更改。

区分人员标识、UUID、用户标识和分配标识(Person ID, UUID, User ID, and Assignment ID)

<table>
 <tr>
  <th>字段 Field</th>
  <th>描述 Description</th>
  <th>能够被更改？</th>
  <th>这些IDs的关系</th>
 </tr>
 <tr>
  <td>Person ID (person-id-external)</td>
  <td>Employee Central中人员的唯一标识符。人员标识识别自然人。员工在整个公司时间通常只有一个个人标识符， 因为此标识符与每个人相关联。
  <br/>A unique identifier of a person in Employee Central. Person ID identifies a natural person. An employee generally has only one person ID throughout their time at the company, since this ID is associated to each person.</td>
  <td>Yes</td>
  <td rowspan="3">
UUID和人员标识是一对一的关系。<br/>
用户标识符和分配标识符是一对一的关系。<br/>
一个人员标识符与一个或多个用户标识符和分配标识符相关联。<br/>
一个UUID与一个或多个用户标识和分配标识相关联。
<br/>UUID and person ID are in a one-to-one relationship.<br/>
User ID and assignment ID are in a one-to-one relationship.<br/>
One person ID is associated to one or more user IDs and as- signment IDs.<br/>
One UUID is associated to one or more user IDs and assign- ment IDs.</td>
 </tr>
  <tr>
  <td>UUID (per-person-uuid)</td>
  <td>在系统中创建人员数据时生成此标识符。引入UUID，用于将 Employee Central中的人员数据与其他模块集成。UUID仅存储在数据库级别，在UI 上不可见。
<br/>This identifier is generated when person data is created in the system. UUID is introduced for integrating person data in Em- ployee Central with other modules. UUID is stored at a database level only and is not visible on the UI.
</td>
  <td>No</td>
 </tr>
  <tr>
  <td>User ID (users-sys-id)</td>
  <td>用户实体的唯一标识符。人员可能具有一个或多个用户标识符。如果客户在SuccessFactors 中每人仅维护一个雇用，则用户标识可以作为公司中人员的唯一标识符。
<br/>分配标识在整个套件的UI 上逐渐替代用户标识。用户标识仍存在，我们建议您将其用于系统集成。
  <br/>A unique identifier of user entity. A person might have one or more user IDs. If a customer maintains only one employment per person in SuccessFactors, the user ID can serve as the person’s unique iden- tifier in the company.<br/>Assignment ID gradually takes place of user ID on the UI across the suite. User ID still exists, and we recommend that you adopt it for system integration.</td>
  <td>No</td>
 </tr>
</table>

### 用户管理工具

可使用多种工具管理系统中的用户。在本课中，您将了解如何选择在不同场景中使用的正确选项。

1. 您可以使用 UI“管理用户”工具管理基本用户数据。  
You can Manage Basic User Data by using the UI ‘Manage Users’ tool.

2. 之前还讨论了员工导入工具。  
Employee import tool has also been discussed earlier.

3. 用于通过导入管理用户的另一个工具是“导入扩展用户信息”工具，可用于导入 CSV 文件中实时配置文件信息的更精细数据。  
Another tool to use for managing users by import is ‘Import Extended User Information’ tool which can be used to import more granular data for live profile information in CSV file.

4. 在下一模块中学习的检查工具还可用于用户管理。  
Check tool, which you are learning in the next module can also be used for User Management.

根据您是否在 Employee Central 中管理用户，您需要不同的工具来执行相同的用户管理任务。参考下表根据您的系统配置选择正确的工具。

<table>
 <tr>
  <th>如果要...</th>
  <th>将此工具用于在Employee Central中管理的用户</th>
  <th>对未在Employee Central 中管理的用户使用此工具</th>
 </tr>
 <tr>
  <td>使用UI 添加或更新基本用户信息<br/>Add or update basic user information by us- ing the UI</td>
  <td>Employee Self-Service and Manager Self-Service</td>
  <td>Manage Users</td>
 </tr>
 <tr>
  <td>通过使用数据文件添加或更新基本用户信息<br/>Add or update basic user information by us- ing a data file</td>
  <td>Import Employee Data->Basic User Import</td>
  <td>Employee Import</td>
 </tr>
  <tr>
  <td>下载基本用户信息<br/>Download basic user information</td>
  <td colspan="2">Employee Export</td>
 </tr>
  <tr>
  <td>添加或更新扩展用户信息<br/>Add or update extend- ed user information</td>
  <td>Import Extended User Information, Import Employee Data->Extended Im- port, or Import Employee Data -> Background Import</td>
  <td>Import Extended User In- formation</td>
 </tr>
 </tr>
  <tr>
  <td>下载扩展用户信息<br/>Download extended user information</td>
  <td colspan="2">Export Extended User Information</td>
 </tr>
  </tr>
  <tr>
  <td>验证用户数据<br/>Validate your user data</td>
  <td colspan="2">Check Tool->User Management</td>
 </tr>
</table>

### :tada:练习十 管理员工导入权限 Manage Employee/Associate Import Permissions

在本练习中，您将找到管理员用户，并验证他们对所有部门、所有部门和所有地点管理员工导入权限的权限。  
In this exercise, you will find the admin user and verify their permission to manage the Employee Import Privilege , for all divisions, all departments and all locations.

1. Find the HR Coordinator and verify their permission to manage the Employee Import Privilege.
    1. Use the Action Search to navigate to Manage Employee Import.
    2. On the Manage Employee Import Privilege screen. Add HR as the first name and then click Search Users.
    3. Scroll to the table, and verify that the checkbox Manage Employee Import is selected.
    4. In the Divisions column select All Divisions.
    5. In the Departments column select All Departments .
    6. In the Locations column select All Locations .
    7. Click the Save Definition For Selected Users button.
 
您找到了管理员用户，并更新了他们管理所有部门、所有部门和所有地点的员工导入权限的权限。  
You found the admin user and updated their permission to manage the Employee Import Privilege, for all divisions, all departments and all locations.

### :tada:练习十一 到处现有数据文件Export the Existing Data File

您需要对现有数据文件进行更改。最佳实践建议是在更改数据之前，从实例中导出相关文件。  
You need to make changes to an existing data file. Best practice advice is to export the relevant file from your instance, before making data changes.

根据之前的练习，系统中的Employee一词仍可能被Associate一词替换。  
Based on a previous exercise, the word Employee may still be replaced in the system with the word Associate.

在本练习中，将从实例导出现有数据文件，并将其保存到桌面。  
In this exercise, you export an existing data file from your instance, and save it to your desktop.

1. Export the existing data file from your instance.
    1. Use the Action Search to navigate to Employee Export.
    2. On the Export Users screen, click Export User File.
    3. In the File Download dialog box, click Save. Alternatively, you can use the keyboard shortcut, Alt+S.
    4. In the Save As dialog box, click Save.  
    Alternatively, you can use the keyboard shortcut, Alt+S. The Download Complete dialog box appears.

您从实例中导出了现有用户数据文件，并将其保存到桌面。  
You exported the existing User Data File from your instance, and saved it to your desktop.

### 练习十二 修改数据文件 Modify the Data File

作为管理员，您的职责之一是维护员工记录，包括保持用户目录最新。  
As an administrator, one of your responsibilities is to maintain employee records, including keeping the User Directory up to date.

在本练习中，将修改新员工的数据文件。  
In this exercise, you modify the data file for new employees.

1. Modify the user data file you exported previously for new employees.
    1. Locate the file UserDirectory . To select the file, click the filename.

2. Using the table, User Data for Frank Smith, add his data to the User Directory.

    |Column|User Input And Action|
    |------|-----|
    |STATUS|active|
    |USERID|fsmith|
    |USERNAME|fsmith|
    |FIRSTNAME|Frank|
    |LASTNAME|Smith|
    |GENDER|M|
    |EMAIL|your own e-mail address|
    |MANAGER|manager|
    |HR|admin_dv|
    |DIVISION|ACE Software|
    |DEPARTMENT|Human Resources|
    |LOCATION|Chicago|
    |JOBCODE|IC|
    |TIMEZONE|US/Eastern|
    |HIREDATE|11/25/2013|
    |TITLE|Employee|
    |DEFAULT_LOCALE|en_US|
    |PERSON_ID_EXTERNAL|fsmith|
    |ASSIGNMENT_ID_EXTERNAL|fsmith|

    ::: warning Note
    The PERSON_ID_EXTERNAL and the ASSIGNMENT_ID_EXTERNAL are required columns in the import file.  
    In some instances, the PERSON_ID_EXTERNAL is not present in the csv file. If this is the case in your training instance, do not add the column and it will not be required.
    :::

3. Save your file as a version 2 (_V2).

4. Close your new csv file.

您成功地修改了员工Frank Smith的数据。
You successfully modified the data for the employee Frank Smith.

### :tada:练习十三 导入数据文件 Import the Data File

您已经对数据文件进行了更改，需要将修改后的数据文件导入实例。  
You have made changes to a data file, and you need to import the modified data file to your instance.

在本练习中，将验证修改后的数据文件并将其导入实例。  
In this exercise, you validate and import the modified data file to your instance.

1. Select and validate the data file for upload.
    1. Use the Action Search to navigate to Employee (Associate) Import.
    2. On the Import Users screen, click the Browse... button.
    3. Select the file to upload by clicking the relevant file name.
    4. Click Open.
    5. Alternatively, you can use the keyboard shortcut, Alt+O.
    6. On the Import Users screen, select Use the UserID.
    7. Select the Send welcome email to new users checkbox.
    8. Click the Validate Import File button.

2. Verify the message and solve the issue accordingly in your csv file. Adding the job code of IC to HR Coordinator should solve the issue.

3. Import the validated file to your instance.
    1. On the Import Users screen, click the Browse... button.
    2. To select the file to upload, in the Choose File to Upload dialog box, click the relevant filename.
    3. Click Open.  
    Alternatively, you can use the keyboard shortcut, Alt+O.
    4. On the Import Users screen, click the Import User File button.
    5. In the Message from webpage dialog box, click OK.

4. From the Action Search, go to Manage Users and verify that, Frank, Ben and Kim have been successfully created.
