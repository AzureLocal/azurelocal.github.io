---
title: IoT Operations on Azure Local
sidebar_position: 7
---

# IoT Operations on Azure Local

Azure IoT Operations on Azure Local brings industrial-grade IoT data processing, device management, and real-time analytics to on-premises and edge infrastructure. It enables organizations to ingest, process, and act on IoT data locally — close to the devices and sensors generating it — while maintaining connectivity to Azure for cloud analytics and fleet management.

## Service Details

### What It Enables

IoT Operations on Azure Local runs as a set of Arc-enabled services on AKS clusters deployed on Azure Local infrastructure. It provides a local data plane for IoT workloads: ingesting device telemetry, running MQTT brokers, executing real-time data pipelines, and forwarding processed data to cloud services when needed.

### Key Use Cases

- **Manufacturing and industrial IoT** — Collect sensor data from PLCs, SCADA systems, and OT devices; process it locally for real-time quality control, predictive maintenance, and process optimization
- **Retail and smart buildings** — Manage IoT devices (cameras, environmental sensors, POS systems) at individual sites with local processing and cloud-synced dashboards
- **Energy and utilities** — Run edge analytics on grid telemetry, smart meters, and field devices in locations with limited or intermittent connectivity
- **Healthcare** — Process medical device telemetry locally for patient monitoring while meeting data residency requirements

### Architecture

- **Azure IoT Operations** — Deploys as an Arc extension on AKS on Azure Local, providing an MQTT broker, data pipelines, and asset management
- **MQTT Broker** — Local MQTT v5 broker for device-to-cloud and cloud-to-device messaging, replacing the need for a cloud MQTT endpoint
- **Data pipelines** — Process, transform, and route IoT data locally using configurable data flows
- **Asset management** — Discover and manage OPC UA assets and other industrial devices from the Azure portal via Azure Arc
- **Cloud sync** — Processed data can be forwarded to Azure IoT Hub, Event Hubs, or Data Explorer for cloud-scale analytics

## Supported Features

- Local MQTT broker with persistent sessions
- OPC UA asset discovery and management
- Configurable data pipelines for local processing
- Integration with Azure IoT Hub (hybrid telemetry forwarding)
- Azure Digital Twins integration
- Azure Monitor and dashboards for operational visibility
- Edge-native event processing and alerting
- Disconnected operation with store-and-forward

## Deployment Notes

- Requires AKS on Azure Local with the Azure IoT Operations extension via Azure Arc
- Azure subscription required for Arc-enabled IoT Operations management
- Network access to OT/IoT devices required (may need dedicated VLAN or network segmentation)
- MQTT broker sizing depends on device count and message throughput

## Limitations

- Some Azure IoT Hub cloud features (e.g., Device Provisioning Service automatic enrollment) require cloud connectivity
- OPC UA asset support depends on device firmware and protocol compliance
- Throughput limited by local cluster compute and network capacity
- Hardware and licensing requirements apply

## External References

- [Azure IoT Operations overview — Microsoft Learn](https://learn.microsoft.com/azure/iot-operations/overview-iot-operations)
- [Deploy Azure IoT Operations — Microsoft Learn](https://learn.microsoft.com/azure/iot-operations/deploy-iot-ops/howto-deploy-iot-operations)
- [Azure IoT Operations MQTT broker — Microsoft Learn](https://learn.microsoft.com/azure/iot-operations/manage-mqtt-broker/overview-iot-mq)

> Data verified with Microsoft Azure Local documentation, March 2026.
