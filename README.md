# Bio Data Portfolio with Landing Page

A comprehensive, responsive bio data portfolio application with a professional landing page and profile picture upload feature.

## Features

### Landing Page (`index.html`)
- **Professional Design**: Modern landing page with hero section, features, and call-to-action
- **Responsive Navigation**: Mobile-friendly navigation with hamburger menu
- **Smooth Animations**: Engaging animations and transitions
- **Feature Showcase**: Highlights all application capabilities
- **Portfolio Integration**: Seamless navigation to bio data forms and examples

### Bio Data Form (`biodata.html`)
- **Profile Picture Upload**: Click to upload and preview profile pictures
- **Comprehensive Form Sections**:
  - Personal Information (Name, DOB, Gender, Nationality, etc.)
  - Contact Information (Email, Phone, Address)
  - Educational Background
  - Professional Information
  - Additional Information (Languages, Hobbies, etc.)
- **Form Validation**: Required field validation with visual feedback
- **Auto-save**: Automatically saves draft data to localStorage
- **Preview Functionality**: Live preview of the bio data
- **Print/Download**: Print-friendly layout for PDF generation

### Example Page (`example.html`)
- **Sample Bio Data**: Professional example showing completed form
- **Template Reference**: Visual guide for users

## File Structure

```
sample/
├── index.html              # Landing page (main entry point)
├── biodata.html           # Bio data form
├── example.html           # Sample bio data
├── style/
│   ├── styles.css         # Bio data form styling
│   └── landing.css        # Landing page styling
├── js/
│   ├── landing.js         # Landing page functionality
│   └── script.js          # Bio data form functionality
├── image/
│   └── placeholder-avatar.jpg  # Default profile picture
└── README.md              # This file
```

## How to Use

1. **Start**: Open `index.html` in a web browser
2. **Explore**: Navigate through the landing page features
3. **Create**: Click "Create Bio Data" to start building your portfolio
4. **Upload**: Add your profile picture using the upload feature
5. **Fill**: Complete the comprehensive form sections
6. **Preview**: Use "Preview Bio Data" to see the final result
7. **Save**: Store your information locally
8. **Export**: Download as PDF or print

## Navigation Flow

```
Landing Page (index.html)
    ├── Create Bio Data → biodata.html
    ├── View Example → example.html
    └── Back to Home ← All pages link back to landing
```

## Features in Detail

### Profile Picture Upload
- Supports common image formats (JPG, PNG, GIF, etc.)
- Automatic image preview
- Responsive circular crop display

### Form Validation
- Required fields are marked with asterisks (*)
- Real-time validation feedback
- Visual indicators for missing required information

### Auto-save
- Automatically saves your progress as you type
- Data persists between browser sessions
- No data loss on accidental page refresh

### Preview Mode
- Professional layout preview
- Shows exactly how your bio data will appear
- Modal popup for easy viewing

### Print/PDF Ready
- Optimized print styles
- Clean, professional layout for documents
- Removes form elements when printing

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Internet Explorer 11+

## Customization

### Styling
Modify `styles.css` to change:
- Color scheme
- Fonts
- Layout
- Animations

### Form Fields
Add or remove fields by editing:
1. HTML structure in `index.html`
2. Corresponding JavaScript handling in `script.js`
3. Preview generation function

### Validation Rules
Customize validation in the `script.js` file:
- Add new validation rules
- Modify required fields
- Add custom error messages

## Future Enhancements

- PDF generation with jsPDF library
- Email functionality to send bio data
- Multiple theme options
- Data export to different formats
- Cloud storage integration
- Multi-language support

## License

This project is open source and available under the MIT License.

## Support

If you encounter any issues or have questions, please check the browser console for error messages and ensure you're using a modern web browser with JavaScript enabled.
