# Deploy Script Coverage (Task-by-Task)

> Generated: 2026-04-02
> Sources scanned: docs/implementation task docs (114), toolkit scripts/deploy folders (128 task dirs), and docs/standards (9 files).
> Analysis method: Automated filesystem scan of `docs/implementation/*.mdx` and `scripts/deploy/*/powershell|azurecli|bash` with naming-convention-based classification.

| # | Task | Script Needed | PS Needed | AzCLI Needed | Bash Needed | Standalone PS | Remote/Orch PS | Standalone AzCLI | Remote/Orch AzCLI | Standalone Bash | Remote/Orch Bash | Other Script Files | Naming Std |
|---|------|---------------|-----------|--------------|-------------|---------------|----------------|------------------|-------------------|-----------------|------------------|--------------------|-----------|
| 1 | 01-cicd-infra/phase-01-cicd-setup/task-01-bootstrap | Yes | Yes | Yes | Yes | New-CicdBootstrap.ps1 | Invoke-CicdBootstrap-Orchestrated.ps1 | az-bootstrap-cicd-sp.ps1 |  | az-bootstrap-cicd-sp.sh |  | None | Pass |
| 2 | 01-cicd-infra/phase-01-cicd-setup/task-02-create-project | Yes | Yes | Yes | Yes | New-CicdProject.ps1 | Invoke-CicdProject-Orchestrated.ps1 | az-create-cicd-project.ps1 |  | az-create-cicd-project.sh |  | None | Pass |
| 3 | 01-cicd-infra/phase-01-cicd-setup/task-03-configure-project | Yes | Yes | Yes | Yes | Set-CicdProjectConfiguration.ps1 | Invoke-CicdProjectConfiguration-Orchestrated.ps1 | az-configure-cicd-project.ps1 |  | az-configure-cicd-project.sh |  | None | Pass |
| 4 | 01-cicd-infra/phase-01-cicd-setup/task-04-create-environments | Yes | Yes | Yes | Yes | New-CicdEnvironments.ps1 | Invoke-CicdEnvironments-Orchestrated.ps1 | az-create-cicd-environments.ps1 |  | az-create-cicd-environments.sh |  | None | Pass |
| 5 | 01-cicd-infra/phase-01-cicd-setup/task-05-configure-variables | Yes | Yes | Yes | Yes | Set-CicdVariables.ps1 | Invoke-CicdVariables-Orchestrated.ps1 | az-configure-cicd-variables.ps1 |  | az-configure-cicd-variables.sh |  | None | Pass |
| 6 | 01-cicd-infra/phase-01-cicd-setup/task-06-deploy-runners | Yes | Yes | Yes | Yes | Deploy-CicdRunners.ps1 | Invoke-CicdRunners-Orchestrated.ps1 | az-deploy-runners.ps1 |  | az-deploy-runners.sh |  | None | Pass |
| 7 | 02-azure-foundation/phase-01-landing-zones/full-deployment/task-01-configure-management-groups | Yes | Yes | Yes | Yes | Deploy-ManagementGroups.ps1 | Invoke-ManagementGroups-Orchestrated.ps1 | az-configure-management-groups.ps1 |  | az-configure-management-groups.sh |  | None | Pass |
| 8 | 02-azure-foundation/phase-01-landing-zones/full-deployment/task-02-create-subscriptions | Yes | Yes | Yes | Yes | Deploy-Subscriptions.ps1 | Invoke-Subscriptions-Orchestrated.ps1 | az-create-subscriptions.ps1 |  | az-create-subscriptions.sh |  | None | Pass |
| 9 | 02-azure-foundation/phase-01-landing-zones/full-deployment/task-03-create-resource-groups | Yes | Yes | Yes | Yes | Deploy-ResourceGroups.ps1 | Invoke-ResourceGroups-Orchestrated.ps1 | az-create-resource-groups.ps1 |  | az-create-resource-groups.sh |  | None | Pass |
| 10 | 02-azure-foundation/phase-01-landing-zones/simplified-deployment/task-01-configure-management-group | Yes | Yes | Yes | Yes | Deploy-ManagementGroup.ps1 | Invoke-ManagementGroup-Orchestrated.ps1 | az-configure-management-group.ps1 |  | az-configure-management-group.sh |  | None | Pass |
| 11 | 02-azure-foundation/phase-01-landing-zones/simplified-deployment/task-02-create-subscription | Yes | Yes | Yes | Yes | Deploy-Subscription.ps1 | Invoke-Subscription-Orchestrated.ps1 | az-create-subscription.ps1 |  | az-create-subscription.sh |  | None | Pass |
| 12 | 02-azure-foundation/phase-01-landing-zones/simplified-deployment/task-03-create-resource-groups | Yes | Yes | Yes | Yes | Deploy-ResourceGroups.ps1 | Invoke-ResourceGroups-Orchestrated.ps1 | az-create-resource-groups.ps1 |  | az-create-resource-groups.sh |  | None | Pass |
| 13 | 02-azure-foundation/phase-02-resource-providers/task-01-register-resource-providers | Yes | Yes | Yes | Yes | Register-ResourceProviders.ps1 | Invoke-RegisterResourceProviders-Orchestrated.ps1 | Register-ResourceProviders.azcli.ps1 |  | az-register-resource-providers.sh |  | None | Pass |
| 14 | 02-azure-foundation/phase-02-resource-providers/task-02-verify-provider-registration | Yes | Yes | Yes | Yes | Test-ResourceProviders.ps1 | Invoke-VerifyResourceProviders-Orchestrated.ps1 | az-verify-provider-registration.ps1 |  | az-verify-provider-registration.sh |  | None | Pass |
| 15 | 02-azure-foundation/phase-03-rbac-permissions/task-01-create-azure-local-deployment-spn | Yes | Yes | Yes | Yes | New-DeploymentServicePrincipal.ps1 | Invoke-DeploymentServicePrincipal-Orchestrated.ps1 | az-create-deployment-spn.ps1 |  | az-create-deployment-spn.sh |  | None | Pass |
| 16 | 02-azure-foundation/phase-03-rbac-permissions/task-02-assign-rbac-roles | Yes | Yes | Yes | Yes | Set-RbacRoleAssignments.ps1 | Invoke-RbacRoleAssignments-Orchestrated.ps1 | az-assign-rbac-roles.ps1 |  | az-assign-rbac-roles.sh |  | None | Pass |
| 17 | 02-azure-foundation/phase-04-azure-management-infrastructure/01-cicd-pipeline-deployment/phase-01-configuration/task-01-configure-core-variables | Yes | Yes | Yes | Yes | Set-CoreVariables.ps1 | Invoke-CoreVariables-Orchestrated.ps1 | az-configure-core-variables.ps1 |  | az-configure-core-variables.sh |  | None | Pass |
| 18 | 02-azure-foundation/phase-04-azure-management-infrastructure/01-cicd-pipeline-deployment/phase-01-configuration/task-02-configure-management-mode | Yes | Yes | Yes | Yes | Set-ManagementMode.ps1 | Invoke-ManagementMode-Orchestrated.ps1 | az-configure-management-mode.ps1 |  | az-configure-management-mode.sh |  | None | Pass |
|19 | 02-azure-foundation/phase-04-azure-management-infrastructure/01-cicd-pipeline-deployment/phase-01-configuration/task-03-configure-cluster-mode | No | No | No | No | Not needed | Not needed | Not needed | Not needed | Not needed | Not needed | None | Not needed |
| 20 | 02-azure-foundation/phase-04-azure-management-infrastructure/01-cicd-pipeline-deployment/phase-02-pipeline-execution/task-01-commit-and-push | Yes | Yes | Yes | Yes | Invoke-CommitAndPush.ps1 | Invoke-CommitAndPush-Orchestrated.ps1 | az-commit-and-push.ps1 |  | az-commit-and-push.sh |  | None | Pass |
|21 | 02-azure-foundation/phase-04-azure-management-infrastructure/01-cicd-pipeline-deployment/phase-02-pipeline-execution/task-02-monitor-validate-stage | No | No | No | No | Not needed | Not needed | Not needed | Not needed | Not needed | Not needed | None | Not needed |
|22 | 02-azure-foundation/phase-04-azure-management-infrastructure/01-cicd-pipeline-deployment/phase-02-pipeline-execution/task-03-review-plan-stage | No | No | No | No | Not needed | Not needed | Not needed | Not needed | Not needed | Not needed | None | Not needed |
|23 | 02-azure-foundation/phase-04-azure-management-infrastructure/01-cicd-pipeline-deployment/phase-02-pipeline-execution/task-04-approve-deployment | No | No | No | No | Not needed | Not needed | Not needed | Not needed | Not needed | Not needed | None | Not needed |
|24 | 02-azure-foundation/phase-04-azure-management-infrastructure/01-cicd-pipeline-deployment/phase-02-pipeline-execution/task-05-monitor-apply-stage | No | No | No | No | Not needed | Not needed | Not needed | Not needed | Not needed | Not needed | None | Not needed |
|25 | 02-azure-foundation/phase-04-azure-management-infrastructure/01-cicd-pipeline-deployment/phase-02-pipeline-execution/task-06-verify-test-stage | No | No | No | No | Not needed | Not needed | Not needed | Not needed | Not needed | Not needed | None | Not needed |
| 26 | 02-azure-foundation/phase-04-azure-management-infrastructure/01-cicd-pipeline-deployment/phase-03-validation/task-01-verify-resources | Yes | Yes | Yes | Yes | Test-Resources.ps1 | Invoke-VerifyResources-Orchestrated.ps1 | az-verify-resources.ps1 |  | az-verify-resources.sh |  | None | Pass |
| 27 | 02-azure-foundation/phase-04-azure-management-infrastructure/01-cicd-pipeline-deployment/phase-03-validation/task-02-test-connectivity | Yes | Yes | Yes | Yes | Test-Connectivity.ps1 | Invoke-TestConnectivity-Orchestrated.ps1 | az-test-connectivity.ps1 |  | az-test-connectivity.sh |  | None | Pass |
| 28 | 02-azure-foundation/phase-04-azure-management-infrastructure/01-cicd-pipeline-deployment/phase-03-validation/task-03-validate-configuration | Yes | Yes | Yes | Yes | Test-Configuration.ps1 | Invoke-ValidateConfiguration-Orchestrated.ps1 | az-validate-configuration.ps1 |  | az-validate-configuration.sh |  | None | Pass |
| 29 | 02-azure-foundation/phase-04-azure-management-infrastructure/02-manual-deployment/task-01-virtual-network | Yes | Yes | Yes | Yes | Configure-VnetDns.ps1<br/>Deploy-ManagementVnet.ps1<br/>Deploy-Network.ps1<br/>Deploy-VnetPeering.ps1<br/>New-VirtualNetwork.ps1 | Invoke-VirtualNetwork-Orchestrated.ps1 | az-deploy-virtual-network.ps1 |  | az-deploy-virtual-network.sh |  | None | Pass |
| 30 | 02-azure-foundation/phase-04-azure-management-infrastructure/02-manual-deployment/task-02-vpn-gateway | Yes | Yes | Yes | Yes | New-VpnGateway.ps1 | Invoke-VpnGateway-Orchestrated.ps1 | az-deploy-vpn-gateway.ps1 |  | az-deploy-vpn-gateway.sh |  | None | Pass |
| 31 | 02-azure-foundation/phase-04-azure-management-infrastructure/02-manual-deployment/task-03-s2s-vpn-connection | Yes | Yes | Yes | Yes | New-VpnConnection.ps1 | Invoke-VpnConnection-Orchestrated.ps1 | az-create-s2s-vpn-connection.ps1 |  | az-create-s2s-vpn-connection.sh |  | None | Pass |
| 32 | 02-azure-foundation/phase-04-azure-management-infrastructure/02-manual-deployment/task-04-p2s-vpn-connection | Yes | Yes | Yes | Yes | Configure-P2sVpn.ps1 | Invoke-P2sVpn-Orchestrated.ps1 | az-configure-p2s-vpn.ps1 |  | az-configure-p2s-vpn.sh |  | None | Pass |
| 33 | 02-azure-foundation/phase-04-azure-management-infrastructure/02-manual-deployment/task-05-azure-bastion | Yes | Yes | Yes | Yes | New-AzureBastion.ps1 | Invoke-AzureBastion-Orchestrated.ps1 | az-deploy-bastion.ps1 |  | az-deploy-bastion.sh |  | None | Pass |
| 34 | 02-azure-foundation/phase-04-azure-management-infrastructure/02-manual-deployment/task-06-network-security-groups | Yes | Yes | Yes | Yes | Deploy-LighthouseNsg.ps1 | Invoke-LighthouseNsg-Orchestrated.ps1 | az-deploy-lighthouse-nsg.ps1 |  | az-deploy-lighthouse-nsg.sh |  | None | Pass |
| 35 | 02-azure-foundation/phase-04-azure-management-infrastructure/02-manual-deployment/task-07-nat-gateway | Yes | Yes | Yes | Yes | New-NatGateway.ps1 | Invoke-NatGateway-Orchestrated.ps1 | az-deploy-nat-gateway.ps1 |  | az-deploy-nat-gateway.sh |  | None | Pass |
| 36 | 02-azure-foundation/phase-04-azure-management-infrastructure/02-manual-deployment/task-08-arc-gateway | Yes | Yes | Yes | Yes | New-ArcGateway.ps1 | Invoke-ArcGateway-Orchestrated.ps1 | az-deploy-arc-gateway.ps1 |  | az-deploy-arc-gateway.sh |  | None | Pass |
| 37 | 02-azure-foundation/phase-04-azure-management-infrastructure/02-manual-deployment/task-09-log-analytics | Yes | Yes | Yes | Yes | Deploy-DiagnosticSettings.ps1<br/>New-LogAnalyticsWorkspace.ps1 | Invoke-LogAnalytics-Orchestrated.ps1 | az-deploy-log-analytics.ps1 |  | az-deploy-log-analytics.sh |  | None | Pass |
| 38 | 02-azure-foundation/phase-04-azure-management-infrastructure/02-manual-deployment/task-10-key-vault | Yes | Yes | Yes | Yes | New-KeyVault.ps1 | Invoke-KeyVault-Orchestrated.ps1 | az-deploy-key-vault.ps1 |  | az-deploy-key-vault.sh |  | None | Pass |
| 39 | 02-azure-foundation/phase-04-azure-management-infrastructure/02-manual-deployment/task-11-deploy-management-vms | Yes | Yes | Yes | Yes | Deploy-ManagementVMs.ps1 | Invoke-ManagementVMs-Orchestrated.ps1 | az-deploy-management-vms.ps1 |  | az-deploy-management-vms.sh |  | None | Pass |
| 40 | 02-azure-foundation/phase-04-azure-management-infrastructure/task-12-configure-adds | Yes | Yes | Yes | Yes | New-DomainController.ps1 | Invoke-DomainController-Orchestrated.ps1 | az-configure-adds.ps1 |  | az-configure-adds.sh |  | None | Pass |
| 41 | 02-azure-foundation/phase-04-azure-management-infrastructure/task-13-configure-utility-server | Yes | Yes | Yes | Yes | Deploy-JumpServer.ps1 | Invoke-JumpServer-Orchestrated.ps1 | az-deploy-jump-server.ps1 |  | az-deploy-jump-server.sh |  | None | Pass |
| 42 | 02-azure-foundation/phase-04-azure-management-infrastructure/task-14-configure-ndm-server | Yes | Yes | Yes | Yes | New-NdmServer.ps1 | Invoke-NdmServer-Orchestrated.ps1 | az-deploy-ndm-server.ps1 |  | az-deploy-ndm-server.sh |  | None | Pass |
| 43 | 02-azure-foundation/phase-04-azure-management-infrastructure/task-15-configure-lighthouse | Yes | Yes | Yes | Yes | Deploy-Lighthouse.ps1 | Invoke-Lighthouse-Orchestrated.ps1 | az-deploy-lighthouse.ps1 |  | az-deploy-lighthouse.sh |  | None | Pass |
| 44 | 02-azure-foundation/phase-05-identity-security/task-01-pim-conditional-access | Yes | Yes | Yes | Yes | Deploy-DefenderForCloud.ps1<br/>Deploy-KeyVault.ps1 | Invoke-PimConditionalAccess-Orchestrated.ps1 | az-configure-pim-conditional-access.ps1 |  | az-configure-pim-conditional-access.sh |  | None | Pass |
| 45 | 03-onprem-readiness/phase-01-active-directory/task-01-ou-creation-pre-creation-artifacts | Yes | Yes | Yes | Yes | Invoke-ADValidation-Arc.ps1<br/>Invoke-ADValidation-AzVM.ps1<br/>Set-ADConfiguration.ps1<br/>Test-ADConfiguration.ps1 | Invoke-ADConfiguration-Orchestrated.ps1 | az-configure-ad-ou.ps1 |  | az-configure-ad-ou.sh |  | None | Pass |
| 46 | 03-onprem-readiness/phase-01-active-directory/task-02-security-groups | Yes | Yes | Yes | Yes | New-ADSecurityGroups.ps1 | Invoke-ADSecurityGroups-Orchestrated.ps1 | az-create-ad-security-groups.ps1 |  | az-create-ad-security-groups.sh |  | None | Pass |
| 47 | 03-onprem-readiness/phase-01-active-directory/task-03-dns-node-a-records | Yes | Yes | Yes | Yes | Set-DnsForwarding.ps1 | Invoke-DnsForwarding-Orchestrated.ps1 | az-configure-dns-records.ps1 |  | az-configure-dns-records.sh |  | None | Pass |
| 48 | 03-onprem-readiness/phase-01-active-directory/task-04-service-admin-accounts | Yes | Yes | Yes | Yes | New-ADAccounts.ps1 | Invoke-ADAccounts-Orchestrated.ps1 | az-create-ad-accounts.ps1 |  | az-create-ad-accounts.sh |  | None | Pass |
| 49 | 03-onprem-readiness/phase-01-active-directory/task-05-group-assignments | Yes | Yes | Yes | Yes | Set-ADGroupMemberships.ps1 | Invoke-ADGroupMemberships-Orchestrated.ps1 | az-set-ad-group-memberships.ps1 |  | az-set-ad-group-memberships.sh |  | None | Pass |
| 50 | 03-onprem-readiness/phase-02-enterprise-readiness/task-01-hardware-inspection | Yes | Yes | Yes | Yes | Test-HardwareInspection.ps1 | Invoke-HardwareInspection-Orchestrated.ps1 | az-test-hardware-inspection.ps1 |  | az-test-hardware-inspection.sh |  | None | Pass |
| 51 | 03-onprem-readiness/phase-02-enterprise-readiness/task-02-network-service-verification | Yes | Yes | Yes | Yes | Set-InfrastructurePrep.ps1 | Invoke-InfrastructurePrep-Orchestrated.ps1 | az-verify-network-services.ps1 |  | az-verify-network-services.sh |  | None | Pass |
| 52 | 03-onprem-readiness/phase-02-enterprise-readiness/task-03-opengear-verification | Yes | Yes | Yes | Yes | Test-OpengearVerification.ps1 | Invoke-OpengearVerification-Orchestrated.ps1 | az-verify-opengear.ps1 |  | az-verify-opengear.sh |  | None | Pass |
| 53 | 03-onprem-readiness/phase-02-enterprise-readiness/task-04-validation-signoff | Yes | Yes | Yes | Yes | Complete-ValidationSignoff.ps1 | Invoke-ValidationSignoff-Orchestrated.ps1 | az-complete-validation-signoff.ps1 |  | az-complete-validation-signoff.sh |  | None | Pass |
| 54 | 03-onprem-readiness/phase-03-network-infrastructure/task-01-opengear-console-server | Yes | Yes | Yes | Yes | Set-OpengearEndpoint.ps1 | Invoke-OpengearEndpoint-Orchestrated.ps1 | az-configure-opengear-endpoint.ps1 |  | az-configure-opengear-endpoint.sh |  | None | Pass |
| 55 | 03-onprem-readiness/phase-03-network-infrastructure/task-02-dell-powerswitch-configuration | Yes | Yes | Yes | Yes | Set-PowerSwitchEndpoint.ps1 | Invoke-PowerSwitchEndpoint-Orchestrated.ps1 | az-configure-powerswitch.ps1 |  | az-configure-powerswitch.sh |  | None | Pass |
| 56 | 03-onprem-readiness/phase-03-network-infrastructure/task-03-firewall-endpoint-verification | Yes | Yes | Yes | Yes | Set-FirewallEndpoint.ps1 | Invoke-FirewallEndpoint-Orchestrated.ps1 | az-verify-firewall-endpoints.ps1 |  | az-verify-firewall-endpoints.sh |  | None | Pass |
| 57 | 03-onprem-readiness/phase-03-network-infrastructure/task-04-network-validation | Yes | Yes | Yes | Yes | Test-NetworkReadiness.ps1 | Invoke-NetworkReadiness-Orchestrated.ps1 | az-validate-network.ps1 |  | az-validate-network.sh |  | None | Pass |
| 58 | 04-cluster-deployment/phase-01-hardware-provisioning/task-01-create-dhcp-reservations-for-idrac-interfaces | Yes | Yes | Yes | Yes | New-DhcpReservationsIdrac.ps1 | Invoke-DhcpReservationsIdrac-Orchestrated.ps1 | az-create-dhcp-reservations-idrac.ps1 |  | az-create-dhcp-reservations-idrac.sh |  | None | Pass |
| 59 | 04-cluster-deployment/phase-01-hardware-provisioning/task-02-hardware-discovery-via-dell-redfish-api | Yes | Yes | Yes | Yes | Get-HardwareDiscovery-Standalone.ps1<br/>Invoke-HardwareDiscovery.ps1<br/>Update-InfrastructureYml-FromDiscovery.ps1 | Invoke-HardwareDiscovery-Orchestrated.ps1 | az-discover-hardware.ps1 |  | az-discover-hardware.sh |  | None | Pass |
| 60 | 04-cluster-deployment/phase-01-hardware-provisioning/task-03-create-dhcp-reservations-for-management-nics | Yes | Yes | Yes | Yes | New-DhcpReservationsMgmt.ps1 | Invoke-DhcpReservationsMgmt-Orchestrated.ps1 | az-create-dhcp-reservations-mgmt.ps1 |  | az-create-dhcp-reservations-mgmt.sh |  | None | Pass |
| 61 | 04-cluster-deployment/phase-01-hardware-provisioning/task-04-bios-and-idrac-settings-validation | Yes | Yes | Yes | Yes | Test-BiosIdracSettings.ps1 | Invoke-BiosIdracValidation-Orchestrated.ps1 | az-validate-bios-idrac.ps1 |  | az-validate-bios-idrac.sh |  | None | Pass |
| 62 | 04-cluster-deployment/phase-01-hardware-provisioning/task-05-bios-and-idrac-settings-remediation | Yes | Yes | Yes | Yes | Set-BiosIdracSettings.ps1 | Invoke-BiosIdracRemediation-Orchestrated.ps1 | az-remediate-bios-idrac.ps1 |  | az-remediate-bios-idrac.sh |  | None | Pass |
| 63 | 04-cluster-deployment/phase-02-os-installation/task-01-delete-and-recreate-virtual-disk-on-dell-boss-card | Yes | Yes | Yes | Yes | Invoke-ResetBossVirtualDisk.ps1 | Invoke-ResetBossVirtualDisk-Orchestrated.ps1 | az-reset-boss-virtual-disk.ps1 |  | az-reset-boss-virtual-disk.sh |  | None | Pass |
| 64 | 04-cluster-deployment/phase-02-os-installation/task-02-mount-and-verify-dell-gold-image-iso | Yes | Yes | Yes | Yes | Invoke-MountGoldImageISO.ps1 | Invoke-MountGoldImageISO-Orchestrated.ps1 | az-mount-gold-image-iso.ps1 |  | az-mount-gold-image-iso.sh |  | None | Pass |
|65 | 04-cluster-deployment/phase-02-os-installation/task-03-manual-os-installation | No | No | No | No | Not needed | Not needed | Not needed | Not needed | Not needed | Not needed | None | Not needed |
| 66 | 04-cluster-deployment/phase-02-os-installation/task-04-verify-os-deployment | Yes | Yes | Yes | Yes | Test-OsDeployment.ps1 | Invoke-OsDeploymentVerification-Orchestrated.ps1 | az-verify-os-deployment.ps1 |  | az-verify-os-deployment.sh |  | None | Pass |
| 67 | 04-cluster-deployment/phase-03-os-configuration/task-01-enable-winrm-for-remote-management | Yes | Yes | Yes | Yes | Enable-WinRmConfiguration.ps1 | Invoke-EnableWinRm-Orchestrated.ps1 | az-enable-winrm.ps1 |  | az-enable-winrm.sh |  | None | Pass |
| 68 | 04-cluster-deployment/phase-03-os-configuration/task-02-enable-rdp | Yes | Yes | Yes | Yes | Enable-RDP.ps1 | Invoke-EnableRdp-Orchestrated.ps1 | az-enable-rdp.ps1 |  | az-enable-rdp.sh |  | None | Pass |
| 69 | 04-cluster-deployment/phase-03-os-configuration/task-03-configure-static-ip-address | Yes | Yes | Yes | Yes | Set-StaticIPAddress.ps1 | Invoke-ConfigureStaticIP-Orchestrated.ps1 | az-configure-static-ip.ps1 |  | az-configure-static-ip.sh |  | None | Pass |
| 70 | 04-cluster-deployment/phase-03-os-configuration/task-04-disable-dhcp-on-management-adapter | Yes | Yes | Yes | Yes | Disable-DHCPOnAllAdapters.ps1 | Invoke-DisableDHCP-Orchestrated.ps1 | az-disable-dhcp.ps1 |  | az-disable-dhcp.sh |  | None | Pass |
| 71 | 04-cluster-deployment/phase-03-os-configuration/task-05-configure-dns-servers | Yes | Yes | Yes | Yes | Set-DnsServers.ps1 | Invoke-ConfigureDNS-Orchestrated.ps1 | az-configure-dns-servers.ps1 |  | az-configure-dns-servers.sh |  | None | Pass |
| 72 | 04-cluster-deployment/phase-03-os-configuration/task-06-verify-dns-client-configuration | Yes | Yes | Yes | Yes | Test-DnsClientConfig.ps1<br/>Test-DnsConfiguration.ps1 | Invoke-VerifyDNS-Orchestrated.ps1 | az-verify-dns-configuration.ps1 |  | az-verify-dns-configuration.sh |  | None | Pass |
| 73 | 04-cluster-deployment/phase-03-os-configuration/task-07-configure-time-synchronization-ntp | Yes | Yes | Yes | Yes | Set-NTPConfiguration.ps1 | Invoke-ConfigureNTP-Orchestrated.ps1 | az-configure-ntp.ps1 |  | az-configure-ntp.sh |  | None | Pass |
| 74 | 04-cluster-deployment/phase-03-os-configuration/task-08-enable-icmp-ping | Yes | Yes | Yes | Yes | Enable-ICMPFirewallRule.ps1 | Invoke-EnableICMP-Orchestrated.ps1 | az-enable-icmp.ps1 |  | az-enable-icmp.sh |  | None | Pass |
| 75 | 04-cluster-deployment/phase-03-os-configuration/task-09-disable-unused-network-adapters | Yes | Yes | Yes | Yes | Disable-UnusedAdapters.ps1 | Invoke-DisableAdapters-Orchestrated.ps1 | az-disable-unused-adapters.ps1 |  | az-disable-unused-adapters.sh |  | None | Pass |
| 76 | 04-cluster-deployment/phase-03-os-configuration/task-10-configure-hostname | Yes | Yes | Yes | Yes | Set-NodeHostname.ps1 | Invoke-ConfigureHostname-Orchestrated.ps1 | az-configure-hostname.ps1 |  | az-configure-hostname.sh |  | None | Pass |
| 77 | 04-cluster-deployment/phase-03-os-configuration/task-11-clear-previous-storage-configuration-conditional | Yes | Yes | Yes | Yes | Clear-StorageConfiguration-Direct.ps1 | Invoke-ClearStorage-Orchestrated.ps1 | az-clear-storage-configuration.ps1 |  | az-clear-storage-configuration.sh |  | Clear-StorageConfiguration.ps1 | Pass |
| 78 | 04-cluster-deployment/phase-03-os-configuration/task-12-complete-combined-script-all-steps | Yes | Yes | Yes | Yes | Start-Phase03OsConfiguration.ps1 | Invoke-Phase03OsConfiguration-Orchestrated.ps1 | az-configure-os-all-steps.ps1 |  | az-configure-os-all-steps.sh |  | None | Pass |
| 79 | 04-cluster-deployment/phase-03-os-configuration/task-13-phase03-verification | Yes | Yes | Yes | Yes | Test-Phase03Verification.ps1 | Invoke-Phase03Verification-Orchestrated.ps1 | az-verify-phase03.ps1 |  | az-verify-phase03.sh |  | None | Pass |
| 80 | 04-cluster-deployment/phase-04-arc-registration/task-01-pre-registration-validation | Yes | Yes | Yes | Yes | Test-ArcPrerequisites.ps1 | Invoke-ArcPrerequisites-Orchestrated.ps1<br/>Test-ArcPrerequisites-Orchestrated.ps1 | az-test-arc-prerequisites.ps1 |  | az-test-arc-prerequisites.sh |  | None | Pass |
| 81 | 04-cluster-deployment/phase-04-arc-registration/task-02-register-cluster-nodes-with-azure-arc | Yes | Yes | Yes | Yes | Register-AzureLocalArc-Interactive.ps1<br/>Register-AzureLocalArc-ServicePrincipal.ps1<br/>Register-NodesWithArc.ps1<br/>Start-ArcRegistrationWithMonitor.ps1 | Invoke-ArcRegistration-Orchestrated.ps1<br/>Register-AzureLocalArc-Remote.ps1 | Register-AzureLocalArc.ps1 |  | az-register-arc-nodes.sh |  | None | Pass |
| 82 | 04-cluster-deployment/phase-04-arc-registration/task-03-monitor-bootstrap-process | Yes | Yes | Yes | Yes | Watch-BootstrapProgress.ps1 | Invoke-BootstrapMonitor-Orchestrated.ps1<br/>Watch-BootstrapProgress-Orchestrated.ps1 | az-monitor-bootstrap.ps1 |  | az-monitor-bootstrap.sh |  | None | Pass |
| 83 | 04-cluster-deployment/phase-04-arc-registration/task-04-verify-arc-registration-and-connectivity | Yes | Yes | Yes | Yes | Confirm-ArcRegistration.ps1 | Confirm-ArcRegistration-Orchestrated.ps1<br/>Invoke-ArcVerification-Orchestrated.ps1 | az-verify-arc-registration.ps1 |  | az-verify-arc-registration.sh |  | None | Pass |
| 84 | 04-cluster-deployment/phase-05-cluster-deployment/active-directory/task-01-initiate-deployment-via-arm-template | Yes | Yes | Yes | Yes | Deploy-AzureLocalCluster-Standalone.ps1<br/>Get-HciResourceProviderObjectId-Standalone.ps1<br/>Test-ADPrerequisites-Standalone.ps1 | Invoke-VerifyADPrerequisites-Orchestrated.ps1 | az-deploy-cluster-ad.ps1 |  | az-deploy-cluster-ad.sh |  | Deploy-AzureLocalCluster.ps1<br/>Get-HciResourceProviderObjectId.ps1 | Pass |
| 85 | 04-cluster-deployment/phase-05-cluster-deployment/active-directory/task-02-verify-deployment-completion | Yes | Yes | Yes | Yes | Test-ADDomainStatus-Standalone.ps1<br/>Test-ClusterHealth-Standalone.ps1 | Invoke-VerifyADDomainStatus-Orchestrated.ps1<br/>Invoke-VerifyClusterHealth-Orchestrated.ps1 | az-verify-cluster-ad.ps1 |  | az-verify-cluster-ad.sh |  | Test-ADDomainStatus.ps1<br/>Test-ClusterHealth.ps1 | Pass |
| 86 | 04-cluster-deployment/phase-05-cluster-deployment/local-identity/task-01-initiate-deployment-via-arm-template | Yes | Yes | Yes | Yes | Deploy-AzureLocalCluster-Standalone.ps1<br/>Get-HciResourceProviderObjectId-Standalone.ps1 | Invoke-DeployCluster-Orchestrated.ps1 | az-deploy-cluster.ps1 |  | az-deploy-cluster.sh |  | Deploy-AzureLocalCluster.ps1<br/>Get-HciResourceProviderObjectId.ps1 | Pass |
| 87 | 04-cluster-deployment/phase-05-cluster-deployment/local-identity/task-01-initiate-deployment-via-azure-portal | Yes | Yes | Yes | Yes | Deploy-CreateLocalAdmin.ps1 | Invoke-CreateLocalIdentityAccounts-Orchestrated.ps1 | az-create-local-identity.ps1 |  | az-create-local-identity.sh |  | None | Pass |
| 88 | 04-cluster-deployment/phase-05-cluster-deployment/local-identity/task-02-verify-deployment-completion | Yes | Yes | Yes | Yes | Test-ClusterHealth-Standalone.ps1<br/>Test-LocalIdentityConfig-Standalone.ps1 | Invoke-VerifyClusterHealth-Orchestrated.ps1<br/>Invoke-VerifyLocalIdentityConfig-Orchestrated.ps1 | az-verify-local-identity.ps1 |  | az-verify-local-identity.sh |  | Test-ClusterHealth.ps1<br/>Test-LocalIdentityConfig.ps1 | Pass |
| 89 | 04-cluster-deployment/phase-05-cluster-deployment/monitoring | Yes | Yes | No | No | Monitor-Deployment.ps1<br/>Monitor-Validation.ps1 | Invoke-MonitorDeployment-Orchestrated.ps1 | Not needed | Not needed | Not needed | Not needed | None | Pass |
| 90 | 04-cluster-deployment/phase-06-post-deployment/task-01-configure-windows-admin-center | Yes | Yes | Yes | Yes | Complete-WAC-Setup.ps1<br/>Configure-WACEntraID.ps1<br/>Configure-WACKerberosDelegation.ps1<br/>Deploy-WindowsAdminCenter.ps1<br/>Generate-WACCertificate.ps1<br/>Install-WAC-Simple.ps1<br/>Install-WACExtensions.ps1<br/>Install-WindowsAdminCenter.ps1<br/>Remote-Deploy-WAC.ps1 | Invoke-WAC-Orchestrated.ps1 | az-configure-wac.ps1 |  | az-configure-wac.sh |  | None | Pass |
| 91 | 04-cluster-deployment/phase-06-post-deployment/task-01-deploy-sdn | Yes | Yes | Yes | Yes | Enable-SDN-Standalone.ps1<br/>Get-VirtualSwitchName-Standalone.ps1<br/>Set-SDNDns-Standalone.ps1 | Invoke-ConfigureSDNDns-Orchestrated.ps1<br/>Invoke-DeploySDN-Orchestrated.ps1 | az-deploy-sdn.ps1 |  | az-deploy-sdn.sh |  | Get-VirtualSwitchName.ps1 | Pass |
| 92 | 04-cluster-deployment/phase-06-post-deployment/task-02-cluster-quorum-configuration | Yes | Yes | Yes | Yes | Invoke-ConfigureClusterQuorum-Standalone.ps1 | Invoke-ConfigureClusterQuorum-Orchestrated.ps1 | az-configure-cluster-quorum.ps1 |  | az-configure-cluster-quorum.sh |  | None | Pass |
| 93 | 04-cluster-deployment/phase-06-post-deployment/task-03-security-groups-applied-to-nodes | Yes | Yes | Yes | Yes | Invoke-ApplySecurityGroups-Standalone.ps1 | Invoke-ApplySecurityGroups-Orchestrated.ps1 | az-apply-security-groups.ps1 |  | az-apply-security-groups.sh |  | None | Pass |
| 94 | 04-cluster-deployment/phase-06-post-deployment/task-04-ssh-connectivity-to-nodes | Yes | Yes | Yes | Yes | Enable-SshConfiguration.ps1<br/>Invoke-SSHConnectivity-Standalone.ps1 | Invoke-SSHConnectivity-Orchestrated.ps1 | az-configure-ssh.ps1 |  | az-configure-ssh.sh |  | None | Pass |
| 95 | 04-cluster-deployment/phase-06-post-deployment/task-05-storage-configuration | Yes | Yes | Yes | Yes | New-StorageCSV-Standalone.ps1<br/>New-StoragePaths-Standalone.ps1<br/>Set-StorageConfiguration.ps1<br/>Set-StorageVolumesConfig.ps1 | Invoke-StorageCSV-Orchestrated.ps1<br/>Invoke-StoragePaths-Orchestrated.ps1 | az-configure-storage.ps1 |  | az-configure-storage.sh |  | None | Pass |
| 96 | 04-cluster-deployment/phase-06-post-deployment/task-06-image-downloads | Yes | Yes | Yes | Yes | Get-ImageDownloads.ps1<br/>New-MarketplaceImages-Standalone.ps1 | Invoke-MarketplaceImages-Orchestrated.ps1 | az-download-images.ps1 |  | az-download-images.sh |  | None | Pass |
| 97 | 04-cluster-deployment/phase-06-post-deployment/task-07-configure-nsgs | Yes | Yes | Yes | Yes | New-NSGs-Standalone.ps1 | Invoke-ConfigureNSGs-Orchestrated.ps1 | az-configure-post-deployment-nsgs.ps1 |  | az-configure-post-deployment-nsgs.sh |  | None | Pass |
| 98 | 04-cluster-deployment/phase-06-post-deployment/task-08-logical-network-creation | Yes | Yes | Yes | Yes | New-LogicalNetworks-Standalone.ps1 | Invoke-LogicalNetworks-Orchestrated.ps1 | az-create-logical-networks.ps1 |  | az-create-logical-networks.sh |  | None | Pass |
| 99 | 04-cluster-deployment/phase-06-post-deployment/task-09-post-deployment-verification | Yes | Yes | Yes | Yes | Invoke-VerifyPostDeployment.ps1<br/>Test-PostDeployment-Standalone.ps1 | Invoke-PostDeploymentVerification-Orchestrated.ps1 | az-verify-post-deployment.ps1 |  | az-verify-post-deployment.sh |  | None | Pass |
| 100 | 05-operational-foundations/phase-01-sdn-deployment/task-01-validate-sdn-prerequisites | Yes | Yes | Yes | Yes | Test-SdnPrerequisites.ps1 | Invoke-SdnPrerequisites-Orchestrated.ps1 | az-validate-sdn-prerequisites.ps1 |  | az-validate-sdn-prerequisites.sh |  | None | Pass |
| 101 | 05-operational-foundations/phase-01-sdn-deployment/task-02-configure-network-security-groups | Yes | Yes | Yes | Yes | Set-SdnIntegration.ps1 | Invoke-SdnIntegration-Orchestrated.ps1 | az-configure-sdn-integration.ps1 |  | az-configure-sdn-integration.sh |  | None | Pass |
| 102 | 05-operational-foundations/phase-01-sdn-deployment/task-03-configure-network-security-groups | Yes | Yes | Yes | Yes | Set-NsgConfiguration.ps1 | Invoke-NsgConfiguration-Orchestrated.ps1 | az-configure-sdn-nsgs.ps1 |  | az-configure-sdn-nsgs.sh |  | None | Pass |
| 103 | 05-operational-foundations/phase-02-monitoring-observability/task-01-configure-log-analytics-workspace | Yes | Yes | Yes | Yes | Deploy-MonitoringSecurity.ps1 | Invoke-MonitoringSecurity-Orchestrated.ps1 | az-configure-log-analytics.ps1 |  | az-configure-log-analytics.sh |  | None | Pass |
| 104 | 05-operational-foundations/phase-02-monitoring-observability/task-02-configure-azure-monitor-agent | Yes | Yes | Yes | Yes | Set-AzureMonitorIntegration.ps1 | Invoke-AzureMonitorIntegration-Orchestrated.ps1 | Set-AzureMonitorIntegration.azcli.ps1 |  | az-configure-azure-monitor.sh |  | None | Pass |
| 105 | 05-operational-foundations/phase-02-monitoring-observability/task-03-enable-hci-insights | Yes | Yes | Yes | Yes | Enable-HciInsights.ps1 | Invoke-HciInsights-Orchestrated.ps1 | az-enable-hci-insights.ps1 |  | az-enable-hci-insights.sh |  | None | Pass |
| 106 | 05-operational-foundations/phase-02-monitoring-observability/task-04-setup-alerting | Yes | Yes | Yes | Yes | Watch-AzureLocalDeployment.ps1 | Invoke-Alerting-Orchestrated.ps1 | az-setup-alerting.ps1 |  | az-setup-alerting.sh |  | None | Pass |
| 107 | 05-operational-foundations/phase-02-monitoring-observability/task-05-deploy-omimswac-monitoring | Yes | Yes | Yes | Yes | Set-OmimswacConfiguration.ps1 | Invoke-OmimswacConfiguration-Orchestrated.ps1 | az-deploy-omimswac.ps1 |  | az-deploy-omimswac.sh |  | None | Pass |
| 108 | 05-operational-foundations/phase-02-monitoring-observability/task-05-deploy-wac | Yes | Yes | Yes | Yes | Deploy-WindowsAdminCenter.ps1 | Invoke-WindowsAdminCenter-Orchestrated.ps1 | az-deploy-wac.ps1 |  | az-deploy-wac.sh |  | None | Pass |
| 109 | 05-operational-foundations/phase-02-monitoring-observability/task-06-configure-network-device-logging | Yes | Yes | Yes | Yes | Deploy-SyslogVm.ps1 | Invoke-SyslogVm-Orchestrated.ps1 | az-configure-network-logging.ps1 |  | az-configure-network-logging.sh |  | None | Pass |
| 110 | 05-operational-foundations/phase-02-monitoring-observability/task-07-configure-datadog-integration | Yes | Yes | Yes | Yes | Set-DatadogConfiguration.ps1 | Invoke-DatadogConfiguration-Orchestrated.ps1 | az-configure-datadog.ps1 |  | az-configure-datadog.sh |  | None | Pass |
| 111 | 05-operational-foundations/phase-03-backup-dr/task-01-configure-azure-backup | Yes | Yes | Yes | Yes | Set-BackupConfiguration.ps1 | Invoke-BackupConfiguration-Orchestrated.ps1 | Set-BackupConfiguration.azcli.ps1 |  | az-configure-backup.sh |  | None | Pass |
| 112 | 05-operational-foundations/phase-03-backup-dr/task-02-configure-site-recovery | Yes | Yes | Yes | Yes | Set-SiteRecoveryConfiguration.ps1 | Invoke-SiteRecoveryConfiguration-Orchestrated.ps1 | az-configure-site-recovery.ps1 |  | az-configure-site-recovery.sh |  | None | Pass |
| 113 | 05-operational-foundations/phase-03-backup-dr/task-03-test-dr-procedures | Yes | Yes | Yes | Yes | Test-DisasterRecovery.ps1 | Invoke-DisasterRecovery-Orchestrated.ps1 | az-test-disaster-recovery.ps1 |  | az-test-disaster-recovery.sh |  | None | Pass |
| 114 | 05-operational-foundations/phase-04-security-governance/task-01-enable-defender-for-cloud | Yes | Yes | Yes | Yes | Enable-DefenderForCloud.ps1 | Invoke-DefenderForCloud-Orchestrated.ps1 | az-enable-defender.ps1 |  | az-enable-defender.sh |  | None | Pass |
| 115 | 05-operational-foundations/phase-04-security-governance/task-02-apply-azure-policy-initiatives | Yes | Yes | Yes | Yes | Set-AzurePolicyConfiguration.ps1 | Invoke-AzurePolicyConfiguration-Orchestrated.ps1 | az-apply-azure-policy.ps1 |  | az-apply-azure-policy.sh |  | None | Pass |
| 116 | 05-operational-foundations/phase-04-security-governance/task-03-configure-security-baselines | Yes | Yes | Yes | Yes | Set-SecurityBaselines.ps1 | Invoke-SecurityBaselines-Orchestrated.ps1 | az-configure-security-baselines.ps1 |  | az-configure-security-baselines.sh |  | None | Pass |
| 117 | 05-operational-foundations/phase-04-security-governance/task-04-enable-security-logging | Yes | Yes | Yes | Yes | Set-SecurityLogging.ps1 | Invoke-SecurityLogging-Orchestrated.ps1 | az-configure-security-logging.ps1 |  | az-configure-security-logging.sh |  | None | Pass |
| 118 | 05-operational-foundations/phase-04-security-governance/task-05-configure-azure-update-manager | Yes | Yes | Yes | Yes | Set-UpdateManagerConfiguration.ps1 | Invoke-UpdateManagerConfiguration-Orchestrated.ps1 | az-configure-update-manager.ps1 |  | az-configure-update-manager.sh |  | None | Pass |
| 119 | 05-operational-foundations/phase-05-licensing-telemetry/task-01-enable-azure-hybrid-benefit | Yes | Yes | Yes | Yes | Enable-AzureHybridBenefit.ps1 | Invoke-AzureHybridBenefit-Orchestrated.ps1 | az-enable-hybrid-benefit.ps1 |  | az-enable-hybrid-benefit.sh |  | None | Pass |
| 120 | 05-operational-foundations/phase-05-licensing-telemetry/task-02-activate-windows-server-subscription | Yes | Yes | Yes | Yes | Enable-WindowsServerSubscription.ps1 | Invoke-WindowsServerSubscription-Orchestrated.ps1 | az-enable-windows-server-subscription.ps1 |  | az-enable-windows-server-subscription.sh |  | None | Pass |
| 121 | 05-operational-foundations/phase-05-licensing-telemetry/task-03-configure-enhanced-telemetry | Yes | Yes | Yes | Yes | Set-TelemetryConfiguration.ps1 | Invoke-TelemetryConfiguration-Orchestrated.ps1 | az-configure-telemetry.ps1 |  | az-configure-telemetry.sh |  | None | Pass |
| 122 | 06-testing-validation/task-01-infrastructure-health-validation | Yes | Yes | Yes | Yes | Test-InfrastructureHealth.ps1 | Invoke-InfrastructureHealth-Orchestrated.ps1 | az-test-infrastructure-health.ps1 |  | az-test-infrastructure-health.sh |  | None | Pass |
| 123 | 06-testing-validation/task-02-vmfleet-storage-testing | Yes | Yes | Yes | Yes | Invoke-VmFleetStorageTest.ps1 | Invoke-VmFleetStorageTest-Orchestrated.ps1 | az-test-vmfleet-storage.ps1 |  | az-test-vmfleet-storage.sh |  | None | Pass |
| 124 | 06-testing-validation/task-03-network-rdma-validation | Yes | Yes | No | No | Test-NetworkRdmaValidation.ps1 | Invoke-NetworkRdmaValidation-Orchestrated.ps1 | Not needed | Not needed | Not needed | Not needed | None | Pass |
| 125 | 06-testing-validation/task-04-high-availability-testing | Yes | Yes | No | No | Test-HighAvailability.ps1 | Invoke-HighAvailability-Orchestrated.ps1 | Not needed | Not needed | Not needed | Not needed | None | Pass |
| 126 | 06-testing-validation/task-05-security-compliance-validation | Yes | Yes | No | No | Test-SecurityCompliance.ps1 | Invoke-SecurityCompliance-Orchestrated.ps1 | Not needed | Not needed | Not needed | Not needed | None | Pass |
| 127 | 06-testing-validation/task-06-backup-dr-validation | Yes | Yes | No | No | Test-BackupDrValidation.ps1 | Invoke-BackupDrValidation-Orchestrated.ps1 | Not needed | Not needed | Not needed | Not needed | None | Pass |

