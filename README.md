# Frontend Technical Test

This is a React project created as a solution to the [Frontend test](https://github.com/luuna-tech/test/tree/master/frontend) created by [`Luuna's Tech Team`](https://github.com/luuna-tech/)

### Technologies Used
- **React**: Version 18. React is a JavaScript library for building user interfaces using reusable components.
- **Material-UI (MUI)**: Version 6. A popular UI component library for React that implements Google's Material Design.

### Principal Libraries Used

#### 1. Axios (^1.7.7)
- **Description**: Axios is a promise-based HTTP client for the browser and Node.js. It makes asynchronous HTTP requests to REST endpoints and provides easy handling of requests and responses.
- **Usage**: Commonly used for API calls to interact with external data sources, such as making GET, POST, PUT, or DELETE requests.
- **Example**:
  ```javascript
  import axios from 'axios';

  axios.get('https://api.example.com/data')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });

#### 2. react-loading-indicators (^1.0.0)
- **Description**: Description: A simple React library for adding loading indicators. It helps display visual feedback to users while waiting for asynchronous tasks to complete, improving user experience.
- **Usage**: Useful for showing loading states during API calls or other proces
- **Example**:
  ```typescript
  import LoadingIndicator from 'react-loading-indicators'
    function MyComponent({ loading }) {
    return (
        <>
        {loading && <LoadingIndicator color="blue" size="medium" />}
        </>
    );
    }

#### 3. react-router-dom (^6.27.0)
- **Description**: A collection of navigational components that compose declaratively with your application. It enables client-side routing and allows for single-page applications with dynamic navigation.
- **Usage**: Essential for managing in-app navigation and routing different components or pages based on the URL.
- **Example**:
  ```javascript
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Home from './Home';
    import About from './About';

    function App() {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </Router>
    );
    }

### Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/fmoralesjmc/front-technical-test.git
   cd front-technical-test

3. **Set up environment variables:**: Create a .env file at the root of the project and add the necessary variables, e.g.:
   ```bash
   REACT_APP_GITHUB_API_URL=https://api.github.com
   REACT_APP_GITHUB_TOKEN=your_github_token


3. **Install dependencies:**:🧩 		

First, install all the packages needed for the project

```bash
npm install
```

Then, run the development server:

```bash
npm start
```
## Demo 🚀

You can try the live demo on the next link in Vercel-> https://front-technical-test-kappa.vercel.app/

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
