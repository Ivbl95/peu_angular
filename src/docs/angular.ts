export const angular: string = `
<article>
<div>Routing</div>
<pre>
&lt;base href="/"&gt; // Пишется в head в index.html, подразумевает, что папка app корневая и использует '/'
&lt;router-outlet&gt;&lt;/router-outlet&gt; // Добавить в app.component.ts для использования роутинга

import { NgModule } from '@angular/core'; // Использовать модуль
import { Routes, RouterModule } from '@angular/router'; // Импорт роутера

const routes: Routes = [ // Массив путей компонентом
  { path: 'first-component', component: FirstComponent }, // Объект с путем и компонентом назначения
  { path: 'second-component', component: SecondComponent },
];

@NgModule({ // Настройка импорта/экспорта
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } // Экспорт класса
</pre>
</article>
`