## Standards-Based Script Authoring Plan

Derived from all standards under `docs/standards/`: scripting.mdx, naming.mdx, automation.mdx, variables.mdx, infrastructure.mdx, solutions.mdx, documentation.mdx, and examples.mdx.

---

### 1. Script Naming Conventions

Source: `docs/standards/scripting.mdx`, `docs/standards/naming.mdx`

| Script Type | Pattern | Example |
|-------------|---------|---------|
| PowerShell Core | `Verb-Noun.ps1` (PascalCase) | `Deploy-Solution.ps1` |
| Azure PowerShell | `Verb-AzResource.ps1` (PascalCase) | `New-AzKeyVault.ps1` |
| Azure CLI (PowerShell wrapper) | `az-verb-resource.ps1` (lowercase kebab) | `az-deploy-resource.ps1` |
| Azure CLI (Bash) | `az-verb-resource.sh` (lowercase kebab) | `az-deploy-resource.sh` |
| Standalone (no config) | `Verb-Noun-Standalone.ps1` | `Deploy-Solution-Standalone.ps1` |
| Remote/orchestration | `Invoke-<Task>.ps1` | `Invoke-Deployment.ps1` |

---

### 2. Config-Driven vs Standalone Modes

Source: `docs/standards/scripting.mdx`

