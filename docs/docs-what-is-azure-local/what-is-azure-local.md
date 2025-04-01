---
sidebar_position: 1
---

# What is Azure Local

### Key Points
- Azure Local is likely a distributed infrastructure solution by Microsoft, enabling on-premises virtual machines, containers, and select Azure services, managed via the Azure portal.
- It seems to integrate with Azure Arc for hybrid management, offering benefits like data locality and low latency, especially for retail, manufacturing, and regulated industries.
- Research suggests it enhances security and compliance, with validated hardware and cloud-based monitoring, though specifics may vary by deployment.

### Introduction to Azure Local
Azure Local appears to be a way for businesses to run cloud-like services on their own hardware, connecting to Microsoft Azure for management. It’s designed for scenarios where keeping data local is crucial, like in stores or factories, and helps meet regulations while still using cloud tools.

### Key Features and Benefits
Azure Local likely lets you run virtual machines and containers on-site, managed through the Azure portal for a unified experience. It seems to offer strong security, with features built into the hardware, and integrates with Azure Arc for managing both on-site and cloud resources. This could mean better performance for apps needing quick data access and easier compliance with local data laws.

### Use Cases
It seems particularly useful in retail for in-store AI, manufacturing for factory operations, and industries like finance or government where data must stay local. This could be an unexpected detail for some, as it bridges on-premises needs with cloud benefits in ways not always obvious.

---

### Comprehensive Overview of Azure Local for Docusaurus Documentation

#### Definition and Purpose
Azure Local is a distributed infrastructure solution that enables organizations to run virtual machines (VMs), containers, and select Azure services on customer-owned hardware, while maintaining connectivity and management through the Azure cloud. It is part of Microsoft's adaptive cloud strategy, particularly leveraging Azure Arc to unify hybrid, multicloud, and edge infrastructures. This solution is designed for scenarios requiring data locality, such as retail, manufacturing, and regulated industries like finance, energy, and government, where data must remain on-premises for compliance or latency reasons.

The integration with Azure, as noted in recent documentation, suggests it extends Azure's capabilities to on-premises environments, offering a hybrid approach that balances local control with cloud efficiency. This is evident from sources like the [Azure Local Product Page](https://azure.microsoft.com/en-us/products/local) and [Azure Local Solution Overview](https://learn.microsoft.com/en-us/azure/azure-local/overview), which highlight its role in modern application deployment across distributed locations.

#### Key Features
Azure Local's features are centered around flexibility, management, and security, making it suitable for diverse IT environments:

1. **Virtual Machines and Containers:**
   - Supports both Windows and Linux VMs, providing flexibility for various workloads.
   - Enables deployment and management of containerized applications, facilitated by Azure Arc, which is crucial for modern, scalable applications.

2. **Unified Management:**
   - Offers centralized management through the Azure portal, ensuring a consistent user experience across on-premises and cloud resources.
   - Utilizes familiar Azure tools and APIs for infrastructure provisioning and lifecycle management, reducing the learning curve for IT teams.

3. **Security and Compliance:**
   - Includes advanced security features with security-by-default in all validated hardware solutions, enhancing protection out of the box.
   - Ensures compliance with data locality requirements, critical for regulated industries, by keeping data on-premises while leveraging cloud management.

4. **Integration with Azure Arc:**
   - Leverages Azure Arc for hybrid management, allowing governance and management of resources across on-premises, multicloud, and edge environments from a single control plane.
   - Extends capabilities like configuration management, monitoring, and access to additional Azure services, enhancing operational efficiency.

