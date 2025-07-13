# bunwal v0.0-demo  
Like pywal, but in JavaScript

### Purpose
- Don’t build a massive, feature-heavy tool like pywal  
- Add configurability via a config file  
- (Possibly) provide a web UI for configuration or fine-tuning the palette to your taste  

### Checkpoints
- Generate color palettes using the pywal algorithm (implemented, but without color adjustments yet)  
- Compile templates based on the generated palette  
- Ensure basic compatibility with pywal’s templates and parameters (so you can replace wal with bunwal and everything will work as before)  

## Building and Running  
You need to have [Bun](https://bun.com/) installed to build and work on this project.

### Run  
```bash
bun i
bun start
```

### Build  
```bash
bun run build
```

The resulting files will be in the `./build/` folder.