var crosswalkData = [
    {
        topic: "Risk Management System",
        category: { euChapter: "high-risk", nistFunction: "govern", isoClause: "planning" },
        euaiact: { ref: "Article 9", desc: "Providers of high-risk AI systems must establish, implement, document and maintain a risk management system as a continuous iterative process throughout the entire lifecycle.", url: "https://artificialintelligenceact.eu/article/9/" },
        nist: { ref: "GOVERN 1.1", desc: "Policies, processes, procedures and practices across the organisation related to the mapping, measuring and managing of AI risks are in place, transparent and implemented effectively.", url: "https://airc.nist.gov/Docs/1", strength: "strong" },
        iso42001: { ref: "Clause 6.1", desc: "The organisation must determine risks and opportunities that need to be addressed to ensure the AI management system achieves its intended outcomes and prevent or reduce undesired effects.", url: "https://www.iso.org/standard/81230.html", strength: "strong" }
    },
    {
        topic: "Data and Data Governance",
        category: { euChapter: "high-risk", nistFunction: "map", isoClause: "operation" },
        euaiact: { ref: "Article 10", desc: "Training, validation and testing datasets must be subject to data governance practices including examination for biases, collection practices, and relevance to the intended purpose.", url: "https://artificialintelligenceact.eu/article/10/" },
        nist: { ref: "MAP 1.5", desc: "Organisational risk tolerance is determined and communicated through policies. AI risk tolerance requirements are established and communicated to relevant AI actors.", url: "https://airc.nist.gov/Docs/1", strength: "partial" },
        iso42001: { ref: "Clause 8.3", desc: "The organisation must establish and maintain processes for data management related to AI systems including data collection, data quality assurance and data governance throughout the AI lifecycle.", url: "https://www.iso.org/standard/81230.html", strength: "strong" }
    },
    {
        topic: "Technical Documentation",
        category: { euChapter: "high-risk", nistFunction: "govern", isoClause: "support" },
        euaiact: { ref: "Article 11 and Annex IV", desc: "Providers must draw up technical documentation before placing the AI system on the market. Documentation must demonstrate compliance and enable supervisory authorities to assess conformity.", url: "https://artificialintelligenceact.eu/article/11/" },
        nist: { ref: "GOVERN 1.7", desc: "Processes and procedures are in place for the timely identification of risks or incidents related to AI systems, including documentation of system design and risk assessment processes.", url: "https://airc.nist.gov/Docs/1", strength: "partial" },
        iso42001: { ref: "Clause 7.5", desc: "The organisation must maintain documented information required by the AI management system and determined as necessary for effectiveness, covering scope, policies, and operational procedures.", url: "https://www.iso.org/standard/81230.html", strength: "strong" }
    },
    {
        topic: "Record-Keeping and Logging",
        category: { euChapter: "high-risk", nistFunction: "govern", isoClause: "support" },
        euaiact: { ref: "Article 12", desc: "High-risk AI systems must be designed to automatically record events relevant to identifying risks throughout the system lifetime. Logs must be retained for at least six months.", url: "https://artificialintelligenceact.eu/article/12/" },
        nist: { ref: "GOVERN 1.7", desc: "Processes for timely identification of AI risks include logging and audit trail requirements. Record-keeping practices support accountability and traceability across the AI lifecycle.", url: "https://airc.nist.gov/Docs/1", strength: "partial" },
        iso42001: { ref: "Clause 7.5.3", desc: "Documented information of external origin must be identified and controlled. The organisation must maintain evidence of the results of monitoring, measurement, analysis and evaluation.", url: "https://www.iso.org/standard/81230.html", strength: "partial" }
    },
    {
        topic: "Transparency to Deployers",
        category: { euChapter: "high-risk", nistFunction: "govern", isoClause: "operation" },
        euaiact: { ref: "Article 13", desc: "High-risk AI systems must be designed to ensure operation is sufficiently transparent to enable deployers to interpret outputs. Systems must be accompanied by instructions for use.", url: "https://artificialintelligenceact.eu/article/13/" },
        nist: { ref: "GOVERN 6.1", desc: "Policies and procedures are in place to address AI risks and benefits arising from third party entities. Transparency requirements for AI system capabilities and limitations are defined.", url: "https://airc.nist.gov/Docs/1", strength: "partial" },
        iso42001: { ref: "Clause 8.6", desc: "The organisation must establish processes for ensuring transparency of AI systems including providing information about AI system capabilities, limitations and intended use to relevant parties.", url: "https://www.iso.org/standard/81230.html", strength: "partial" }
    },
    {
        topic: "Human Oversight",
        category: { euChapter: "high-risk", nistFunction: "manage", isoClause: "operation" },
        euaiact: { ref: "Article 14", desc: "High-risk AI systems must be designed to allow effective oversight by natural persons during use. Persons assigned to oversight must be able to understand capabilities and limitations and intervene.", url: "https://artificialintelligenceact.eu/article/14/" },
        nist: { ref: "MANAGE 4.1", desc: "Post-deployment AI risks and benefits are evaluated and responded to including processes for human review, feedback and override of AI system outputs with clear escalation paths.", url: "https://airc.nist.gov/Docs/1", strength: "strong" },
        iso42001: { ref: "Clause 8.5", desc: "The organisation must establish and implement processes for human oversight of AI systems including mechanisms for human intervention, review and override where the AI system could cause significant harm.", url: "https://www.iso.org/standard/81230.html", strength: "strong" }
    },
    {
        topic: "Accuracy, Robustness and Cybersecurity",
        category: { euChapter: "high-risk", nistFunction: "manage", isoClause: "operation" },
        euaiact: { ref: "Article 15", desc: "High-risk AI systems must achieve appropriate levels of accuracy, robustness and cybersecurity. They must be resilient against errors, faults and adversarial attempts to alter their performance.", url: "https://artificialintelligenceact.eu/article/15/" },
        nist: { ref: "MANAGE 2.2", desc: "Mechanisms are in place to enable AI risk treatment and response including containment of AI risk incidents. Systems are designed for resilience against adversarial inputs and unintended outputs.", url: "https://airc.nist.gov/Docs/1", strength: "strong" },
        iso42001: { ref: "Clause 8.7", desc: "The organisation must establish processes for addressing AI system security and resilience including protection against adversarial attacks, data poisoning and model evasion attacks.", url: "https://www.iso.org/standard/81230.html", strength: "strong" }
    },
    {
        topic: "Provider Quality Management",
        category: { euChapter: "high-risk", nistFunction: "govern", isoClause: "context" },
        euaiact: { ref: "Article 17", desc: "Providers must put a quality management system in place covering all aspects of compliance with the regulation. The system must be documented in a systematic and orderly manner.", url: "https://artificialintelligenceact.eu/article/17/" },
        nist: { ref: "GOVERN 1.4", desc: "Organisational teams are committed to following AI risk management frameworks, policies and procedures. Organisational processes align with AI risk management requirements.", url: "https://airc.nist.gov/Docs/1", strength: "strong" },
        iso42001: { ref: "Clause 4.4", desc: "The organisation must establish, implement, maintain and continually improve an AI management system in accordance with the requirements of the standard, including scope and policy.", url: "https://www.iso.org/standard/81230.html", strength: "strong" }
    },
    {
        topic: "Deployer Obligations",
        category: { euChapter: "high-risk", nistFunction: "manage", isoClause: "operation" },
        euaiact: { ref: "Article 26", desc: "Deployers must implement appropriate technical and organisational measures, ensure human oversight, monitor operation and inform providers about serious incidents or malfunctions.", url: "https://artificialintelligenceact.eu/article/26/" },
        nist: { ref: "MANAGE 1.1", desc: "A determination is made as to the extent to which identified risks will be treated including assigning and tracking risk treatment activities to AI system operators and deployers.", url: "https://airc.nist.gov/Docs/1", strength: "partial" },
        iso42001: { ref: "Clause 8.4", desc: "The organisation must establish processes for the responsible deployment of AI systems including implementation of appropriate controls for the intended use context and user population.", url: "https://www.iso.org/standard/81230.html", strength: "partial" }
    },
    {
        topic: "Fundamental Rights Impact Assessment",
        category: { euChapter: "high-risk", nistFunction: "map", isoClause: "operation" },
        euaiact: { ref: "Article 27", desc: "Deployers of high-risk AI systems must carry out a fundamental rights impact assessment before putting the system into use, covering likely impacts on fundamental rights of affected persons.", url: "https://artificialintelligenceact.eu/article/27/" },
        nist: { ref: "MAP 5.1", desc: "Likelihood and magnitude of each identified impact based on results of the completed impact assessment are mapped including potential harms to individuals, groups and society.", url: "https://airc.nist.gov/Docs/1", strength: "partial" },
        iso42001: { ref: "Clause 8.2", desc: "The organisation must conduct an AI impact assessment to identify potential impacts of AI systems on individuals, groups and society before deployment and document the results.", url: "https://www.iso.org/standard/81230.html", strength: "partial" }
    },
    {
        topic: "Conformity Assessment",
        category: { euChapter: "governance", nistFunction: "measure", isoClause: "performance" },
        euaiact: { ref: "Articles 43 to 46", desc: "High-risk AI systems must undergo conformity assessment before market placement. Some systems require third-party notified body assessment. Providers must draw up an EU declaration of conformity.", url: "https://artificialintelligenceact.eu/article/43/" },
        nist: { ref: "MEASURE 2.1", desc: "Test sets, metrics and details about evaluation tools are documented. Results of AI system testing and evaluation are used to inform risk management decisions and improvement activities.", url: "https://airc.nist.gov/Docs/1", strength: "partial" },
        iso42001: { ref: "Clause 9.1", desc: "The organisation must determine what needs to be monitored and measured, methods for monitoring and measurement, and when results must be analysed and evaluated.", url: "https://www.iso.org/standard/81230.html", strength: "partial" }
    },
    {
        topic: "CE Marking and Declaration",
        category: { euChapter: "governance", nistFunction: "none", isoClause: "none" },
        euaiact: { ref: "Article 48", desc: "High-risk AI systems must bear the CE marking before market placement indicating conformity with the regulation. Providers must draw up a written EU declaration of conformity.", url: "https://artificialintelligenceact.eu/article/48/" },
        nist: { ref: "No equivalent", desc: "NIST AI RMF is a voluntary framework and does not include mandatory market access requirements, CE marking or formal declarations of conformity. No direct mapping exists.", url: "https://airc.nist.gov/", strength: "none" },
        iso42001: { ref: "No equivalent", desc: "ISO 42001 certification is voluntary and separate from regulatory market access requirements. It does not require CE marking or mandatory conformity declarations for market placement.", url: "https://www.iso.org/standard/81230.html", strength: "none" }
    },
    {
        topic: "EU AI Database Registration",
        category: { euChapter: "governance", nistFunction: "none", isoClause: "none" },
        euaiact: { ref: "Article 49", desc: "Providers of high-risk AI systems listed in Annex III must register the system in the EU database before placing it on the market. The registration must include specified information about the system.", url: "https://artificialintelligenceact.eu/article/49/" },
        nist: { ref: "No equivalent", desc: "NIST AI RMF does not include requirements for registration in a public government database. AI inventory management is recommended internally but not as a public regulatory database.", url: "https://airc.nist.gov/", strength: "none" },
        iso42001: { ref: "No equivalent", desc: "ISO 42001 does not require registration of AI systems in any external database. Internal AI system inventories and documentation are required but not public regulatory registration.", url: "https://www.iso.org/standard/81230.html", strength: "none" }
    },
    {
        topic: "Chatbot and AI Interaction Transparency",
        category: { euChapter: "transparency", nistFunction: "govern", isoClause: "operation" },
        euaiact: { ref: "Article 50(1)", desc: "Providers of AI systems intended to interact directly with natural persons must ensure those persons are informed they are interacting with an AI system unless obvious from context.", url: "https://artificialintelligenceact.eu/article/50/" },
        nist: { ref: "GOVERN 6.2", desc: "Contingency processes are in place for the organisation to respond to risks arising from interactions between AI systems and users including user-facing disclosure and communication requirements.", url: "https://airc.nist.gov/Docs/1", strength: "partial" },
        iso42001: { ref: "Clause 8.6.2", desc: "The organisation must establish processes for communicating to users when they are interacting with an AI system and for disclosing AI-generated content or AI-assisted decisions.", url: "https://www.iso.org/standard/81230.html", strength: "partial" }
    },
    {
        topic: "AI Literacy and Training",
        category: { euChapter: "transparency", nistFunction: "govern", isoClause: "support" },
        euaiact: { ref: "Article 4", desc: "Providers and deployers of AI systems must take measures to ensure sufficient AI literacy of staff and other persons dealing with AI systems on their behalf, considering their technical knowledge, experience and context.", url: "https://artificialintelligenceact.eu/article/4/" },
        nist: { ref: "GOVERN 4.1", desc: "Organisational teams are committed to a culture that considers and communicates AI risk. Training programmes for AI literacy and responsible AI practice are established and maintained.", url: "https://airc.nist.gov/Docs/1", strength: "strong" },
        iso42001: { ref: "Clause 7.2", desc: "The organisation must determine the necessary competence of persons doing work affecting AI system performance, ensure competence on the basis of appropriate education or experience and take action to acquire competence.", url: "https://www.iso.org/standard/81230.html", strength: "strong" }
    },
    {
        topic: "Prohibited AI Practices",
        category: { euChapter: "prohibited", nistFunction: "map", isoClause: "planning" },
        euaiact: { ref: "Article 5", desc: "Certain AI practices are strictly prohibited including subliminal manipulation, exploitation of vulnerabilities, social scoring by public authorities, and real-time remote biometric identification in public spaces except in limited authorised cases.", url: "https://artificialintelligenceact.eu/article/5/" },
        nist: { ref: "MAP 1.1", desc: "Context is established for AI risk assessment including defining the purpose, scope and limitations of AI use cases. Prohibited or unacceptable uses are identified and documented during system design.", url: "https://airc.nist.gov/Docs/1", strength: "indirect" },
        iso42001: { ref: "Clause 6.1.2", desc: "The organisation must determine risks associated with the AI management system and establish processes for identifying prohibited or unacceptable AI applications within the organisational context.", url: "https://www.iso.org/standard/81230.html", strength: "indirect" }
    },
    {
        topic: "High-Risk AI Classification",
        category: { euChapter: "high-risk", nistFunction: "map", isoClause: "planning" },
        euaiact: { ref: "Article 6 and Annex III", desc: "AI systems are classified as high-risk if they are used in areas listed in Annex III including biometrics, critical infrastructure, education, employment, essential services, law enforcement, migration and administration of justice.", url: "https://artificialintelligenceact.eu/article/6/" },
        nist: { ref: "MAP 1.6", desc: "Risks or other undesirable impacts related to AI technology are examined before system deployment. Risk classification processes are established to identify high-risk AI use cases requiring enhanced controls.", url: "https://airc.nist.gov/Docs/1", strength: "partial" },
        iso42001: { ref: "Clause 6.1", desc: "The organisation must assess the level of risk associated with AI systems based on their intended use, potential impact and the context of deployment to determine appropriate management measures.", url: "https://www.iso.org/standard/81230.html", strength: "partial" }
    },
    {
        topic: "Bias Detection and Fairness",
        category: { euChapter: "high-risk", nistFunction: "measure", isoClause: "operation" },
        euaiact: { ref: "Article 10(5)", desc: "To the extent strictly necessary for bias detection and correction, providers may process special categories of personal data subject to appropriate safeguards including pseudonymisation.", url: "https://artificialintelligenceact.eu/article/10/" },
        nist: { ref: "MEASURE 2.11", desc: "Fairness and bias metrics are established and processes for understanding and addressing identified bias are implemented. Bias testing is conducted across demographic groups and edge cases throughout the AI lifecycle.", url: "https://airc.nist.gov/Docs/1", strength: "strong" },
        iso42001: { ref: "Clause 8.3.3", desc: "The organisation must establish processes for identifying, measuring and mitigating biases in AI systems including examination of training data for potential biases and regular fairness audits.", url: "https://www.iso.org/standard/81230.html", strength: "strong" }
    },
    {
        topic: "Post-Market Monitoring",
        category: { euChapter: "high-risk", nistFunction: "manage", isoClause: "performance" },
        euaiact: { ref: "Article 72", desc: "Providers of high-risk AI systems must establish and document a post-market monitoring system. The system must actively and systematically collect and review data on performance throughout the AI system lifetime.", url: "https://artificialintelligenceact.eu/article/72/" },
        nist: { ref: "MANAGE 4.2", desc: "Measurable activities for continual improvement are integrated into AI risk management processes. AI system performance and outcomes are monitored continuously to detect drift, degradation or emerging risks.", url: "https://airc.nist.gov/Docs/1", strength: "strong" },
        iso42001: { ref: "Clause 9.2", desc: "The organisation must conduct internal audits at planned intervals to provide information on whether the AI management system conforms to the organisation own requirements and is effectively implemented.", url: "https://www.iso.org/standard/81230.html", strength: "strong" }
    },
    {
        topic: "Serious Incident Reporting",
        category: { euChapter: "governance", nistFunction: "manage", isoClause: "improvement" },
        euaiact: { ref: "Article 73", desc: "Providers of high-risk AI systems must report any serious incident to the market surveillance authority of the member state where the incident occurred without undue delay.", url: "https://artificialintelligenceact.eu/article/73/" },
        nist: { ref: "MANAGE 3.1", desc: "Responses to AI risks deemed unacceptable are developed and planned. AI system performance and outcomes are monitored to enable identification of incidents and near-misses with appropriate escalation.", url: "https://airc.nist.gov/Docs/1", strength: "strong" },
        iso42001: { ref: "Clause 10.1", desc: "The organisation must establish and maintain processes for identifying, reporting and responding to AI system incidents and near-misses including root cause analysis and corrective action.", url: "https://www.iso.org/standard/81230.html", strength: "strong" }
    },
    {
        topic: "GPAI Model Documentation",
        category: { euChapter: "gpai", nistFunction: "govern", isoClause: "support" },
        euaiact: { ref: "Article 53", desc: "Providers of general-purpose AI models must draw up technical documentation, make available information to downstream providers, publish a summary of training content and comply with EU copyright law.", url: "https://artificialintelligenceact.eu/article/53/" },
        nist: { ref: "GOVERN 1.2", desc: "Characteristics of trustworthy AI are integrated into organisational policies and procedures including documentation requirements for AI model design, training data and intended use cases.", url: "https://airc.nist.gov/Docs/1", strength: "indirect" },
        iso42001: { ref: "Annex B.5", desc: "The organisation should establish processes for responsible development of AI systems including documentation of model design decisions, training data and intended use. Annex B provides supplementary guidance.", url: "https://www.iso.org/standard/81230.html", strength: "indirect" }
    },
    {
        topic: "GPAI Systemic Risk Assessment",
        category: { euChapter: "gpai", nistFunction: "none", isoClause: "none" },
        euaiact: { ref: "Article 55", desc: "Providers of general-purpose AI models with systemic risk must perform model evaluations, assess and mitigate systemic risks, report incidents to the AI Office and implement cybersecurity measures.", url: "https://artificialintelligenceact.eu/article/55/" },
        nist: { ref: "No equivalent", desc: "NIST AI RMF does not address systemic risks from foundation models or general-purpose AI at a societal scale. The framework focuses on individual AI system risk, not aggregate or systemic societal risk.", url: "https://airc.nist.gov/", strength: "none" },
        iso42001: { ref: "No equivalent", desc: "ISO 42001 does not address systemic risks from large-scale foundation models. It focuses on organisational AI management systems and does not cover macro-level societal risk assessment.", url: "https://www.iso.org/standard/81230.html", strength: "none" }
    },
    {
        topic: "Supply Chain and Third Party Risk",
        category: { euChapter: "high-risk", nistFunction: "govern", isoClause: "operation" },
        euaiact: { ref: "Article 25", desc: "Distributors, importers, deployers and other third parties take on provider obligations when they place a high-risk AI system on the market under their name or substantially modify it.", url: "https://artificialintelligenceact.eu/article/25/" },
        nist: { ref: "GOVERN 5.1", desc: "Organisational policies and practices are in place to foster safety and reliability in AI design, development and deployment including third party risk management and supplier assessment processes.", url: "https://airc.nist.gov/Docs/1", strength: "strong" },
        iso42001: { ref: "Clause 8.4.3", desc: "The organisation must establish processes for managing risks associated with externally provided AI systems, components and services including supplier assessment and contractual requirements.", url: "https://www.iso.org/standard/81230.html", strength: "strong" }
    },
    {
        topic: "Accountability and Governance Structure",
        category: { euChapter: "high-risk", nistFunction: "govern", isoClause: "context" },
        euaiact: { ref: "Article 16", desc: "Providers of high-risk AI systems must comply with a full set of obligations including quality management, technical documentation, logging, transparency, human oversight, accuracy and cybersecurity.", url: "https://artificialintelligenceact.eu/article/16/" },
        nist: { ref: "GOVERN 2.1", desc: "Roles and responsibilities and lines of communication related to mapping, measuring and managing AI risks are documented and are clear to individuals and teams throughout the organisation.", url: "https://airc.nist.gov/Docs/1", strength: "strong" },
        iso42001: { ref: "Clause 5.3", desc: "Top management must assign responsibility and authority for ensuring the AI management system conforms to the requirements of the standard and for reporting on AI management system performance.", url: "https://www.iso.org/standard/81230.html", strength: "strong" }
    },
    {
        topic: "Continual Improvement",
        category: { euChapter: "governance", nistFunction: "manage", isoClause: "improvement" },
        euaiact: { ref: "Articles 9 and 72", desc: "Providers must continuously update and review their risk management systems and post-market monitoring plans throughout the AI system lifecycle to ensure ongoing compliance and safety.", url: "https://artificialintelligenceact.eu/article/9/" },
        nist: { ref: "MANAGE 4.2", desc: "Measurable activities for continual improvement are integrated into AI risk management processes with regular reviews of AI system performance, risk posture and effectiveness of implemented controls.", url: "https://airc.nist.gov/Docs/1", strength: "strong" },
        iso42001: { ref: "Clause 10.2", desc: "The organisation must continually improve the suitability, adequacy and effectiveness of the AI management system through review of performance data, audit results, nonconformities and stakeholder feedback.", url: "https://www.iso.org/standard/81230.html", strength: "strong" }
    },
    {
        topic: "Regulatory Sandbox Testing",
        category: { euChapter: "governance", nistFunction: "measure", isoClause: "operation" },
        euaiact: { ref: "Article 57", desc: "Member states must establish AI regulatory sandboxes to facilitate development, testing and validation of innovative AI systems before market placement under controlled conditions and competent authority supervision.", url: "https://artificialintelligenceact.eu/article/57/" },
        nist: { ref: "MEASURE 1.1", desc: "Approaches and metrics for evaluating AI risks are identified and prepared. Testing environments including controlled pilots and limited deployment scenarios are established for risk measurement.", url: "https://airc.nist.gov/Docs/1", strength: "partial" },
        iso42001: { ref: "Clause 8.1", desc: "The organisation must plan, implement, control, monitor and review the processes needed to meet requirements and implement the actions needed to achieve the AI management system objectives.", url: "https://www.iso.org/standard/81230.html", strength: "indirect" }
    },
    {
        topic: "Privacy and Data Protection by Design",
        category: { euChapter: "high-risk", nistFunction: "map", isoClause: "operation" },
        euaiact: { ref: "Article 10 and GDPR Article 25", desc: "AI systems using personal data must comply with data protection by design and by default. Data minimisation, purpose limitation and appropriate safeguards must be built into the AI system from the start.", url: "https://artificialintelligenceact.eu/article/10/" },
        nist: { ref: "MAP 2.1", desc: "Scientific findings and organisational practices related to AI risk are reviewed and used to inform understanding of impacts including privacy and civil rights impacts of AI system design and deployment.", url: "https://airc.nist.gov/Docs/1", strength: "partial" },
        iso42001: { ref: "Clause 8.3.1", desc: "The organisation must determine and implement controls for the management of personal data used in AI systems, ensuring compliance with applicable data protection requirements by design.", url: "https://www.iso.org/standard/81230.html", strength: "partial" }
    },
    {
        topic: "Market Surveillance and Enforcement",
        category: { euChapter: "enforcement", nistFunction: "none", isoClause: "none" },
        euaiact: { ref: "Article 74", desc: "Member states must designate national competent authorities as market surveillance authorities. These authorities have powers to access documentation, conduct testing and order withdrawal of non-compliant AI systems.", url: "https://artificialintelligenceact.eu/article/74/" },
        nist: { ref: "No equivalent", desc: "NIST AI RMF is a voluntary framework and does not create regulatory enforcement powers, market surveillance authorities or legal penalties. Compliance with NIST AI RMF is at organisational discretion.", url: "https://airc.nist.gov/", strength: "none" },
        iso42001: { ref: "No equivalent", desc: "ISO 42001 certification is voluntary and does not create regulatory enforcement powers or legal penalties for non-compliance. Market surveillance is a regulatory function outside the scope of ISO standards.", url: "https://www.iso.org/standard/81230.html", strength: "none" }
    },
    {
        topic: "Notified Body Third Party Assessment",
        category: { euChapter: "governance", nistFunction: "none", isoClause: "none" },
        euaiact: { ref: "Article 44", desc: "Notified bodies are independent third party conformity assessment bodies designated by member states. Certain high-risk AI systems require mandatory third party assessment by a notified body before market placement.", url: "https://artificialintelligenceact.eu/article/44/" },
        nist: { ref: "No equivalent", desc: "NIST AI RMF does not require mandatory third party conformity assessment or notified body involvement. External audits are recommended as best practice but are not legally mandated.", url: "https://airc.nist.gov/", strength: "none" },
        iso42001: { ref: "Partial equivalent", desc: "ISO 42001 can be certified by accredited third party certification bodies but this is voluntary. Certification provides independent assurance but is not a mandatory legal requirement unlike EU notified body assessment.", url: "https://www.iso.org/standard/81230.html", strength: "indirect" }
    },
    {
        topic: "Instructions for Use",
        category: { euChapter: "high-risk", nistFunction: "govern", isoClause: "operation" },
        euaiact: { ref: "Article 13(2) and Annex IV", desc: "High-risk AI systems must be accompanied by instructions for use including identity of provider, characteristics and capabilities, performance metrics, known limitations, intended purpose and human oversight requirements.", url: "https://artificialintelligenceact.eu/article/13/" },
        nist: { ref: "GOVERN 6.1", desc: "Policies and procedures are in place to address AI risks from third party entities. Instructions for AI system use, including limitations, intended purpose and user guidance, are documented and communicated.", url: "https://airc.nist.gov/Docs/1", strength: "partial" },
        iso42001: { ref: "Clause 8.6.1", desc: "The organisation must establish processes for communicating information about AI system capabilities, limitations, intended use and appropriate contexts of deployment to system operators and users.", url: "https://www.iso.org/standard/81230.html", strength: "strong" }
    }
];

