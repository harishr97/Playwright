# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: adactin.spec.js >> Page Object Model
- Location: tests\adactin.spec.js:5:5

# Error details

```
Error: browserType.launch: Failed to launch the browser process.
Browser logs:

<launching> C:\Users\HARISH\AppData\Local\ms-playwright\firefox-1538\firefox\firefox.exe -no-remote -headless -profile C:\Users\HARISH\AppData\Local\Temp\playwright_firefoxdev_profile-YSS5DE -juggler-pipe -silent
<launched> pid=13684
[pid=13684][err] *** You are running in headless mode.
[pid=13684] <process did exit: exitCode=2147483651, signal=null>
[pid=13684] starting temporary directories cleanup
Call log:
  - <launching> C:\Users\HARISH\AppData\Local\ms-playwright\firefox-1538\firefox\firefox.exe -no-remote -headless -profile C:\Users\HARISH\AppData\Local\Temp\playwright_firefoxdev_profile-YSS5DE -juggler-pipe -silent
  - <launched> pid=13684
  - [pid=13684][err] *** You are running in headless mode.
  - [pid=13684] <process did exit: exitCode=2147483651, signal=null>
  - [pid=13684] starting temporary directories cleanup
  - [pid=13684] <gracefully close start>
  - [pid=13684] <kill>
  - [pid=13684] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=13684] finished temporary directories cleanup
  - [pid=13684] <gracefully close end>

```