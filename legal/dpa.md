---
title: "Data Processing Agreement"
lastUpdated: 2026-03-02
description: "Data Processing Agreement for Runtara"
---
## INTRODUCTION

This Data Processing Agreement ("DPA") applies to all customers ("Customer") of SyncMyOrders Sp. z o.o. ("Provider") and governs Provider's processing of personal data on Customer's behalf in connection with the Runtara automation platform (the "Service"). By using the Service, Customer agrees to the terms of this DPA.
This DPA is entered into pursuant to Article 28 of the General Data Protection Regulation (EU) 2016/679 ("GDPR") and any other applicable data protection legislation ("Data Protection Legislation").
In the event of any conflict between this DPA and Customer's service agreement with Provider, this DPA shall prevail with respect to the processing of personal data.

## 1. DEFINITIONS

**"Customer Data"** means all data, files, and information submitted to or processed by the Service on Customer's behalf, including order data, inventory data, customer records, and any personal data therein.
**"Personal Data"** means any information relating to an identified or identifiable natural person, as defined in Article 4(1) of the GDPR.
**"Processing"** means any operation performed on Personal Data, as defined in Article 4(2) of the GDPR.
**"Sub-processor"** means any third party engaged by Provider to process Personal Data on Customer's behalf.
Other capitalised terms used in this DPA have the meanings given in the GDPR or, where applicable, in Customer's service agreement with Provider.

## 2. SCOPE AND ROLES

### 2.1 Roles

For the purposes of Data Protection Legislation: Customer is the Controller (or, where Customer processes personal data on behalf of its own customers, a Processor); Provider is the Processor (or Sub-processor, as applicable) acting on Customer's documented instructions.

### 2.2 Subject Matter and Purpose

Provider processes Personal Data solely to provide the Service — that is, to synchronise, transform, and transfer business data between Customer's connected systems as configured by Customer through the platform.

### 2.3 Nature of Processing

