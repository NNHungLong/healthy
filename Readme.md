# **Requirements**

```
Node.js: 20.11.1
npm: 10.5.0
pnpm: 8.15.4
```

**Installation**

Dev environment - support fake apis

```terminal
pnpm install
pnpm run dev
```

**Production environment - doesn't support fake apis**

```terminal
pnpm install
pnpm run build
pnpm run preview
```

**Format code**

```terminal
pnpm run format
```

**Lint code**

```terminal
pnpm run lint
```

# **Documentation**

## TopPage component

The `TopPage` component serves as the landing page of the application when the user navigates to the `/top` route. It is a functional component in React, which means it's a JavaScript function that accepts props as an argument and returns a React element.

### Imports

- `Layout`: This is a common layout component that wraps the content of the page.
- `Achievement`: This component displays the user's achievements.
- `BodyRecord`: This component is used to record the user's body measurements. It fetches data from a backend service and presents it in a table.
- `FilterButtons`: This component provides filter options for the user (The functionality is out of scope).
- `EatingRecords`: This component displays the user's eating records. It fetches data from a backend service and presents it in a flex container. By clicking on the "記録をもっと見る" button, the page will fetch more data from the backend service and append it to the existing data.

### Styling

The `TopPage` component uses Tailwind CSS for styling. I added some responsive layout so It doesn't break on smaller devices.

## MyRecordPage Component

The `MyRecordPage` component serves as the landing page of the application when the user navigates to the `/my-record` route.

### Imports

- `Layout`: This is a common layout component that wraps the content of the page.
- `RecordSections`: This component displays the different sections of the user's records. By clicking on each section, window will scroll to the section.
- `BodyRecord`: This component shows record of the user's body measurements. It fetches data from a backend service and presents it in a table. There are fours options where user can select the date range and fetch the data from the backend service.
- `MyExercise`: This component displays the user's exercise records. It fetches data from a backend service and presents it in a flex container.
- `MyDiary`: This component displays the user's diary entries. It fetches data from a backend service and presents it in a flex container. By clicking on the "記録をもっと見る" button, the page will fetch more data from the backend service and append it to the existing data.

### Styling

The `MyRecordPage` component uses Tailwind CSS for styling. For the Body Record table, I use chart.js and react-chartjs-2 to display the data in a chart. The scrollbar on My Excerise is also customized to match the design. I added some responsive layout so It doesn't break on smaller devices.
