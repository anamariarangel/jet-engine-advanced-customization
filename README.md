# JetEngine Calendar Customization with JavaScript

This project showcases an advanced customization of a JetEngine calendar listing in WordPress using JavaScript. It demonstrates the ability to dynamically fetch and display detailed post data in a popup when interacting with events on the calendar.

## Overview

This script is part of a WordPress customization project, designed specifically to enhance the default functionality of the JetEngine calendar. By integrating JavaScript with the JetEngine REST API, this customization allows users to interact with calendar events and view detailed information dynamically within a popup.

### Key Skills Demonstrated
- Advanced WordPress development using JetEngine.
- Integration of JavaScript with REST API for data fetching.
- DOM manipulation and dynamic content rendering.
- Handling asynchronous API requests and error management.
- Multi-instance support for complex calendar listings.

## Installation & Setup

To use this customization, follow the steps below:

1. **Adding the Script:**
   - Copy the JavaScript code provided and add it to the **Custom Code** section in Elementor Pro or another similar plugin that supports adding JavaScript to WordPress pages.

2. **Ensure API Endpoint Availability:**
   - The script interacts with the WordPress REST API to retrieve post data. Make sure that the endpoint `/wp-json/wp/v2/events/{postId}` is properly configured and accessible.

3. **Activate on the Calendar Page:**
   - Make sure to enable the script on pages where the JetEngine calendar is used, so it can trigger the popup functionality when interacting with events.

## How It Works

This JavaScript code interacts directly with a JetEngine calendar listing by:

1. **Detecting Click Events:**
   - The script listens for clicks on calendar events and identifies the event’s `data-post-id` attribute.

2. **Fetching Data via REST API:**
   - When a calendar event is clicked, the script sends a request to the WordPress REST API using the event's post ID.
   - It retrieves information such as process number, start and end date, type, category, and more.

3. **Displaying Data in a Popup:**
   - The data is dynamically rendered inside a popup, providing users with detailed information about the selected event without leaving the calendar view.

4. **Handling Multiple Calendars:**
   - Supports multiple calendars on the same page, distinguishing between different popups based on the calendar clicked.

## Features & Benefits

- **Real-Time Data Interaction:** Allows users to view event details dynamically by integrating JavaScript with the WordPress REST API.
- **Enhanced User Experience:** Provides an intuitive interface for users to interact with calendar events and view detailed information without page reloads.
- **Scalable Customization:** The code can be adapted to display additional fields, making it flexible for various use cases.

## Why This Matters

This project is designed to demonstrate the customization capabilities of the JetEngine plugin using JavaScript. It serves as an example of how JavaScript can enhance WordPress functionality beyond what is achievable with standard configurations. 

### Ideal Use Case
This code is intended primarily for demonstration purposes to show potential employers my ability to:
- Customize complex WordPress functionalities using JetEngine.
- Implement seamless data fetching and display using JavaScript.
- Develop solutions that improve user experience in real-time.

## Customization Potential

Employers and developers can extend the functionality of this code by:
- Adding more fields to be fetched and displayed in the popup.
- Adjusting the layout and styling to match different design requirements.
- Modifying the API endpoint to work with other custom post types or data sources.

## About the Developer

I am Ana Maria Rangel, a WordPress developer with experience in customizing advanced features using tools like JetEngine, Elementor Pro, and JavaScript. This project is part of my portfolio to demonstrate my capability to integrate JavaScript with WordPress for dynamic functionality enhancements.

## License

This project is shared under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to reach out if you have any questions about this project or my development skills. I'm open to opportunities that involve advanced WordPress customization and front-end integration.
