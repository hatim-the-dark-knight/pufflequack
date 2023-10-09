# easydineouts  

## About  
### "easydineouts" - A Quick Table Reservation Solution  

Looking to plan a delightful dining experience? EasyDineout, our user-friendly Telegram web app, simplifies restaurant reservations with a seamless interface. Here’s what you can do on easydineouts:

1. *Explore Popular Restaurants:*
   Browse through a curated list of popular restaurants nearby, showcasing their overall ratings and price ranges for a quick overview.

2. *Detailed Restaurant Profiles:*
   Dive into comprehensive restaurant profiles, presenting full menu details, easily expandable for better viewing. Discover opening and closing times, cuisine categories, and additional facilities like parking and card payments.

3. *Create Your Profile:*
   Input your profile details, including address and phone number, in the designated profile section. This information streamlines the reservation process for a hassle-free experience.

4. *Effortless Restaurant Search:*
   Utilize the search bar to swiftly find your favorite restaurants, making the decision-making process a breeze.

5. *Effective Filtering Options:*
   Narrow down your restaurant choices by filtering based on cuisine preferences and flat discount offers on various menu items.

6. *Table Reservations Made Easy:*
   Reserve a table at your chosen restaurant effortlessly by specifying the date, number of guests, and available time slots. Enjoy a savory delight with your loved ones.

Book your table now and savor a delightful dining experience with easydineouts!

## To run easydineouts

### Install node  
> https://nodejs.org/en/download  

#### Check if node is installed  
```bash
node --version
```
```bash 
npm --version
```  

### Install yarn  
```bash 
npm install --global yarn
```  

#### Check if yarn is installed  
```bash 
yarn --version
```  

### Install git
> https://git-scm.com/download/win  

#### Check if git is installed  
```bash 
git --version
```  

### Clone this project
```bash 
git clone https://github.com/hatim-the-dark-knight/pufflequack.git
```  

#### Change directory to where the _public_ and _src_ folders are stored 
```bash 
cd pufflequack
```  

### Install dependencies
```bash
yarn
```  

### Now, to run the project
```bash
yarn run dev
```
You can access the site from the link provided while running the above command.

## Server

To launch the bot, call this locally
```bash
node server\main.js
```
This command configures a server to listen for incoming commands from a user via a bot. When a command is received, the server processes it and responds accordingly.  

> Now open telegram, go to http://t.me/easydineouts_bot and start the bot using */start* command, launch the web app from the inline button "Book Table".


## To create a new project similar to this  

### Create a new project  
```bash
yarn create vite
```  
> Okay to proceed? y  
> Project name -> name-of-your-project  
> Select a framework -> React  
> Select javascript  
> Project name-of-your-project is created  

#### Change directory to where the _public_ and _src_ folders are stored 
```bash 
cd pufflequack
```  

### Install dependencies
```bash
yarn
```  

### Run the project
```bash
yarn run dev
```  

## Components used in this project  

easydineouts has *App*, *Cover*, *Home*, *Profile*, *Cuisines*, *TopOffers*, *SearchPage* components and there are components for each *Restaurant*. There are *Card*, *Modal*, *Content* components that are reused throught the code. There are other components *Header*, *SearchBar*, *CategoryMenu* and *Category* of Cuisines.  

### Index File

> This file is the entry point of the application.

#### Components Used

- `App`: The main component representing the application.
- `BrowserRouter`: Provides the `App` component with routing capabilities.

#### Rendering

- Renders the `App` component within a `BrowserRouter`.

#### External Dependencies

- Utilizes React for component rendering and management.
- Utilizes ReactDOM to render the root component into the DOM.
- Requires `App.jsx` for the main component.
- Requires `index.css` for styling.

### App Component

> This component is the main component of the application.

#### Components Used

- `Cover`: Displays a cover page at the beginning.
- `Home`: Represents the home page with popular restaurants.
- `Cuisines`: Represents the cuisines page with categories.
- `Restaurant`: Represents a single restaurant page.
- `TopOffers`: Represents the top offers page.
- `SearchPage`: Represents the search results page.
- `Profile`: Represents the user profile page.

#### Event Handling

- `goBack`: Navigates back to the previous page.

#### Initialization and Integration

- Sets up the Telegram bot, defines back button behavior, and enables closing confirmation.
- Utilizes React Router (`Routes` and `Route`) to define routing for different components.

#### External Dependencies

- Utilizes React for component creation and rendering.
- Requires Bootstrap CSS for styling (`bootstrap/dist/css/bootstrap.min.css`).
- Requires custom CSS for additional styling (`App.css`).
- Requires the various components mentioned above for rendering.

### Home Component

> This component represents the home page of the application.

#### Components Used

- `Header`: Displays the header section with location and profile.
- `CategoryMenu`: Displays the category menu for navigation.
- `SearchBar`: Provides a search bar for restaurant search.
- `Content`: Displays the content based on the selected category.

