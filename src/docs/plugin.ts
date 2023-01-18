export const plugin: string = `
<article>
<div>Сгенерировать плагин</div>
<pre>
npm init @capacitor/plugin@latest
</pre>
<div>Определить интерфейсы будущих методов в src/definitions.ts</div>
<pre>
export interface PluginNamePlugin {
  openMap(options: OpenMapOptions): Promise&lt;void&gt;; // Новый метод
}

export interface OpenMapOptions { // Новый интерфейс для options
  latitude: number;
  longitude: number;
}
</pre>
<div>Добавить метод в src/web.ts</div>
<pre>
import type {
    OpenMapOptions, // Получить интерфейс для options
} from './definitions';

export class PluginNameWeb extends WebPlugin implements PluginNamePlugin {
    // other methods

    async openMap(location: OpenMapOptions): Promise&lt;void&gt; { // Реализовать метод
        // logic here
    }
</pre>
<div>Build Plugin/ Install Plugin / Remove Plugin</div>
<pre>
npm run build
npm install ../path/to/plugin
npm uninstall plugin
</pre>
</article>
`
