# Rite Realty CMS

Production-ready property CMS with:
- MongoDB storage
- ImageKit image uploads
- Admin/Manager role-based permissions
- Banner management and full property CRUD

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` in project root:

```bash
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>/<db>?retryWrites=true&w=majority
SESSION_SECRET=replace_with_long_random_string
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=public_xxx
IMAGEKIT_PRIVATE_KEY=private_xxx
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/<your_imagekit_id>
```

3. Start app:

```bash
npm run dev
```

4. Open:
- Site: `http://localhost:3000`
- CMS: `http://localhost:3000/cms`

## Role Rules

- Admin:
  - Create/Edit/Delete properties
  - Update banner
  - Create manager accounts
- Manager:
  - Create/Edit properties
  - Update banner
  - Cannot delete properties

Account constraints:
- Only one admin can be created (first bootstrap only)
- Maximum two manager accounts

## CMS Data Sections

Property model includes:
- Basic info (title, type, listing, price, area, auto property ID)
- Location (city, area/sector, full address, lat/lng)
- Builder/project details (status, possession date, RERA)
- Flat/plot configurations
- Media (cover, gallery, video, 360 placeholder)
- Description and highlights
- Amenities (array)
- Contact and lead fields
- Tags/labels
- Record status control
- SEO fields (meta title, meta description, slug)

mongo db
DJMGmhYHPnPdMnDI

mongodb+srv://ritereality6_db_user:DJMGmhYHPnPdMnDI@ritereality.wjvtbua.mongodb.net/