| Mode | Config File | Dependencies | Use Case |
|------|-------------|-------------|----------|
| Config-driven (Options 2-4) | `config/variables/variables.yml` | Config loader, helpers, Key Vault | Multi-environment automation, CI/CD |
| Standalone (Option 5) | Inline `#region CONFIGURATION` block | None | Demos, single-use, external sharing |

#### Config-Driven Rules

- Read all values from `config/variables/variables.yml` - never hardcode.
- Accept `-ConfigPath` parameter (auto-discover if not provided).
- Use helper functions: `ConvertFrom-Yaml`, `Resolve-KeyVaultRef`, logging.
- If runtime config is missing, auto-create from `config/variables/variables.example.yml` before parsing.

#### Standalone Rules

- All variables in a `#region CONFIGURATION` block at the top of the script.
- Variable names must match `variables.yml` paths (e.g., `$subscription_id`).
- Zero external dependencies - copy, paste, run.

---

### 3. Required Bootstrap Sequence

Source: `docs/standards/scripting.mdx`

Every config-driven entry-point script must implement this sequence:

1. Resolve repository runtime config path (`config/variables/variables.yml`).
2. Check for runtime config file.
3. If missing, locate template at `config/variables/variables.example.yml`.
4. Create directories as needed and copy template to runtime path.
5. Continue execution; fail only when no template is present.

