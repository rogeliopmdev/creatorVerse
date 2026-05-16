# WEB103 Prework - Creatorverse

Submitted by: **[ Rogelio Perez]**

About this web app: A premium full-stack dashboard designed to share, discover, and manage a curated space of top content creators. Built with React and integrated natively with a Supabase PostgreSQL backend database for full CRUD capabilities.

Time spent: **[3]** hours

## Required Features

The following **required** functionality is completed:

- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [x] Picocss is used to style HTML elements
- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [x] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

- [x] **Premium UI Customization:** Complete overhaul of the default appearance into a high-end "Obsidian Tech & Cyber Cyan" aesthetic utilizing professional Google Font stacks (`Space Grotesk` and `Plus Jakarta Sans`).
- [x] **Smooth Hash Navigation:** Added dynamic anchor links with custom React hook scrolling logic (`/#creators`) enabling automated smooth gliding down to the main database showroom from any sub-route in the application.
- [x] **Full-Width Responsive Grid:** Restructured default canvas restrictions to implement a fully responsive fluid masonry structure utilizing custom CSS variables.
- [x] **Environment Security:** Secured all backend database parameters via Vite `.env` structures protecting API keys from exposure when pushed to public source control.

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='[https://imgur.com/a/TyKQecN](https://i.imgur.com/d5Q2ut1.mp4)' title='creatorVerse Video Walkthrough' width='100%' alt='Video Walkthrough' />

GIF created with [ScreenToGif] 

## Notes

One notable challenge occurred during backend client instantiation. After transferring credentials to a local `.env` ecosystem, the application produced a blank white screen crash error tracing back to an unhandled `supabaseKey is required` flag. 

By investigating the browser runtime developer console inspector, I diagnosed that the variable key signature inside `.env` (`VITE_SUPABASE_PUBLISHABLE_KEY`) didn't match the variable name being loaded by the application script. Synchronizing the names in `client.js` and performing a mandatory cold cache server reset cleanly eliminated the deployment block.

## License

Copyright [2026] [[Rogelio Perez]]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
