<template>
    <div class="case-files">
      <h1>Case Files</h1>
      <ul>
        <li v-for="caseFile in caseFiles" :key="caseFile.id">
          <h2>{{ caseFile.title }}</h2>
          <p>{{ caseFile.summary }}</p>
          <router-link :to="'/case-files/' + caseFile.id">Read more</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CaseFiles',
    data() {
      return {
        caseFiles: [],
      };
    },
    mounted() {
      // Fetch case files from the backend
      fetch('/api/cases')
        .then(response => response.json())
        .then(data => {
          this.caseFiles = data;
        })
        .catch(error => console.error('Error fetching cases:', error));
    },
  };
  </script>
  
  <style scoped>
  .case-files {
    max-width: 800px;
    margin: 50px auto;
  }
  .case-files ul {
    list-style-type: none;
    padding: 0;
  }
  .case-files li {
    margin: 20px 0;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
  }
  </style>
  