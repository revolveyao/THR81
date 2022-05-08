# 电子邮件通知

[[toc]]

::: tip 本节目标

- 与用户通信
:::

本部分介绍如何使用系统管理与SAP SuccessFactors 用户的通信。您将了解如何触发电子邮件，以及如何打开和关闭电子邮件通知。您还将了解如何更改用户通知电子邮件以及发送用户欢迎电子邮件。

## 事件触发与管理员触发的通知 Event-triggered versus Administrator-triggered Notifications

电子邮件通知由自动系统响应触发或由管理员触发。

- 事件触发的通知 Event-Triggered Notifications  
这些是由事件触发的自动消息，例如，在将表单从一个人移动到另一个人时。这些是系统发送的通知，在没有任何管理员交互的情况下发生。

- 管理员触发的通知 Administrator-Triggered Notifications  
这些通知由管理员发送。例如， 发送欢迎消息是管理员触发的通知。

## 电子邮件通知模板 Email notification templates

电子邮件通知基于模板。要访问模板，请选择Administration Center > Company Settings > E-mail Notification Template Settings 。在此，您可以打开或关闭事件触发的通知以及编辑与通知相关的签名、消息正文和其他选项。

要打开或关闭事件触发的通知，请执行以下步骤：

- 要为所有用户打开通知，请选中通知旁边的复选框。要关闭所有用户的通知，请取消选中通知旁边的复选框。

- 单击保存通知设置。

启用电子邮件通知且用户具有适当权限时，用户可以选择打开或关闭电子邮件通知。

### 启用和禁用通知 To Enable and Disable a Notification

电子邮件通知从SAP SuccessFactors 中的预配置模板生成。在此，您可以启用和禁用事件触发的通知，以及编辑与通知相关的签名、消息正文和其他选项。

- 要为所有用户启用或禁用通知，请选中通知旁边的复选框。

- 要禁用或关闭所有用户的通知，请取消选中通知旁边的复选框。

- 完成后，单击页面底部的保存通知设置。

如果启用电子邮件通知，则用户可以选择打开或关闭电子邮件通知，具体取决于其公司实例的配置方式或是否向用户授予该权限。

### 电子邮件通知消息正文 Email notification message bodies

管理员可以通过编辑电子邮件正文中的文本来更新通知电子邮件中的消息。单击电子邮件模板链接以查看和编辑电子邮件模板的详细信息。还可以通过表单模板为任何基于表单的通知（例如，文档路由通知）创建单独的电子邮件正文。

### 电子邮件签名 Email Signature

缺省情况下，电子邮件通知的标准文本使用变量从软件中提取文本并将其显示在消息正文中。例如，`[[SIGNATURE]]` 是变量。您可以自定义电子邮件签名模板，此文本包含在使用 `[[SIGNATURE]]` 变量的任何消息中。签名将放在电子邮件的页脚中。如果不自定义签名，系统会在文本页脚中显示系统缺省签名。

### 其他模板选项 Other Template Options

除了修改消息正文和签名外，您还可以修改电子邮件优先级（例如，指示高优先级）。您可以选择不同的模板、不同的语言，并编辑电子邮件主题。

## 用户通知电子邮件选项 User notification email options

您可以选择不允许用户打开和关闭电子邮件通知。可通过Administration Center > Company Settings > Company System and Logo Settings进行设置。选中此选项旁边的复选框，可在公司范围内设置用户是否将接收电子邮件通知。如果“选中”，所有用户都将收到有关所有工作流相关流程的电子邮件。如果未选中，则每个用户都可以选择打开/关闭通知。单击页面底部的保存公司系统设置以保存更改。

### 用户特定电子邮件通知选项 User-Specific Email Notification Options

您可以使用设置菜单授予用户选择其电子邮件通知首选项的权限。如果启用此项，用户可以决定是否要接收SAP SuccessFactors 电子邮件通知。

用户可以通过转到名称菜单，选择设置并单击通知来打开或关闭电子邮件通知。然后，他们可以选择自己喜欢的电子邮件通知选项。

::: warning Note
如果用户选择不接收电子邮件，则适用于所有SAP SuccessFactors 通知。
:::

### 用户电子邮件通知的更改 Changes to User Email Notifications

如果公司允许用户在其个人设置中打开或关闭通知，则作为管理员，您可以手动覆盖用户自己接收电子邮件通知的首选项，也可以代表用户更改设置。

当用户指示他们没有收到系统电子邮件时，您还可以使用此选项进行故障排除，也可以将其重新打开。

### 发送用户欢迎电子邮件和发送系统通知 The Send User Welcome Email and sending system notifications

要发送按需（管理员触发的）电子邮件通知，请单击“管理员中心”的“管理员员工”部分中的“发送用户欢迎电子邮件”链接。随即打开 发送系统消息电子邮件通知页面。此处显示的缺省电子邮件消息基于电子邮件通知模板设置中的欢迎消息模板。

您可以修改电子邮件通知选项以包含每次需要发送给用户的信息，或者可能会在电子邮件通知模板设置中修改默认消息。

这些通知可以发送给个人、组或整个活动用户基础。要向特定用户发送系统消息，请单击页面顶部的按用户发送系统消息链接，然后在下面选择您的用户。

## :tada:练习十四 编辑邮件通知设置 Edit the Email Notification Settings

在本练习中，将修改电子邮件通知模板中的模板设置。
In this exercise, you modify template settings in E-Mail Notification Templates.

1. Edit the E-Mail Notification Templates.
    1. Use the Action Search to navigate to E-Mail Notification Templates Settings.
    2. On the E-Mail Notifications Templates make sure that the following notification are enabled:
        - Document Creation
        - Document Routing Notification
        - Document Return to Evaluation Notification
        - Document Completed Notification
        - Goal Creation Notification
        - Goal Delete Notification
        - Welcome Message Notification
    3. Click the Save Notification Settings button.

2. Click on Document Creation Notification and set the email priority.
    1. Select the Set Email Priority, High Priority checkbox.
    2. Click the Save Changes button.
    3. In the E-mail Subject field enter the following subject line: Important - Please Review Your Performance Review Form.

3. Delete the default e-mail message.
    1. Select all text in the Email Body field.
    2. Delete all selected text.
    3. In the E-mail Body, enter “Please be advised that the document `[[DOC_TITLE]]` has been created for you by `[[SENDER]]` and is now available in your ACME Boots Inbox folder. You can access this document 4 at the following URL: `[[DOC_ACCESS_URL]]`.
    4. Click the Save Changes button.

您修改了电子邮件通知模板中的模板设置。
You modified template settings in E-Mail Notifications Templates.

## :tada:练习十五 作为一个用户关闭邮件通知 Turn Off Email Notifications as a User

在本练习中，您将关闭电子邮件通知。
In this exercise you will turn off your e-mail notifications.

1. Open the Name Menu.

2. Click Settings .

3. Click Notifications .

4. Select the option Read messages in the system.

5. Click Save Notification .

6. Click OK.
