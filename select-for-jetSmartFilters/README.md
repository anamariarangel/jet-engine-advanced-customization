
# Dynamic Filters for JetSmartFilters

This script dynamically updates the visibility of filter elements based on the user's selection in a dropdown menu created with **JetSmartFilters**. It allows for a clean and dynamic user experience by showing only the relevant filter fields.

See this project at https://www.tjmsp.jus.br/governanca-institucional/gestao-administrativa-orcamentaria-e-financeira/licitacoes-e-contratos/ata-de-registro-de-precos/

## How It Works

1. **Dropdown Interaction**: Listens for changes in a `<select>` element with the class `.select-ata-registro`.
2. **Filter Visibility**: Dynamically displays or hides filter fields based on the selected value.
3. **Default Behavior**: Hides all filters if no valid option is selected.

## Use Cases

- Designed for projects using **JetSmartFilters** to create dynamic filtering options.
- Ideal for scenarios where multiple filtering criteria (e.g., by date, object, record number, or process number) need to be toggled.

## Filter Options

| **Option Value**   | **Filter Displayed**               |
|---------------------|------------------------------------|
| `periodo`          | `.filtro-data-ata-registro`        |
| `objeto`           | `.objeto-ata-registro`            |
| `numero-da-ata`    | `.buscar-numero-ata`              |
| `numero-do-processo` | `.buscar-numero-processo`         |

## Integration

1. Add the script to your project (e.g., Elementor Custom Code, theme files, or a custom plugin).
2. Ensure the dropdown has the class `.select-ata-registro` and includes the relevant filter options.
3. Use the following classes for the filter elements:
   - `.filtro-data-ata-registro`
   - `.objeto-ata-registro`
   - `.buscar-numero-ata`
   - `.buscar-numero-processo`

## Example Markup

```html
<select class="select-ata-registro" onchange="alterarStatusElementos()">
    <option value="periodo">By Period</option>
    <option value="objeto">By Object</option>
    <option value="numero-da-ata">By Record Number</option>
    <option value="numero-do-processo">By Process Number</option>
</select>

<div class="filtro-data-ata-registro" style="display: none;">Date Filter</div>
<div class="objeto-ata-registro" style="display: none;">Object Filter</div>
<div class="buscar-numero-ata" style="display: none;">Record Number Filter</div>
<div class="buscar-numero-processo" style="display: none;">Process Number Filter</div>
```

## Benefits

- Specifically tailored for **JetSmartFilters**.
- Simplifies the user interface by only displaying relevant filters.
- Lightweight and easy to integrate with Elementor or other WordPress environments.

---

Feel free to adapt this script as needed to fit your project requirements!