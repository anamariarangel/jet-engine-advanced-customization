### **Dynamic News Carousel with Accessible Navigation**

This project showcases the creation of a dynamic and accessible news carousel in WordPress using JavaScript. The carousel integrates two listing grids: a **main image container** (class: `carrossel-imagem-div`) and a **titles grid** (class: `carrossel-titulo`), ensuring seamless interaction between them. The goal is to dynamically update the main image when a title in the grid is clicked or selected via keyboard, providing an accessible and visually engaging experience.

---

## **Overview**

The carousel dynamically updates the content displayed in the main image container based on user interaction with items in the title listing grid. This is achieved by integrating JavaScript to handle clicks and keyboard events, ensuring accessibility for all users.

### **Key Features**
- Dynamic content rendering: Clicking a title in the grid updates the main image.
- Full keyboard navigation support for accessibility.
- Automatic focus management for a seamless user experience.
- Custom styles to visually indicate selected items.
- Compatibility with WordPress and JetEngine listing grids.

---

## **Structure**

### **Components**
1. **Main Image Container** (`carrossel-imagem-div`):
   - Displays the image corresponding to the selected news title.
   - Initially set to show the last post thumbnail (`imagem-inicial-home`).

2. **Titles Listing Grid** (`carrossel-titulo`):
   - Displays a grid of news titles as clickable items.
   - Interacts dynamically with the main image container.

---

## **Setup Instructions**

### **1. HTML Structure**
Ensure the following classes are used in your listing grids:
- Main image container: `carrossel-imagem-div` (displays the featured image).
- Titles listing grid: `carrossel-titulo` (displays post titles with thumbnails).

### **2. JavaScript Integration**
Add the provided JavaScript code to your WordPress theme or a custom plugin to enable dynamic interaction between the listing grids.

### **3. Custom CSS**
Use the following CSS for styling:

```css
.carrossel-titulo .jet-listing-grid__item {
    cursor: pointer;
    border-left: 3px solid transparent;
    transition: background-color 0.3s ease, border-left-color 0.3s ease;
}

.carrossel-titulo .jet-listing-grid__item:hover,
.carrossel-titulo .jet-listing-grid__item:focus,
.carrossel-titulo .jet-listing-grid__item.active {
    background-color: #E1E7E8;
    border-left-color: #2577bc;
}

#carrossel-imagem-div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

---

## **Functionality**

### **How It Works**
1. **Title Interaction:**
   - Clicking or pressing "Enter" on a title in the `carrossel-titulo` grid dynamically updates the `carrossel-imagem-div` container.
   - The corresponding image and link (if available) are displayed.

2. **Keyboard Navigation:**
   - Items in the `carrossel-titulo` grid are fully accessible via the keyboard.
   - Users can navigate with the `Tab` key and activate items using `Enter`.

3. **Focus Management:**
   - After selecting an image, the focus is automatically placed on it for accessibility.
   - Pressing `Escape` returns focus to the previously selected title.

4. **Dynamic Updates:**
   - The JavaScript observes changes to the DOM to ensure the functionality remains active even when the listing grid content is updated dynamically.

---

## **Steps to Implement**

1. **JavaScript Configuration:**
   - Add the provided script to the **Custom Code** section in Elementor Pro, your theme, or a custom plugin.

2. **Custom Post Integration:**
   - Use JetEngine to create a listing grid for the post titles and thumbnails (`carrossel-titulo`).
   - Create a second listing grid to display only the latest post thumbnail in the main image container (`carrossel-imagem-div`).

3. **Test Accessibility:**
   - Ensure that all interactive elements are reachable via the keyboard and provide visual feedback when selected or focused.

4. **Optional Enhancements:**
   - Add animations to enhance user experience.
   - Integrate additional metadata (e.g., publication date) into the title grid.

---

## **About the Developer**

I am Ana Maria Rangel, a WordPress developer specializing in advanced customizations with JetEngine, JavaScript, and Elementor Pro. This project is part of my portfolio and showcases my ability to create accessible and dynamic front-end solutions.

For more details, visit my portfolio: [Ana Maria Rangel](https://portfolio.anamariarangel.com.br/).