# Cek Khodam

Cek Khodam is a web application that allows users to input their name to find out their khodam (spiritual guardian). This project is styled to give a mystic and dark theme, enhancing the user experience with engaging animations and elements.

![Main Interface](https://telegra.ph/file/158d6518af3cc4f5dc83b.jpg)

## Features

- **Mystic Name Input**: Users can input their name to discover their khodam.
- **Random Khodam Selection**: Each input results in a randomly selected khodam with a unique description.
- **Usage Limit**: Each user has a daily limit on how many times they can use the service, which resets every 24 hours.
- **IP-based Usage Tracking**: The app tracks usage based on the user's IP address.
- **Redeem Code Functionality**: Users can enter redeem codes to increase their usage limit.
- **Sidebar Navigation**: A sidebar that provides additional options like redeeming codes, contacting the developer, and accessing API documentation.

## Screenshots

### Sidebar and Redeem Code

![Sidebar and Redeem Code](https://telegra.ph/file/f19b196633120d7d51158.jpg)

### Main Interface

![Main Interface](https://telegra.ph/file/158d6518af3cc4f5dc83b.jpg)

## Installation

To set up this project locally, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/VynaaValerie/cek-khodam.git
    ```
2. **Navigate to the project directory**:
    ```sh
    cd cek-khodam
    ```

3. **Open `index.html` in your preferred web browser**.

## Usage

1. **Input Name**: Enter your name in the input field and click "Cek Khodam".
2. **View Result**: The app will display your khodam and its description.
3. **Check Limit**: Your remaining usage limit will be displayed after each check.
4. **Redeem Code**: Use the sidebar to enter a redeem code for additional usage.

## Technical Details

### HTML Structure

- The main HTML elements include a header, input field, button, loader, result display, and several alert modals for user interactions.
- Sidebar for additional options like redeeming codes, contacting the developer, and accessing API documentation.

### CSS Styling

- The styling provides a dark theme with contrasting colors to enhance readability and give a mystic look.
- Responsive design is achieved using flexbox and media queries to ensure a good user experience on various devices.

### JavaScript Functionality

- **Random Khodam Selection**: A function to randomly select a khodam from a predefined list.
- **IP-based Usage Tracking**: Fetches the user's IP to track and limit usage.
- **Local Storage**: Usage counts and redeem status are stored in local storage to persist data across sessions.
- **Redeem Code Validation**: Validates and processes redeem codes to increase the user's usage limit.

## Future Improvements

- **Backend Integration**: Integrate with a backend service to handle IP tracking and usage limits more securely.
- **User Authentication**: Add user accounts and authentication for personalized experiences and better tracking.
- **Enhanced Redeem System**: Implement a more sophisticated redeem code system with expiration dates and multiple use cases.

## Contact

For any questions or feedback, feel free to contact the developer at:
- Email: vynaavalerie@gmail.com
- WhatsApp: 6282389924037
## Thanks to
• Vynaa
• Xwby
• Araa
• Nalaa
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
Enjoy discovering your khodam! ✨
