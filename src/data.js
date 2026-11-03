// Replace placeholder URLs before publishing.
export const profile = {
  name: 'Che-Wei Lin',
  title: 'Software Engineer & AI/ML Engineer',
  location: 'Tempe, Arizona',
  email: 'edwardaustin890625@gmail.com', // e.g. 'hello@example.com'
  github: 'https://github.com/Edward0421', // e.g. 'https://github.com/yourusername'
  linkedin: 'https://www.linkedin.com/in/edward-lin-050538279', // e.g. 'https://linkedin.com/in/yourprofile'
};
// Project summaries based on Che_Wei_Lin_Projects.pdf. Add verified project URLs when available.
export const projects = [
  {
    "number": "01",
    "title": "American Sign Language Recognition with a Robotic Hand Simulator",
    "type": "Computer Vision / Deep Learning",
    "description": "Built a video-based ASL recognition pipeline on WLASL2000, comparing I3D and TimeSformer and integrating MediaPipe hand tracking with a robotic hand simulator. TimeSformer achieved 91.73% top-1 accuracy in the project evaluation.",
    "tags": [
      "Python",
      "PyTorch",
      "TimeSformer",
      "MediaPipe",
      "OpenCV"
    ],
    "github": "",
    "demo": ""
  },
  {
    "number": "02",
    "title": "Secure RAG for Privacy-Preserving LLM Applications",
    "type": "LLM Applications / Privacy",
    "description": "Developed a security-focused RAG framework combining PII detection and redaction through named entity recognition, regular expressions, and WordNet semantic expansion. Explored context-based retrieval permissions and evaluated redaction behavior across sensitive document examples, including over-redaction limitations.",
    "tags": [
      "Python",
      "RAG",
      "NLP",
      "WordNet",
      "Access Control"
    ],
    "github": "",
    "demo": ""
  },
  {
    "number": "03",
    "title": "MeshCNN Architecture and Geometric Feature Analysis",
    "type": "3D Learning / Geometry Processing",
    "description": "Modified MeshCNN to compare coordinate-based edge features, aggregation strategies, and architectures without mesh pooling. Removing pooling preserved the approximately 1.321M parameter count but increased GPU memory usage from 2.1 GB to 2.5 GB, demonstrating the memory benefit of hierarchical edge reduction.",
    "tags": [
      "Python",
      "PyTorch",
      "MeshCNN",
      "3D Geometry",
      "Mesh Processing"
    ],
    "github": "",
    "demo": ""
  },
  {
    "number": "04",
    "title": "Fake Review Detection: Machine Learning vs. LLMs",
    "type": "Machine Learning / LLM Evaluation",
    "description": "Compared supervised classifiers and LLM prompting strategies for fake-review detection on Yelp data, using precision, recall, F1, MCC, and AUC-ROC. Random Forest performed best in the study, achieving 0.871 AUC-ROC and 0.746 MCC and outperforming the tested LLM configurations.",
    "tags": [
      "Python",
      "Random Forest",
      "Gemini",
      "Llama",
      "Prompt Engineering"
    ],
    "github": "",
    "demo": ""
  },
  {
    "number": "05",
    "title": "Aether Monitor: AI-Assisted Air Quality Telemetry",
    "type": "Geospatial Visualization / AI Applications",
    "description": "Built a frontend air-quality platform that turns environmental data into 3D maps, responsive particle visualizations, procedural audio, and Gemini-generated explanations. Integrated external data APIs and organized mapping, historical data, AI analysis, and audio into modular components.",
    "tags": [
      "JavaScript",
      "MapLibre GL JS",
      "WebGL",
      "Web Audio API",
      "Gemini AI"
    ],
    "github": "",
    "demo": ""
  },
  {
    "number": "06",
    "title": "Benchmarking LLM Tabular Summarization",
    "type": "LLM Evaluation / Data Engineering",
    "description": "Created an 800-game MLB benchmark using Selenium to collect play-by-play narratives and ground-truth statistics. Evaluated Gemini 2.0 Flash on generating line-score, pitcher, and batter tables using accuracy and RMSE, revealing stronger line-score performance and limitations in numerical reasoning and output consistency.",
    "tags": [
      "Python",
      "Gemini 2.0 Flash",
      "Selenium",
      "Prompt Engineering",
      "Data Evaluation"
    ],
    "github": "",
    "demo": ""
  },
  {
    "number": "07",
    "title": "Credit Score Prediction Using Machine Learning",
    "type": "Machine Learning / Tabular Classification",
    "description": "Built a three-class credit-score prediction pipeline with data cleaning, financial feature engineering, scaling, and model comparison. Tuned Random Forest and k-NN using 5-fold GridSearchCV; Random Forest achieved the strongest overall result at approximately 67% test accuracy.",
    "tags": [
      "Python",
      "scikit-learn",
      "TensorFlow",
      "Pandas",
      "Random Forest"
    ],
    "github": "",
    "demo": ""
  },
  {
    "number": "08",
    "title": "Distributed Streaming Data Pipeline on Kubernetes",
    "type": "Distributed Systems / Streaming Data",
    "description": "Built a containerized pipeline to ingest streaming documents through Kafka and store graph-structured records in Neo4j via Kafka Connect. Deployed Kafka, ZooKeeper, and Neo4j on Minikube using Kubernetes manifests and Helm, with Neo4j Graph Data Science configured for downstream analytics.",
    "tags": [
      "Kafka",
      "Kubernetes",
      "Docker",
      "Neo4j",
      "Kafka Connect"
    ],
    "github": "",
    "demo": ""
  },
  {
    "number": "09",
    "title": "WineChain: Wine Supply Chain Provenance",
    "type": "Blockchain / Full Stack",
    "description": "Developed React dashboards for tracing wine bottles across wineries, distributors, retailers, regulators, and consumers. Integrated Ethereum contracts through Ethers.js, modeling bottles as ERC-721 tokens with controlled lifecycle transitions and storing larger metadata off-chain in IPFS.",
    "tags": [
      "React",
      "Solidity",
      "Ethereum",
      "Ethers.js",
      "IPFS"
    ],
    "github": "",
    "demo": ""
  },
  {
    "number": "10",
    "title": "Containerized Graph Analytics Platform",
    "type": "Graph Analytics / Data Infrastructure",
    "description": "Built a Dockerized Neo4j environment to load and analyze NYC Taxi data as a graph of pickup and drop-off locations connected by trips. Configured the Graph Data Science library and implemented PageRank and breadth-first search for ranking and traversal.",
    "tags": [
      "Docker",
      "Neo4j",
      "Neo4j GDS",
      "Python",
      "Cypher"
    ],
    "github": "",
    "demo": ""
  },
  {
    "number": "11",
    "title": "Database Partitioning, Query Processing, and NoSQL Storage",
    "type": "Database Systems / Storage Engineering",
    "description": "Implemented PostgreSQL range and round-robin partitioning, trigger-based insert routing, and range and point queries. Built C++ RocksDB components for key-value retrieval, iteration, and deletion; all implemented components passed the provided automated test suites.",
    "tags": [
      "Python",
      "C++",
      "PostgreSQL",
      "RocksDB",
      "PL/pgSQL"
    ],
    "github": "",
    "demo": ""
  },
  {
    "number": "12",
    "title": "Spherical Conformal Mapping",
    "type": "Computer Graphics / Geometry Processing",
    "description": "Implemented spherical conformal parameterization in C++ using a halfedge mesh representation and iterative energy minimization. Evaluated the mapping on a UCLA brain cortical surface model and exported the resulting spherical mesh as OBJ while approximately preserving local angles.",
    "tags": [
      "C++",
      "Geometry Processing",
      "Halfedge Mesh",
      "Numerical Optimization"
    ],
    "github": "",
    "demo": ""
  },
  {
    "number": "13",
    "title": "Loop Subdivision for 3D Meshes",
    "type": "Computer Graphics / Mesh Processing",
    "description": "Implemented Loop subdivision on triangular meshes with a halfedge data structure, updating vertex positions and refining mesh connectivity. Evaluated progressively smoother surfaces on the Utah teapot and Stanford bunny after one and two subdivision iterations.",
    "tags": [
      "C++",
      "Loop Subdivision",
      "Halfedge Mesh",
      "3D Geometry"
    ],
    "github": "",
    "demo": ""
  },
  {
    "number": "14",
    "title": "ROS-Based SLAM with TurtleBot3",
    "type": "Robotics / Localization and Mapping",
    "description": "Implemented a basic SLAM pipeline for a simulated TurtleBot3 in Gazebo. Built ROS publishers and subscribers, transformed robot coordinates into world and grid-map coordinates, and used launch configurations and RViz to run and inspect mapping behavior.",
    "tags": [
      "ROS",
      "Python",
      "TurtleBot3",
      "Gazebo",
      "RViz"
    ],
    "github": "",
    "demo": ""
  },
  {
    "number": "15",
    "title": "Vision-Based Robotic Pick-and-Place System",
    "type": "Robotics / Computer Vision",
    "description": "Implemented perception components for a simulated robotic manipulator that detects colored blocks and sorts them into corresponding bins. Connected image-based block positions and color classification to a state-machine-driven workflow with MoveIt trajectory generation in Gazebo.",
    "tags": [
      "ROS",
      "Python",
      "Computer Vision",
      "Gazebo",
      "MoveIt"
    ],
    "github": "",
    "demo": ""
  }
];