#### Rendering

- Renders the `Header`, `SearchBar`, `CategoryMenu`, and `Content` components.
- Sets the category for `Content` as an empty string to display popular restaurants.

#### External Dependencies

- Utilizes React for component creation and rendering.
- Requires a CSS file (`App.css`) for styling the component.
- Utilizes the `Header`, `CategoryMenu`, `SearchBar`, and `Content` components for rendering.


### Cover Component

> This component represents the cover page displayed during the app's initial loading.

#### Rendering

- Renders a cover page with the title "easydineouts."

#### Logic

- Utilizes `useEffect` to trigger the navigation to the home page (`/pufflequack/easydineouts`) after a delay of 2000 milliseconds.
- The delay simulates a loading screen before redirecting to the home page.

#### External Dependencies

- Utilizes React for component creation and rendering.
- Utilizes `react-router-dom` for navigation.
- Requires a CSS file (`Cover.css`) for styling the component.

### Profile Component

> This component represents the profile page where users can input and save their profile information.

#### State Management

- Utilizes React hooks to manage state:
  - `state`: Stores the user's profile information.
  - `showModal`: Controls the visibility of the success modal.

#### Event Handling

- `handleInputChange`: Handles input changes in the profile form and updates the state accordingly.
- `handleSubmit`: Handles form submission and displays a success modal with the profile details.
- `goBack`: Navigates back to the home page.

#### Rendering

- Renders a profile form with input fields for the user to input their details.
- Provides a button to save the profile information.
- Displays a success modal upon successful profile save.

#### Local Storage

- Stores and retrieves the user's profile state from local storage.

#### External Dependencies

- Utilizes React for component creation and rendering.
- Utilizes a Modal component for displaying success messages.
- Requires a CSS file (`Profile.css`) for styling the component.

### Cuisines Component

> The `Cuisines` component is a React functional component responsible for rendering a list of cuisines based on a specified category. It also includes a button to go back to the main page (`easydineouts`). The component utilizes the `Category` and `Content` components.

#### Imports

The necessary modules and components are imported:
- `React` for creating React components
- `useNavigate` from `react-router-dom` for navigation
- `Header`, `Content`, and `Category` components

#### Category Variable

A variable `category` is declared at the top of the file to store the category value based on the props or a default value.

#### Cuisines Component

The `Cuisines` functional component is defined:
- It takes `props` as a parameter, which includes a `category` prop.
- If `props.category` is undefined, the default value for `category` is set to "American" (you may want to modify this logic based on your use case).
- The `navigate` function is obtained using `useNavigate`, which will be used to navigate back to the main page.
- The component renders a back button, a content title ("Cuisines"), a `Category` component, and a `Content` component based on the specified category.

#### Export

The `Cuisines` component is exported as the default export.

### TopOffers Component

> This component represents the top offers page of the application.

#### Components Used

- `Content`: Displays the content based on the selected category.

#### Event Handling

- `goBack`: Navigates back to the previous page.

#### Rendering

- Renders the `Content` component to display top offers based on an empty category.

#### External Dependencies

- Utilizes React for component creation and rendering.
- Requires the `Content` component for rendering.

### SearchPage Component

> This component represents the page displaying search results.

#### State Management

The component uses React hooks for managing state and location:
- `location`: Retrieves the current location information (state and pathname).
- `item`: Extracts the search query from the location state for filtering.

#### Navigation

- `navigate`: Utilizes the `useNavigate` hook to navigate to the previous page.
- `goBack`: Handles navigation to the previous page when the back button is clicked.

#### Rendering

- Renders a button for navigating back to the previous page.
- Displays a grid of cards based on filtered search results.
- Each card is a clickable link to navigate to a specific restaurant's details page.

### Restaurant Component

> This component represents a page displaying details of a restaurant and allows table reservation.

#### State Management

The component uses React hooks to manage state:
- `state`: Manages reservation details like date, seats, and time slot.
- `showModal`: Controls the visibility of the reservation modal.
- `showMenu`: Toggles the visibility of the restaurant menu.

#### Event Handling

- `handleInputChange`: Handles input changes in the reservation form.
- `handleSubmit`: Handles form submission for table reservation.
- `goBack`: Navigates back to the previous page.
- `onClickMenu`: Handles click events to show or hide the restaurant menu.

#### Rendering

- Renders restaurant details using a Card component.
- Renders a form for table reservation, including date, seats, and time slot selection.
- Displays a modal for confirming the reservation.
- Displays additional information about the restaurant, including menu and features.

#### External Dependencies

- Uses `react-router-dom` for navigation.
- Utilizes a Modal component for displaying reservation details.
- Utilizes a Card component for displaying restaurant details.

### Card Component

> This component represents a card displaying restaurant details.

#### Props

The component receives the following props:
- `card`: An object containing details like name, place, category, rating, price, image, offers, and menu.