---

### 4. `Invoke-` Script Requirements

Source: `docs/standards/scripting.mdx`

#### Required Parameters

| Parameter | Type | Default | Purpose |
|-----------|------|---------|---------|
| `-ConfigPath` | `[string]` | `""` | Path to `variables.yml` |
| `-Credential` | `[PSCredential]` | `$null` | Override credential resolution |
| `-TargetNode` | `[string[]]` | `@()` (all) | Limit to specific node(s) |
| `-WhatIf` | `[switch]` | `$false` | Dry-run mode |
| `-LogPath` | `[string]` | `""` (auto) | Override log file path |

All `Invoke-` scripts must use `[CmdletBinding()]` to enable `-Verbose` and `-Debug`.

#### Credential Resolution Order

1. **`-Credential` parameter** - if passed, use immediately.
2. **Key Vault** - read from config; try `Az.KeyVault`, fall back to `az` CLI.
3. **Interactive prompt** - `Get-Credential` with username pre-filled.

---

### 5. Logging

Source: `docs/standards/scripting.mdx`

- Log to `./logs/<task-name>/<timestamp>.log`.
- Use `Write-Verbose` for detailed output.
- Log format: `[YYYY-MM-DD HH:MM:SS] [LEVEL] Message`.
- All operations logged to `./logs/` with consistent format across tools.

---

### 6. Idempotency and Error Handling

Source: `docs/standards/scripting.mdx`, `docs/standards/automation.mdx`

- All scripts and templates must be safe to re-run.
- Every tool must validate config before executing changes.
- Scripts must not fail or produce side effects on repeated successful runs.

---

### 7. `scripts/deploy/` Task Contract

Source: `docs/standards/infrastructure.mdx`

Every task folder under `scripts/deploy/` mirrors the path of its corresponding doc in `docs/implementation/` and must contain exactly three subdirectories:

```
scripts/deploy/<part>/<phase>/<task>/
+-- azurecli/     # Azure CLI scripts (.ps1 using az commands, or .sh)
+-- bash/         # Pure Bash scripts (.sh)
+-- powershell/   # PowerShell scripts (.ps1)
```

