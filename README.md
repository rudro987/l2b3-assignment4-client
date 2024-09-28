# Ctrl-Alt-Del - Mechanical Keyboard selling platform

This Mechanical Keyboard Selling Platform allows users to book mechanical keyboards with ease and provides admins the ability to manage these items and bookings.

---

### [Live Site](https://ctrl-alt-del.surge.sh/)

```console
https://ctrl-alt-del.surge.sh/
```

---

## Used Technologies:

- TypeScript
- React
- Redux
- RTK Query
- Taiwind CSS
- Daisy UI

## Features:

- **Products Management:**
  Users can create, update, and delete products. Each Products has details like name, description, price, brand and rating.

- **Create Product:**
  Users can add products by specifying the name, description, brand, price, image, quantity and rating.

- **View products:**
  Users can view all products using products route. Query system implemented for search, filter and sort method.

- **Update Product:**
  Users can updtae product for all fields or selected fields. Both immutable and mutable datas can be updated.

- **Delete Product:**
  Users can delete a product by product id(mongodb objectId). Product is not permanently deleted, its a soft delete where for deleted product isDeleted field is changed to true.

- **Error Handling:**
  Comprehensive error handling ensures proper responses and messages for validation errors, duplicate entries, and not found routes.

## How to setup in local computer:

### Clone the Repository:

```plain
git clone https://github.com/rudro987/l2b3-assignment4-client.git
```

### Install Dependencies:

```markdown
npm install OR pnpm install
```

### Environment Variables:

- Create a `.env.local` file in the root directory.
- Add the following environment variables:

```markdown
VITE_API_URL=your_server_link
```

### Run the Application:

```markdown
npm run dev or pnpm dev
```

## Happy Coding 😎