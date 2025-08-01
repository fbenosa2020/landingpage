// Bio Data Form JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const profileUpload = document.getElementById('profileUpload');
    const profileImg = document.getElementById('profileImg');
    const bioForm = document.getElementById('bioForm');
    const previewBtn = document.getElementById('previewBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const previewModal = document.getElementById('previewModal');
    const closeModal = document.querySelector('.close');
    const previewContent = document.getElementById('previewContent');

    // Profile picture upload handling
    profileUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    profileImg.src = e.target.result;
                    profileImg.style.background = 'none';
                    profileImg.style.animation = 'fadeIn 0.5s ease';
                };
                reader.readAsDataURL(file);
            } else {
                alert('Please select a valid image file.');
            }
        }
    });

    // Initialize default avatar
    function initDefaultAvatar() {
        if (!profileImg.src || profileImg.src.includes('placeholder-avatar.jpg')) {
            profileImg.style.background = 'linear-gradient(135deg, #bdc3c7, #95a5a6)';
            profileImg.style.display = 'flex';
            profileImg.style.alignItems = 'center';
            profileImg.style.justifyContent = 'center';
            profileImg.style.fontSize = '3rem';
            profileImg.style.color = '#fff';
            profileImg.innerHTML = '👤';
            profileImg.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjYmRjM2M3Ii8+PC9zdmc+';
        }
    }

    // Form submission handling
    bioForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate required fields
        const requiredFields = bioForm.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.style.borderColor = '#e74c3c';
                isValid = false;
            } else {
                field.style.borderColor = '#e0e0e0';
            }
        });

        if (!isValid) {
            alert('Please fill in all required fields.');
            return;
        }

        // Save form data to localStorage
        const formData = new FormData(bioForm);
        const bioData = {};
        
        for (let [key, value] of formData.entries()) {
            bioData[key] = value;
        }
        
        // Save profile picture separately
        if (profileImg.src && !profileImg.src.includes('placeholder-avatar.jpg')) {
            bioData.profilePicture = profileImg.src;
        }
        
        localStorage.setItem('bioData', JSON.stringify(bioData));
        
        alert('Bio data saved successfully!');
    });

    // Preview functionality
    previewBtn.addEventListener('click', function() {
        generatePreview();
        previewModal.style.display = 'block';
    });

    // Close modal
    closeModal.addEventListener('click', function() {
        previewModal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === previewModal) {
            previewModal.style.display = 'none';
        }
    });

    // Download PDF functionality
    downloadBtn.addEventListener('click', function() {
        // Note: This is a simplified implementation
        // In a real application, you would use a library like jsPDF or html2pdf
        generatePreview();
        window.print();
    });

    // Generate preview HTML
    function generatePreview() {
        const formData = new FormData(bioForm);
        const data = {};
        
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }

        const profileSrc = profileImg.src && !profileImg.src.includes('placeholder-avatar.jpg') 
            ? profileImg.src 
            : '';

        const previewHTML = `
            <div class="preview-bio">
                <div class="preview-header">
                    ${profileSrc ? `<img src="${profileSrc}" alt="Profile Picture" class="preview-profile-img">` : ''}
                    <h2 class="preview-name">${data.firstName || ''} ${data.lastName || ''}</h2>
                    ${data.currentJob ? `<p><strong>${data.currentJob}</strong></p>` : ''}
                    ${data.company ? `<p>${data.company}</p>` : ''}
                </div>

                <div class="preview-section">
                    <h3>Personal Information</h3>
                    <div class="preview-info">
                        ${createPreviewItem('Date of Birth', data.dateOfBirth)}
                        ${createPreviewItem('Gender', data.gender)}
                        ${createPreviewItem('Nationality', data.nationality)}
                        ${createPreviewItem('Marital Status', data.maritalStatus)}
                    </div>
                </div>

                <div class="preview-section">
                    <h3>Contact Information</h3>
                    <div class="preview-info">
                        ${createPreviewItem('Email', data.email)}
                        ${createPreviewItem('Phone', data.phone)}
                        ${createPreviewItem('Alternate Phone', data.alternatePhone)}
                        ${createPreviewItem('Address', data.address)}
                        ${createPreviewItem('City', data.city)}
                        ${createPreviewItem('ZIP Code', data.zipCode)}
                    </div>
                </div>

                <div class="preview-section">
                    <h3>Educational Background</h3>
                    <div class="preview-info">
                        ${createPreviewItem('Highest Education', data.highestEducation)}
                        ${createPreviewItem('Institution', data.institution)}
                        ${createPreviewItem('Field of Study', data.fieldOfStudy)}
                        ${createPreviewItem('Graduation Year', data.graduationYear)}
                    </div>
                </div>

                <div class="preview-section">
                    <h3>Professional Information</h3>
                    <div class="preview-info">
                        ${createPreviewItem('Current Job Title', data.currentJob)}
                        ${createPreviewItem('Company', data.company)}
                        ${createPreviewItem('Years of Experience', data.experience)}
                        ${createPreviewItem('Expected Salary', data.salary)}
                        ${createPreviewItem('Skills', data.skills)}
                    </div>
                </div>

                <div class="preview-section">
                    <h3>Additional Information</h3>
                    <div class="preview-info">
                        ${createPreviewItem('Languages', data.languages)}
                        ${createPreviewItem('Hobbies & Interests', data.hobbies)}
                        ${createPreviewItem('Additional Information', data.additionalInfo)}
                    </div>
                </div>
            </div>
        `;

        previewContent.innerHTML = previewHTML;
    }

    function createPreviewItem(label, value) {
        if (!value) return '';
        return `
            <div class="preview-item">
                <div class="preview-label">${label}:</div>
                <div class="preview-value">${value}</div>
            </div>
        `;
    }

    // Load saved data on page load
    function loadSavedData() {
        const savedData = localStorage.getItem('bioData');
        if (savedData) {
            try {
                const bioData = JSON.parse(savedData);
                
                // Fill form fields
                Object.keys(bioData).forEach(key => {
                    const field = document.getElementById(key);
                    if (field && key !== 'profilePicture') {
                        field.value = bioData[key];
                    }
                });

                // Set profile picture
                if (bioData.profilePicture) {
                    profileImg.src = bioData.profilePicture;
                }
            } catch (e) {
                console.error('Error loading saved data:', e);
            }
        }
    }

    // Auto-save functionality
    function setupAutoSave() {
        const formElements = bioForm.querySelectorAll('input, select, textarea');
        formElements.forEach(element => {
            element.addEventListener('blur', function() {
                // Auto-save after user finishes editing a field
                setTimeout(() => {
                    const formData = new FormData(bioForm);
                    const bioData = {};
                    
                    for (let [key, value] of formData.entries()) {
                        if (value.trim()) { // Only save non-empty values
                            bioData[key] = value;
                        }
                    }
                    
                    if (profileImg.src && !profileImg.src.includes('placeholder-avatar.jpg')) {
                        bioData.profilePicture = profileImg.src;
                    }
                    
                    localStorage.setItem('bioDataDraft', JSON.stringify(bioData));
                }, 500);
            });
        });
    }

    // Age calculation
    const dobField = document.getElementById('dateOfBirth');
    dobField.addEventListener('change', function() {
        const dob = new Date(this.value);
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        
        // You can add an age display field if needed
        console.log('Age:', age);
    });

    // Initialize
    initDefaultAvatar();
    loadSavedData();
    setupAutoSave();

    // Form validation styling
    const inputs = bioForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#3498db';
        });
        
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = '#e74c3c';
            } else {
                this.style.borderColor = '#e0e0e0';
            }
        });
    });

    // Clear form functionality
    function clearForm() {
        if (confirm('Are you sure you want to clear all data?')) {
            bioForm.reset();
            profileImg.src = 'placeholder-avatar.jpg';
            localStorage.removeItem('bioData');
            localStorage.removeItem('bioDataDraft');
        }
    }

    // Add clear button if needed
    const clearBtn = document.createElement('button');
    clearBtn.type = 'button';
    clearBtn.className = 'btn btn-danger';
    clearBtn.textContent = 'Clear Form';
    clearBtn.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
    clearBtn.addEventListener('click', clearForm);
    
    // Uncomment the next line if you want to add a clear button
    // document.querySelector('.form-actions').appendChild(clearBtn);
});