Parts and their phases:

| Part | Phases |
|------|--------|
| `01-cicd-infra` | `phase-01-cicd-setup` |
| `02-azure-foundation` | `phase-01-landing-zones`, `phase-02-resource-providers`, `phase-03-rbac-permissions`, `phase-04-azure-management-infrastructure`, `phase-05-identity-security` |
| `03-onprem-readiness` | `phase-01-active-directory`, `phase-02-enterprise-readiness`, `phase-03-network-infrastructure` |
| `04-cluster-deployment` | `phase-01-hardware-provisioning`, `phase-02-os-installation`, `phase-03-os-configuration`, `phase-04-arc-registration`, `phase-05-cluster-deployment`, `phase-06-post-deployment` |
| `05-operational-foundations` | `phase-01-sdn-deployment`, `phase-02-monitoring-observability`, `phase-03-backup-dr`, `phase-04-security-governance`, `phase-05-licensing-telemetry` |
| `06-testing-validation` | *(tasks directly under part)* |
| `07-validation-handover` | *(tasks directly under part)* |

---

### 8. Variable Management

Source: `docs/standards/variables.mdx`

#### Single Source of Truth

`config/variables/variables.yml` is the only config file. All tool-specific parameter files (`.tfvars`, `.bicepparam`, `parameters.json`, `group_vars`) are derived from it.

#### Config File Layout Per Repository

```
config/
+-- variables/
    +-- variables.example.yml    # Template with IIC examples (committed)
    +-- variables.yml            # Your actual config (gitignored)
    +-- schema/
        +-- variables.schema.json  # JSON Schema for CI validation
```

#### Variable Naming Rules

| Rule | Standard | Example |
|------|----------|---------|
| Top-level sections | `snake_case` | `azure_local`, `networking` |
| Keys within sections | `snake_case` | `subscription_id`, `resource_name` |
| Pattern | `^[a-z][a-z0-9_]*$` | - |
| Max length | 50 characters | - |
| Booleans | Descriptive names | `monitoring_enabled: true` |
| Secrets | `keyvault://` URI format | `keyvault://kv-iic-platform/admin-password` |

#### Secrets

Secrets are never stored in plaintext - use Key Vault URI references:

```yaml
security:
  admin_password: "keyvault://kv-iic-platform/admin-password"
  domain_join_password: "keyvault://kv-iic-platform/domain-join"
```

Scripts resolve these at runtime via the `keyvault-helper.ps1` module.

#### CI Validation Pipeline

| Step | Script | What It Does |
|------|--------|-------------|
| 1. Registry structure | `validate-registry.ps1` | Verifies `_metadata` section, checks for duplicate key paths and alias conflicts |
| 2. Variables vs registry | `validate-variables.ps1 -StrictUnknown` | Validates `variables.example.yml` against JSON Schema, checks every path exists in registry |
| 3. Alias expiry | `check-alias-expiry.ps1` | Fails if any `expires_on` dates in alias entries have passed |
| 4. YAML syntax | Python `yaml.safe_load` | Ensures the example file is parseable |

---

### 9. File and Directory Naming

Source: `docs/standards/naming.mdx`

| Type | Convention | Pattern | Example |
|------|-----------|---------|---------|
| Directories | lowercase-with-hyphens | `^[a-z][a-z0-9-]*$` | `getting-started/` |
| Markdown (docs/) | lowercase with hyphens | `*.md` | `deployment-guide.md` |
| Root files | UPPERCASE | - | `README.md`, `CHANGELOG.md` |
| PowerShell scripts | PascalCase | `Verb-Noun.ps1` | `Deploy-Solution.ps1` |
| Config files | lowercase-with-hyphens | - | `variables.example.yml` |

---

### 10. Azure Resource Naming (IIC Patterns)

Source: `docs/standards/naming.mdx`, `docs/standards/examples.mdx`

| Resource Type | Pattern | Example |
|--------------|---------|---------|
| Resource Group | `rg-iic-<purpose>-<##>` | `rg-iic-platform-01` |
| Virtual Network | `vnet-iic-<purpose>-<##>` | `vnet-iic-compute-01` |
| Subnet | `snet-iic-<purpose>` | `snet-iic-management` |
| NSG | `nsg-iic-<purpose>` | `nsg-iic-compute` |
| Key Vault | `kv-iic-<purpose>` | `kv-iic-platform` |
| Storage Account | `stiic<purpose><##>` | `stiicdata01` |
| Log Analytics | `law-iic-<purpose>-<##>` | `law-iic-monitor-01` |
| Managed Identity | `id-iic-<purpose>` | `id-iic-deploy` |

Active Directory:

| Resource | Pattern | Example |
|----------|---------|---------|
| OU path | `OU=<Purpose>,OU=Servers,DC=iic,DC=local` | - |
| Service account | `svc.iic.<purpose>` | `svc.iic.deploy` |
| Group | `grp-iic-<purpose>` | `grp-iic-admins` |

---

### 11. IIC Fictional Company Policy

Source: `docs/standards/examples.mdx`

All examples, sample configurations, and walkthroughs must use **Infinite Improbability Corp (IIC)**.

| Attribute | Value |
|-----------|-------|
| Full Name | Infinite Improbability Corp |
| Abbreviation | IIC |
| Domain (public) | `improbability.cloud` / `iic.cloud` |
| Domain (on-prem AD) | `iic.local` |
| NetBIOS Name | `IMPROBABLE` |
| Entra ID Tenant | `improbability.onmicrosoft.com` |
| Email Pattern | `user@improbability.cloud` |

Never use `contoso`, `fabrikam`, `adventure-works`, `woodgrove`, `example.com`, or any real customer name.

---

### 12. Automation Interoperability

Source: `docs/standards/automation.mdx`

#### Config Flow

All tools derive from the single source of truth:

```
config/variables/variables.yml
  +-> Terraform .tfvars
  +-> Bicep .bicepparam
  +-> ARM parameters.json
  +-> PowerShell ConvertFrom-Yaml
  +-> Ansible group_vars
        +-> Identical Infrastructure
```

#### Deployment Path Matrix

| Tool | Azure Resources | Configuration | Monitoring | Scaling |
|------|:---:|:---:|:---:|:---:|
| **Terraform** | Yes | Delegates | Yes | Yes |
| **Bicep** | Yes | Delegates | Yes | Yes |
| **ARM** | Yes | Delegates | Yes | - |
| **PowerShell** | Yes | Yes | Yes | Yes |
| **Ansible** | Yes | Yes | Yes | Yes |

"Delegates" = tool provisions Azure resources but does not configure guest OS. PowerShell or Ansible handles guest configuration.

#### Interoperability Rules

1. **Single source of truth** - `config/variables/variables.yml` is the only config file.
2. **Identical output** - Given the same config, every tool must produce the same infrastructure.
3. **Idempotency** - All scripts and templates must be safe to re-run.
4. **Error handling** - Every tool must validate config before executing changes.
5. **Logging** - All operations logged to `./logs/` with consistent format.

#### Parameter File Derivation

| Tool | Parameter File | Derivation |
|------|---------------|------------|
| Terraform | `src/terraform/terraform.tfvars` | Map YAML sections to HCL variables |
| Bicep | `src/bicep/main.bicepparam` | Map YAML sections to Bicep parameters |
| ARM | `src/arm/azuredeploy.parameters.json` | Map YAML sections to ARM parameter schema |
| PowerShell | *(reads config directly)* | `ConvertFrom-Yaml` from config file |
| Ansible | `src/ansible/inventory/hosts.yml` | Map YAML sections to `group_vars` |

---

### 13. Deployment Phases

Source: `docs/standards/infrastructure.mdx`

| Phase | Scope | Tools |
|-------|-------|-------|
| Phase 1: Azure Foundation | Resource groups, networking, Key Vault, storage | Terraform, Bicep, ARM |
| Phase 2: Compute & Workload | VMs, clusters, workload deployment | Terraform, PowerShell |
| Phase 3: Configuration | Guest config, monitoring, policies | PowerShell, Ansible |

---

### 14. Solution Script Conventions

Source: `docs/standards/scripting.mdx`, `docs/standards/solutions.mdx`

| Convention | Rule |
|-----------|------|
| IaC tools | Terraform, Bicep, ARM, PowerShell, Ansible |
| Config source | `config/variables/variables.yml` (single source of truth) |
| Parameter derivation | All tool-specific param files derived from central config |
| Idempotency | All scripts must be safe to re-run |
| Multi-tool parity | Every supported tool must cover the same set of resources |
| Conditional resources | Use `count`/`for_each` (Terraform), `if` (Bicep), `condition` (ARM), `switch`/`if` (PS), `when:` (Ansible) |

---

### 15. Git Branch Naming

Source: `docs/standards/naming.mdx`

| Pattern | Usage | Example |
|---------|-------|---------|
| `main` | Default branch | - |
| `feature/<description>` | New features | `feature/add-validation` |
| `fix/<description>` | Bug fixes | `fix/config-parsing` |
| `docs/<description>` | Documentation | `docs/deployment-guide` |
| `infra/<description>` | CI/CD | `infra/add-pester-tests` |

---

### 16. Documentation Conventions

Source: `docs/standards/documentation.mdx`

| Principle | Rule |
|-----------|------|
| Documentation-First | Document before implementing. Keep docs current with code. |
| Single Source of Truth | One authoritative document per topic. Cross-reference, don't duplicate. |
| Audience-Aware | Write for operators, developers, or executives - with appropriate depth. |
| Actionable | Step-by-step procedures, examples, prerequisites, and outcomes. |

---

## Audit Summary

| Metric | Count |
|--------|-------|
| Task docs scanned (docs/implementation) | 114 |
| Toolkit task folders (scripts/deploy) | 128 |
| Total unique tasks in table | 127 |
| Toolkit-only tasks (no doc yet) | 13 |
| Tasks with Script Needed = Yes | 120 |
| Tasks with Script Needed = No | 7 |
| Scripts with naming violations | 0 |
| Tasks with no scripts yet (In progress) | 0 |

### Column Semantics

| Cell Value | Meaning |
|-----------|---------|
| *(blank)* | Script needs to be created for this execution model |
| `Not needed` | This script type/execution model does not apply to the task |
| `None` | No additional helper/other scripts beyond the classified ones |
| Script filename | Script exists at the mapped toolkit path |

### Classification Rules

Scripts are classified into execution model columns using naming conventions:

| Pattern | Column |
|---------|--------|
| `*-Standalone.ps1`, `*-Direct.ps1`, `*-Interactive.ps1` | Standalone PS |
| `*-Orchestrated.ps1`, `*-Remote.ps1` | Remote/Orch PS |
| Base `Verb-Noun.ps1` (no standalone variant exists) | Standalone PS |
| Base `Verb-Noun.ps1` (has `Verb-Noun-Standalone.ps1`) | Other Script Files (inner helper) |
| Scripts in `azurecli/` folder | Standalone AzCLI |
| Scripts in `bash/` folder | Standalone Bash |
| PS/AzCLI/Bash Needed flags | Derived from presence of `powershell/`/`azurecli/`/`bash/` subdirectories in toolkit |

---

## Scripts Created (Complete List)

> Derived from blank cells in the coverage table where the corresponding language column showed "Needed = Yes."
> Each entry below has now been authored and added to the mapped toolkit task folder.
>
> **Naming conventions applied:**
> - PowerShell Standalone: `Verb-Noun.ps1` (PascalCase) — derived from task purpose or existing PS script name
> - PowerShell Orchestrated: `Invoke-<Action>-Orchestrated.ps1` — remote/multi-node wrapper
> - Azure CLI (PS wrapper): `az-<verb>-<resource>.ps1` (kebab-case) — mirrors PS script logic using `az` commands
> - Bash: `az-<verb>-<resource>.sh` (kebab-case) — mirrors PS/AzCLI logic in Bash
>
> **Standards compliance reminder:** Every script listed below must implement:
> 1. **Key Vault credential retrieval** — secrets resolved at runtime via `keyvault://` URI references using `Resolve-KeyVaultRef` / `keyvault-helper.ps1`
> 2. **Credential failover** — if Key Vault is unavailable, fall back to the logged-on user context (interactive `Get-Credential` with username pre-filled)
> 3. **Full parameterization** — all major variables exposed as parameters with sensible defaults so they can be overridden at invocation (see required parameter table in Section 4 above)
> 4. **Credential Resolution Order** — (1) `-Credential` parameter if passed, (2) Key Vault lookup, (3) interactive prompt
> 5. **Config-driven mode** — read from `config/variables/variables.yml`; accept `-ConfigPath` parameter; auto-create from template if missing
> 6. **Standalone mode** — `#region CONFIGURATION` block with inline variables matching `variables.yml` paths; zero external dependencies

---

### Part 01 — CI/CD Infrastructure

#### Phase 01: CI/CD Setup

