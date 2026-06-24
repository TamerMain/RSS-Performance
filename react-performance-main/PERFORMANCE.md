# Performance Optimization Report

## Baseline Measurements

### Interaction A: Sort countries

- **Commit duration**: 3669 ms (ReactDevTools does not provide correct duration, so there and later on will be ChromeDevTools INP Score)
- **Render duration**: 282.9 ms
- **Screenshot**: ![screenshot](/react-performance-main/performance-starter/screenshots/baseline/sortBefore.JPG)
- **ChromeDevTools**: ![screenshot](/react-performance-main/performance-starter/screenshots/baseline/sortINPBefore.JPG)

### Interaction B: Search countries

- **Commit duration**: 1968 ms
- **Render duration**: 130.5 ms
- **Screenshot**: ![screenshot](/react-performance-main/performance-starter/screenshots/baseline/searchBefore.jpg)
- **ChromeDevTools**: ![screenshot](/react-performance-main/performance-starter/screenshots/baseline/searchINPBefore.JPG)

### Interaction C: Change year

- **Commit duration**: ~3150 ms
- **Render duration**: 301.1 ms
- **Screenshot**: ![screenshot](/react-performance-main/performance-starter/screenshots/baseline/yearBefore.jpg)
- **ChromeDevTools**: ![screenshot](/react-performance-main/performance-starter/screenshots/baseline/yearINPBefore.JPG)

### Interaction D: Toggle column

- **Commit duration**: ~1950 ms
- **Render duration**: 303.2 ms
- **Screenshot**: ![screenshot](/react-performance-main/performance-starter/screenshots/baseline/modalBefore.jpg)
- **ChromeDevTools**: ![screenshot](/react-performance-main/performance-starter/screenshots/baseline/modalINPBefore.JPG)

## Optimized Measurements

### Interaction A: Sort countries

- **Commit duration**: 367 ms
- **Render duration**: 50.9 ms
- **Screenshot**: ![screenshot](/react-performance-main/performance-starter/screenshots/optimized/sortAfter.JPG)
- **ChromeDevTools**: ![screenshot](/react-performance-main/performance-starter/screenshots/optimized/sortINPAfter.JPG)

### Interaction B: Search countries

- **Commit duration**: ~300 ms
- **Render duration**: 25.6 ms
- **Screenshot**: ![screenshot](/react-performance-main/performance-starter/screenshots/optimized/searchAfter.JPG)
- **ChromeDevTools**: ![screenshot](/react-performance-main/performance-starter/screenshots/optimized/searchINPAfter.JPG)

### Interaction C: Change year

- **Commit duration**: ~250 ms
- **Render duration**: 67.9 ms
- **Screenshot**: ![screenshot](/react-performance-main/performance-starter/screenshots/optimized/yearAfter.JPG)
- **ChromeDevTools**: ![screenshot](/react-performance-main/performance-starter/screenshots/optimized/yearINPAfter.JPG)

### Interaction D: Toggle column

- **Commit duration**: ~150 ms
- **Render duration**: 18.7 ms
- **Screenshot**: ![screenshot](/react-performance-main/performance-starter/screenshots/optimized/modalAfter.JPG)
- **ChromeDevTools**: ![screenshot](/react-performance-main/performance-starter/screenshots/optimized/modalINPAfter.JPG)

## Summary of Improvements

**Render Duration**
| Interaction      | Baseline (ms) | Optimized (ms) | Improvement |
| ---------------- | ------------- | -------------- | ----------- |
| Sort countries   | 282.9         | 50.9           | 82.0%       |
| Search countries | 130.5         | 25.6           | 80.4%       |
| Change year      | 301.1         | 67.9           | 77.4%       |
| Toggle column    | 303.2         | 18.7           | 93.8%       |
| **Average**      | **254.4**     | **40.8**       | **84.0%**   |

**INP**
| Interaction      | Baseline (ms) | Optimized (ms) | Improvement |
| ---------------- | ------------- | -------------- | ----------- |
| Sort countries   | 3669          | 367            | 90.0%       |
| Search countries | 1968          | 300            | 84.8%       |
| Change year      | 3150          | 250            | 92.1%       |
| Toggle column    | 1950          | 150            | 92.3%       |
| **Average**      | **2684.3**    | **266.8**      | **90.1%**   |