These features, as detailed in the [Introducing Azure Local](https://techcommunity.microsoft.com/t5/azure-arc-blog/introducing-azure-local-cloud-infrastructure-for-distributed/ba-p/4296017) blog, underscore its role in bridging on-premises and cloud environments seamlessly.

#### Benefits
The benefits of Azure Local are particularly appealing for organizations seeking to balance local and cloud operations:

1. **Data Locality and Compliance:**
   - Enables organizations to meet regulatory and compliance requirements by keeping sensitive data on-premises, addressing data sovereignty concerns.
   - Maintains control over data and applications while utilizing cloud-like management, as noted in the [Azure Local FAQ](https://learn.microsoft.com/en-us/azure/azure-local/faq?view=azloc-24113), which clarifies that customer data is not sent to the cloud unless explicitly enabled.

2. **Performance:**
   - Reduces network latency by running applications closer to the data source, improving responsiveness for real-time processing needs like AI inferencing.
   - Enhances user experience for applications requiring low latency, such as point-of-sale systems in retail, as mentioned in use case discussions.

3. **Unified Management:**
   - Simplifies operations by providing a single control plane for managing both on-premises and cloud resources, reducing complexity.
   - Offers a consistent experience with the same tools and processes, minimizing operational overhead and enhancing efficiency, as seen in management tool integrations like Windows Admin Center and PowerShell.

#### Operational Mechanics
Understanding how Azure Local operates is crucial for documentation:

1. **Deployment:**
   - Requires installation of the Azure Stack HCI operating system on physical machines, which can be validated hardware from Microsoft partners or customer-provided hardware meeting specific requirements.
   - The process involves planning network and host requirements, as noted in architecture best practices, ensuring reliability under load.

2. **Connection to Azure:**
   - Involves linking the Azure Local instance to an Azure subscription for management, billing, and access to cloud-based services.
   - Requires internet connectivity for communication with Azure, facilitating cloud-based monitoring and management, as detailed in the [Azure Local solution overview](https://learn.microsoft.com/en-us/azure/azure-local/overview?view=azloc-24113).

3. **Management Tools:**
   - Utilizes the Azure portal for monitoring, managing, and securing the instance, providing a centralized interface.
   - Supports additional tools like Windows Admin Center for web-based management and PowerShell for scripting and automation.
   - Leverages Azure Arc for hybrid management features, extending capabilities to resources running on Azure Local, enhancing governance and monitoring.

#### Use Cases
Azure Local's applicability spans several industries, each benefiting from its hybrid approach:

1. **Retail:**
   - In-store AI inferencing enhances customer experiences by analyzing behavior or optimizing inventory in real time, without cloud data transfer.
   - Point-of-sale systems benefit from fast transaction processing and local data storage, improving performance and compliance.

2. **Manufacturing:**
   - Supports industrial IoT applications, collecting and processing data from factory floor sensors for real-time monitoring and predictive maintenance.
   - Enables quality control checks locally, ensuring data remains within the facility, enhancing operational efficiency and security.

3. **Regulated Industries:**
   - Finance institutions can host applications handling sensitive customer data, ensuring compliance with data protection regulations.
   - Energy companies manage grid operations or oil rig data locally, maintaining control while using cloud management tools.
   - Government agencies deploy applications requiring data to stay within specific jurisdictions, addressing legal and security needs.

These use cases, as highlighted in the [Introducing Azure Local](https://techcommunity.microsoft.com/t5/azure-arc-blog/introducing-azure-local-cloud-infrastructure-for-distributed/ba-p/4296017) blog, illustrate its versatility across sectors.

#### Visual Representations (Diagrams)
Visual aids are essential for understanding Azure Local's architecture. The following resources provide diagrams for reference:

- **Azure Local Baseline Reference Architecture:**
  - Illustrates a multinode Azure Local instance with dual Top-of-Rack (ToR) switches for external north-south connectivity, showing integration with Azure services like Azure Arc, Azure Key Vault, and Azure Monitor.
  - Available at [Azure Local baseline reference architecture](https://learn.microsoft.com/en-us/azure/ architecture/hybrid/azure-local-baseline), this diagram is crucial for understanding cluster setup and connectivity.

- **Azure Stack HCI Solution Overview:**
  - Includes an image providing an overview of Azure Local's features and architecture, formerly known as Azure Stack HCI, highlighting its hybrid nature.
  - Accessible via [Azure Local solution overview](https://learn.microsoft.com/en-us/azure/azure-local/overview), this image aids in visualizing the deployment and management process.

These diagrams, as referenced in architecture guides, enhance comprehension for technical documentation.

#### Summary Table of Key Attributes

| Attribute                | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| **Definition**           | Distributed infrastructure for on-premises VMs, containers, and Azure services, managed via Azure. |
| **Key Features**         | VMs and containers, unified management, security, Azure Arc integration.    |
| **Benefits**             | Data locality, low latency, unified management.                            |
| **Use Cases**            | Retail (AI), manufacturing (IoT), regulated industries (compliance).        |
| **Management Tools**     | Azure portal, Windows Admin Center, PowerShell, Azure Arc.                 |
| **Diagrams Available**   | Baseline architecture, solution overview, linked in documentation.          |

This table summarizes the critical aspects, aiding in quick reference for your Docusaurus project.

#### Conclusion
This document provides a comprehensive overview of Azure Local, ensuring your Docusaurus project is well-equipped with detailed information, reference links, and pointers to visual aids. It covers all facets from definition to practical applications, facilitating clear and informative documentation for users.

### Key Citations
- [Azure Local Product Page overview](https://azure.microsoft.com/en-us/products/local)
- [Azure Local Solution Overview details](https://learn.microsoft.com/en-us/azure/azure-local/overview)
- [Introducing Azure Local blog post](https://techcommunity.microsoft.com/t5/azure-arc-blog/introducing-azure-local-cloud-infrastructure-for-distributed/ba-p/4296017)
- [Azure Local baseline reference architecture guide](https://learn.microsoft.com/en-us/azure/ architecture/hybrid/azure-local-baseline)
- [Azure Local FAQ for connectivity](https://learn.microsoft.com/en-us/azure/azure-local/faq?view=azloc-24113)