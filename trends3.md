# Identity

With an organisation\'s trusted people now working from Identity
anywhere / often on untrusted networks --- and the risk of untrusted
people present on their own trusted networks, many security experts will
claim that identity has become the most important protection mechanism
in information security.

Identity will combine with access controls to impose rules on who can
access what and what level of access they have. For example: a user may
have access to a data store but be limited to read-only. Access controls
can generate audit logs of who did what, for later analysis.

Identity access solutions require both Authentication and

Authorization.

user must prove they have some item of knowledge (e.g. a Password) and
own a token (e.g. a specific phone with an authentication app). A
successful authentication will generate a security token that will
contain information about the user --- this token is passed in any
application messages that require authorization.

Authorization is the process of determining if an authentication user is
granted the rights to perform the action that want to take.

OpenlD Connect / OAuth 2.0 / SAML are commonly used protocols for the
authentication / authorisation processing.

Handling identity may be wider than just known employees --- it might
also need to support external parties such as suppliers, business
partners and customers. For some scenarios, it might not be about people
![](media/image3.jpg){width="0.11002187226596676in"
height="1.0e-2in"}identities can also be assigned to trusted devices and
services.

Azure Active Directory (Azure AD) --- is a cloud directory that can
store users and be used as an authentication endpoint. Azure AD can sync
identities with a corporate Windows Active Directory. Azure AD can
federate with other organisations Azure AD, and useful for B2B
applications.

Azure AD B2C --- can federate the authentication process with both Azure
AD and social identity providers (e.g. Facebook), and the latter is
useful for many consumer applications.

https://www.microsoft.com/security/business/identity

https://docs.microsoft.com/azure/active-directory/develop/

Hybrid cloud is evolving from being the Intelligent Edge

integration of a datacenter with the public cloud, to becoming units of
computing available at even the world\'s most remote destinations
working in connection with public cloud.

The intelligent edge is the continually expanding set of connected
systems and devices that gather and analyse information close to the
physical world where data resides, to deliver real-time insights and
immersive experiences that are highly responsive. At the edge, the
application is contextually aware and can run in both connected and
disconnected states.

Microsoft have several offerings for Edge computing / Internet of

Things:

-   Azure ARC enables us to extend the Azure control plane out to the
    Edge platforms. For example, ARC will enable remote Kubernetes
    clusters such that applications will run at the Edge, but they have
    governance / policy imposed and monitoring from the central cloud.

-   The 10T Edge runtime is a collection of programs that turn a remote
    device into an 10T Edge device. Collectively, the 10T Edge runtime
    components enable 10T Edge devices to receive code to run at the
    Edge and communicate the results.

-   10T Hub is a managed service, hosted in the cloud, that acts as a
    central message hub for bi-directional communication between 10T
    applications and the devices it manages. It enables 10T solutions
    with reliable and secure communications between millions of 10T

-   Azure Stack Edge are managed devices bringing s the compute,
    storage, and intelligence of Azure to the edge.

-   Azure Sphere certified chips is a comprehensive 10T security
    solution---including hardware, OS, and cloud components---to provide
    highly secured devices and actively enable defence in depth.

https://azure.microsoft.com/get-started/iot/

https://azure.microsoft.com/overview/azure-stack/

https://azure.microsoft.com/en-us/overview/future-of-cloud/

# Data Storage & Al

Applications need to store and consume data Data Storage & Al such
information must be stored in repositories are reliable, fast, secure,
scalable, and cost effective. There are many options ranging from cheap
blob storage to relational databases to NoSQL / document databases.

Azure includes a variety of databases that are run as managed service
![](media/image4.jpg){width="0.11002187226596676in"
height="1.0e-2in"}enabling a focus on application development and not
database management.

Data can be used for machine learning and enabling artificial
intelligence. There is an expectation today that applications will be
infused with artificial intelligence to provide innovation and
differentiation.

https://azure.microsoft.com/overview/ai-platform/

https://azure.microsoft.com/solutions/databases/

# Accessibility

Recent regulations mean UK public sector Accessibility organisations
have a legal duty to make sure websites and apps meet accessibility
requirements. Commercial organisations should also adhere to these
requirements because it is the right thing to do.

![](media/image5.jpg){width="0.9068493000874891in"
height="6.666666666666667e-2in"}Microsoft is committed to
revolutionizing access to technology for people living with
disabilities---impacting employment and quality of life for more than a
billion people in the world.

I believe many of us in the AppDev community still have lots to learn
here --- but we need to be onboard and encourage / help everyone to
build products that enrich the lives of all people and of all abilities.

https://www.microsoft.com/accessibility

https://github.com/markharrison/Lab AzureDevOps/blob/master/a
zuredevops-4.md