| Task # | Task | Script to Create | Type | Subfolder |
|--------|------|-----------------|------|-----------|
| 1 | task-01-bootstrap | `New-CicdBootstrap.ps1` | PS Standalone | `powershell/` |
| 1 | task-01-bootstrap | `Invoke-CicdBootstrap-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 1 | task-01-bootstrap | `az-bootstrap-cicd-sp.ps1` | AzCLI | `azurecli/` |
| 2 | task-02-create-project | `New-CicdProject.ps1` | PS Standalone | `powershell/` |
| 2 | task-02-create-project | `Invoke-CicdProject-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 2 | task-02-create-project | `az-create-cicd-project.ps1` | AzCLI | `azurecli/` |
| 2 | task-02-create-project | `az-create-cicd-project.sh` | Bash | `bash/` |
| 3 | task-03-configure-project | `Set-CicdProjectConfiguration.ps1` | PS Standalone | `powershell/` |
| 3 | task-03-configure-project | `Invoke-CicdProjectConfiguration-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 3 | task-03-configure-project | `az-configure-cicd-project.ps1` | AzCLI | `azurecli/` |
| 3 | task-03-configure-project | `az-configure-cicd-project.sh` | Bash | `bash/` |
| 4 | task-04-create-environments | `New-CicdEnvironments.ps1` | PS Standalone | `powershell/` |
| 4 | task-04-create-environments | `Invoke-CicdEnvironments-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 4 | task-04-create-environments | `az-create-cicd-environments.ps1` | AzCLI | `azurecli/` |
| 4 | task-04-create-environments | `az-create-cicd-environments.sh` | Bash | `bash/` |
| 5 | task-05-configure-variables | `Set-CicdVariables.ps1` | PS Standalone | `powershell/` |
| 5 | task-05-configure-variables | `Invoke-CicdVariables-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 5 | task-05-configure-variables | `az-configure-cicd-variables.ps1` | AzCLI | `azurecli/` |
| 5 | task-05-configure-variables | `az-configure-cicd-variables.sh` | Bash | `bash/` |
| 6 | task-06-deploy-runners | `Deploy-CicdRunners.ps1` | PS Standalone | `powershell/` |
| 6 | task-06-deploy-runners | `Invoke-CicdRunners-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 6 | task-06-deploy-runners | `az-deploy-runners.ps1` | AzCLI | `azurecli/` |

---

### Part 02 — Azure Foundation

#### Phase 01: Landing Zones — Full Deployment

| Task # | Task | Script to Create | Type | Subfolder |
|--------|------|-----------------|------|-----------|
| 7 | task-01-configure-management-groups | `Invoke-ManagementGroups-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 7 | task-01-configure-management-groups | `az-configure-management-groups.ps1` | AzCLI | `azurecli/` |
| 7 | task-01-configure-management-groups | `az-configure-management-groups.sh` | Bash | `bash/` |
| 8 | task-02-create-subscriptions | `Invoke-Subscriptions-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 8 | task-02-create-subscriptions | `az-create-subscriptions.ps1` | AzCLI | `azurecli/` |
| 9 | task-03-create-resource-groups | `Invoke-ResourceGroups-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 9 | task-03-create-resource-groups | `az-create-resource-groups.ps1` | AzCLI | `azurecli/` |
| 9 | task-03-create-resource-groups | `az-create-resource-groups.sh` | Bash | `bash/` |

#### Phase 01: Landing Zones — Simplified Deployment

| Task # | Task | Script to Create | Type | Subfolder |
|--------|------|-----------------|------|-----------|
| 10 | task-01-configure-management-group | `Invoke-ManagementGroup-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 10 | task-01-configure-management-group | `az-configure-management-group.ps1` | AzCLI | `azurecli/` |
| 10 | task-01-configure-management-group | `az-configure-management-group.sh` | Bash | `bash/` |
| 11 | task-02-create-subscription | `Invoke-Subscription-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 11 | task-02-create-subscription | `az-create-subscription.ps1` | AzCLI | `azurecli/` |
| 11 | task-02-create-subscription | `az-create-subscription.sh` | Bash | `bash/` |
| 12 | task-03-create-resource-groups | `Invoke-ResourceGroups-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 12 | task-03-create-resource-groups | `az-create-resource-groups.ps1` | AzCLI | `azurecli/` |
| 12 | task-03-create-resource-groups | `az-create-resource-groups.sh` | Bash | `bash/` |

#### Phase 02: Resource Providers

| Task # | Task | Script to Create | Type | Subfolder |
|--------|------|-----------------|------|-----------|
| 13 | task-01-register-resource-providers | `Invoke-RegisterResourceProviders-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 13 | task-01-register-resource-providers | `az-register-resource-providers.sh` | Bash | `bash/` |
| 14 | task-02-verify-provider-registration | `Invoke-VerifyResourceProviders-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 14 | task-02-verify-provider-registration | `az-verify-provider-registration.ps1` | AzCLI | `azurecli/` |
| 14 | task-02-verify-provider-registration | `az-verify-provider-registration.sh` | Bash | `bash/` |

#### Phase 03: RBAC Permissions

| Task # | Task | Script to Create | Type | Subfolder |
|--------|------|-----------------|------|-----------|
| 15 | task-01-create-azure-local-deployment-spn | `Invoke-DeploymentServicePrincipal-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 15 | task-01-create-azure-local-deployment-spn | `az-create-deployment-spn.ps1` | AzCLI | `azurecli/` |
| 15 | task-01-create-azure-local-deployment-spn | `az-create-deployment-spn.sh` | Bash | `bash/` |
| 16 | task-02-assign-rbac-roles | `Invoke-RbacRoleAssignments-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 16 | task-02-assign-rbac-roles | `az-assign-rbac-roles.ps1` | AzCLI | `azurecli/` |
| 16 | task-02-assign-rbac-roles | `az-assign-rbac-roles.sh` | Bash | `bash/` |

#### Phase 04: Azure Management Infrastructure — CI/CD Pipeline Deployment

| Task # | Task | Script to Create | Type | Subfolder |
|--------|------|-----------------|------|-----------|
| 17 | task-01-configure-core-variables | `Set-CoreVariables.ps1` | PS Standalone | `powershell/` |
| 17 | task-01-configure-core-variables | `Invoke-CoreVariables-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 17 | task-01-configure-core-variables | `az-configure-core-variables.ps1` | AzCLI | `azurecli/` |
| 17 | task-01-configure-core-variables | `az-configure-core-variables.sh` | Bash | `bash/` |
| 18 | task-02-configure-management-mode | `Set-ManagementMode.ps1` | PS Standalone | `powershell/` |
| 18 | task-02-configure-management-mode | `Invoke-ManagementMode-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 18 | task-02-configure-management-mode | `az-configure-management-mode.ps1` | AzCLI | `azurecli/` |
| 18 | task-02-configure-management-mode | `az-configure-management-mode.sh` | Bash | `bash/` |
| 20 | task-01-commit-and-push | `Invoke-CommitAndPush.ps1` | PS Standalone | `powershell/` |
| 20 | task-01-commit-and-push | `Invoke-CommitAndPush-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 20 | task-01-commit-and-push | `az-commit-and-push.ps1` | AzCLI | `azurecli/` |
| 26 | task-01-verify-resources | `Test-Resources.ps1` | PS Standalone | `powershell/` |
| 26 | task-01-verify-resources | `Invoke-VerifyResources-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 26 | task-01-verify-resources | `az-verify-resources.ps1` | AzCLI | `azurecli/` |
| 27 | task-02-test-connectivity | `Invoke-TestConnectivity-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 27 | task-02-test-connectivity | `az-test-connectivity.ps1` | AzCLI | `azurecli/` |
| 28 | task-03-validate-configuration | `Invoke-ValidateConfiguration-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 28 | task-03-validate-configuration | `az-validate-configuration.ps1` | AzCLI | `azurecli/` |

#### Phase 04: Azure Management Infrastructure — Manual Deployment

| Task # | Task | Script to Create | Type | Subfolder |
|--------|------|-----------------|------|-----------|
| 29 | task-01-virtual-network | `Invoke-VirtualNetwork-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 29 | task-01-virtual-network | `az-deploy-virtual-network.ps1` | AzCLI | `azurecli/` |
| 29 | task-01-virtual-network | `az-deploy-virtual-network.sh` | Bash | `bash/` |
| 30 | task-02-vpn-gateway | `Invoke-VpnGateway-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 30 | task-02-vpn-gateway | `az-deploy-vpn-gateway.ps1` | AzCLI | `azurecli/` |
| 30 | task-02-vpn-gateway | `az-deploy-vpn-gateway.sh` | Bash | `bash/` |
| 31 | task-03-s2s-vpn-connection | `Invoke-VpnConnection-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 31 | task-03-s2s-vpn-connection | `az-create-s2s-vpn-connection.ps1` | AzCLI | `azurecli/` |
| 31 | task-03-s2s-vpn-connection | `az-create-s2s-vpn-connection.sh` | Bash | `bash/` |
| 32 | task-04-p2s-vpn-connection | `Invoke-P2sVpn-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 32 | task-04-p2s-vpn-connection | `az-configure-p2s-vpn.ps1` | AzCLI | `azurecli/` |
| 32 | task-04-p2s-vpn-connection | `az-configure-p2s-vpn.sh` | Bash | `bash/` |
| 33 | task-05-azure-bastion | `Invoke-AzureBastion-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 33 | task-05-azure-bastion | `az-deploy-bastion.ps1` | AzCLI | `azurecli/` |
| 33 | task-05-azure-bastion | `az-deploy-bastion.sh` | Bash | `bash/` |
| 34 | task-06-network-security-groups | `Invoke-LighthouseNsg-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 34 | task-06-network-security-groups | `az-deploy-lighthouse-nsg.ps1` | AzCLI | `azurecli/` |
| 34 | task-06-network-security-groups | `az-deploy-lighthouse-nsg.sh` | Bash | `bash/` |
| 35 | task-07-nat-gateway | `Invoke-NatGateway-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 35 | task-07-nat-gateway | `az-deploy-nat-gateway.ps1` | AzCLI | `azurecli/` |
| 35 | task-07-nat-gateway | `az-deploy-nat-gateway.sh` | Bash | `bash/` |
| 36 | task-08-arc-gateway | `Invoke-ArcGateway-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 36 | task-08-arc-gateway | `az-deploy-arc-gateway.ps1` | AzCLI | `azurecli/` |
| 36 | task-08-arc-gateway | `az-deploy-arc-gateway.sh` | Bash | `bash/` |
| 37 | task-09-log-analytics | `Invoke-LogAnalytics-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 37 | task-09-log-analytics | `az-deploy-log-analytics.ps1` | AzCLI | `azurecli/` |
| 37 | task-09-log-analytics | `az-deploy-log-analytics.sh` | Bash | `bash/` |
| 38 | task-10-key-vault | `Invoke-KeyVault-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 38 | task-10-key-vault | `az-deploy-key-vault.ps1` | AzCLI | `azurecli/` |
| 38 | task-10-key-vault | `az-deploy-key-vault.sh` | Bash | `bash/` |
| 39 | task-11-deploy-management-vms | `Invoke-ManagementVMs-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 39 | task-11-deploy-management-vms | `az-deploy-management-vms.ps1` | AzCLI | `azurecli/` |
| 39 | task-11-deploy-management-vms | `az-deploy-management-vms.sh` | Bash | `bash/` |

#### Phase 04: Azure Management Infrastructure — Remaining Tasks

| Task # | Task | Script to Create | Type | Subfolder |
|--------|------|-----------------|------|-----------|
| 40 | task-12-configure-adds | `Invoke-DomainController-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 40 | task-12-configure-adds | `az-configure-adds.ps1` | AzCLI | `azurecli/` |
| 40 | task-12-configure-adds | `az-configure-adds.sh` | Bash | `bash/` |
| 41 | task-13-configure-utility-server | `Invoke-JumpServer-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 41 | task-13-configure-utility-server | `az-deploy-jump-server.ps1` | AzCLI | `azurecli/` |
| 41 | task-13-configure-utility-server | `az-deploy-jump-server.sh` | Bash | `bash/` |
| 42 | task-14-configure-ndm-server | `Invoke-NdmServer-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 42 | task-14-configure-ndm-server | `az-deploy-ndm-server.ps1` | AzCLI | `azurecli/` |
| 42 | task-14-configure-ndm-server | `az-deploy-ndm-server.sh` | Bash | `bash/` |
| 43 | task-15-configure-lighthouse | `Invoke-Lighthouse-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 43 | task-15-configure-lighthouse | `az-deploy-lighthouse.ps1` | AzCLI | `azurecli/` |
| 43 | task-15-configure-lighthouse | `az-deploy-lighthouse.sh` | Bash | `bash/` |

#### Phase 05: Identity & Security

| Task # | Task | Script to Create | Type | Subfolder |
|--------|------|-----------------|------|-----------|
| 44 | task-01-pim-conditional-access | `Invoke-PimConditionalAccess-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 44 | task-01-pim-conditional-access | `az-configure-pim-conditional-access.ps1` | AzCLI | `azurecli/` |
| 44 | task-01-pim-conditional-access | `az-configure-pim-conditional-access.sh` | Bash | `bash/` |

---

### Part 03 — On-Prem Readiness

#### Phase 01: Active Directory

