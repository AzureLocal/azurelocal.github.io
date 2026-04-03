# Deploy Tree Alignment

> Generated: 2026-04-02  
> **85 / 114** tasks have scripts in azurelocal-toolkit  
> **17** tasks have embedded scripts in docs but are missing from toolkit  
> **12** tasks have no scripts anywhere (pipeline UI steps / manual installs)

| # | Task | Doc Scripts | Toolkit Scripts | Status |
|---|------|-------------|-----------------|--------|
| 1 | `01-cicd-infra/phase-01-cicd-setup/task-01-bootstrap` | `bash` | — | ⚠️ missing |
| 2 | `01-cicd-infra/phase-01-cicd-setup/task-02-create-project` | — | — | ⬜ no scripts |
| 3 | `01-cicd-infra/phase-01-cicd-setup/task-03-configure-project` | — | — | ⬜ no scripts |
| 4 | `01-cicd-infra/phase-01-cicd-setup/task-04-create-environments` | — | — | ⬜ no scripts |
| 5 | `01-cicd-infra/phase-01-cicd-setup/task-05-configure-variables` | — | — | ⬜ no scripts |
| 6 | `01-cicd-infra/phase-01-cicd-setup/task-06-deploy-runners` | `bash` | — | ⚠️ missing |
| 7 | `02-azure-foundation/phase-01-landing-zones/full-deployment/task-01-configure-management-groups` | `powershell` | — | ⚠️ missing |
| 8 | `02-azure-foundation/phase-01-landing-zones/full-deployment/task-02-create-subscriptions` | `bash`` ``powershell` | — | ⚠️ missing |
| 9 | `02-azure-foundation/phase-01-landing-zones/full-deployment/task-03-create-resource-groups` | `powershell` | powershell/Deploy-ResourceGroups.ps1 | ✅ |
| 10 | `02-azure-foundation/phase-01-landing-zones/simplified-deployment/task-01-configure-management-group` | `powershell` | — | ⚠️ missing |
| 11 | `02-azure-foundation/phase-01-landing-zones/simplified-deployment/task-02-create-subscription` | `bash`` ``powershell` | — | ⚠️ missing |
| 12 | `02-azure-foundation/phase-01-landing-zones/simplified-deployment/task-03-create-resource-groups` | `powershell` | powershell/Deploy-ResourceGroups.ps1 | ✅ |
| 13 | `02-azure-foundation/phase-02-resource-providers/task-01-register-resource-providers` | `powershell` | azurecli/Register-ResourceProviders.azcli.ps1<br/>powershell/Register-ResourceProviders.ps1 | ✅ |
| 14 | `02-azure-foundation/phase-02-resource-providers/task-02-verify-provider-registration` | `powershell` | powershell/Test-ResourceProviders.ps1 | ✅ |
| 15 | `02-azure-foundation/phase-03-rbac-permissions/task-01-create-azure-local-deployment-spn` | `powershell` | powershell/New-DeploymentServicePrincipal.ps1 | ✅ |
| 16 | `02-azure-foundation/phase-03-rbac-permissions/task-02-assign-rbac-roles` | `powershell` | powershell/Set-RbacRoleAssignments.ps1 | ✅ |
| 17 | `02-azure-foundation/phase-04-azure-management-infrastructure/01-cicd-pipeline-deployment/phase-01-configuration/task-01-configure-core-variables` | `bash` | — | ⚠️ missing |
| 18 | `02-azure-foundation/phase-04-azure-management-infrastructure/01-cicd-pipeline-deployment/phase-01-configuration/task-02-configure-management-mode` | — | — | ⬜ no scripts |
| 19 | `02-azure-foundation/phase-04-azure-management-infrastructure/01-cicd-pipeline-deployment/phase-01-configuration/task-03-configure-cluster-mode` | — | — | ⬜ no scripts |
| 20 | `02-azure-foundation/phase-04-azure-management-infrastructure/01-cicd-pipeline-deployment/phase-02-pipeline-execution/task-01-commit-and-push` | `bash` | — | ⚠️ missing |
| 21 | `02-azure-foundation/phase-04-azure-management-infrastructure/01-cicd-pipeline-deployment/phase-02-pipeline-execution/task-02-monitor-validate-stage` | — | — | ⬜ no scripts |
| 22 | `02-azure-foundation/phase-04-azure-management-infrastructure/01-cicd-pipeline-deployment/phase-02-pipeline-execution/task-03-review-plan-stage` | — | — | ⬜ no scripts |
| 23 | `02-azure-foundation/phase-04-azure-management-infrastructure/01-cicd-pipeline-deployment/phase-02-pipeline-execution/task-04-approve-deployment` | — | — | ⬜ no scripts |
| 24 | `02-azure-foundation/phase-04-azure-management-infrastructure/01-cicd-pipeline-deployment/phase-02-pipeline-execution/task-05-monitor-apply-stage` | — | — | ⬜ no scripts |
| 25 | `02-azure-foundation/phase-04-azure-management-infrastructure/01-cicd-pipeline-deployment/phase-02-pipeline-execution/task-06-verify-test-stage` | — | — | ⬜ no scripts |
| 26 | `02-azure-foundation/phase-04-azure-management-infrastructure/01-cicd-pipeline-deployment/phase-03-validation/task-01-verify-resources` | `bash` | — | ⚠️ missing |
| 27 | `02-azure-foundation/phase-04-azure-management-infrastructure/01-cicd-pipeline-deployment/phase-03-validation/task-02-test-connectivity` | `bash`` ``powershell` | — | ⚠️ missing |
| 28 | `02-azure-foundation/phase-04-azure-management-infrastructure/01-cicd-pipeline-deployment/phase-03-validation/task-03-validate-configuration` | `bash`` ``powershell` | — | ⚠️ missing |
| 29 | `02-azure-foundation/phase-04-azure-management-infrastructure/02-manual-deployment/task-01-virtual-network` | `powershell` | powershell/Configure-VnetDns.ps1<br/>powershell/Deploy-ManagementVnet.ps1<br/>powershell/Deploy-Network.ps1<br/>powershell/Deploy-VnetPeering.ps1<br/>powershell/New-VirtualNetwork.ps1 | ✅ |
| 30 | `02-azure-foundation/phase-04-azure-management-infrastructure/02-manual-deployment/task-02-vpn-gateway` | `powershell` | powershell/New-VpnGateway.ps1 | ✅ |
| 31 | `02-azure-foundation/phase-04-azure-management-infrastructure/02-manual-deployment/task-03-s2s-vpn-connection` | `powershell` | powershell/New-VpnConnection.ps1 | ✅ |
| 32 | `02-azure-foundation/phase-04-azure-management-infrastructure/02-manual-deployment/task-04-p2s-vpn-connection` | `powershell` | — | ⚠️ missing |
| 33 | `02-azure-foundation/phase-04-azure-management-infrastructure/02-manual-deployment/task-05-azure-bastion` | `powershell` | powershell/New-AzureBastion.ps1 | ✅ |
| 34 | `02-azure-foundation/phase-04-azure-management-infrastructure/02-manual-deployment/task-06-network-security-groups` | `powershell` | powershell/Deploy-LighthouseNsg.ps1 | ✅ |
| 35 | `02-azure-foundation/phase-04-azure-management-infrastructure/02-manual-deployment/task-07-nat-gateway` | `powershell` | powershell/New-NatGateway.ps1 | ✅ |
| 36 | `02-azure-foundation/phase-04-azure-management-infrastructure/02-manual-deployment/task-08-arc-gateway` | `powershell` | powershell/New-ArcGateway.ps1 | ✅ |
| 37 | `02-azure-foundation/phase-04-azure-management-infrastructure/02-manual-deployment/task-09-log-analytics` | `powershell` | powershell/Deploy-DiagnosticSettings.ps1<br/>powershell/New-LogAnalyticsWorkspace.ps1 | ✅ |
| 38 | `02-azure-foundation/phase-04-azure-management-infrastructure/02-manual-deployment/task-10-key-vault` | `powershell` | powershell/New-KeyVault.ps1 | ✅ |
| 39 | `02-azure-foundation/phase-04-azure-management-infrastructure/02-manual-deployment/task-11-deploy-management-vms` | `powershell` | — | ⚠️ missing |
| 40 | `02-azure-foundation/phase-05-identity-security/task-01-pim-conditional-access` | `powershell` | powershell/Deploy-DefenderForCloud.ps1<br/>powershell/Deploy-KeyVault.ps1 | ✅ |
| 41 | `03-onprem-readiness/phase-01-active-directory/task-01-ou-creation-pre-creation-artifacts` | `powershell` | powershell/Invoke-ADValidation-Arc.ps1<br/>powershell/Invoke-ADValidation-AzVM.ps1<br/>powershell/Set-ADConfiguration.ps1<br/>powershell/Test-ADConfiguration.ps1 | ✅ |
| 42 | `03-onprem-readiness/phase-01-active-directory/task-02-security-groups` | `powershell` | powershell/New-ADSecurityGroups.ps1 | ✅ |
| 43 | `03-onprem-readiness/phase-01-active-directory/task-03-dns-node-a-records` | `powershell` | powershell/Set-DnsForwarding.ps1 | ✅ |
| 44 | `03-onprem-readiness/phase-01-active-directory/task-04-service-admin-accounts` | `powershell` | powershell/New-ADAccounts.ps1 | ✅ |
| 45 | `03-onprem-readiness/phase-01-active-directory/task-05-group-assignments` | `powershell` | powershell/Set-ADGroupMemberships.ps1 | ✅ |
| 46 | `03-onprem-readiness/phase-02-enterprise-readiness/task-01-hardware-inspection` | `powershell` | powershell/Test-HardwareInspection.ps1 | ✅ |
| 47 | `03-onprem-readiness/phase-02-enterprise-readiness/task-02-network-service-verification` | `powershell` | powershell/Set-InfrastructurePrep.ps1 | ✅ |
| 48 | `03-onprem-readiness/phase-02-enterprise-readiness/task-03-opengear-verification` | `bash`` ``powershell` | powershell/Test-OpengearVerification.ps1 | ✅ |
| 49 | `03-onprem-readiness/phase-02-enterprise-readiness/task-04-validation-signoff` | `powershell` | powershell/Complete-ValidationSignoff.ps1 | ✅ |
| 50 | `03-onprem-readiness/phase-03-network-infrastructure/task-01-opengear-console-server` | `bash` | powershell/Set-OpengearEndpoint.ps1 | ✅ |
| 51 | `03-onprem-readiness/phase-03-network-infrastructure/task-02-dell-powerswitch-configuration` | — | powershell/Set-PowerSwitchEndpoint.ps1 | ✅ |
| 52 | `03-onprem-readiness/phase-03-network-infrastructure/task-03-firewall-endpoint-verification` | `powershell` | powershell/Set-FirewallEndpoint.ps1 | ✅ |
| 53 | `03-onprem-readiness/phase-03-network-infrastructure/task-04-network-validation` | `powershell` | powershell/Test-NetworkReadiness.ps1 | ✅ |
| 54 | `04-cluster-deployment/phase-01-hardware-provisioning/task-01-create-dhcp-reservations-for-idrac-interfaces` | `bash`` ``powershell` | powershell/New-DhcpReservationsIdrac.ps1 | ✅ |
| 55 | `04-cluster-deployment/phase-01-hardware-provisioning/task-02-hardware-discovery-via-dell-redfish-api` | `powershell` | powershell/Get-HardwareDiscovery-Standalone.ps1<br/>powershell/Invoke-HardwareDiscovery.ps1<br/>powershell/Update-InfrastructureYml-FromDiscovery.ps1 | ✅ |
| 56 | `04-cluster-deployment/phase-01-hardware-provisioning/task-03-create-dhcp-reservations-for-management-nics` | `bash`` ``powershell` | powershell/New-DhcpReservationsMgmt.ps1 | ✅ |
| 57 | `04-cluster-deployment/phase-01-hardware-provisioning/task-04-bios-and-idrac-settings-validation` | `powershell` | powershell/Test-BiosIdracSettings.ps1 | ✅ |
| 58 | `04-cluster-deployment/phase-01-hardware-provisioning/task-05-bios-and-idrac-settings-remediation` | `powershell` | powershell/Set-BiosIdracSettings.ps1 | ✅ |
| 59 | `04-cluster-deployment/phase-02-os-installation/task-01-delete-and-recreate-virtual-disk-on-dell-boss-card` | `powershell` | — | ⚠️ missing |
| 60 | `04-cluster-deployment/phase-02-os-installation/task-02-mount-and-verify-dell-gold-image-iso` | `bash`` ``powershell` | — | ⚠️ missing |
| 61 | `04-cluster-deployment/phase-02-os-installation/task-03-manual-os-installation` | — | — | ⬜ no scripts |
| 62 | `04-cluster-deployment/phase-02-os-installation/task-04-verify-os-deployment` | `powershell` | powershell/Test-OsDeployment.ps1 | ✅ |
| 63 | `04-cluster-deployment/phase-03-os-configuration/task-01-enable-winrm-for-remote-management` | `powershell` | powershell/Enable-WinRmConfiguration.ps1 | ✅ |
| 64 | `04-cluster-deployment/phase-03-os-configuration/task-02-enable-rdp` | `powershell` | powershell/Enable-RDP.ps1<br/>powershell/Invoke-EnableRdp-Orchestrated.ps1 | ✅ |
| 65 | `04-cluster-deployment/phase-03-os-configuration/task-03-configure-static-ip-address` | `powershell` | task-03-configure-static-ip-address/README.md<br/>powershell/Invoke-ConfigureStaticIP-Orchestrated.ps1<br/>powershell/Set-StaticIPAddress.ps1 | ✅ |
| 66 | `04-cluster-deployment/phase-03-os-configuration/task-04-disable-dhcp-on-management-adapter` | `powershell` | powershell/Disable-DHCPOnAllAdapters.ps1<br/>powershell/Invoke-DisableDHCP-Orchestrated.ps1 | ✅ |
| 67 | `04-cluster-deployment/phase-03-os-configuration/task-05-configure-dns-servers` | `powershell` | powershell/Invoke-ConfigureDNS-Orchestrated.ps1<br/>powershell/Set-DnsServers.ps1 | ✅ |
| 68 | `04-cluster-deployment/phase-03-os-configuration/task-06-verify-dns-client-configuration` | `powershell` | powershell/Invoke-VerifyDNS-Orchestrated.ps1<br/>powershell/Test-DnsClientConfig.ps1<br/>powershell/Test-DnsConfiguration.ps1 | ✅ |
| 69 | `04-cluster-deployment/phase-03-os-configuration/task-07-configure-time-synchronization-ntp` | `powershell` | powershell/Invoke-ConfigureNTP-Orchestrated.ps1<br/>powershell/Set-NTPConfiguration.ps1 | ✅ |
| 70 | `04-cluster-deployment/phase-03-os-configuration/task-08-enable-icmp-ping` | `powershell` | powershell/Enable-ICMPFirewallRule.ps1<br/>powershell/Invoke-EnableICMP-Orchestrated.ps1 | ✅ |
| 71 | `04-cluster-deployment/phase-03-os-configuration/task-09-disable-unused-network-adapters` | `powershell` | powershell/Disable-UnusedAdapters.ps1<br/>powershell/Invoke-DisableAdapters-Orchestrated.ps1 | ✅ |
| 72 | `04-cluster-deployment/phase-03-os-configuration/task-10-configure-hostname` | `powershell` | powershell/Invoke-ConfigureHostname-Orchestrated.ps1<br/>powershell/Set-NodeHostname.ps1 | ✅ |
| 73 | `04-cluster-deployment/phase-03-os-configuration/task-11-clear-previous-storage-configuration-conditional` | `powershell` | powershell/Clear-StorageConfiguration-Direct.ps1<br/>powershell/Clear-StorageConfiguration.ps1<br/>powershell/Invoke-ClearStorage-Orchestrated.ps1 | ✅ |
| 74 | `04-cluster-deployment/phase-03-os-configuration/task-12-complete-combined-script-all-steps` | `powershell` | powershell/Invoke-Phase03OsConfiguration-Orchestrated.ps1<br/>powershell/Start-Phase03OsConfiguration.ps1 | ✅ |
| 75 | `04-cluster-deployment/phase-03-os-configuration/task-13-phase03-verification` | `powershell` | powershell/Invoke-Phase03Verification-Orchestrated.ps1 | ✅ |
| 76 | `04-cluster-deployment/phase-04-arc-registration/task-01-pre-registration-validation` | `powershell` | powershell/Invoke-ArcPrerequisites-Orchestrated.ps1<br/>powershell/Test-ArcPrerequisites-Orchestrated.ps1<br/>powershell/Test-ArcPrerequisites.ps1 | ✅ |
| 77 | `04-cluster-deployment/phase-04-arc-registration/task-02-register-cluster-nodes-with-azure-arc` | `powershell` | azurecli/Register-AzureLocalArc.ps1<br/>powershell/Invoke-ArcRegistration-Orchestrated.ps1<br/>powershell/Invoke-ArcRegistration-Orchestrated.ps1.bak<br/>powershell/Register-AzureLocalArc-Interactive.ps1<br/>powershell/Register-AzureLocalArc-Remote.ps1<br/>powershell/Register-AzureLocalArc-ServicePrincipal.ps1<br/>powershell/Register-NodesWithArc.ps1<br/>powershell/Start-ArcRegistrationWithMonitor.ps1 | ✅ |
| 78 | `04-cluster-deployment/phase-04-arc-registration/task-03-monitor-bootstrap-process` | `powershell` | powershell/Invoke-BootstrapMonitor-Orchestrated.ps1<br/>powershell/Watch-BootstrapProgress-Orchestrated.ps1<br/>powershell/Watch-BootstrapProgress.ps1 | ✅ |
| 79 | `04-cluster-deployment/phase-04-arc-registration/task-04-verify-arc-registration-and-connectivity` | `powershell` | powershell/Confirm-ArcRegistration-Orchestrated.ps1<br/>powershell/Confirm-ArcRegistration.ps1<br/>powershell/Invoke-ArcVerification-Orchestrated.ps1 | ✅ |
| 80 | `04-cluster-deployment/phase-06-post-deployment/task-01-deploy-sdn` | `powershell` | powershell/Enable-SDN-Standalone.ps1<br/>powershell/Get-VirtualSwitchName-Standalone.ps1<br/>powershell/Get-VirtualSwitchName.ps1<br/>powershell/Invoke-ConfigureSDNDns-Orchestrated.ps1<br/>powershell/Invoke-DeploySDN-Orchestrated.ps1<br/>powershell/Set-SDNDns-Standalone.ps1 | ✅ |
| 81 | `04-cluster-deployment/phase-06-post-deployment/task-02-cluster-quorum-configuration` | `powershell` | powershell/Invoke-ConfigureClusterQuorum-Orchestrated.ps1<br/>powershell/Invoke-ConfigureClusterQuorum-Standalone.ps1 | ✅ |
| 82 | `04-cluster-deployment/phase-06-post-deployment/task-03-security-groups-applied-to-nodes` | `powershell` | powershell/Invoke-ApplySecurityGroups-Orchestrated.ps1<br/>powershell/Invoke-ApplySecurityGroups-Standalone.ps1 | ✅ |
| 83 | `04-cluster-deployment/phase-06-post-deployment/task-04-ssh-connectivity-to-nodes` | `powershell` | powershell/Enable-SshConfiguration.ps1<br/>powershell/Invoke-SSHConnectivity-Orchestrated.ps1<br/>powershell/Invoke-SSHConnectivity-Standalone.ps1 | ✅ |
| 84 | `04-cluster-deployment/phase-06-post-deployment/task-05-storage-configuration` | `powershell` | powershell/Invoke-StorageCSV-Orchestrated.ps1<br/>powershell/Invoke-StoragePaths-Orchestrated.ps1<br/>powershell/New-StorageCSV-Standalone.ps1<br/>powershell/New-StoragePaths-Standalone.ps1<br/>powershell/Set-StorageConfiguration.ps1<br/>powershell/Set-StorageVolumesConfig.ps1 | ✅ |
| 85 | `04-cluster-deployment/phase-06-post-deployment/task-06-image-downloads` | `powershell` | powershell/Get-ImageDownloads.ps1<br/>powershell/Invoke-MarketplaceImages-Orchestrated.ps1<br/>powershell/New-MarketplaceImages-Standalone.ps1 | ✅ |
| 86 | `04-cluster-deployment/phase-06-post-deployment/task-07-configure-nsgs` | `bash`` ``powershell` | — | ⚠️ missing |
| 87 | `04-cluster-deployment/phase-06-post-deployment/task-08-logical-network-creation` | `powershell` | powershell/Invoke-LogicalNetworks-Orchestrated.ps1<br/>powershell/New-LogicalNetworks-Standalone.ps1 | ✅ |
| 88 | `04-cluster-deployment/phase-06-post-deployment/task-09-post-deployment-verification` | `powershell` | powershell/Invoke-VerifyPostDeployment.ps1<br/>powershell/Test-PostDeployment-Standalone.ps1 | ✅ |
| 89 | `05-operational-foundations/phase-01-sdn-deployment/task-01-validate-sdn-prerequisites` | `powershell` | powershell/Test-SdnPrerequisites.ps1 | ✅ |
| 90 | `05-operational-foundations/phase-01-sdn-deployment/task-02-configure-network-security-groups` | `bash`` ``powershell` | powershell/Set-SdnIntegration.ps1 | ✅ |
| 91 | `05-operational-foundations/phase-02-monitoring-observability/task-01-configure-log-analytics-workspace` | `bash`` ``powershell` | powershell/Deploy-MonitoringSecurity.ps1 | ✅ |
| 92 | `05-operational-foundations/phase-02-monitoring-observability/task-02-configure-azure-monitor-agent` | `bash`` ``powershell` | azurecli/Set-AzureMonitorIntegration.azcli.ps1<br/>powershell/Set-AzureMonitorIntegration.ps1 | ✅ |
| 93 | `05-operational-foundations/phase-02-monitoring-observability/task-03-enable-hci-insights` | `powershell` | powershell/Enable-HciInsights.ps1 | ✅ |
| 94 | `05-operational-foundations/phase-02-monitoring-observability/task-04-setup-alerting` | `bash`` ``powershell` | powershell/Watch-AzureLocalDeployment.ps1 | ✅ |
| 95 | `05-operational-foundations/phase-02-monitoring-observability/task-05-deploy-omimswac-monitoring` | `powershell` | powershell/Set-OmimswacConfiguration.ps1 | ✅ |
| 96 | `05-operational-foundations/phase-02-monitoring-observability/task-05-deploy-wac` | `powershell` | — | ⚠️ missing |
| 97 | `05-operational-foundations/phase-02-monitoring-observability/task-06-configure-network-device-logging` | `bash` | powershell/Deploy-SyslogVm.ps1 | ✅ |
| 98 | `05-operational-foundations/phase-03-backup-dr/task-01-configure-azure-backup` | `bash`` ``powershell` | azurecli/Set-BackupConfiguration.azcli.ps1<br/>powershell/Set-BackupConfiguration.ps1 | ✅ |
| 99 | `05-operational-foundations/phase-03-backup-dr/task-02-configure-site-recovery` | `bash`` ``powershell` | powershell/Set-SiteRecoveryConfiguration.ps1 | ✅ |
| 100 | `05-operational-foundations/phase-03-backup-dr/task-03-test-dr-procedures` | `bash`` ``powershell` | powershell/Test-DisasterRecovery.ps1 | ✅ |
| 101 | `05-operational-foundations/phase-04-security-governance/task-01-enable-defender-for-cloud` | `powershell` | powershell/Enable-DefenderForCloud.ps1 | ✅ |
| 102 | `05-operational-foundations/phase-04-security-governance/task-02-apply-azure-policy-initiatives` | `powershell` | powershell/Set-AzurePolicyConfiguration.ps1 | ✅ |
| 103 | `05-operational-foundations/phase-04-security-governance/task-03-configure-security-baselines` | `powershell` | powershell/Set-SecurityBaselines.ps1 | ✅ |
| 104 | `05-operational-foundations/phase-04-security-governance/task-04-enable-security-logging` | `powershell` | powershell/Set-SecurityLogging.ps1 | ✅ |
| 105 | `05-operational-foundations/phase-04-security-governance/task-05-configure-azure-update-manager` | `bash`` ``powershell` | powershell/Set-UpdateManagerConfiguration.ps1 | ✅ |
| 106 | `05-operational-foundations/phase-05-licensing-telemetry/task-01-enable-azure-hybrid-benefit` | `powershell` | powershell/Enable-AzureHybridBenefit.ps1 | ✅ |
| 107 | `05-operational-foundations/phase-05-licensing-telemetry/task-02-activate-windows-server-subscription` | `powershell` | powershell/Enable-WindowsServerSubscription.ps1 | ✅ |
| 108 | `05-operational-foundations/phase-05-licensing-telemetry/task-03-configure-enhanced-telemetry` | `powershell` | powershell/Set-TelemetryConfiguration.ps1 | ✅ |
| 109 | `06-testing-validation/task-01-infrastructure-health-validation` | `powershell` | powershell/Test-InfrastructureHealth.ps1 | ✅ |
| 110 | `06-testing-validation/task-02-vmfleet-storage-testing` | `powershell` | powershell/Invoke-VmFleetStorageTest.ps1 | ✅ |
| 111 | `06-testing-validation/task-03-network-rdma-validation` | `powershell` | powershell/Test-NetworkRdmaValidation.ps1 | ✅ |
| 112 | `06-testing-validation/task-04-high-availability-testing` | `powershell` | powershell/Test-HighAvailability.ps1 | ✅ |
| 113 | `06-testing-validation/task-05-security-compliance-validation` | `powershell` | powershell/Test-SecurityCompliance.ps1 | ✅ |
| 114 | `06-testing-validation/task-06-backup-dr-validation` | `powershell` | powershell/Test-BackupDrValidation.ps1 | ✅ |
