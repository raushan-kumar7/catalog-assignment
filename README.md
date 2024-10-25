## Catalog Assignment Solution

This solution uses Lagrange interpolation to decode values from various bases and find the secrets for each test case.

## Input Data
### Test Case 1
```json
{
  "keys": {
    "n": 4,
    "k": 3
  },
  "1": {
    "base": "10",
    "value": "4"
  },
  "2": {
    "base": "2",
    "value": "111"
  },
  "3": {
    "base": "10",
    "value": "12"
  },
  "6": {
    "base": "4",
    "value": "213"
  }
}
```

### Test Case 2
```json
{
  "keys": {
      "n": 10,
      "k": 7
    },
    "1": {
      "base": "6",
      "value": "13444211440455345511"
    },
    "2": {
      "base": "15",
      "value": "aed7015a346d63"
    },
    "3": {
      "base": "15",
      "value": "6aeeb69631c227c"
    },
    "4": {
      "base": "16",
      "value": "e1b5e05623d881f"
    },
    "5": {
      "base": "8",
      "value": "316034514573652620673"
    },
    "6": {
      "base": "3",
      "value": "2122212201122002221120200210011020220200"
    },
    "7": {
      "base": "3",
      "value": "20120221122211000100210021102001201112121"
    },
    "8": {
      "base": "6",
      "value": "20220554335330240002224253"
    },
    "9": {
      "base": "12",
      "value": "45153788322a1255483"
    },
    "10": {
      "base": "7",
      "value": "1101613130313526312514143"
    }
  }
```

### To run this code
1. Clone the repository: `git clone https://github.com/raushan-kumar7/catalog-assignment.git`
2. Navigate the directory: `cd catalog-assignment`
3. Install the dependencies: `npm install`
4. First create the two input json file named as `input1.json` and `input2.json` and paste the given input data.
5. To run code go to the terminal and write: `node solution.js`
6. The output will be appended into the new created `output.json` file and console also.