| Task # | Task | Script to Create | Type | Subfolder |
|--------|------|-----------------|------|-----------|
| 45 | task-01-ou-creation-pre-creation-artifacts | `Invoke-ADConfiguration-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 45 | task-01-ou-creation-pre-creation-artifacts | `az-configure-ad-ou.ps1` | AzCLI | `azurecli/` |
| 45 | task-01-ou-creation-pre-creation-artifacts | `az-configure-ad-ou.sh` | Bash | `bash/` |
| 46 | task-02-security-groups | `Invoke-ADSecurityGroups-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 46 | task-02-security-groups | `az-create-ad-security-groups.ps1` | AzCLI | `azurecli/` |
| 46 | task-02-security-groups | `az-create-ad-security-groups.sh` | Bash | `bash/` |
| 47 | task-03-dns-node-a-records | `Invoke-DnsForwarding-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 47 | task-03-dns-node-a-records | `az-configure-dns-records.ps1` | AzCLI | `azurecli/` |
| 47 | task-03-dns-node-a-records | `az-configure-dns-records.sh` | Bash | `bash/` |
| 48 | task-04-service-admin-accounts | `Invoke-ADAccounts-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 48 | task-04-service-admin-accounts | `az-create-ad-accounts.ps1` | AzCLI | `azurecli/` |
| 48 | task-04-service-admin-accounts | `az-create-ad-accounts.sh` | Bash | `bash/` |
| 49 | task-05-group-assignments | `Invoke-ADGroupMemberships-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 49 | task-05-group-assignments | `az-set-ad-group-memberships.ps1` | AzCLI | `azurecli/` |
| 49 | task-05-group-assignments | `az-set-ad-group-memberships.sh` | Bash | `bash/` |

#### Phase 02: Enterprise Readiness

| Task # | Task | Script to Create | Type | Subfolder |
|--------|------|-----------------|------|-----------|
| 50 | task-01-hardware-inspection | `Invoke-HardwareInspection-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 50 | task-01-hardware-inspection | `az-test-hardware-inspection.ps1` | AzCLI | `azurecli/` |
| 50 | task-01-hardware-inspection | `az-test-hardware-inspection.sh` | Bash | `bash/` |
| 51 | task-02-network-service-verification | `Invoke-InfrastructurePrep-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 51 | task-02-network-service-verification | `az-verify-network-services.ps1` | AzCLI | `azurecli/` |
| 51 | task-02-network-service-verification | `az-verify-network-services.sh` | Bash | `bash/` |
| 52 | task-03-opengear-verification | `Invoke-OpengearVerification-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 52 | task-03-opengear-verification | `az-verify-opengear.ps1` | AzCLI | `azurecli/` |
| 52 | task-03-opengear-verification | `az-verify-opengear.sh` | Bash | `bash/` |
| 53 | task-04-validation-signoff | `Invoke-ValidationSignoff-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 53 | task-04-validation-signoff | `az-complete-validation-signoff.ps1` | AzCLI | `azurecli/` |
| 53 | task-04-validation-signoff | `az-complete-validation-signoff.sh` | Bash | `bash/` |

#### Phase 03: Network Infrastructure

| Task # | Task | Script to Create | Type | Subfolder |
|--------|------|-----------------|------|-----------|
| 54 | task-01-opengear-console-server | `Invoke-OpengearEndpoint-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 54 | task-01-opengear-console-server | `az-configure-opengear-endpoint.ps1` | AzCLI | `azurecli/` |
| 54 | task-01-opengear-console-server | `az-configure-opengear-endpoint.sh` | Bash | `bash/` |
| 55 | task-02-dell-powerswitch-configuration | `Invoke-PowerSwitchEndpoint-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 55 | task-02-dell-powerswitch-configuration | `az-configure-powerswitch.ps1` | AzCLI | `azurecli/` |
| 55 | task-02-dell-powerswitch-configuration | `az-configure-powerswitch.sh` | Bash | `bash/` |
| 56 | task-03-firewall-endpoint-verification | `Invoke-FirewallEndpoint-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 56 | task-03-firewall-endpoint-verification | `az-verify-firewall-endpoints.ps1` | AzCLI | `azurecli/` |
| 56 | task-03-firewall-endpoint-verification | `az-verify-firewall-endpoints.sh` | Bash | `bash/` |
| 57 | task-04-network-validation | `Invoke-NetworkReadiness-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 57 | task-04-network-validation | `az-validate-network.ps1` | AzCLI | `azurecli/` |
| 57 | task-04-network-validation | `az-validate-network.sh` | Bash | `bash/` |

---

### Part 04 — Cluster Deployment

#### Phase 01: Hardware Provisioning

| Task # | Task | Script to Create | Type | Subfolder |
|--------|------|-----------------|------|-----------|
| 58 | task-01-create-dhcp-reservations-for-idrac-interfaces | `Invoke-DhcpReservationsIdrac-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 58 | task-01-create-dhcp-reservations-for-idrac-interfaces | `az-create-dhcp-reservations-idrac.ps1` | AzCLI | `azurecli/` |
| 58 | task-01-create-dhcp-reservations-for-idrac-interfaces | `az-create-dhcp-reservations-idrac.sh` | Bash | `bash/` |
| 59 | task-02-hardware-discovery-via-dell-redfish-api | `Invoke-HardwareDiscovery-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 59 | task-02-hardware-discovery-via-dell-redfish-api | `az-discover-hardware.ps1` | AzCLI | `azurecli/` |
| 59 | task-02-hardware-discovery-via-dell-redfish-api | `az-discover-hardware.sh` | Bash | `bash/` |
| 60 | task-03-create-dhcp-reservations-for-management-nics | `Invoke-DhcpReservationsMgmt-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 60 | task-03-create-dhcp-reservations-for-management-nics | `az-create-dhcp-reservations-mgmt.ps1` | AzCLI | `azurecli/` |
| 60 | task-03-create-dhcp-reservations-for-management-nics | `az-create-dhcp-reservations-mgmt.sh` | Bash | `bash/` |
| 61 | task-04-bios-and-idrac-settings-validation | `Invoke-BiosIdracValidation-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 61 | task-04-bios-and-idrac-settings-validation | `az-validate-bios-idrac.ps1` | AzCLI | `azurecli/` |
| 61 | task-04-bios-and-idrac-settings-validation | `az-validate-bios-idrac.sh` | Bash | `bash/` |
| 62 | task-05-bios-and-idrac-settings-remediation | `Invoke-BiosIdracRemediation-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 62 | task-05-bios-and-idrac-settings-remediation | `az-remediate-bios-idrac.ps1` | AzCLI | `azurecli/` |
| 62 | task-05-bios-and-idrac-settings-remediation | `az-remediate-bios-idrac.sh` | Bash | `bash/` |

#### Phase 02: OS Installation

| Task # | Task | Script to Create | Type | Subfolder |
|--------|------|-----------------|------|-----------|
| 63 | task-01-delete-and-recreate-virtual-disk-on-dell-boss-card | `Invoke-ResetBossVirtualDisk-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 63 | task-01-delete-and-recreate-virtual-disk-on-dell-boss-card | `az-reset-boss-virtual-disk.ps1` | AzCLI | `azurecli/` |
| 63 | task-01-delete-and-recreate-virtual-disk-on-dell-boss-card | `az-reset-boss-virtual-disk.sh` | Bash | `bash/` |
| 64 | task-02-mount-and-verify-dell-gold-image-iso | `Invoke-MountGoldImageISO-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 64 | task-02-mount-and-verify-dell-gold-image-iso | `az-mount-gold-image-iso.ps1` | AzCLI | `azurecli/` |
| 64 | task-02-mount-and-verify-dell-gold-image-iso | `az-mount-gold-image-iso.sh` | Bash | `bash/` |
| 66 | task-04-verify-os-deployment | `Invoke-OsDeploymentVerification-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 66 | task-04-verify-os-deployment | `az-verify-os-deployment.ps1` | AzCLI | `azurecli/` |
| 66 | task-04-verify-os-deployment | `az-verify-os-deployment.sh` | Bash | `bash/` |

#### Phase 03: OS Configuration

| Task # | Task | Script to Create | Type | Subfolder |
|--------|------|-----------------|------|-----------|
| 67 | task-01-enable-winrm-for-remote-management | `Invoke-EnableWinRm-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 67 | task-01-enable-winrm-for-remote-management | `az-enable-winrm.ps1` | AzCLI | `azurecli/` |
| 67 | task-01-enable-winrm-for-remote-management | `az-enable-winrm.sh` | Bash | `bash/` |
| 68 | task-02-enable-rdp | `az-enable-rdp.ps1` | AzCLI | `azurecli/` |
| 68 | task-02-enable-rdp | `az-enable-rdp.sh` | Bash | `bash/` |
| 69 | task-03-configure-static-ip-address | `az-configure-static-ip.ps1` | AzCLI | `azurecli/` |
| 69 | task-03-configure-static-ip-address | `az-configure-static-ip.sh` | Bash | `bash/` |
| 70 | task-04-disable-dhcp-on-management-adapter | `az-disable-dhcp.ps1` | AzCLI | `azurecli/` |
| 70 | task-04-disable-dhcp-on-management-adapter | `az-disable-dhcp.sh` | Bash | `bash/` |
| 71 | task-05-configure-dns-servers | `az-configure-dns-servers.ps1` | AzCLI | `azurecli/` |
| 71 | task-05-configure-dns-servers | `az-configure-dns-servers.sh` | Bash | `bash/` |
| 72 | task-06-verify-dns-client-configuration | `az-verify-dns-configuration.ps1` | AzCLI | `azurecli/` |
| 72 | task-06-verify-dns-client-configuration | `az-verify-dns-configuration.sh` | Bash | `bash/` |
| 73 | task-07-configure-time-synchronization-ntp | `az-configure-ntp.ps1` | AzCLI | `azurecli/` |
| 73 | task-07-configure-time-synchronization-ntp | `az-configure-ntp.sh` | Bash | `bash/` |
| 74 | task-08-enable-icmp-ping | `az-enable-icmp.ps1` | AzCLI | `azurecli/` |
| 74 | task-08-enable-icmp-ping | `az-enable-icmp.sh` | Bash | `bash/` |
| 75 | task-09-disable-unused-network-adapters | `az-disable-unused-adapters.ps1` | AzCLI | `azurecli/` |
| 75 | task-09-disable-unused-network-adapters | `az-disable-unused-adapters.sh` | Bash | `bash/` |
| 76 | task-10-configure-hostname | `az-configure-hostname.ps1` | AzCLI | `azurecli/` |
| 76 | task-10-configure-hostname | `az-configure-hostname.sh` | Bash | `bash/` |
| 77 | task-11-clear-previous-storage-configuration-conditional | `az-clear-storage-configuration.ps1` | AzCLI | `azurecli/` |
| 77 | task-11-clear-previous-storage-configuration-conditional | `az-clear-storage-configuration.sh` | Bash | `bash/` |
| 78 | task-12-complete-combined-script-all-steps | `az-configure-os-all-steps.ps1` | AzCLI | `azurecli/` |
| 78 | task-12-complete-combined-script-all-steps | `az-configure-os-all-steps.sh` | Bash | `bash/` |
| 79 | task-13-phase03-verification | `Test-Phase03Verification.ps1` | PS Standalone | `powershell/` |
| 79 | task-13-phase03-verification | `az-verify-phase03.ps1` | AzCLI | `azurecli/` |
| 79 | task-13-phase03-verification | `az-verify-phase03.sh` | Bash | `bash/` |

#### Phase 04: Arc Registration

| Task # | Task | Script to Create | Type | Subfolder |
|--------|------|-----------------|------|-----------|
| 80 | task-01-pre-registration-validation | `az-test-arc-prerequisites.ps1` | AzCLI | `azurecli/` |
| 80 | task-01-pre-registration-validation | `az-test-arc-prerequisites.sh` | Bash | `bash/` |
| 81 | task-02-register-cluster-nodes-with-azure-arc | `az-register-arc-nodes.sh` | Bash | `bash/` |
| 82 | task-03-monitor-bootstrap-process | `az-monitor-bootstrap.ps1` | AzCLI | `azurecli/` |
| 82 | task-03-monitor-bootstrap-process | `az-monitor-bootstrap.sh` | Bash | `bash/` |
| 83 | task-04-verify-arc-registration-and-connectivity | `az-verify-arc-registration.ps1` | AzCLI | `azurecli/` |
| 83 | task-04-verify-arc-registration-and-connectivity | `az-verify-arc-registration.sh` | Bash | `bash/` |

#### Phase 05: Cluster Deployment — Active Directory

| Task # | Task | Script to Create | Type | Subfolder |
|--------|------|-----------------|------|-----------|
| 84 | task-01-initiate-deployment-via-arm-template | `az-deploy-cluster-ad.ps1` | AzCLI | `azurecli/` |
| 84 | task-01-initiate-deployment-via-arm-template | `az-deploy-cluster-ad.sh` | Bash | `bash/` |
| 85 | task-02-verify-deployment-completion | `az-verify-cluster-ad.ps1` | AzCLI | `azurecli/` |
| 85 | task-02-verify-deployment-completion | `az-verify-cluster-ad.sh` | Bash | `bash/` |

#### Phase 05: Cluster Deployment — Local Identity