The processing activities consist of: collection (via API calls to Customer's connected systems), structuring, transformation, transfer between systems, temporary storage for execution purposes, and logging for error resolution. The Service acts primarily as a data transit and synchronisation layer.

### 2.4 Categories of Data Subjects

Data subjects may include: Customer's end customers, Customer's employees and contractors, Customer's suppliers and business contacts, and any other individuals whose personal data is contained in the data flows configured by Customer.

### 2.5 Types of Personal Data

Personal data processed may include: names, email addresses, postal addresses, phone numbers, order and transaction details, company names, job titles, and any other personal data contained in Customer's connected systems that Customer chooses to include in synchronisation workflows.

### 2.6 Duration

Processing shall continue for as long as Customer uses the Service. Upon cessation, Section 9 of this DPA applies.

## 3. DEPLOYMENT MODELS

### 3.1 Provider-Hosted Deployment (Default)

In the default deployment model, Customer Data is processed on Provider's infrastructure hosted in the European Union (Hetzner, Germany/Finland). Data transits Provider's servers during synchronisation between Customer's connected systems.

### 3.2 Customer-Hosted Deployment

Where Customer elects the self-hosted option (subject to separate fees), the processing engine runs within Customer's own network infrastructure. In this model: (i) data fetched by integrations from Customer's connected systems is processed entirely within Customer's network; (ii) platform configuration data and user authentication data transit Provider's gateway infrastructure; and (iii) when users access data through the platform interface, requests are routed through Provider's gateway as a reverse proxy to Customer's server — Customer Data may transit Provider's infrastructure in a transient manner but is not stored or persisted by Provider.

### 3.3 Applicability

This DPA applies to both deployment models. Where a provision relates exclusively to Provider-Hosted Deployment, this is noted. For Customer-Hosted Deployment, Provider's obligations under this DPA apply only to the Personal Data that transits or is stored on Provider's infrastructure (configuration data, authentication data, and execution logs).

## 4. CUSTOMER OBLIGATIONS AND INSTRUCTIONS

### 4.1 Lawful Basis

Customer is responsible for ensuring that it has a lawful basis for the processing of Personal Data through the Service, including any necessary consents, privacy notices, or legitimate interest assessments.

### 4.2 Instructions

Customer's instructions to Provider regarding the processing of Personal Data are documented in: (i) Customer's service agreement with Provider and this DPA; (ii) the workflow configurations created by Customer within the platform; and (iii) any written instructions provided by Customer to Provider from time to time. Provider shall process Personal Data only in accordance with Customer's documented instructions, unless required to do otherwise by applicable law, in which case Provider shall inform Customer (where permitted by law) before carrying out such processing.

### 4.3 Customer Responsibility for Data Flows

Customer determines which systems are connected, which data fields are synchronised, and which workflows are activated. Provider does not independently decide what Personal Data is processed or for what purpose.

### 4.4 Third-Party Systems

The Service enables Customer to transfer Personal Data to and from third-party systems (e.g. ERP, CRM, e-commerce platforms) as configured by Customer. Provider's responsibility is limited to the secure transfer of data between systems. Once Personal Data has been delivered to a third-party system, that data is subject to the terms, privacy policies, and data processing practices of the relevant third-party provider. Customer is solely responsible for: (i) ensuring it has appropriate data processing agreements in place with each third-party provider; (ii) verifying that each third-party provider offers adequate data protection safeguards; and (iii) ensuring that the transfer of Personal Data to such systems is lawful under applicable Data Protection Legislation. Provider shall not be liable for any processing, storage, disclosure, or breach of Personal Data by any third-party system to which Customer directs data through the Service.

## 5. PROVIDER OBLIGATIONS

### 5.1 Confidentiality

Provider shall ensure that persons authorised to process Personal Data have committed themselves to confidentiality or are under an appropriate statutory obligation of confidentiality.

### 5.2 Processing Limitations

Provider shall not: (i) process Personal Data for any purpose other than providing the Service; (ii) sell, rent, or otherwise make Personal Data available to third parties for their own purposes; or (iii) combine Customer's Personal Data with data from other customers or sources, except in aggregated, anonymised form that does not identify Customer or any data subject.

### 5.3 Assistance

Provider shall, taking into account the nature of processing, assist Customer by appropriate technical and organisational measures in fulfilling Customer's obligations to respond to data subject requests (access, rectification, erasure, portability, restriction, objection). Provider shall promptly notify Customer if it receives a request from a data subject directly, and shall not respond to such request without Customer's instructions unless required by law.

### 5.4 Data Protection Impact Assessments

Provider shall provide reasonable assistance to Customer with data protection impact assessments and prior consultations with supervisory authorities, to the extent required under Data Protection Legislation and to the extent such assessment relates to the Service.

## 6. SUB-PROCESSORS

### 6.1 Authorised Sub-processors

Customer provides general authorisation for Provider to engage sub-processors, subject to the requirements of this Section. The current list of sub-processors is set out in Annex 1 to this DPA.

### 6.2 Obligations on Sub-processors

Provider shall: (i) enter into a written agreement with each sub-processor imposing data protection obligations no less protective than those in this DPA; and (ii) remain fully liable to Customer for the performance of each sub-processor's obligations.

### 6.3 Changes to Sub-processors

Provider shall notify Customer at least 30 days in advance of any intended addition or replacement of a sub-processor, including the sub-processor's name, location, and the nature of processing. Customer may object in writing within 15 days of receiving such notice if Customer has reasonable grounds relating to data protection. If Customer objects, the Parties shall discuss the concern in good faith. If no resolution is reached within 15 days, Customer may terminate the Service with respect to the affected data flows, and Provider shall refund any prepaid fees for the unused portion of the subscription term attributable to those data flows.

## 7. TECHNICAL AND ORGANISATIONAL MEASURES

### 7.1 Security Measures

Provider shall implement and maintain appropriate technical and organisational measures to ensure a level of security appropriate to the risk, including:
**Encryption:**

- Data in transit: TLS 1.2 or higher for all API calls, webhook endpoints, and dashboard access
- Data at rest: AES-256 encryption for stored data on Provider's infrastructure
- API credentials and access tokens for Customer's connected systems are encrypted at rest and never logged in plaintext

**Access Control:**
- Role-based access control (RBAC) for all platform users
- Authentication via Auth0 with support for multi-factor authentication
- Provider staff access to production systems requires individual named accounts with audit logging
- Principle of least privilege applied to all internal access

**Infrastructure Security:**
- Production infrastructure hosted in EU data centres (Hetzner, Germany/Finland) with ISO 27001-certified facilities
- Network segmentation and firewall rules between tenant environments
- Regular security patching and updates

**Monitoring and Logging:**
- Continuous monitoring of service availability and performance
- Execution logs retained for error resolution and debugging purposes
- Logs do not contain full Customer Data payloads; sensitive fields are masked or truncated

**Operational Practices:**
- Regular backups with encryption
- Incident response procedures documented and maintained
- Periodic review and update of security measures to reflect evolving threats and industry practices

### 7.2 No Guarantee

While Provider implements the measures described above, no security measures are impenetrable. Provider does not guarantee that unauthorised access, disclosure, or loss will never occur, but commits to responding promptly and appropriately in accordance with Section 8.

## 8. PERSONAL DATA BREACH

### 8.1 Notification

Provider shall notify Customer of any Personal Data breach without undue delay and in any event within 72 hours of becoming aware of the breach. Notification shall include, to the extent available: (i) the nature of the breach, including the categories and approximate number of data subjects and records concerned; (ii) the likely consequences of the breach; (iii) the measures taken or proposed to address the breach; and (iv) the contact point at Provider for further information.

### 8.2 Cooperation

Provider shall cooperate with Customer and take reasonable steps to assist in the investigation, mitigation, and remediation of the breach, and in complying with Customer's notification obligations to supervisory authorities and data subjects under Data Protection Legislation.

### 8.3 Record-keeping

Provider shall maintain a record of all Personal Data breaches, including the facts, effects, and remedial actions taken.

## 9. DATA RETURN AND DELETION

### 9.1 Return

Upon termination of Customer's use of the Service, and upon Customer's written request made within 30 days, Provider shall make available to Customer a copy of any Personal Data processed under this DPA in Provider's standard export format.

### 9.2 Deletion

Following the period described in Section 9.1, or upon Customer's earlier written instruction, Provider shall delete all Personal Data from its systems within 60 days, including from backups within the normal backup rotation cycle. Provider may retain Personal Data only to the extent required by applicable law, and shall inform Customer of any such requirement.

### 9.3 Certification

Upon Customer's written request, Provider shall provide written confirmation that deletion has been completed.

## 10. INTERNATIONAL TRANSFERS

### 10.1 Processing Location

All Customer Data is processed within the European Economic Area. Provider's infrastructure and all sub-processors are configured to process data in EU regions (see Annex 1).

### 10.2 US-Incorporated Sub-processors

Certain sub-processors (Datadog, Auth0) are incorporated in the United States but process data exclusively in EU-hosted regions. Where the corporate jurisdiction of a sub-processor may give rise to obligations under foreign law (e.g. US CLOUD Act), Provider shall ensure that appropriate safeguards are in place in accordance with Chapter V of the GDPR, including Standard Contractual Clauses (SCCs) approved by the European Commission, supplemented by additional technical measures where necessary.

### 10.3 Future Transfers

Provider shall not transfer Personal Data outside the EEA without first: (i) notifying Customer in accordance with Section 6.3; and (ii) ensuring that an appropriate transfer mechanism under Chapter V of the GDPR is in place.

## 11. AUDITS AND COMPLIANCE

### 11.1 Information

Provider shall make available to Customer all information reasonably necessary to demonstrate compliance with this DPA and Data Protection Legislation.

### 11.2 Audits

Customer (or a qualified third-party auditor appointed by Customer and bound by confidentiality obligations) may conduct an audit of Provider's compliance with this DPA, subject to: (i) at least 30 days' prior written notice; (ii) a scope reasonably related to the processing activities; (iii) being conducted during normal business hours; and (iv) not unreasonably disrupting Provider's operations. Provider shall cooperate with and provide reasonable assistance for such audits.

### 11.3 Frequency

Customer may exercise its audit right no more than once per calendar year, unless required by a supervisory authority or in response to a Personal Data breach.

### 11.4 Costs

Each Party shall bear its own costs in connection with audits. If an audit reveals material non-compliance, Provider shall bear the reasonable costs of any follow-up audit.

## 12. CHANGES TO THIS DPA

### 12.1 Updates

Provider may update this DPA from time to time to reflect changes in processing activities, sub-processors, security measures, or applicable law. Provider shall notify Customer of material changes at least 30 days before they take effect.

### 12.2 Continued Use

Customer's continued use of the Service after the effective date of an updated DPA constitutes acceptance of the updated terms. If Customer does not agree with a material change, Customer may terminate the Service in accordance with its service agreement with Provider.

## 13. GOVERNING LAW

This DPA shall be governed by and construed in accordance with the laws of the Republic of Poland. Any disputes shall be submitted to the competent courts of Kraków, Poland.

## 14. CONTACT

For questions or requests regarding this DPA, contact Provider at:
**SyncMyOrders Sp. z o.o.**
Email: privacy@syncmyorders.com

## ANNEX 1 — SUB-PROCESSORS

The following sub-processors are authorised as of the date shown above:

| Sub-processor | Purpose | Data Processing Location | Entity Jurisdiction |
| --- | --- | --- | --- |
| Hetzner Online GmbH | Infrastructure hosting, compute, and storage | Germany / Finland (EU) | Germany (EU) |
| Datadog, Inc. | Application monitoring, logging, and error tracking | EU region | United States |
| Auth0 (Okta, Inc.) | User authentication and identity management | EU region | United States |
| Mailgun (Sinch AB) | Transactional email delivery (via Auth0) | EU region | Sweden (EU) |

**Note:** For Customer-Hosted Deployments, integration processing occurs within Customer's own infrastructure. However, Customer Data may transit Provider's gateway (Hetzner) in a transient manner when users access data through the platform interface. Datadog may receive traces of Customer Data through application logs, error reports, and performance monitoring telemetry. Sensitive fields are masked or truncated where technically feasible, but complete elimination of Customer Data from monitoring traces cannot be guaranteed.
Provider shall maintain an up-to-date version of this list and notify Customer of changes in accordance with Section 6.3.
