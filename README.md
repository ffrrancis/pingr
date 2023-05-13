<div align="center">
<img src="img/pingr.png">

<i>Pings all of your [repl](https://replit.com) projects at once without you having to have the tab open.</i>
</div>

## Overview

```mermaid
graph LR
    A[Your request] --> B[API]
    B --> C[Pings every 1/min]
```

### Setup Steps

Please select a method of setup below:

<details>
  <summary><strong>Sending a request via. Postman/Insomnia</strong></summary>

  <br>

> **Additional Note:** <br>
> When inputting the repl's url, you must include "https://"

<table>
  <tr>
    <td>Paste this into the URL bar:
    <br>
  <pre><code>curl --location --request GET 'https://da.gd/init?host='</code></pre>

  Then fill in the "host" query. For each repl, you must create a new request.
  </td>
  </tr>
</table>
</details>

<details>
  <summary><strong>Sending a request via. Repl</strong></summary>

  <br>

> **Additional Note:** <br>
> When inputting the repl's url, you must include "https://"

<ol>
  <li>Import this repo into Repl</li>
  <li>Configure the `config.json` file with all the links you want to ping</li>
  <li>Click the run button at the top of your screen.</li>
  <li>Exit the repl.</li>
</ol>

</details>

<details>
  <summary><strong>Sending a request via. Discord Bot</strong></summary>

  <kbd><a href="https://lqvers.netlify.app/invites/repl-always-on">Invite</a></kbd>
  <kbd><a href="https://github.com/lqvers/repl-always-on">Github Repository</a></kbd>

</details>

It's as easy as that! If you have any issues, please report it under the [Issues](https://github.com/ffrrancis/pingr/issues) tab.
