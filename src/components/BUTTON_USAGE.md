# Button Component - Panduan Penggunaan

Button component adalah component yang reusable untuk membuat berbagai macam button di aplikasi Anda dengan styling yang konsisten.

## Props yang Tersedia

| Prop | Tipe | Required | Default | Deskripsi |
|------|------|----------|---------|-----------|
| `children` | string/JSX | Yes | - | Text atau konten yang ditampilkan di dalam button |
| `variant` | string | No | "primary" | Tipe button: "primary" atau "outline" |
| `onClick` | function | No | - | Handler ketika button diklik |
| `className` | string | No | "" | CSS class tambahan untuk styling custom |
| `disabled` | boolean | No | false | Disable button jika true |
| `type` | string | No | "button" | HTML button type: "button", "submit", "reset" |
| `...props` | any | No | - | Props HTML lainnya (aria-label, etc) |

## Contoh Penggunaan

### 1. Button Primary (Default)
```jsx
import Button from "./components/Button";

<Button onClick={handleClick}>Click Me</Button>
```

### 2. Button Outline
```jsx
<Button variant="outline" onClick={handleClick}>
  Cancel
</Button>
```

### 3. Button dengan Icon/HTML
```jsx
<Button variant="primary" onClick={handleSubmit}>
  <span>✓ Submit</span>
</Button>
```

### 4. Submit Button di Form
```jsx
<Button type="submit">Submit Form</Button>
```

### 5. Disabled Button
```jsx
<Button disabled>Loading...</Button>
```

### 6. Button dengan Custom Styling
```jsx
<Button className="w-full" onClick={handleDelete}>
  Delete
</Button>
```

## Variant Yang Tersedia

### Primary (Default)
- Background: Primary color (#313131)
- Text: White
- Hover: Opacity 80%, shadow

### Outline
- Background: Transparent
- Border: Primary color
- Text: Grey
- Hover: Opacity 80%, shadow

## File yang Menggunakan Button

- ✅ `navbar.jsx` - Log in & Sign in buttons
- ✅ `Feature.jsx` - More button
- Anda bisa menggunakan Button di komponen lain juga!

## Tips & Best Practices

1. **Import Component** - Selalu import Button di atas file
   ```jsx
   import Button from "./Button";
   ```

2. **Gunakan Variant** - Pilih variant sesuai kebutuhan (primary atau outline)

3. **onClick Handler** - Selalu berikan onClick handler untuk tombol yang interaktif

4. **Disable State** - Gunakan disabled prop untuk mengindiksikan button yang tidak aktif

5. **Accessibility** - Pastikan button text jelas dan deskriptif untuk screen readers