var strengthConfig = {
    strong: { label: "Strong", color: "#16a34a", bg: "#dcfce7", desc: "Direct equivalent covering the same obligation" },
    partial: { label: "Partial", color: "#d97706", bg: "#fef3c7", desc: "Covers some but not all aspects of the obligation" },
    indirect: { label: "Indirect", color: "#dc2626", bg: "#fee2e2", desc: "Related concept but significant gaps exist" },
    none: { label: "No Equivalent", color: "#7c3aed", bg: "#ede9fe", desc: "EU AI Act obligation not covered by this framework" }
};

var frameworkControls = {
    euaiact: crosswalkData.map(function(item, index) {
        return { value: index, label: item.euaiact.ref + " - " + item.topic };
    }),
    nist: crosswalkData.map(function(item, index) {
        return { value: index, label: item.nist.ref + " - " + item.topic };
    }),
    iso42001: crosswalkData.map(function(item, index) {
        return { value: index, label: item.iso42001.ref + " - " + item.topic };
    })
};

function getStrengthBadge(strength, small) {
    var cfg = strengthConfig[strength] || strengthConfig.none;
    var sz = small ? 'font-size:0.68rem;padding:1px 7px;' : 'font-size:0.75rem;padding:2px 9px;';
    return '<span style="display:inline-block;' + sz + 'border-radius:10px;font-weight:700;background:' + cfg.bg + ';color:' + cfg.color + ';margin-left:6px;">' + cfg.label + '</span>';
}

