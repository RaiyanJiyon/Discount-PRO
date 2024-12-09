# 🌟 Discount PRO  
**A Coupon Collecting Application for Maximum Savings!**  

Welcome to **Discount PRO**, a responsive, user-friendly coupon collection platform tailored for the e-commerce landscape of Bangladesh. With this app, users can discover and utilize discount coupons effortlessly, saving time and money on their favorite brands.  

---

## 🚀 Live Website Link  
Explore the application live here: **[Discount PRO Live](https://675249a93f27107229a022bd--meek-gecko-b46b19.netlify.app/)**  

---

## 📌 Key Features of Discount PRO  

### 🔐 Authentication  
- **Email & Password Login:** Secure login system with validation.  
- **Google Sign-In:** Quick and easy access using Google authentication.  
- **Dynamic User Experience:** Logged-in users see their name and profile picture on the header.  

### 🖥️ Responsive Design  
- Optimized for mobile, tablet, and desktop devices.  
- Ensures seamless navigation across all screen sizes.  

### 💡 Key Functionalities  
1. **Home Page**  
   - **Dynamic Banner Slider:** Highlighting exciting offers.  
   - **Top Brands Section:** Scroll through brand logos with React Fast Marquee. Hover to pause.  
   - **Brands on Sale:** Displays active deals with brand information and coupon counts.  
   - **Additional Sections:** Custom static or dynamic sections to enhance user engagement.  

2. **Brands Page**  
   - Search and browse all available brands.  
   - Click on brands to explore their active coupons.  
   - Redirection to brand details for logged-in users or to login if unauthenticated.  

3. **Coupon Details Page**  
   - View brand logo, rating, and detailed coupon information.  
   - Copy coupon codes with a single click using `react-copy-to-clipboard`.  
   - Directly navigate to the shop via the "Use Now" button.  

4. **User Profile**  
   - Personalized profile page displaying user information.  
   - Update profile picture and name functionality.  

5. **Error Handling**  
   - Custom 404 page with navigation to the home route.  

6. **Extra Features**  
   - **Forgot Password:** Password recovery functionality with redirect options.  
   - **Password Toggle:** Show/hide password field on the registration page.  
   - **Animation Integration:** Used AOS library for smooth animations.  

---

## 🛠️ Tech Stack & Tools  

### **Frontend**  
- **React.js**: Component-based architecture for dynamic UI.  
- **React Router (v6)**: For navigation and private route handling.  
- **React Fast Marquee**: Smooth scrolling effect for brand logos.  
- **React Copy to Clipboard**: Simplified coupon copying.  

### **Backend & Authentication**  
- **Firebase Authentication**: Secured user login and registration.  
- **Firebase Hosting**: Reliable and fast deployment.  

### **State Management**  
- **useState & useEffect**: For managing state and side effects.  
- **Local Storage**: To persist user data like coupons and profile information.  

### **Styling & Responsiveness**  
- **Custom CSS**: For unique, pixel-perfect designs.  
- **AOS Library**: Smooth scroll animations for a polished feel.  

---

## 🌟 How to Use  

### **For Users**  
1. **Login/Register:** Use email or Google authentication to access personalized features.  
2. **Explore Coupons:** Browse active discounts and save big!  
3. **Copy & Redeem:** Copy coupon codes with one click and start shopping.  

### **For Developers**  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/RaiyanJiyon/Discount-PRO
   cd discount-pro  
   ```  
2. Install dependencies:  
   ```bash  
   npm install  
   ```  
3. Run the app locally:  
   ```bash  
   npm start  
   ```  
4. Environment variables: Add Firebase configuration keys in a `.env` file.  

---

## 🤝 Contributing  
We welcome contributions! Feel free to fork the repository and submit a pull request.  