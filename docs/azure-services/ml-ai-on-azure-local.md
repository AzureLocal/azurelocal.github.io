---
title: Machine Learning and AI on Azure Local
sidebar_position: 6
---

# Machine Learning and AI on Azure Local

Azure Local supports running machine learning inference, AI models, and intelligent edge workloads directly on on-premises infrastructure. By leveraging local GPU and compute resources, organizations can process data in real time at the point of origin — reducing latency, maintaining data sovereignty, and enabling AI in disconnected or bandwidth-constrained environments.

## Service Details

### What It Enables

ML and AI on Azure Local allows organizations to deploy trained machine learning models to on-premises infrastructure for local inference. Models are trained in the cloud (Azure Machine Learning) or locally, then deployed as containerized scoring endpoints on AKS clusters running on Azure Local. Azure Arc provides unified management across cloud-trained and edge-deployed models.

### Key Use Cases

- **Real-time inference at the edge** — Run computer vision, anomaly detection, or predictive maintenance models on factory floors, retail stores, or remote sites where cloud round-trips are too slow
- **Data sovereignty for AI** — Process sensitive data (medical imaging, classified telemetry) through AI models without the data ever leaving the local boundary
- **Disconnected AI** — Run inference in environments with intermittent or no cloud connectivity (military, maritime, mining)
- **AI-powered IoT** — Combine IoT data ingestion with ML inference on the same Azure Local infrastructure for real-time decision-making at the edge

### Architecture

- **Azure Machine Learning + Arc** — ML models registered in Azure ML can be deployed to Arc-connected AKS clusters on Azure Local
- **Inference endpoints** — Models run as containerized REST/gRPC endpoints on AKS, served via local network
- **GPU acceleration** — NVIDIA and Intel GPU passthrough or Discrete Device Assignment (DDA) provides hardware acceleration for inference
- **Data pipeline** — Local data sources feed into inference containers; results can be stored locally or synchronized to the cloud when connectivity is available
- **Model management** — Versioning, lineage, and monitoring handled through Azure ML; inference telemetry collected via Azure Arc

## Supported Features

- Model deployment to Arc-connected Kubernetes clusters
- GPU-accelerated inference (NVIDIA CUDA, Intel oneAPI)
- ONNX Runtime for cross-framework model execution
- Azure Machine Learning integration for model registry and versioning
- Batch and real-time inference patterns
- Azure Monitor integration for model performance metrics
- Support for PyTorch, TensorFlow, scikit-learn, and custom containers

## Deployment Notes

- Requires AKS on Azure Local with the Azure ML extension installed via Azure Arc
- GPU workloads require compatible hardware with DDA or GPU-P configured on cluster nodes
- Azure subscription required for Azure ML workspace and Arc integration
- Consider CPU-only inference for models that don't require GPU acceleration to simplify hardware requirements

## Limitations

- Model training at scale typically requires cloud GPU resources; on-premises training is limited to available local hardware
- Not all Azure ML features (e.g., AutoML, Designer) are available for Arc-connected deployments
- GPU availability and driver compatibility on Azure Local hardware varies by vendor
- Hardware and licensing requirements apply

## External References

- [Deploy Azure ML models to Arc-enabled Kubernetes — Microsoft Learn](https://learn.microsoft.com/azure/machine-learning/how-to-attach-kubernetes-anywhere)
- [Azure Arc-enabled machine learning — Microsoft Learn](https://learn.microsoft.com/azure/machine-learning/how-to-attach-kubernetes-to-workspace)
- [GPU acceleration on Azure Local — Microsoft Learn](https://learn.microsoft.com/azure-stack/hci/manage/use-gpu-with-clustered-vm)

> Data verified with Microsoft Azure Local documentation, March 2026.