function buildCardBody(topic, framework, item) {
    var cfg = strengthConfig[item.strength] || strengthConfig.none;
    var encoded = encodeURIComponent(item.desc);
    return '<span class="topic-tag">' + topic + '</span>' +
        '<div style="margin-bottom:0.6rem;">' + getStrengthBadge(item.strength) +
        '<span style="font-size:0.72rem;color:#6b7280;margin-left:6px;">' + cfg.desc + '</span></div>' +
        '<p>' + item.desc + '</p>' +
        '<div style="display:flex;gap:0.5rem;margin-top:0.75rem;align-items:center;">' +
        '<button class="copy-btn" onclick="copyText(\'' + encoded + '\',this)">Copy</button>' +
        '<a href="' + item.url + '" target="_blank" class="source-link">View source</a>' +
        '</div>';
}

function populateTable(data) {
    var tableBody = document.getElementById('table-body');
    if (!tableBody) return;
    tableBody.innerHTML = '';
    (data || crosswalkData).forEach(function(item, idx) {
        var row = document.createElement('tr');
        row.setAttribute('data-index', idx);
        var nistCfg = strengthConfig[item.nist.strength] || strengthConfig.none;
        var isoCfg = strengthConfig[item.iso42001.strength] || strengthConfig.none;
        row.innerHTML =
            '<td class="topic-cell"><strong>' + item.topic + '</strong></td>' +
            '<td><a href="' + item.euaiact.url + '" target="_blank" class="ref-link euaiact-tag">' + item.euaiact.ref + '</a><br><span class="cell-desc">' + item.euaiact.desc + '</span></td>' +
            '<td><div style="display:flex;align-items:center;gap:4px;margin-bottom:4px;"><a href="' + item.nist.url + '" target="_blank" class="ref-link nist-tag">' + item.nist.ref + '</a>' + getStrengthBadge(item.nist.strength, true) + '</div><span class="cell-desc">' + item.nist.desc + '</span></td>' +
            '<td><div style="display:flex;align-items:center;gap:4px;margin-bottom:4px;"><a href="' + item.iso42001.url + '" target="_blank" class="ref-link iso-tag">' + item.iso42001.ref + '</a>' + getStrengthBadge(item.iso42001.strength, true) + '</div><span class="cell-desc">' + item.iso42001.desc + '</span></td>';
        tableBody.appendChild(row);
    });
}

