---
sidebar_label: 'Identity'
slug: /identity
---
# AppDev Trends

## Identity

![](images/14-identity.png)

With an organisation’s trusted people now working from anywhere / often on untrusted networks – and the risk of untrusted people present on their own trusted networks, many security experts will claim that identity has become the most important protection mechanism in information security.

Identity will combine with access controls to impose rules on who can access what and what level of access they have. For example: a user may have access to a data store but be limited to read-only. Access controls can generate audit logs of who did what, for later analysis.

Identity access solutions require both Authentication and Authorization.

Authentication is the process of identifying a user is who they claim to be. This could include multifactor authentication (MFA) checks e.g. the user must prove they have some item of knowledge (e.g. a Password) and own a token (e.g. a specific phone with an authentication app). A successful authentication will generate a security token that will contain information about the user – this token is passed in any application messages that require authorization. 

Authorization is the process of determining if an authentication user is granted the rights to perform the action that want to take.

OpenID Connect / OAuth 2.0 / SAML are commonly used protocols for the authentication / authorisation processing.

Handling identity may be wider than just known employees – it might also need to support external parties such as suppliers, business partners and customers. For some scenarios, it might not be about people – identities can also be assigned to trusted devices and services.

Azure Active Directory (Azure AD) – is a cloud directory that can store users and be used as an authentication endpoint. Azure AD can sync identities with a corporate Windows Active Directory.  Azure AD can federate with other organisations Azure AD, and useful for B2B applications.

Azure AD B2C – can federate the authentication process with both Azure AD and social identity providers (e.g. Facebook), and the latter is useful for many consumer applications.

&#x2726; <https://www.microsoft.com/security/business/identity-access-management>  
&#x2726; <https://docs.microsoft.com/azure/active-directory/develop/>  

Video  
[![](https://i3.ytimg.com/vi/AE92MlnM6qw/mqdefault.jpg)](https://youtu.be/AE92MlnM6qw)