https://accessibilityinsights.io/

## Sustainable Software Engineering

Sustainable Software Engineering

made a commitment to be carbon negative by 2030, and by 2050 to have
removed from the environment all the carbon the company has ever emitted
since it was founded in 1975. Further environmental commitments include
reducing our water use intensity (water positive by 2030), reducing our
waste (zero waste by 2030), and our support for biodiversity projects
and conservation ecosystems.

I believe Application Developers can play their part here. Sustainable
Software Engineering is an emerging discipline with principles,
philosophies, and competencies to define, develop, and run sustainable
software applications. Sustainable applications are normally cheaper to
run / more performant / more resilient / more optimized - but that\'s
just a welcome addition \... the key thing is developing applications in
such a manner will have positive impact on the planet.

https://docs.microsoft.com/learn/modules/sustainable-softwareengineering-overview/

https://devblogs.microsoft.com/sustainable-software/

https://azure.microsoft.com/global-infrastructure/sustainability/

## Remote Development

The global pandemic has caused the way \"Remote Development we work and
live to change, and organizations of all sizes have scrambled to move to
remote work. Developers are fortunate in that in most cases, their role
can readily adapt with the shift to remote work. successful.

Microsoft has the tools developers love and enterprise trust to keep
them productive when working remote, and enabling a developer to:

-   Code from anywhere

-   Collaborate from anywhere

> ^e^ Ship from anywhere

However, I recognise that \'lockdown remote working\' is not normal
remote working and sadly many people are struggling with mental health
and wellbeing for themselves and family / friends. The last year has
been bad for some and a complete disaster for many --- with peoples
plans & dreams thwarted. Hopefully with the vaccine roll-out happening
we can start to be optimistic there is light at the end of the tunnel.

#staypositive / keep busy, active and learning / build connections with
others / and please just reach out if you want to talk.

https://www.microsoft.com/en-gb/resilience/remote-developmentsolutions

https://cloudblogs.microsoft.com/industryblog/health/2021/01/27/improving-the-pace-of-vaccine-distributionthrough-technology/

mark.harrison @ microsoft.com

Thanks for reading . . what have I missed? . . what is your AppDev top
of mind ?

-Mark

> Published by

Mark Harrison 1 article

> Specialist Sales / Systems Architect / Technical Specialist
> (application development) at Microsoft Published • 1 Imo

As an Azure AppDev Specialist, I share in this article what I do / why I
do it \... and touch on the current AppDev trends I see and the themes
that I am frequently asked to cover.

> Microsoft UK AppDev Specialist team Alexandre I Kat I Margaret I
> Michelle I Mihai I Steve I Steve I Steven - Francesca I Simone I
> Leighton

Like Comment Share 26 • 4 comments • 241 views

> Reactions
>
> ![](media/image6.jpg){width="5.661141732283465in"
> height="1.0833333333333333in"}
>
> 4 Comments

Most relevant ^v^

![](media/image7.jpg){width="6.007878390201225in"
height="0.43333333333333335in"}

Martin Callinan • 1st 1
Imo![](media/image8.jpg){width="0.1400284339457568in"
height="3.333333333333333e-2in"}

> Director, Source Code Control Limited
>
> Mark Harrison OpenChain is now and ISO standard ISO/IEC 5230:2020
> https://bit.ly/37jwRcS

Like Reply 1 Reply

Martin Callinan 1st 1
Imo![](media/image9.jpg){width="0.1400284339457568in"
height="3.333333333333333e-2in"}

> Director, Source Code Control Limited
>
> Microsoft Announces Conformance To OpenChain 2.1 (ISO/IEC 5230)
>
> https://www.openchainproject.org/news/2021/02/01/microsoftannounces-conformance-to-openchain-2-1-iso-iec-5230
>
> Like • 0 1 Reply

Francesca Colenso (She/Her) . 1st 1
Imo![](media/image10.jpg){width="0.1400284339457568in"
height="3.0e-2in"}

> Senior Sales Manager - Azure / Public Cloud at Microsoft
>
> Love this Mark Harrison great read!

Like Reply

Michelle Azzopardi • 1st 1
Imo![](media/image11.jpg){width="0.1400284339457568in"
height="3.333333333333333e-2in"}

> Cloud-Native Business Lead UK I Azure Kubernetes, Containers,
> Serverless, Integration, App Service
>
> Great article Mark Harrison - very thorough in all the great app dev
> services and trends we talk about with our customers.
>
> Mark Harrison

![](media/image12.jpg){width="0.7501509186351706in"
height="0.5033333333333333in"}Specialist Sales / Systems Architect /
Technical Specialist (application development) at Microsoft
