## Tech stack

- Node.js > v14
- Java JRE v8
- TypeScript
- Supported OS: macOS, Linux, Windows
- Automation framework: CodeceptJS -> https://codecept.io/basics/
- Allure report

## Installing

```bash
npm ci
npm install -g allure-commandline --save-dev
```

## Execute tests headless with detailed steps

```bash
npm run codeceptjs:headless
```

## View allure report

```bash
allure serve output
```

## Project structure

```
root
└───README.md
│
└───codecept.conf.ts <------ configuaration of project -> https://codecept.io/configuration/#configuration   
│
└───tests
│   └─── *.test.ts <------ test files with suffix `.test.ts`
│   
└───output <------ report files and screenshots
│   
└───pages <------ Page objects
│   
└───data <------ test data
```
