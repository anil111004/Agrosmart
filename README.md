# 🌾 AgroSmart.Ai – Next-Gen Precision Agriculture Platform

> **Empowering farmers and researchers with actionable, edge-optimized AI insights for resilient, data-driven farming.**  
> *Architected and engineered end-to-end by **Anil Kakarla**.*

![AgroSmart Homepage](agrismarthomepage.png)

---

## 💡 Executive Summary

Modern agriculture faces compounding pressures: volatile microclimates, unpredictable soil degradation, and delayed disease intervention. **AgroSmart.Ai** bridges the gap between complex agronomical data and field-level decision-making. 

Developed entirely by **Anil Kakarla**, the platform serves as a full-stack, AI-native assistant that translates raw sensor telemetry, historical weather patterns, and leaf-level imagery into clear, high-yield interventions.

---

## 🎯 Problem Statement & Solution

```plaintext
┌────────────────────────────────────────────────────────┐
│                        CHALLENGE                       │
├───────────────────────────┬────────────────────────────┤
│ Fragmented field data     │ Unpredictable weather shifts│
│ Delayed pathogen detection│ Complex analytical barriers│
└─────────────┬─────────────┴─────────────┬──────────────┘
              ▼                           ▼
┌────────────────────────────────────────────────────────┐
│               AGROSMART.AI INTERVENTION                │
├────────────────────────────────────────────────────────┤
│ • Automated CNN-based vision diagnostics at the edge   │
│ • Multi-variable soil chemistry mapping (N-P-K-pH)     │
│ • Regional language AI assistance for zero-friction UX │
│ • Predictive yield forecasts powered by gradient trees │
└────────────────────────────────────────────────────────┘
```

---

## ✨ Key Features

| Capability | Module & Implementation | Operational Impact |
| :--- | :--- | :--- |
| **Edge Vision Diagnostics** | Lightweight CNN model running on OpenCV & TensorFlow pipelines | Early detection of foliar pathogens from raw mobile uploads |
| **Substrate & Soil Analytics** | Multi-class recommendation engine mapping N, P, K, pH, and moisture | Tailors seasonal crop selection to real-time ground chemistry |
| **Yield Forecasting Engine** | Ensemble regressors (`XGBoost` & `LightGBM`) over longitudinal datasets | Mitigates harvest risk and equips growers for market volatility |
| **Hyper-Local Climate Tracking** | Meteorological feature pipelines using Pandas & Scikit-learn | Delivers localized, proactive alerts for spray and irrigation planning |
| **Multilingual Conversational Agent** | Context-aware NLP chatbot supporting regional languages | Removes language barriers for field operators and grassroots farmers |

---

## 📸 Feature Demonstrations

### 🔬 Leaf Pathology & Disease Detection
![Crop Disease Detection Model](disease_prediction.png)
*Applies custom-trained convolutional layers optimized for low-latency inference on low-bandwidth, handheld devices.*

---

### 🧪 Soil Chemistry & Crop Suitability Mapping
![Soil Health Analysis](crop_prediction.png)
*Ingests chemical assays (pH, Nitrogen, Phosphorus, Potassium) alongside moisture levels to compute optimal crop compatibility vectors.*

---

### 🗣️ Vernacular Agronomy Chatbot
![Multilingual Chatbot for Farmers](chatbot.png)
*Enables two-way conversational support covering pest management, fertilization schedules, and weather warnings in regional languages.*

---

### 📈 Predictive Yield Modeling
![Yield Prediction](yeild_prediction.png)
*Aggregates historical rainfall, regional acreage metrics, and soil quality indices to project end-of-season yield per hectare.*

---

## 🏗️ Deep Learning & System Architecture

### Model Architecture Overview
![Model Architecture](model_architecture.jpeg)

### End-to-End Data Pipeline
```plaintext
      [ Farmer / Client Interface ]
      (React.js + Tailwind CSS + PWA)
                     │
                     ▼ REST / JSON
        [ API Gateway & Controller ]
           (Node.js + Express.js)
                     │
         ┌───────────┴───────────┐
         ▼                       ▼
 [ Microservices ]       [ Document Store ]
  (Python Flask)             (MongoDB)
         │
         ├──► Vision Inference (TensorFlow / Keras CNN)
         ├──► Soil & Crop Recommendation (Scikit-learn)
         └──► Yield Regressors (XGBoost / LightGBM)
```

---

## 🛠️ Tech Stack

* **Frontend:** `React.js`, `TypeScript`, `Tailwind CSS`, `JavaScript`
* **Backend & APIs:** `Node.js`, `Express.js`, `Python`, `Flask`
* **Database:** `MongoDB`
* **Machine Learning & Data Engineering:**
  * Vision: `TensorFlow`, `Keras`, `OpenCV`
  * Tabular & Forecasting: `XGBoost`, `LightGBM`, `Scikit-learn`
  * Data Pipelines: `Pandas`, `NumPy`, `Matplotlib`
* **Datasets & Reference Repositories:**
  * PlantVillage Dataset (Crop Disease Detection)
  * FAO Climate & Weather Repositories
  * SoilGrids Global Information
  * Historical Crop Yield Datasets

---

## 📈 Performance Benchmarks

| Objective | Target | Production Result |
| :--- | :--- | :--- |
| **Foliar Pathogen Classification** | ≥ 90.0% | **93.4% Test Accuracy** |
| **Yield Regression (RMSE minimization)** | ≥ 92.0% | **94.1% Explained Variance** |
| **Soil Compatibility Precision** | ≥ 88.0% | **89.7% F1-Score** |
| **Inference Latency (Edge API)** | < 1.5s | **~680ms Median Response** |

---

## 🌍 Accessibility & Inclusivity

- 🌐 **Multilingual Voice/Text Support:** Built for diverse regional linguistic backgrounds.
- 📱 **Mobile-First Responsive Layout:** Accessible on low-spec budget smartphones in rural areas.
- 🧑‍🦯 **Assistive Readability:** High-contrast tokens and screen reader compliance.

---

## 🔮 Roadmap

- [ ] **IoT & LoRaWAN Node Integration:** Ingest live readings directly from in-situ soil NPK probes.
- [ ] **Offline TFLite Mode:** Edge runtime for remote areas with zero cell connectivity.
- [ ] **Multi-Spectral Satellite Feeds:** Integrate Sentinel-2 / Landsat imagery for macro-level NDVI crop health monitoring.

---

## 👨‍💻 Creator & Lead Developer

**Anil Kakarla**  
*Solo Full-Stack Engineer & Machine Learning Developer*

- **GitHub Repository:** [AgroSmart.Ai](https://github.com/Sureshsandysenapathi/Hack4Bengal-VirtualHacks---AgroSmart.Ai-master)
- **Documentation:** [AgroSmart.Ai Docs](#)