#### Rendering

- Displays a card layout with restaurant details:
  - Image
  - Offer if available
  - Name of the restaurant
  - Location
  - Rating
  - Cuisine category
  - Price range

#### Conditional Rendering

- If offers are available, it displays the offer percentage.

#### Styling

- Utilizes a CSS file (`Card.css`) for styling the card component.

#### External Dependencies

- Requires React for component creation and rendering.

### Modal Component

> This component represents a simple modal for displaying messages.

#### Props

The component receives the following props:
- `showModal`: A boolean indicating whether the modal should be displayed or not.
- `message`: The message to be displayed in the modal.
- `onClose`: A function to close the modal.

#### Rendering

- Renders a modal containing:
  - A header with a title ("Success" in this case).
  - A body displaying the message passed through props.
  - A footer with a close button.

#### Logic

- Checks whether the modal should be displayed based on the `showModal` prop.
- Provides a function `onClose` to close the modal when the close button is clicked.

#### External Dependencies

- Utilizes React for component creation and rendering.
- Requires a CSS file (`Modal.css`) for styling the component.

### Content Component

> This component represents the content section for displaying restaurant cards based on the selected category.

#### Props

The component receives the following props:
- `category`: The selected category to filter the content.

#### Data Filtering

- Filters restaurant data based on the selected category or displays all restaurants if no category is selected.

#### Rendering

- Renders a grid of restaurant cards based on the filtered data.
- Each card is a clickable link to navigate to a specific restaurant's details page.

#### External Dependencies

- Utilizes React for component creation and rendering.
- Utilizes `react-router-dom` for navigation.
- Utilizes a Card component for displaying restaurant details.
- Requires a CSS file (`Content.css`) for styling the component.

#### Logic

- Filters the displayed restaurant cards based on the selected category.

### Header Component

> This component represents the header section of the application.

#### Rendering

- Renders a header with a top bar containing:
  - A location label displaying a sample location (Kochi, Kerala).
  - An icon for navigating back to the profile page (`/pufflequack/easydineouts/profile`).

#### Logic

- Utilizes `useNavigate` from `react-router-dom` for navigation.
- Provides a function `goBack` to navigate back to the profile page.

#### External Dependencies

- Utilizes React for component creation and rendering.
- Requires a CSS file (`Header.css`) for styling the component.

### SearchBar Component

> This component represents a search bar used for searching restaurants.

#### State Management

The component utilizes React hooks to manage state:
- `query`: Stores the search query.
- `filteredItems`: Filters the search based on the entered query using data from `categories.json`.

#### Event Handling

- `onSearchEnterPressed`: Executes a search when the Enter key is pressed.
- `onSearchBarClicked`: Handles the search bar click event, revealing drop-down options.
- `handleChange`: Updates the query state based on user input.

#### Rendering

- Renders a styled input for search with event handlers for clicks and key presses.
- Displays filtered search results in a drop-down format using a hidden CSS class.
- Each result is a clickable link to navigate to the search page with the respective search query as state.

### CategoryMenu Component

> This component represents a category menu for navigation.

#### Rendering

- Renders a menu consisting of buttons that link to specific category pages.

#### External Dependencies

- Utilizes React for component creation and rendering.
- Utilizes `react-bootstrap` components for styling and layout.
- Utilizes `react-router-dom` for navigation.
- Requires a CSS file (`CategoryMenu.css`) for additional styling.

#### Navigation

- Contains buttons that link to different categories like "Top Offers" and "Cuisines."

#### Logic

- Utilizes `Link` from `react-router-dom` to create links for navigation to specific routes.

### Category Component

> This component represents a list of unique restaurant categories.

#### Data Filtering

- Utilizes data from `categories.json` to filter and extract unique restaurant categories.

#### Rendering

- Renders a list of categories as buttons, each linking to a specific category page.

#### External Dependencies

- Utilizes React for component creation and rendering.
- Utilizes `react-router-dom` for navigation.
- Requires a CSS file (`Category.css`) for styling the component.

#### Logic

- Filters unique categories from the provided restaurant data and maps them to buttons for navigation.

## Easy Dineout Web App - Potential Errors and Exceptions

1. *Server Errors*
2. *Navigation Errors*
3. *Data Fetching Errors*
4. *State Management Errors*
5. *Form Submission Errors*
6. *Component Loading Errors*
7. *Compatibility Issues*
8. *Search Functionality Errors*
9. *UI/UX Inconsistencies*
10. *Dependency Version Conflicts*


## Deployment  

The deployment was done using GitHub Actions.  
- First, you need to set up a workflow similkar to the one in the .github/workflows/deploy.yml.  
- Second, you need to go to *Settings*, under *Code and Automation*, click on *Pages*. Under *Build and Deployment*, blow that *Source*, select *GitHub Actions*.  
  
Now , every time you push a commit, the website is updated.
