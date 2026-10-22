# Futuristic Glass UI for VS Code

A custom dark color theme for a glass-inspired coding workspace: deep midnight surfaces, cyan focus edges, cool-blue identifiers, violet keywords, and soft green strings.

> VS Code color themes cannot add actual blur or transparency to editor chrome. This extension evokes a glassmorphism-inspired appearance through layered dark surfaces, subtle borders, and luminous accents.

## Palette
| Role | Color |
|---|---|
| Canvas | `#081321` |
| Side panels | `#0A1526` |
| Cyan focus | `#66E3FF` |
| Blue identifiers | `#9DBBFF` |
| Violet keywords | `#D1A7FF` |
| Green strings | `#A7E6BC` |
| Warm numbers | `#FFC889` |

## Try it in VS Code
1. Open the `developer-theme` folder in VS Code.
2. Press **F5** to launch an Extension Development Host.
3. In the new window, open Command Palette → **Preferences: Color Theme**.
4. Select **Futuristic Glass UI**.

## Package as VSIX
Install Node.js/npm, then run:

```bash
npm install --global @vscode/vsce
cd developer-theme
vsce package
```

In VS Code choose **Extensions → … → Install from VSIX…**, then select the generated file.

## Language scopes
Includes editor colors and syntax scopes for PHP, JavaScript/TypeScript, HTML, CSS, JSON, Markdown, diff views, plus semantic tokens provided by language extensions.

## Files
- `package.json` — extension manifest
- `themes/futuristic-glass-ui-color-theme.json` — complete color palette

## Author
Ansh Singh · [GitHub](https://github.com/ansh55560-ui) · [Portfolio](https://ansh-singh-portfolio-eight.vercel.app/)

## License
MIT
