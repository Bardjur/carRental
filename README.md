# [carRental](https://bardjur.github.io/carRental/)
## application for a company that provides car rental services

The application consists of 3 pages:\
  • home page with a general description of the services provided by the company. Stylization and design at your discretion.\
  • a page containing a catalog of cars of various configurations, which the user can filter by brand, price per hour of car rental and the number of kilometers covered by the car during its operation (mileage).\
  • a page with ads that have been added by the user to favorites The appearance of the program should consist of a sidebar and a view area.\

### Technical task
  •  According to the layout, implement a car rental announcement card.
  •  8 ads should be rendered on the first page of the catalog, and the rest of them - after clicking on the Load more button.\
  •  If you click on the "heart" button on the ad card, it should be added to the list of favorites, and the color of the button should change.\
  •  When updating the page, the final result of the user's actions should be recorded. That is, if you add an ad to your favorites and refresh the page, the button still remains in the "favorite ad" state with the appropriate color.\
  •  If you click the heart button again, the ad should be removed from the list of favorites, and the color of the button should change to its original state.\
  •  If you click on the Learn more button, a modal window should open with detailed information about the car and its rental conditions.\
  •  The modal window should be closed by clicking on the button in the form of a "cross", by clicking on the backdrop or pressing the Esc key.\
  •  In the code, the mileage of the car must be written with one value (for example, 4500). In the UI - displayed with a comma (4,500).\
  •  The Rental car button should be implemented as a link that will allow the user to connect with the company by phone number +380730000000.\



## Available Scripts
#### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
