# E-commerce Backend

![Node.js](https://camo.githubusercontent.com/85cba226a1290d078f1a437aa87cb872a5bdb30037fa96b8afcddf163cd5b328/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4e6f64652e6a7326636f6c6f723d333339393333266c6f676f3d4e6f64652e6a73266c6f676f436f6c6f723d464646464646266c6162656c3d)
![MySQL](https://camo.githubusercontent.com/43cb8083b53aaf9847087cc27dcc556a66b7b1f32ca77c3091aed2e3f9c2c277/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4d7953514c26636f6c6f723d343437394131266c6f676f3d4d7953514c266c6f676f436f6c6f723d464646464646266c6162656c3d)
![Express.js](https://camo.githubusercontent.com/dd688eaaa262ca0022a159962f55bfd35cababef5df983fb2b3c136e62256b5e/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4578707265737326636f6c6f723d303030303030266c6f676f3d45787072657373266c6f676f436f6c6f723d464646464646266c6162656c3d)
![Sequelize](https://camo.githubusercontent.com/b4637d1df0ccfefc5971f0afab56330893bb86fc1b5299cb3fb3bc391ca24115/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d53657175656c697a6526636f6c6f723d323232323232266c6f676f3d53657175656c697a65266c6f676f436f6c6f723d353242304537266c6162656c3d)

## Built With

- Node.js
- MySQL
- Express
- Sequelize

## Description

This application creates the backend of an e-comerce website by using Express.js Framework and Sequelize ORM to interact with a MySQL database. It includes RESTful routes for **Products**, **Categories**, and **Tags**.

## Table of Contents

- [E-commerce Backend](#e-commerce-backend)
  - [Built With](#built-with)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Visuals](#visuals)
  - [Tests](#tests)
  - [Credits](#credits)
  - [References](#references)
  - [License](#license)
  - [Contributing](#contributing)
  - [Badges](#badges)
  - [Questions](#questions)

## Installation

- Download Node.js at [Node.js](https://nodejs.org/en) if not already installed. You can check if it is installed by typing `node-v` in your command line.
- Fork the repo to make a copy.
- Next, clone the project using `git clone https://github.com/ianahart/e-commerce-backend.git`.
- To install dependencies, make sure you're in the root of the project and run `npm install`.
- In the root of the directory create a `.env` file with your database credentials that match `env.EXAMPLE`.
- in a terminal window navigate to the root of the project directory and run `mysql -u root -p`.
- Once inside the MySQL shell run `source db/schema.sql;`
- In a terminal window run the command `npm run seed` to seed the database with e-commerce data.

## Usage

- To start the application, use either `node server.js` or `npm start`.
- To access the API routes you can use a web client such as [Insomnia](https://insomnia.rest/download) or [Postman](https://www.postman.com/)
  | Entity | Description | HTTP Method | Route |
  |------------|------------------------------|-------------|-----------------------------------------|
  | Categories | Manage categories | GET | http://localhost:3001/api/categories |
  | | | GET | http://localhost:3001/api/categories/{category_id} |
  | | | POST | http://localhost:3001/api/categories |
  | | | PUT | http://localhost:3001/api/categories/{category_id} |
  | | | DELETE | http://localhost:3001/api/categories/{category_id} |
  | Products | Manage products | GET | http://localhost:3001/api/products |
  | | | GET | http://localhost:3001/api/products/{product_id} |
  | | | POST | http://localhost:3001/api/products |
  | | | PUT | http://localhost:3001/api/products/{product_id} |
  | | | DELETE | http://localhost:3001/api/products/{product_id} |
  | Tags | Manage tags | GET | http://localhost:3001/api/tags |
  | | | GET | http://localhost:3001/api/tags/{tag_id} |
  | | | POST | http://localhost:3001/api/tags |
  | | | PUT | http://localhost:3001/api/tags/{tag_id} |
  | | | DELETE | http://localhost:3001/api/tags/{tag_id} |

## Visuals

<div>
  <video src="https://github.com/ianahart/e-commerce-backend/assets/29121238/90dfff32-8198-4dd4-afe1-4b5098935062" width="650" controls type="video/mp4" />
</div>


## Tests

N/A

## Credits

Starter files and working Express API provided by edX Boot Camps LLC.

## References

[Sequelize Documentation](https://sequelize.org/docs/v6/)

## License

This project is covered under MIT License

<details>
  <summary>
    License Text
  </summary>

```

Copyright (c) 2024  Ian Hart

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```

</details>

## Contributing

No contributions are being accepted at this time.

## Badges

[![GitHub license](https://img.shields.io/github/license/ianahart/e-commerce-backend)](https://github.com/ianahart/e-commerce-backend/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/ianahart/e-commerce-backend)](https://github.com/ianahart/e-commerce-backend/issues)
[![GitHub stars](https://img.shields.io/github/stars/ianahart/e-commerce-backend)](https://github.com/ianahart/e-commerce-backend/stargazers)

## Questions

- Get in touch with me through [email](mailto:ianalexhart@gmail.com).
- Check out my GitHub [profile](https://github.com/ianahart).
