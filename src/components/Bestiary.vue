<template>
    <div class="bestiary">
      <div class="header">
        <h1>HOLHACUIND</h1>
      </div>
      <div class="content">
        <div class="main-display">
          <img src="" alt="Whale">
          <div class="stats">
            <div class="stat">388%</div>
            <div class="stat">121: 4%</div>
          </div>
        </div>
        <div class="charts">
          <div class="chart">
            <h2>Chart 1</h2>
            <div class="chart-content"></div>
          </div>
          <div class="chart">
            <h2>Chart 2</h2>
            <div class="chart-content"></div>
          </div>
          <div class="chart">
            <h2>Chart 3</h2>
            <div class="chart-content"></div>
          </div>
          <div class="chart">
            <h2>Chart 4</h2>
            <div class="chart-content"></div>
          </div>
        </div>
        <div class="footer">
          <div class="footer-stat">911%</div>
          <div class="footer-stat">94.77</div>
          <div class="footer-stat">50%</div>
          <div class="footer-stat">29%</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Bestiary',
  };
  </script>
  
  <style scoped>
  .bestiary {
    background-color: #1a1a2e;
    color: #00d4ff;
    font-family: 'Arial', sans-serif;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }
  
  .header {
    margin-bottom: 20px;
  }
  
  .header h1 {
    font-size: 36px;
    color: #00d4ff;
  }
  
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .main-display {
    position: relative;
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
  }
  
  .main-display img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  
  .stats {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .stat {
    font-size: 24px;
    background: rgba(0, 0, 0, 0.6);
    padding: 5px 10px;
    border-radius: 5px;
  }
  
  .charts {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  
  .chart {
    background: rgba(0, 0, 0, 0.3);
    padding: 20px;
    border-radius: 10px;
    flex: 1 1 40%;
    max-width: 45%;
    min-width: 300px;
  }
  
  .chart h2 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #00d4ff;
  }
  
  .chart-content {
    height: 100px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }
  
  .footer {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  
  .footer-stat {
    font-size: 20px;
    background: rgba(0, 0, 0, 0.6);
    padding: 10px 20px;
    border-radius: 5px;
  }
  </style>
  