| Task # | Task | Script to Create | Type | Subfolder |
|--------|------|-----------------|------|-----------|
| 86 | task-01-initiate-deployment-via-arm-template | `Invoke-DeployCluster-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 87 | task-01-initiate-deployment-via-azure-portal | `az-create-local-identity.ps1` | AzCLI | `azurecli/` |
| 87 | task-01-initiate-deployment-via-azure-portal | `az-create-local-identity.sh` | Bash | `bash/` |
| 88 | task-02-verify-deployment-completion | `az-verify-local-identity.ps1` | AzCLI | `azurecli/` |
| 88 | task-02-verify-deployment-completion | `az-verify-local-identity.sh` | Bash | `bash/` |

#### Phase 05: Cluster Deployment — Monitoring

| Task # | Task | Script to Create | Type | Subfolder |
|--------|------|-----------------|------|-----------|
| 89 | monitoring | `Invoke-MonitorDeployment-Orchestrated.ps1` | PS Orchestrated | `powershell/` |

#### Phase 06: Post-Deployment

| Task # | Task | Script to Create | Type | Subfolder |
|--------|------|-----------------|------|-----------|
| 90 | task-01-configure-windows-admin-center | `Invoke-WAC-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 90 | task-01-configure-windows-admin-center | `az-configure-wac.ps1` | AzCLI | `azurecli/` |
| 90 | task-01-configure-windows-admin-center | `az-configure-wac.sh` | Bash | `bash/` |
| 91 | task-01-deploy-sdn | `az-deploy-sdn.ps1` | AzCLI | `azurecli/` |
| 91 | task-01-deploy-sdn | `az-deploy-sdn.sh` | Bash | `bash/` |
| 92 | task-02-cluster-quorum-configuration | `az-configure-cluster-quorum.ps1` | AzCLI | `azurecli/` |
| 92 | task-02-cluster-quorum-configuration | `az-configure-cluster-quorum.sh` | Bash | `bash/` |
| 93 | task-03-security-groups-applied-to-nodes | `az-apply-security-groups.ps1` | AzCLI | `azurecli/` |
| 93 | task-03-security-groups-applied-to-nodes | `az-apply-security-groups.sh` | Bash | `bash/` |
| 94 | task-04-ssh-connectivity-to-nodes | `az-configure-ssh.ps1` | AzCLI | `azurecli/` |
| 94 | task-04-ssh-connectivity-to-nodes | `az-configure-ssh.sh` | Bash | `bash/` |
| 95 | task-05-storage-configuration | `az-configure-storage.ps1` | AzCLI | `azurecli/` |
| 95 | task-05-storage-configuration | `az-configure-storage.sh` | Bash | `bash/` |
| 96 | task-06-image-downloads | `az-download-images.ps1` | AzCLI | `azurecli/` |
| 96 | task-06-image-downloads | `az-download-images.sh` | Bash | `bash/` |
| 97 | task-07-configure-nsgs | `az-configure-post-deployment-nsgs.ps1` | AzCLI | `azurecli/` |
| 97 | task-07-configure-nsgs | `az-configure-post-deployment-nsgs.sh` | Bash | `bash/` |
| 98 | task-08-logical-network-creation | `az-create-logical-networks.ps1` | AzCLI | `azurecli/` |
| 98 | task-08-logical-network-creation | `az-create-logical-networks.sh` | Bash | `bash/` |
| 99 | task-09-post-deployment-verification | `Invoke-PostDeploymentVerification-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 99 | task-09-post-deployment-verification | `az-verify-post-deployment.ps1` | AzCLI | `azurecli/` |
| 99 | task-09-post-deployment-verification | `az-verify-post-deployment.sh` | Bash | `bash/` |

---

### Part 05 — Operational Foundations

#### Phase 01: SDN Deployment

| Task # | Task | Script to Create | Type | Subfolder |
|--------|------|-----------------|------|-----------|
| 100 | task-01-validate-sdn-prerequisites | `Invoke-SdnPrerequisites-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 100 | task-01-validate-sdn-prerequisites | `az-validate-sdn-prerequisites.ps1` | AzCLI | `azurecli/` |
| 100 | task-01-validate-sdn-prerequisites | `az-validate-sdn-prerequisites.sh` | Bash | `bash/` |
| 101 | task-02-configure-network-security-groups | `Invoke-SdnIntegration-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 101 | task-02-configure-network-security-groups | `az-configure-sdn-integration.ps1` | AzCLI | `azurecli/` |
| 101 | task-02-configure-network-security-groups | `az-configure-sdn-integration.sh` | Bash | `bash/` |
| 102 | task-03-configure-network-security-groups | `Invoke-NsgConfiguration-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 102 | task-03-configure-network-security-groups | `az-configure-sdn-nsgs.ps1` | AzCLI | `azurecli/` |
| 102 | task-03-configure-network-security-groups | `az-configure-sdn-nsgs.sh` | Bash | `bash/` |

#### Phase 02: Monitoring & Observability

| Task # | Task | Script to Create | Type | Subfolder |
|--------|------|-----------------|------|-----------|
| 103 | task-01-configure-log-analytics-workspace | `Invoke-MonitoringSecurity-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 103 | task-01-configure-log-analytics-workspace | `az-configure-log-analytics.ps1` | AzCLI | `azurecli/` |
| 103 | task-01-configure-log-analytics-workspace | `az-configure-log-analytics.sh` | Bash | `bash/` |
| 104 | task-02-configure-azure-monitor-agent | `Invoke-AzureMonitorIntegration-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 104 | task-02-configure-azure-monitor-agent | `az-configure-azure-monitor.sh` | Bash | `bash/` |
| 105 | task-03-enable-hci-insights | `Invoke-HciInsights-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 105 | task-03-enable-hci-insights | `az-enable-hci-insights.ps1` | AzCLI | `azurecli/` |
| 105 | task-03-enable-hci-insights | `az-enable-hci-insights.sh` | Bash | `bash/` |
| 106 | task-04-setup-alerting | `Invoke-Alerting-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 106 | task-04-setup-alerting | `az-setup-alerting.ps1` | AzCLI | `azurecli/` |
| 106 | task-04-setup-alerting | `az-setup-alerting.sh` | Bash | `bash/` |
| 107 | task-05-deploy-omimswac-monitoring | `Invoke-OmimswacConfiguration-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 107 | task-05-deploy-omimswac-monitoring | `az-deploy-omimswac.ps1` | AzCLI | `azurecli/` |
| 107 | task-05-deploy-omimswac-monitoring | `az-deploy-omimswac.sh` | Bash | `bash/` |
| 108 | task-05-deploy-wac | `Invoke-WindowsAdminCenter-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 108 | task-05-deploy-wac | `az-deploy-wac.ps1` | AzCLI | `azurecli/` |
| 108 | task-05-deploy-wac | `az-deploy-wac.sh` | Bash | `bash/` |
| 109 | task-06-configure-network-device-logging | `Invoke-SyslogVm-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 109 | task-06-configure-network-device-logging | `az-configure-network-logging.ps1` | AzCLI | `azurecli/` |
| 109 | task-06-configure-network-device-logging | `az-configure-network-logging.sh` | Bash | `bash/` |
| 110 | task-07-configure-datadog-integration | `Invoke-DatadogConfiguration-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 110 | task-07-configure-datadog-integration | `az-configure-datadog.ps1` | AzCLI | `azurecli/` |
| 110 | task-07-configure-datadog-integration | `az-configure-datadog.sh` | Bash | `bash/` |

#### Phase 03: Backup & DR

| Task # | Task | Script to Create | Type | Subfolder |
|--------|------|-----------------|------|-----------|
| 111 | task-01-configure-azure-backup | `Invoke-BackupConfiguration-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 111 | task-01-configure-azure-backup | `az-configure-backup.sh` | Bash | `bash/` |
| 112 | task-02-configure-site-recovery | `Invoke-SiteRecoveryConfiguration-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 112 | task-02-configure-site-recovery | `az-configure-site-recovery.ps1` | AzCLI | `azurecli/` |
| 112 | task-02-configure-site-recovery | `az-configure-site-recovery.sh` | Bash | `bash/` |
| 113 | task-03-test-dr-procedures | `Invoke-DisasterRecovery-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 113 | task-03-test-dr-procedures | `az-test-disaster-recovery.ps1` | AzCLI | `azurecli/` |
| 113 | task-03-test-dr-procedures | `az-test-disaster-recovery.sh` | Bash | `bash/` |

#### Phase 04: Security & Governance

| Task # | Task | Script to Create | Type | Subfolder |
|--------|------|-----------------|------|-----------|
| 114 | task-01-enable-defender-for-cloud | `Invoke-DefenderForCloud-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 114 | task-01-enable-defender-for-cloud | `az-enable-defender.ps1` | AzCLI | `azurecli/` |
| 114 | task-01-enable-defender-for-cloud | `az-enable-defender.sh` | Bash | `bash/` |
| 115 | task-02-apply-azure-policy-initiatives | `Invoke-AzurePolicyConfiguration-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 115 | task-02-apply-azure-policy-initiatives | `az-apply-azure-policy.ps1` | AzCLI | `azurecli/` |
| 115 | task-02-apply-azure-policy-initiatives | `az-apply-azure-policy.sh` | Bash | `bash/` |
| 116 | task-03-configure-security-baselines | `Invoke-SecurityBaselines-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 116 | task-03-configure-security-baselines | `az-configure-security-baselines.ps1` | AzCLI | `azurecli/` |
| 116 | task-03-configure-security-baselines | `az-configure-security-baselines.sh` | Bash | `bash/` |
| 117 | task-04-enable-security-logging | `Invoke-SecurityLogging-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 117 | task-04-enable-security-logging | `az-configure-security-logging.ps1` | AzCLI | `azurecli/` |
| 117 | task-04-enable-security-logging | `az-configure-security-logging.sh` | Bash | `bash/` |
| 118 | task-05-configure-azure-update-manager | `Invoke-UpdateManagerConfiguration-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 118 | task-05-configure-azure-update-manager | `az-configure-update-manager.ps1` | AzCLI | `azurecli/` |
| 118 | task-05-configure-azure-update-manager | `az-configure-update-manager.sh` | Bash | `bash/` |

#### Phase 05: Licensing & Telemetry

| Task # | Task | Script to Create | Type | Subfolder |
|--------|------|-----------------|------|-----------|
| 119 | task-01-enable-azure-hybrid-benefit | `Invoke-AzureHybridBenefit-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 119 | task-01-enable-azure-hybrid-benefit | `az-enable-hybrid-benefit.ps1` | AzCLI | `azurecli/` |
| 119 | task-01-enable-azure-hybrid-benefit | `az-enable-hybrid-benefit.sh` | Bash | `bash/` |
| 120 | task-02-activate-windows-server-subscription | `Invoke-WindowsServerSubscription-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 120 | task-02-activate-windows-server-subscription | `az-enable-windows-server-subscription.ps1` | AzCLI | `azurecli/` |
| 120 | task-02-activate-windows-server-subscription | `az-enable-windows-server-subscription.sh` | Bash | `bash/` |
| 121 | task-03-configure-enhanced-telemetry | `Invoke-TelemetryConfiguration-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 121 | task-03-configure-enhanced-telemetry | `az-configure-telemetry.ps1` | AzCLI | `azurecli/` |
| 121 | task-03-configure-enhanced-telemetry | `az-configure-telemetry.sh` | Bash | `bash/` |

---

### Part 06 — Testing & Validation

| Task # | Task | Script to Create | Type | Subfolder |
|--------|------|-----------------|------|-----------|
| 122 | task-01-infrastructure-health-validation | `Invoke-InfrastructureHealth-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 122 | task-01-infrastructure-health-validation | `az-test-infrastructure-health.ps1` | AzCLI | `azurecli/` |
| 122 | task-01-infrastructure-health-validation | `az-test-infrastructure-health.sh` | Bash | `bash/` |
| 123 | task-02-vmfleet-storage-testing | `Invoke-VmFleetStorageTest-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 123 | task-02-vmfleet-storage-testing | `az-test-vmfleet-storage.ps1` | AzCLI | `azurecli/` |
| 123 | task-02-vmfleet-storage-testing | `az-test-vmfleet-storage.sh` | Bash | `bash/` |
| 124 | task-03-network-rdma-validation | `Invoke-NetworkRdmaValidation-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 125 | task-04-high-availability-testing | `Invoke-HighAvailability-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 126 | task-05-security-compliance-validation | `Invoke-SecurityCompliance-Orchestrated.ps1` | PS Orchestrated | `powershell/` |
| 127 | task-06-backup-dr-validation | `Invoke-BackupDrValidation-Orchestrated.ps1` | PS Orchestrated | `powershell/` |

---

### Scripts Created Summary

| Category | Count |
|----------|-------|
| **PowerShell Standalone** | 11 |
| **PowerShell Orchestrated** | 92 |
| **Azure CLI** | 110 |
| **Bash** | 107 |
| **Total scripts created** | **320** |

#### Original Backlog Priority Breakdown

| Priority | Description | Count |
|----------|-------------|-------|
| P0 — Critical | Tasks with NO scripts at all (rows 2-5, 17-18) | 18 scripts across 6 tasks |
| P1 — High | Missing Standalone PS where task has only AzCLI/Bash | 6 scripts (#1, 6, 20, 26, 79) |
| P2 — Medium | Missing AzCLI parity for existing PS scripts | 95 scripts |
| P3 — Medium | Missing Bash parity for existing PS scripts | 92 scripts |
| P4 — Lower | Missing Orchestrated PS wrappers | 67 scripts |