function applyFilters() {
    var search = document.getElementById('search-input') ? document.getElementById('search-input').value.toLowerCase().trim() : '';
    var chapter = document.getElementById('filter-chapter') ? document.getElementById('filter-chapter').value : '';
    var nistFn = document.getElementById('filter-nist') ? document.getElementById('filter-nist').value : '';
    var gapOnly = document.getElementById('filter-gaps') ? document.getElementById('filter-gaps').checked : false;

    var filtered = crosswalkData.filter(function(item) {
        if (search && item.topic.toLowerCase().indexOf(search) === -1 &&
            item.euaiact.ref.toLowerCase().indexOf(search) === -1 &&
            item.euaiact.desc.toLowerCase().indexOf(search) === -1 &&
            item.nist.ref.toLowerCase().indexOf(search) === -1 &&
            item.iso42001.ref.toLowerCase().indexOf(search) === -1) {
            return false;
        }
        if (chapter && item.category.euChapter !== chapter) return false;
        if (nistFn && item.category.nistFunction !== nistFn) return false;
        if (gapOnly && item.nist.strength !== 'none' && item.iso42001.strength !== 'none' &&
            item.nist.strength !== 'indirect' && item.iso42001.strength !== 'indirect') return false;
        return true;
    });

    populateTable(filtered);

    var countEl = document.getElementById('result-count');
    if (countEl) countEl.textContent = filtered.length + ' of ' + crosswalkData.length + ' controls';

    var tableBody = document.getElementById('table-body');
    var existing = tableBody ? tableBody.querySelector('.no-results-row') : null;
    if (existing) existing.remove();
    if (filtered.length === 0 && tableBody) {
        var row = document.createElement('tr');
        row.className = 'no-results-row';
        row.innerHTML = '<td colspan="4" class="no-results-cell">No controls match your filters. Try adjusting the search or filter settings.</td>';
        tableBody.appendChild(row);
    }
}

