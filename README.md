# aviationweather - Fetch aviation weather data

Node.js engine for global aviation weather. Written with typescript.

# Examples

```ts
import { getMetar } from "aviationweather";

getMetar({ ids: "KJFK", format: "json" }).then(({ data }) => console.log(data));
```

# Help or support

Join [discord server](https://discord.gg/xkP9paz5X3)
