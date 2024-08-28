# Blog Website

A blog website where users can log in, create blogs, add content, upload images, and use a code editor for rich text formatting. This project uses Appwrite as the backend service, React for the frontend, and Tailwind CSS for styling.

## Features

- **User Authentication**: Secure login functionality.
- **Create and Manage Blogs**: Users can add new blogs with a title, content, and images.
- **Rich Text Editor**: Integrated Tiny Cloud MTE (Markdown Editor) for formatting blog content.
- **Image Upload**: Upload images for blogs directly from the editor.
- **Modern UI/UX**: Styled with Tailwind CSS for a responsive and visually appealing design.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Appwrite (self-hosted backend server for authentication, database, and storage)
- **Text Editor**: Tiny Cloud MTE (Markdown Editor)

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (v14 or above)
- Appwrite Server (self-hosted or cloud version)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/heeba-khan/Blog-Website.git
   cd Blog-Website

2. **Install Dependencies**

   ```bash
   npm install

3. **Configure Environment Variables**
   Create a .env file in the root directory and add your Appwrite credentials:

    VITE_APPWRITE_URL=<Your Appwrite Endpoint>
    VITE_APPWRITE_PROJECT_ID=<Your Appwrite ProjectId>
    VITE_APPWRITE_DATABASE_ID=<Your Appwrite DatabaseId>
    VITE_APPWRITE_COLLECTION_ID=<Your Appwrite CollectionId>
    VITE_APPWRITE_BUCKET_ID=<Your Appwrite BucketId>
    VITE_TINYMCE_API_KEY=<Your TinyMCE api key>
   
4. **Run the Development Server**

   ```bash
   npm run dev


### Usage

1. Register or log in to the website.
2. Use the "Add Blog" button to create a new blog.
3. Fill in the required fields, including the title, content, and image.
4. Use the Tiny Cloud MTE editor to format your content.
5. Submit the blog and view it on the homepage.


### License
This project is licensed under the MIT License - see the LICENSE file for details.


### Acknowledgments

1. Appwrite for the backend service
2. Tiny Cloud MTE for the rich text editor
3. Tailwind CSS for styling