function exportCSV() {
    var headers = ['Topic', 'EU AI Act Ref', 'EU AI Act Description', 'EU AI Act URL',
        'NIST AI RMF Ref', 'NIST Description', 'NIST Mapping Strength', 'NIST URL',
        'ISO 42001 Ref', 'ISO Description', 'ISO Mapping Strength', 'ISO URL'];
    var rows = crosswalkData.map(function(item) {
        return [
            '"' + item.topic.replace(/"/g, '""') + '"',
            '"' + item.euaiact.ref.replace(/"/g, '""') + '"',
            '"' + item.euaiact.desc.replace(/"/g, '""') + '"',
            '"' + item.euaiact.url + '"',
            '"' + item.nist.ref.replace(/"/g, '""') + '"',
            '"' + item.nist.desc.replace(/"/g, '""') + '"',
            '"' + (item.nist.strength || '') + '"',
            '"' + item.nist.url + '"',
            '"' + item.iso42001.ref.replace(/"/g, '""') + '"',
            '"' + item.iso42001.desc.replace(/"/g, '""') + '"',
            '"' + (item.iso42001.strength || '') + '"',
            '"' + item.iso42001.url + '"'
        ].join(',');
    });
    var csv = [headers.join(',')].concat(rows).join('\n');
    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = 'eu-ai-act-crosswalk.csv';
    document.body.appendChild(a); a.click();
    document.body.removeChild(a); URL.revokeObjectURL(url);
}

function downloadPDF() {
    var btn = document.getElementById('pdf-btn');
    btn.textContent = 'Generating...'; btn.disabled = true;
    try {
        var jsPDF = window.jspdf ? window.jspdf.jsPDF : (window.jsPDF || null);
        if (!jsPDF) { alert('PDF library not loaded. Please check your internet connection.'); btn.textContent = 'Download PDF'; btn.disabled = false; return; }
        var doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
        var pw = doc.internal.pageSize.getWidth();
        var ph = doc.internal.pageSize.getHeight();
        var m = 15; var y = 15; var lh = 6; var mw = pw - m * 2;
        function t(text, size, bold, color, x) {
            doc.setFontSize(size || 9); doc.setFont('helvetica', bold ? 'bold' : 'normal');
            if (color) doc.setTextColor(color[0], color[1], color[2]); else doc.setTextColor(26, 31, 54);
            var lines = doc.splitTextToSize(text, mw);
            for (var i = 0; i < lines.length; i++) {
                if (y > ph - 20) { doc.addPage(); y = 15; }
                doc.text(lines[i], x || m, y); y += lh;
            }
        }
        doc.setFillColor(0, 51, 153); doc.rect(0, 0, pw, 22, 'F');
        doc.setFontSize(14); doc.setFont('helvetica', 'bold'); doc.setTextColor(255, 255, 255);
        doc.text('EU AI Act / NIST AI RMF / ISO 42001 Compliance Crosswalk', m, 10);
        doc.setFontSize(8); doc.setFont('helvetica', 'normal');
        doc.text('Generated: ' + new Date().toLocaleDateString() + ' | ' + crosswalkData.length + ' controls mapped | artificialintelligenceact.eu', m, 18);
        y = 30;
        var gapCount = crosswalkData.filter(function(i) { return i.nist.strength === 'none' || i.iso42001.strength === 'none'; }).length;
        doc.setFillColor(254, 243, 199); doc.roundedRect(m, y, mw, 12, 2, 2, 'F');
        doc.setFontSize(9); doc.setFont('helvetica', 'bold'); doc.setTextColor(146, 64, 14);
        doc.text('Gap Analysis Summary: ' + gapCount + ' controls have NO equivalent in NIST AI RMF or ISO 42001. These require EU AI Act-specific compliance work.', m + 3, y + 7);
        y += 18;
        crosswalkData.forEach(function(item, idx) {
            if (y > ph - 40) { doc.addPage(); y = 15; }
            var sc = item.nist.strength === 'none' || item.iso42001.strength === 'none' ? [220, 38, 38] : item.nist.strength === 'indirect' || item.iso42001.strength === 'indirect' ? [220, 38, 38] : [26, 31, 54];
            t((idx + 1) + '. ' + item.topic, 10, true, sc);
            t('EU AI Act: ' + item.euaiact.ref, 8, true, [0, 51, 153]);
            t(item.euaiact.desc, 8, false, [75, 85, 99]);
            y += 2;
            t('NIST AI RMF: ' + item.nist.ref + ' [' + (item.nist.strength || 'none').toUpperCase() + ']', 8, true, [26, 101, 58]);
            t(item.nist.desc, 8, false, [75, 85, 99]);
            y += 2;
            t('ISO 42001: ' + item.iso42001.ref + ' [' + (item.iso42001.strength || 'none').toUpperCase() + ']', 8, true, [139, 26, 26]);
            t(item.iso42001.desc, 8, false, [75, 85, 99]);
            y += 4;
            doc.setDrawColor(229, 231, 235); doc.line(m, y, pw - m, y); y += 4;
        });
        doc.setFontSize(7); doc.setTextColor(156, 163, 175);
        doc.text('This report is for guidance only and does not constitute legal advice. Built by Suhana Sayyad. | linkedin.com/in/suhana35', m, ph - 8);
        doc.save('eu-ai-act-crosswalk.pdf');
    } catch(e) { console.error(e); alert('Could not generate PDF. Please use Export CSV instead.'); }
    btn.textContent = 'Download PDF'; btn.disabled = false;
}

function copyText(encoded, btn) {
    var text = decodeURIComponent(encoded);
    var done = function() { btn.textContent = 'Copied!'; btn.classList.add('copied'); setTimeout(function() { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(function() { fallback(); });
    } else { fallback(); }
    function fallback() {
        var ta = document.createElement('textarea');
        ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); done(); } catch(e) { btn.textContent = 'Failed'; }
        document.body.removeChild(ta);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var frameworkSelect = document.getElementById('framework-select');
    var controlSelect = document.getElementById('control-select');
    var resultsEl = document.getElementById('results');
    var placeholder = document.getElementById('placeholder');
    var euaiactContent = document.getElementById('euaiact-content');
    var nistContent = document.getElementById('nist-content');
    var isoContent = document.getElementById('iso-content');
    var euaiactRef = document.getElementById('euaiact-ref');
    var nistRef = document.getElementById('nist-ref');
    var isoRef = document.getElementById('iso-ref');
    var searchInput = document.getElementById('search-input');
    var exportBtn = document.getElementById('export-btn');
    var pdfBtn = document.getElementById('pdf-btn');
    var filterChapter = document.getElementById('filter-chapter');
    var filterNist = document.getElementById('filter-nist');
    var filterGaps = document.getElementById('filter-gaps');

    populateTable();

    if (frameworkSelect) {
        frameworkSelect.addEventListener('change', function() {
            var selected = this.value;
            controlSelect.innerHTML = '<option value="">Choose a control</option>';
            if (resultsEl) resultsEl.classList.add('hidden');
            if (placeholder) placeholder.style.display = 'block';
            if (selected && frameworkControls[selected]) {
                controlSelect.disabled = false;
                frameworkControls[selected].forEach(function(c) {
                    var opt = document.createElement('option');
                    opt.value = c.value; opt.textContent = c.label;
                    controlSelect.appendChild(opt);
                });
            } else { controlSelect.disabled = true; }
        });
    }

    if (controlSelect) {
        controlSelect.addEventListener('change', function() {
            var idx = parseInt(this.value, 10);
            if (isNaN(idx) || idx < 0 || idx >= crosswalkData.length) {
                if (resultsEl) resultsEl.classList.add('hidden');
                if (placeholder) placeholder.style.display = 'block';
                return;
            }
            var item = crosswalkData[idx];
            if (placeholder) placeholder.style.display = 'none';
            if (resultsEl) resultsEl.classList.remove('hidden');
            if (euaiactRef) euaiactRef.textContent = item.euaiact.ref;
            if (nistRef) nistRef.textContent = item.nist.ref;
            if (isoRef) isoRef.textContent = item.iso42001.ref;
            if (euaiactContent) euaiactContent.innerHTML = buildCardBody(item.topic, 'euaiact', item.euaiact);
            if (nistContent) nistContent.innerHTML = buildCardBody(item.topic, 'nist', item.nist);
            if (isoContent) isoContent.innerHTML = buildCardBody(item.topic, 'iso', item.iso42001);

            // Highlight matching row in table
            var rows = document.querySelectorAll('#table-body tr');
            rows.forEach(function(r) { r.classList.remove('highlighted'); });
            var matchRow = document.querySelector('#table-body tr[data-index="' + idx + '"]');
            if (matchRow) { matchRow.classList.add('highlighted'); matchRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
        });
    }

    if (searchInput) searchInput.addEventListener('input', applyFilters);
    if (filterChapter) filterChapter.addEventListener('change', applyFilters);
    if (filterNist) filterNist.addEventListener('change', applyFilters);
    if (filterGaps) filterGaps.addEventListener('change', applyFilters);
    if (exportBtn) exportBtn.addEventListener('click', exportCSV);
    if (pdfBtn) pdfBtn.addEventListener('click', downloadPDF);
});
